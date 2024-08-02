<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropCustPhoneFromMasterCustomersTable extends Migration
{
    public function up()
    {
        Schema::table('master_customers', function (Blueprint $table) {
            $table->dropColumn('cust_phone');
        });
    }

    public function down()
    {
        Schema::table('master_customers', function (Blueprint $table) {
            $table->string('cust_phone', 20);
        });
    }
}
