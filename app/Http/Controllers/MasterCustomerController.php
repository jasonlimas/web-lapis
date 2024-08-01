<?php

namespace App\Http\Controllers;

use App\Models\MasterCustomer;
use Illuminate\Http\Request;

class MasterCustomerController extends Controller
{
    public function index()
    {
        $customers = MasterCustomer::all();
        return response()->json($customers);
    }

    public function store(Request $request)
    {
        // Validate the user input
        $validated = $request->validate([
            'cust_code' => 'required|max:10|unique:master_customers,cust_code',
            'cust_desc' => 'required|max:25',
            'cust_addr' => 'required|max:255',
        ]);

        $customer = MasterCustomer::create($validated);

        return response()->json(['message' => 'Customer created successfully', 'customer' => $customer], 201);
    }

    public function destroy($id)
    {
        $customer = MasterCustomer::findOrFail($id);
        $customer->delete();

        return response()->json(['message' => 'Customer deleted successfully'], 200);
    }
}
