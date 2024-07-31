<?php

namespace App\Http\Controllers;

use App\Models\MasterItem;
use Illuminate\Http\Request;

class MasterItemController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'item_code' => 'required|max:4|unique:master_items,item_code',
            'item_desc' => 'required|max:255',
            'item_price' => 'required|numeric|min:0'
        ]);

        $item = MasterItem::create($validated);

        return response()->json(['message' => 'Item created successfully', 'item' => $item], 201);
    }
}
