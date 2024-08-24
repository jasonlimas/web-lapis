<?php

namespace App\Http\Controllers;

use App\Models\SalesOrder;
use App\Models\SalesOrderDetails;
use App\Models\MasterCustomer;
use App\Models\MasterItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Barryvdh\DomPDF\Facade\Pdf;

class SalesOrderController extends Controller
{
    public function index()
    {
        $invoices = SalesOrder::with('customer') // Assuming you have a relationship with the customer
            ->get()
            ->map(function ($invoice) {
                return [
                    'id' => $invoice->id,
                    'so_nbr' => $invoice->so_nbr,
                    'customer_name' => $invoice->customer->cust_desc, // Adjust according to your column name
                    'so_ord_date' => $invoice->so_ord_date,
                    'so_total' => $invoice->so_total,
                    'so_status' => $invoice->so_status,
                ];
            });

        return response()->json($invoices);
    }

    public function store(Request $request)
    {
        Log::info('Payload received for creating sales order:', $request->all());

        $validator = Validator::make($request->all(), [
            'invoice_no' => 'required|string|unique:sales_orders,so_nbr',
            'so_cust' => 'required|exists:master_customers,id', // Ensure this references the correct column
            'so_ord_date' => 'required|date',
            'so_total' => 'required|integer',
            'sender_name' => 'required|string|max:255',
            'sender_email' => 'required|string|email|max:255',
            'sender_address' => 'required|string|max:255',
            'sender_phone' => 'required|string|max:20',
            'bank_account_no' => 'required|string|max:255',
            'bank_name' => 'required|string|max:255',
            'notes' => 'nullable|string',
            'items' => 'required|array|min:1',
            'items.*.line' => 'required|integer',
            'items.*.item_id' => 'required|exists:master_items,item_code',
            'items.*.qty' => 'required|integer|min:1',
            'items.*.price' => 'required|integer|min:0',
            'items.*.total' => 'required|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        DB::beginTransaction();

        try {
            $salesOrder = SalesOrder::create([
                'so_nbr' => $request->invoice_no,
                'so_cust' => $request->so_cust,
                'so_ord_date' => $request->so_ord_date,
                'so_status' => 'Unpaid',
                'so_total' => $request->so_total,
                'sender_name' => $request->sender_name,
                'sender_email' => $request->sender_email,
                'sender_address' => $request->sender_address,
                'sender_phone' => $request->sender_phone,
                'bank_account_no' => $request->bank_account_no,
                'bank_name' => $request->bank_name,
                'notes' => $request->notes,
            ]);

            foreach ($request->items as $item) {
                // Fetch the item_id using item_code
                $itemRecord = MasterItem::where('item_code', $item['item_id'])->first();
                if (!$itemRecord) {
                    throw new \Exception('Item not found: ' . $item['item_id']);
                }

                SalesOrderDetails::create([
                    'so_mstr_id' => $salesOrder->id,
                    'line' => $item['line'],
                    'item_id' => $itemRecord->id,
                    'qty' => $item['qty'],
                    'price' => $item['price'],
                    'total' => $item['total'],
                ]);
            }

            DB::commit();

            return response()->json(['message' => 'Sales order created successfully']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error creating sales order', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Error creating sales order', 'error' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        try {
            $invoice = SalesOrder::with('customer', 'details')->findOrFail($id);
            $formattedInvoiceNumber = $this->convertMonthToRoman($invoice->so_nbr);

            return response()->json([
                'id' => $invoice->id,
                'so_nbr' => $formattedInvoiceNumber,
                'customer' => [
                    'id' => $invoice->customer->id,
                    'cust_desc' => $invoice->customer->cust_desc,
                    'cust_addr' => $invoice->customer->cust_addr,
                    'cust_phone' => $invoice->customer->cust_phone,
                ],
                'so_ord_date' => $invoice->so_ord_date,
                'so_total' => $invoice->so_total,
                'so_status' => $invoice->so_status,
                'due_date' => $invoice->due_date,
                'notes' => $invoice->notes,
                'sender_name' => $invoice->sender_name,
                'sender_email' => $invoice->sender_email,
                'sender_address' => $invoice->sender_address,
                'sender_phone' => $invoice->sender_phone,
                'bank_account_no' => $invoice->bank_account_no,
                'bank_name' => $invoice->bank_name,
                'items' => $invoice->details->map(function ($item) {
                    return [
                        'id' => $item->id,
                        'item_id' => $item->item_id,
                        'item_desc' => $item->item->item_desc,
                        'price' => $item->price,
                        'qty' => $item->qty,
                        'total' => $item->total,
                    ];
                }),
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching invoice', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Error fetching invoice', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'invoice_no' => 'required|string|unique:sales_orders,so_nbr,' . $id,
            'so_cust' => 'required|exists:master_customers,id',
            'so_ord_date' => 'required|date',
            'so_total' => 'required|integer',
            'sender_name' => 'required|string|max:255',
            'sender_email' => 'required|string|email|max:255',
            'sender_address' => 'required|string|max:255',
            'sender_phone' => 'required|string|max:20',
            'bank_account_no' => 'required|string|max:255',
            'bank_name' => 'required|string|max:255',
            'items' => 'required|array|min:1',
            'items.*.line' => 'required|integer',
            'items.*.item_id' => 'required|exists:master_items,item_code',
            'items.*.qty' => 'required|integer|min:1',
            'items.*.price' => 'required|integer|min:0',
            'items.*.total' => 'required|integer|min:0',
        ], [
            'invoice_no.required' => 'Invoice number harus diisi',
            'invoice_no.unique' => 'Nomor invoice harus unik.',
            'so_cust.required' => 'Customer harus diisi.',
            'so_cust.exists' => 'Customer tidak ditemukan.',
            'so_ord_date.required' => 'Order date harus diisi.',
            'so_total.required' => 'Total amount harus diisi.',
            'items.required' => 'Minimal satu item harus terisi.',
            'items.*.line.required' => 'Line harus diisi.',
            'items.*.item_id.required' => 'Item ID harus diisi.',
            'items.*.item_id.exists' => 'Item tidak ditemukan.',
            'items.*.qty.required' => 'Quantity harus diisi.',
            'items.*.qty.min' => 'Quantity setidaknya harus 1.',
            'items.*.price.required' => 'Harga harus diisi.',
            'items.*.price.min' => 'Harga harus lebih dari 0.',
            'items.*.total.required' => 'Total is required',
            'items.*.total.min' => 'Total harus lebih dari 0.',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        DB::beginTransaction();

        try {
            $salesOrder = SalesOrder::findOrFail($id);
            $salesOrder->update([
                'so_nbr' => $request->invoice_no,
                'so_cust' => $request->so_cust,
                'so_ord_date' => $request->so_ord_date,
                'so_status' => $salesOrder->so_status,
                'so_total' => $request->so_total,
                'sender_name' => $request->sender_name,
                'sender_email' => $request->sender_email,
                'sender_address' => $request->sender_address,
                'sender_phone' => $request->sender_phone,
                'bank_account_no' => $request->bank_account_no,
                'bank_name' => $request->bank_name,
                'notes' => $request->notes,
            ]);

            // Delete existing details
            $salesOrder->details()->delete();

            foreach ($request->items as $item) {
                // Fetch the item_id using item_code
                $itemRecord = MasterItem::where('item_code', $item['item_id'])->first();
                if (!$itemRecord) {
                    throw new \Exception('Item not found: ' . $item['item_id']);
                }

                SalesOrderDetails::create([
                    'so_mstr_id' => $salesOrder->id,
                    'line' => $item['line'],
                    'item_id' => $itemRecord->id, // Use item_id here
                    'qty' => $item['qty'],
                    'price' => $item['price'],
                    'total' => $item['total'],
                ]);
            }

            DB::commit();

            return response()->json(['message' => 'Sales order updated successfully']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error updating sales order', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Error updating sales order', 'error' => $e->getMessage()], 500);
        }
    }


    public function destroy($id)
    {
        DB::beginTransaction();

        try {
            $salesOrder = SalesOrder::findOrFail($id);
            $salesOrder->delete(); // Soft delete, assuming you have soft delete enabled on the model

            DB::commit();

            return response()->json(['message' => 'Sales order deleted successfully']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error deleting sales order', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Error deleting sales order', 'error' => $e->getMessage()], 500);
        }
    }

    public function getNextInvoiceNumber()
    {
        $currentMonth = date('m');
        $currentYear = date('Y');

        Log::info('Current Month:', ['currentMonth' => $currentMonth]);
        Log::info('Current Year:', ['currentYear' => $currentYear]);

        // Include soft-deleted invoices in the query
        $query = "SELECT * FROM sales_orders WHERE MONTH(created_at) = ? AND YEAR(created_at) = ? ORDER BY id DESC";
        $bindings = [$currentMonth, $currentYear];
        $lastInvoice = DB::select($query, $bindings);

        Log::info('Last Invoice Query:', ['query' => $query]);
        Log::info('Last Invoice Bindings:', ['bindings' => $bindings]);
        Log::info('Last Invoice Result:', ['invoice' => $lastInvoice]);

        // Ensure we are processing the correct result format
        $nextNumber = !empty($lastInvoice) ? ((int)explode('/', $lastInvoice[0]->so_nbr)[0] + 1) : 1;

        $nextInvoiceNumber = $nextNumber . '/' . $currentMonth . '/' . substr($currentYear, -2);

        Log::info('Next Invoice Number:', ['nextInvoiceNumber' => $nextInvoiceNumber]);

        return response()->json(['nextInvoiceNumber' => $nextInvoiceNumber]);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|string|in:Unpaid,Paid',
        ]);

        $invoice = SalesOrder::findOrFail($id);
        $invoice->so_status = $request->input('status');
        $invoice->save();

        return response()->json(['message' => 'Status updated successfully'], 200);
    }

    public function getMonthlySalesData()
    {
        $monthlySalesData = DB::table('sales_orders')
            ->select(
                DB::raw('DATE_FORMAT(so_ord_date, "%Y-%m") as month'),
                DB::raw('SUM(so_total) as revenue'),
                DB::raw('COUNT(DISTINCT id) as order_count')
            )
            ->groupBy(DB::raw('DATE_FORMAT(so_ord_date, "%Y-%m")'))
            ->orderBy(DB::raw('DATE_FORMAT(so_ord_date, "%Y-%m")'))
            ->get();

        return response()->json($monthlySalesData);
    }

    public function getStatusTotals()
    {
        $statusTotals = SalesOrder::select(
            DB::raw('SUM(CASE WHEN so_status = "Unpaid" THEN so_total ELSE 0 END) as unpaid'),
            DB::raw('SUM(CASE WHEN so_status = "Paid" THEN so_total ELSE 0 END) as paid')
        )->first();

        return response()->json([
            'unpaid' => $statusTotals->unpaid,
            'paid' => $statusTotals->paid,
        ]);
    }

    private function convertMonthToRoman($invoiceNumber) {
        $monthsInRoman = [
            '01' => 'I', '02' => 'II', '03' => 'III', '04' => 'IV', '05' => 'V', '06' => 'VI',
            '07' => 'VII', '08' => 'VIII', '09' => 'IX', '10' => 'X', '11' => 'XI', '12' => 'XII'
        ];

        // Split the invoice number by "/"
        $parts = explode('/', $invoiceNumber);

        // Check if the format is correct (has 3 parts)
        if (count($parts) === 3) {
            $month = $parts[1]; // Get the middle part representing the month
            if (array_key_exists($month, $monthsInRoman)) {
                $parts[1] = $monthsInRoman[$month]; // Replace with the Roman numeral
            }
            return implode('/', $parts); // Join the parts back together
        }

        return $invoiceNumber; // Return original if format doesn't match
    }

    private function numberToWords($num)
    {
        $units = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"];
        $teens = ["Sepuluh", "Sebelas", "Dua Belas", "Tiga Belas", "Empat Belas", "Lima Belas", "Enam Belas", "Tujuh Belas", "Delapan Belas", "Sembilan Belas"];
        $tens = ["", "", "Dua Puluh", "Tiga Puluh", "Empat Puluh", "Lima Puluh", "Enam Puluh", "Tujuh Puluh", "Delapan Puluh", "Sembilan Puluh"];
        $thousands = ["", "Ribu", "Juta", "Miliar", "Triliun"];

        if ($num === 0) return "Nol";

        if ($num < 0) return "Minus " . $this->numberToWords(abs($num));

        $word = "";
        $i = 0;
        while ($num > 0) {
            $chunk = $num % 1000;
            if ($chunk) {
                $chunkWord = "";
                if ($chunk < 10) {
                    $chunkWord = $units[$chunk];
                } elseif ($chunk < 20) {
                    $chunkWord = $teens[$chunk - 10];
                } else {
                    $unit = $chunk % 10;
                    $ten = floor(($chunk % 100) / 10);
                    $hundred = floor($chunk / 100);
                    if ($hundred) {
                        $chunkWord .= $units[$hundred] . " Ratus ";
                    }
                    if ($ten) {
                        $chunkWord .= $tens[$ten] . " ";
                    }
                    if ($unit) {
                        $chunkWord .= $units[$unit];
                    }
                }
                $word = $chunkWord . " " . $thousands[$i] . " " . $word;
            }
            $num = floor($num / 1000);
            $i++;
        }
        return trim($word) . " Rupiah";
    }

    public function printInvoice($id)
    {
        try {
            $invoice = SalesOrder::with('customer', 'details')->findOrFail($id);
            $formattedInvoiceNumber = $this->convertMonthToRoman($invoice->so_nbr);

            $data = [
                'from' => [
                    'name' => $invoice->sender_name,
                    'address' => $invoice->sender_address,
                    'email' => $invoice->sender_email,
                    'phone' => $invoice->sender_phone,
                ],
                'to' => [
                    'name' => $invoice->customer->cust_desc,
                    'address' => $invoice->customer->cust_addr,
                    'email' => $invoice->customer->cust_email,
                    'phone' => $invoice->customer->cust_phone,
                ],
                'invoice_no' => $formattedInvoiceNumber,
                'invoice_date' => $invoice->so_ord_date->format('d-m-Y'),
                'bank_info' => [
                    'name' => $invoice->bank_name,
                    'no' => $invoice->bank_account_no,
                ],
                'notes' => $invoice->notes,
                'sub_total' => $invoice->so_total,
                'sub_total_in_words' => $this->numberToWords($invoice->so_total), // Convert to words here
                'items' => $invoice->details->map(function ($item) {
                    return [
                        'title' => $item->item->item_desc,
                        'quantity' => $item->qty,
                        'price' => $item->price,
                        'total' => $item->total,
                    ];
                }),
            ];

            $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('print', $data);
            return $pdf->stream('invoice.pdf');
        } catch (\Exception $e) {
            \Log::error('Error generating PDF:', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Error generating PDF', 'error' => $e->getMessage()], 500);
        }
    }
}
