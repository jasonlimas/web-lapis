<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SalesOrder extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'so_nbr',
        'so_cust',
        'so_ord_date',
        'so_status',
        'so_total'
    ];

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    public function customer()
    {
        return $this->belongsTo(MasterCustomer::class, 'so_cust');
    }

    public function details()
    {
        return $this->hasMany(SalesOrderDetails::class, 'so_mstr_id');
    }

    public function updateTotalAmount()
    {
        $this->so_total = $this->details->sum(function ($detail) {
            return $detail->qty * $detail->price;
        });
        $this->save();
    }
}
