<?php

namespace App\Http\Controllers;

use App\Models\SalesOrder;
use App\Models\SalesOrderDetails;
use App\Models\MasterCustomer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class SalesOrderController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'invoice_no' => 'required|string|unique:sales_orders,so_nbr',
            'so_cust' => 'required|exists:master_customers,cust_code',
            'so_ord_date' => 'required|date',
            'so_total' => 'required|integer',
            'items' => 'required|array|min:1',
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
            // Fetch the customer ID based on the cust_code
            $customer = MasterCustomer::where('cust_code', $request->so_cust)->first();
            if (!$customer) {
                throw new \Exception('Customer not found');
            }

            $salesOrder = SalesOrder::create([
                'so_nbr' => $request->invoice_no,
                'so_cust' => $customer->id,
                'so_ord_date' => $request->so_ord_date,
                'so_status' => 'Active',  // Assuming you have a status field
                'so_total' => $request->so_total,
            ]);

            foreach ($request->items as $index => $item) {
                SalesOrderDetails::create([
                    'so_mstr_id' => $salesOrder->id,
                    'line' => $index + 1,
                    'item_id' => $item['item_id'],
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


    public function getNextInvoiceNumber()
    {
        $currentMonth = date('m');
        $currentYear = date('y');

        // Fetch the last invoice number for the current month and year
        $lastInvoice = SalesOrder::whereMonth('created_at', $currentMonth)
            ->whereYear('created_at', $currentYear)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastInvoice) {
            // Extract the invoice number part before the slash
            $lastInvoiceNumber = explode('/', $lastInvoice->so_nbr)[0];
            $nextNumber = (int)$lastInvoiceNumber + 1;
        } else {
            $nextNumber = 1;
        }

        // Format the next invoice number
        $nextInvoiceNumber = $nextNumber . '/' . $currentMonth . '/' . $currentYear;

        return response()->json(['nextInvoiceNumber' => $nextInvoiceNumber]);
    }
}
