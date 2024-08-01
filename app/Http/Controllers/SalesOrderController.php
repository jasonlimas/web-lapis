<?php

namespace App\Http\Controllers;

use App\Models\SalesOrder;
use App\Models\SalesOrderDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SalesOrderController extends Controller
{
    public function store(Request $request)
    {
        DB::transaction(function () use ($request) {
            $salesOrder = SalesOrder::create([
                'so_nbr' => $request->so_nbr,
                'so_cust' => $request->so_cust,
                'so_ord_date' => $request->so_ord_date,
                'so_status' => $request->so_status,
            ]);

            foreach ($request->details as $detail) {
                SalesOrderDetails::create([
                    'so_mstr_id' => $salesOrder->id,
                    'line' => $detail['line'],
                    'item_id' => $detail['item_id'],
                    'qty' => $detail['qty'],
                    'price' => $detail['price'],
                    'total' => $detail['qty'] * $detail['price'],
                ]);
            }

            $salesOrder->updateTotalAmount();
        });

        return response()->json(['message' => 'Sales order created successfully.']);
    }

}
