<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SalesOrder extends Model
{
    use SoftDeletes;

    protected $table = 'sales_orders';

    protected $fillable = [
        'so_nbr',
        'so_cust',
        'so_ord_date',
        'so_status',
        'so_total',
        'sender_name',
        'sender_email',
        'sender_address',
        'sender_phone',
        'bank_account_no',
        'bank_name',
        'notes',
    ];

    // Add the date casting
    protected $casts = [
        'so_ord_date' => 'datetime',
        'due_date' => 'datetime', // if you have a due_date field
        // Add other date fields here if needed
    ];

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    public function customer()
    {
        return $this->belongsTo(MasterCustomer::class, 'so_cust', 'id');
    }

    public function details()
    {
        return $this->hasMany(SalesOrderDetails::class, 'so_mstr_id', 'id');
    }

    public function updateTotalAmount()
    {
        $this->so_total = $this->details->sum(function ($detail) {
            return $detail->qty * $detail->price;
        });
        $this->save();
    }
}
