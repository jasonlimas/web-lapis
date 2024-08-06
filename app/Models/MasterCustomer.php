<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MasterCustomer extends Model
{
    use HasFactory;

    protected $table = 'master_customers';

    protected $fillable = [
        'cust_code',
        'cust_desc',
        'cust_addr',
        'cust_phone'
    ];

    public function salesOrders()
    {
        return $this->hasMany(SalesOrder::class, 'so_cust', 'id');
    }
}
