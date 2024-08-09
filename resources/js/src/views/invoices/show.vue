<template>
    <div class="layout-px-spacing">
    <teleport to="#breadcrumb">
        <ul class="navbar-nav flex-row">
        <li>
            <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:;">Invoices</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="/invoices">Daftar Invoice</a></li>
                <li class="breadcrumb-item active" aria-current="page"><span>Preview Invoice</span></li>
                </ol>
            </nav>
            </div>
        </li>
        </ul>
    </teleport>

    <div class="row invoice layout-top-spacing layout-spacing apps-invoice">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="doc-container">
            <div class="row">
            <div class="col-xl-9">
                <div class="invoice-container">
                <div class="invoice-inbox">
                    <div id="ct" class="">
                    <div class="invoice-00001">
                        <div class="content-section">
                        <div class="inv--head-section inv--detail-section">
                            <div class="row">
                            <div class="col-sm-6 col-12 me-auto">
                                <div class="d-flex">
                                <h2 class="in-heading">{{ from.name }}</h2>
                                </div>
                            </div>

                            <div class="col-sm-6 text-sm-end">
                                <p class="inv-list-number"><span class="inv-title align-self-center">Nomor Invoice: </span><span class="inv-number">#{{ invoice_no }}</span></p>
                            </div>

                            <div class="col-sm-6 align-self-center mt-1">
                                <p class="inv-street-addr">{{ from.address }}</p>
                                <p class="inv-email-address">{{ from.email }}</p>
                                <p class="inv-email-address">{{ from.phone }}</p>
                            </div>
                            <div class="col-sm-6 align-self-center mt-3 text-sm-end">
                                <p class="inv-created-date"><span class="inv-title">Tanggal Invoice: </span> <span class="inv-date">{{ invoice_date }}</span></p>
                            </div>
                            </div>
                        </div>

                        <div class="inv--detail-section inv--customer-detail-section">
                            <div class="row">
                            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center">
                                <p class="inv-to">Invoice Kepada</p>
                            </div>

                            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info">
                                <h6 class="inv-title">Pembayaran Melalui:</h6>
                            </div>

                            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4">
                                <p class="inv-customer-name">{{ to.name }}</p>
                                <p class="inv-street-addr">{{ to.address }}</p>
                                <p class="inv-email-address">{{ to.email }}</p>
                                <p class="inv-email-address">{{ to.phone }}</p>
                            </div>

                            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1">
                                <div class="inv--payment-info">
                                <p><span class="inv-subtitle">Nama Bank:</span> <span class="inv-value">{{ bank_info.name }}</span></p>
                                <p><span class="inv-subtitle">No. Rekening: </span> <span class="inv-value">{{ bank_info.no }}</span></p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="inv--product-table-section">
                            <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th v-for="item in columns" :key="item.key" :class="[item.class]">
                                    {{ item.label }}
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in items" :key="item.id">
                                    <td>
                                    {{ item.title }}
                                    </td>
                                    <td>
                                    {{ item.quantity }}
                                    </td>
                                    <td class="text-end">Rp {{ formatCurrency(item.price) }}</td>
                                    <td class="text-end">Rp {{ formatCurrency(item.total) }}</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>

                        <div class="inv--total-amounts">
                            <div class="row mt-4">
                            <div class="col-sm-5 col-12 order-sm-0 order-1"></div>
                            <div class="col-sm-7 col-12 order-sm-1 order-0">
                                <div class="text-sm-end">
                                <div class="row">
                                    <div class="col-sm-8 col-7 grand-total-title">
                                    <h4 class="">Total :</h4>
                                    </div>
                                    <div class="col-sm-4 col-5 grand-total-amount">
                                    <h4 class="">Rp {{ formatCurrency(sub_total) }}</h4>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="inv--note">
                            <div class="row mt-4">
                            <div class="col-sm-12 col-12 order-sm-0 order-1">
                                <p>{{ notes }}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-xl-3">
                <div class="invoice-actions-btn">
                <div class="invoice-action-btn">
                    <div class="row">
                        <div class="col-xl-12 col-md-3 col-sm-6">
                            <a href="javascript:;" class="btn btn-secondary btn-print action-print" @click="print()">Print</a>
                        </div>
                        <div class="col-xl-12 col-md-3 col-sm-6">
                            <router-link :to="'/invoices/edit/' + invoice_id" class="btn btn-dark btn-edit">Edit</router-link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import '@/assets/sass/apps/invoice-preview.scss';

import { useMeta } from '@/composables/use-meta';
useMeta({ title: 'Invoice Preview' });

const route = useRoute();
const invoice_id = ref(route.params.id);
const items = ref([]);
const columns = ref([]);
const from = ref({ name: '', email: '', address: '', phone: '' });
const to = ref({ name: '', email: '', address: '', phone: '' });
const invoice_no = ref('');
const invoice_date = ref('');
const due_date = ref('');
const bank_info = ref({ no: '', name: '' });
const notes = ref('');
const sub_total = ref(0);

const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

onMounted(() => {
    bind_data();
});

const bind_data = async () => {
    columns.value = [
        { key: 'title', label: 'ITEM' },
        { key: 'quantity', label: 'QTY' },
        { key: 'price', label: 'HARGA', class: 'text-end' },
        { key: 'total', label: 'TOTAL', class: 'text-end' },
    ];

    try {
        const response = await axios.get(`/api/invoices/${invoice_id.value}`);
        const invoice = response.data;
        from.value.name = invoice.sender_name;
        from.value.email = invoice.sender_email;
        from.value.address = invoice.sender_address;
        from.value.phone = invoice.sender_phone;
        to.value.name = invoice.customer.cust_desc;
        to.value.address = invoice.customer.cust_addr;
        to.value.email = invoice.customer.cust_email;
        to.value.phone = invoice.customer.cust_phone;
        invoice_no.value = invoice.so_nbr;
        invoice_date.value = new Date(invoice.so_ord_date).toLocaleDateString('en-US');
        due_date.value = new Date(invoice.due_date).toLocaleDateString('en-US');
        bank_info.value.no = invoice.bank_account_no;
        bank_info.value.name = invoice.bank_name;
        notes.value = invoice.notes;
        sub_total.value = invoice.so_total;

        items.value = invoice.items.map(item => ({
            id: item.id,
            title: item.item_desc,
            quantity: item.qty,
            price: item.price,
            total: item.total,
        }));
    } catch (error) {
        console.error('Error fetching invoice:', error);
    }
};

const print = () => {
    window.print();
};
</script>

<style scoped>
.inv--payment-info p span.inv-subtitle {
    display: block;
}
.inv--payment-info p span.inv-value {
    display: block;
    white-space: normal;
    word-wrap: break-word;
}
</style>
