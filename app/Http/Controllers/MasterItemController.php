<?php

namespace App\Http\Controllers;

use App\Models\MasterItem;
use Illuminate\Http\Request;

class MasterItemController extends Controller
{
    public function index()
    {
        $items = MasterItem::all();
        return response()->json($items);
    }

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

    public function destroy($id)
    {
        $item = MasterItem::findOrFail($id);
        $item->delete();

        return response()->json(['message' => 'Item deleted successfully'], 200);
    }

    public function show($id)
    {
        $item = MasterItem::find($id);
        if ($item) {
            return response()->json($item);
        } else {
            return response()->json(['message' => 'Item not found'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'item_code' => 'required|max:4|unique:master_items,item_code,' . $id,
            'item_desc' => 'required|max:255',
            'item_price' => 'required|numeric|min:0'
        ]);

        $item = MasterItem::find($id);
        if ($item) {
            $item->update($request->all());
            return response()->json(['message' => 'Item updated successfully']);
        } else {
            return response()->json(['message' => 'Item not found'], 404);
        }
    }
}
