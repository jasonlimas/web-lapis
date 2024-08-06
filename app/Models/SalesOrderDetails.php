<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SalesOrderDetails extends Model
{
    use SoftDeletes;

    protected $table = 'sales_order_details';

    protected $fillable = [
        'so_mstr_id',
        'line',
        'item_id',
        'qty',
        'price',
        'total'
    ];

    protected static function booted()
    {
        static::saved(function ($detail) {
            $detail->salesOrder->updateTotalAmount();
        });

        static::deleted(function ($detail) {
            $detail->salesOrder->updateTotalAmount();
        });
    }

    public function item()
    {
        return $this->belongsTo(MasterItem::class, 'item_id');
    }

    public function salesOrder()
    {
        return $this->belongsTo(SalesOrder::class, 'so_mstr_id', 'id');
    }
}
