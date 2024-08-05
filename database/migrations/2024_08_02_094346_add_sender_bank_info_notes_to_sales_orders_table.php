<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSenderBankInfoNotesToSalesOrdersTable extends Migration
{
    public function up()
    {
        Schema::table('sales_orders', function (Blueprint $table) {
            $table->string('sender_name')->nullable();
            $table->string('sender_email')->nullable();
            $table->string('sender_address')->nullable();
            $table->string('sender_phone')->nullable();
            $table->string('bank_account_no')->nullable();
            $table->string('bank_name')->nullable();
            $table->text('notes')->nullable();
        });
    }

    public function down()
    {
        Schema::table('sales_orders', function (Blueprint $table) {
            $table->dropColumn([
                'sender_name',
                'sender_email',
                'sender_address',
                'sender_phone',
                'bank_account_no',
                'bank_name',
                'notes',
            ]);
        });
    }
}
