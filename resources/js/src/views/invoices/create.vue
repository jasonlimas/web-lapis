<template>
    <div class="layout-px-spacing apps-invoice-add">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Invoices</a></li>
                                <li class="breadcrumb-item"><a href="/invoices">Daftar Invoice</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Tambah Invoice</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row invoice layout-top-spacing layout-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="doc-container">
                    <div class="row">
                        <div class="col-xl-9">
                            <div class="invoice-content">
                                <div class="invoice-detail-body">
                                    <div class="invoice-detail-title">
                                        <div class="invoice-logo">
                                            <div class="upload pe-md-4">
                                                <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
                                                <img
                                                    v-if="selected_file"
                                                    :src="selected_file ? selected_file : require('@/assets/images/user-profile.jpeg')"
                                                    alt="profile"
                                                    class="profile-preview"
                                                    @click="$refs.fl_profile.click()"
                                                />
                                                <div v-else class="profile-preview upload-preview" @click="$refs.fl_profile.click()">
                                                    <div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-upload-cloud"
                                                        >
                                                            <polyline points="16 16 12 12 8 16"></polyline>
                                                            <line x1="12" y1="12" x2="12" y2="21"></line>
                                                            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                            <polyline points="16 16 12 12 8 16"></polyline>
                                                        </svg>
                                                    </div>
                                                    <div class="mt-2">Click to Upload Picture/Logo</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-header">
                                        <div class="row justify-content-between">
                                            <div class="col-xl-5 invoice-address-company">
                                                <h4>From:-</h4>

                                                <div class="invoice-address-company-fields">
                                                    <div class="form-group row">
                                                        <label for="company-name" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.from.name" id="company-name" class="form-control form-control-sm" placeholder="Business Name" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-email" class="col-sm-3 col-form-label col-form-label-sm">Email</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.from.email" id="company-email" class="form-control form-control-sm" placeholder="name@company.com" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-address" class="col-sm-3 col-form-label col-form-label-sm">Address</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.from.address" id="company-address" class="form-control form-control-sm" placeholder="XYZ Street" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-phone" class="col-sm-3 col-form-label col-form-label-sm">Phone</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.from.phone" id="company-phone" class="form-control form-control-sm" placeholder="(123) 456 789" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xl-5 invoice-address-client">
                                                <h4>Bill To:-</h4>

                                                <div class="invoice-address-client-fields">
                                                    <div class="form-group row">
                                                        <label for="client-name" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                                                        <div class="col-sm-9">
                                                            <select v-model="params.to.name" class="form-control form-control-sm" id="client-name">
                                                                <option disabled value="">Select Client</option>
                                                                <option v-for="client in clientOptions" :key="client.value" :value="client.value">{{ client.text }}</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="client-address" class="col-sm-3 col-form-label col-form-label-sm">Address</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.to.address" id="client-address" class="form-control form-control-sm" disabled />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="client-phone" class="col-sm-3 col-form-label col-form-label-sm">Phone</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="params.to.phone" id="client-phone" class="form-control form-control-sm" disabled />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-terms">
                                        <div class="row justify-content-between">
                                            <div class="col-md-3">
                                                <div class="form-group mb-4">
                                                    <label for="number">Invoice Number</label>
                                                    <input type="text" v-model="params.invoice_no" id="number" class="form-control form-control-sm" placeholder="Loading..." disabled />
                                                </div>
                                            </div>

                                            <div class="col-md-3">
                                                <div class="form-group mb-4">
                                                    <label for="date">Invoice Date</label>
                                                    <flat-pickr v-model="params.invoice_date" class="form-control form-control-sm flatpickr active" placeholder="Invoice Date"></flat-pickr>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-items">
                                        <div class="table-responsive">
                                            <table class="table table-bordered item-table">
                                                <thead>
                                                    <tr>
                                                        <th class="col-1"></th>
                                                        <th class="col-3">Description</th>
                                                        <th class="col-2">Rate</th>
                                                        <th class="col-1">Qty</th>
                                                        <th class="col-2 text-center">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in items" :key="index">
                                                        <td class="delete-item-row">
                                                            <ul class="table-controls">
                                                                <li>
                                                                    <a href="javascript:void(0);" class="delete-item" @click="remove_item(item)">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            stroke-width="2"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            class="feather feather-x-circle"
                                                                        >
                                                                            <circle cx="12" cy="12" r="10"></circle>
                                                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td class="description">
                                                            <select v-model="item.title" class="form-control form-control-sm" @change="updateItemPrice(item)">
                                                                <option disabled value="">Select Item</option>
                                                                <option v-for="itemOption in itemOptions" :key="itemOption.value" :value="itemOption.value">
                                                                    {{ itemOption.text }}
                                                                </option>
                                                            </select>
                                                        </td>
                                                        <td class="rate">
                                                            <input type="number" v-model="item.rate" class="form-control form-control-sm" placeholder="Price" required />
                                                        </td>
                                                        <td class="text-end qty">
                                                            <input type="number" v-model="item.quantity" class="form-control form-control-sm" placeholder="Quantity" required />
                                                        </td>
                                                        <td class="text-center amount">
                                                            <span class="editable-amount mt-2">
                                                                <span class="currency">Rp </span> <span class="amount">{{ item.total }}</span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <button type="button" class="btn btn-secondary additem btn-sm" @click="add_item()">Tambah Item</button>
                                    </div>

                                    <div class="invoice-detail-total">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group row invoice-created-by">
                                                    <label for="payment-method-account" class="col-sm-3 col-form-label col-form-label-sm">Account #:</label>
                                                    <div class="col-sm-9">
                                                        <input
                                                            type="text"
                                                            v-model="params.bank_info.no"
                                                            id="payment-method-account"
                                                            class="form-control form-control-sm"
                                                            placeholder="Bank Account Number"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div class="form-group row invoice-created-by">
                                                    <label for="payment-method-bank-name" class="col-sm-3 col-form-label col-form-label-sm">Bank Name:</label>
                                                    <div class="col-sm-9">
                                                        <input
                                                            type="text"
                                                            v-model="params.bank_info.name"
                                                            id="payment-method-bank-name"
                                                            class="form-control form-control-sm"
                                                            placeholder="Masukkan Nama Bank"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="totals-row">
                                                    <div class="invoice-totals-row invoice-summary-balance-due">
                                                        <div class="invoice-summary-label">Total</div>
                                                        <div class="invoice-summary-value">
                                                            <div class="balance-due-amount"><span class="currency">Rp </span><span>{{ totalAmount }}</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-note">
                                        <div class="row">
                                            <div class="col-md-12 align-self-center">
                                                <div class="form-group row invoice-note">
                                                    <label for="invoice-detail-notes" class="col-sm-12 col-form-label col-form-label-sm">Notes:</label>
                                                    <div class="col-sm-12">
                                                        <textarea
                                                            v-model="params.notes"
                                                            rows="3"
                                                            id="invoice-detail-notes"
                                                            class="form-control"
                                                            placeholder='Notes - For example, "Thank you for doing business with us"'
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3">
                            <div class="invoice-actions">
                                <div class="invoice-action-currency">
                                    <div class="form-group mb-0">
                                        <label for="currency">Currency</label>
                                        <div class="dropdown selectable-dropdown invoice-select d-block btn-group">
                                            <a href="javascript:;" id="ddlCurrency" class="btn dropdown-toggle btn-icon-only text-nowrap" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img :src="require('@/assets/images/' + selected_currency.thumb)" class="flag-width" alt="flag" />
                                                <span class="selectable-text">{{ selected_currency.key }}</span>
                                                <span class="selectable-arrow"
                                                    ><svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline></svg
                                                ></span>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlCurrency">
                                                <li v-for="(item, index) in currency_list" :key="index">
                                                    <a href="javascript:;" class="dropdown-item" @click="selected_currency = item">
                                                        <img :src="require('@/assets/images/' + item.thumb)" class="flag-width" alt="flag" /> {{ item.key }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="invoice-actions-btn">
                                    <div class="invoice-action-btn">
                                        <div class="row">
                                            <div class="col-xl-12 col-md-4 d-flex justify-content-center">
                                                <button href="javascript:;" class="btn btn-success btn-download w-100" @click="submitForm" :disabled="isSubmitting">Tambah</button>
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
    </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import '@/assets/sass/apps/invoice-add.scss';

// flatpickr
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import '@/assets/sass/forms/custom-flatpickr.css';

import { useMeta } from '@/composables/use-meta';
useMeta({ title: 'Invoice Add' });

const router = useRouter();
const items = ref([]);
const selected_file = ref(null);
const params = ref({
    title: '',
    invoice_no: '',
    from: { name: 'LapisKu Cakes', email: 'lapisku_cakes@yahoo.co.id', address: 'Jakarta, Indonesia', phone: '0815 1026 6501' },
    to: { name: '', email: '', address: '', phone: '' },
    invoice_date: '',
    due_date: '',
    bank_info: { no: '598 009 0819', name: 'BCA a/n Fransiska Susan Margono' },
    notes: '',
});
const clientOptions = ref([]);
const itemOptions = ref([]);
const currency_list = ref([]);
const selected_currency = ref({ key: 'IDR - Indonesian Rupiah', thumb: 'flags/idr.png' });
const tax_type_list = ref([]);
const discount_list = ref([]);
const nextInvoiceNumber = ref('');
const isSubmitting = ref(false);

onMounted(async () => {
    // Set default data
    items.value.push({ id: 1, title: '', description: '', rate: 0, quantity: 0, total: 0, is_tax: false });

    let dt = new Date();
    params.value.invoice_date = JSON.parse(JSON.stringify(dt));
    dt.setDate(dt.getDate() + 5);
    params.value.due_date = dt;

    // Currency list
    currency_list.value = [{ key: 'IDR - Indonesian Rupiah', thumb: 'flags/idr.png' }];

    await fetchClients();
    await fetchItems();
    await fetchNextInvoiceNumber();

    console.log('Setting Invoice Number:', nextInvoiceNumber.value); // Log the next invoice number
    params.value.invoice_no = nextInvoiceNumber.value; // Set the next invoice number
});

const fetchClients = async () => {
    try {
        const response = await axios.get('/api/customers');
        clientOptions.value = response.data.map(customer => ({
            value: customer.id, // Store the customer ID here
            text: customer.cust_desc,
            address: customer.cust_addr,
            phone: customer.cust_phone,
        }));
    } catch (error) {
        console.error('Error fetching clients:', error);
    }
};

const fetchItems = async () => {
    try {
        const response = await axios.get('/api/items');
        itemOptions.value = response.data.map(item => ({
            id: item.id,
            value: item.item_code,
            text: item.item_desc,
            price: item.item_price,
        }));
    } catch (error) {
        console.error('Error fetching items:', error);
    }
};

const fetchNextInvoiceNumber = async () => {
    try {
        const response = await axios.get('/api/next-invoice-number');
        console.log('Fetched Invoice Number:', response.data);
        nextInvoiceNumber.value = response.data.nextInvoiceNumber;
    } catch (error) {
        console.error('Error fetching next invoice number:', error);
    }
};

watch(
    () => params.value.to.name,
    (newValue) => {
        const selectedClient = clientOptions.value.find(client => client.value === newValue);
        if (selectedClient) {
            params.value.to.address = selectedClient.address;
            params.value.to.phone = selectedClient.phone;
        } else {
            params.value.to.address = '';
            params.value.to.phone = '';
        }
    }
);

watch(
    items,
    (newItems) => {
        newItems.forEach(item => {
            item.total = item.rate * item.quantity;
        });
    },
    { deep: true }
);

const updateItemPrice = (item) => {
    const selectedItem = itemOptions.value.find(option => option.value === item.title);
    if (selectedItem) {
        item.rate = selectedItem.price;
    }
};

const change_file = (event) => {
    selected_file.value = URL.createObjectURL(event.target.files[0]);
};

const add_item = () => {
    let max_id = 0;
    if (items.value && items.value.length) {
        max_id = items.value.reduce((max, character) => (character.id > max ? character.id : max), items.value[0].id);
    }
    items.value.push({ id: max_id + 1, title: '', description: '', rate: 0, quantity: 0, total: 0, is_tax: false });
};

const remove_item = (item) => {
    items.value = items.value.filter((d) => d.id != item.id);
};

const totalAmount = computed(() => {
    return items.value.reduce((total, item) => total + item.total, 0);
});

const submitForm = async () => {
    if (isSubmitting.value) return;

    isSubmitting.value = true;

    try {
        const payload = {
            invoice_no: params.value.invoice_no,
            so_cust: params.value.to.name, // This should now be the customer ID
            so_ord_date: params.value.invoice_date,
            so_total: totalAmount.value,
            sender_name: params.value.from.name,
            sender_email: params.value.from.email,
            sender_address: params.value.from.address,
            sender_phone: params.value.from.phone,
            bank_account_no: params.value.bank_info.no,
            bank_name: params.value.bank_info.name,
            notes: params.value.notes,
            items: items.value.map((item, index) => ({
                line: index + 1, // Ensure this holds the correct line number
                item_id: item.title,
                qty: item.quantity,
                price: item.rate,
                total: item.total,
            })),
        };

        const response = await axios.post('/api/sales-orders', payload);
        Swal.fire({
            title: 'Sukses',
            text: 'Invoice berhasil ditambahkan!',
            icon: 'success',
        }).then(() => {
            router.push('/invoices');
        });
    } catch (error) {
        console.error('Error creating sales order:', error);
        if (error.response && error.response.status === 422) {
            console.error('Validation errors:', error.response.data.errors);
            const errors = error.response.data.errors;
            let errorMessages = '';
            for (const key in errors) {
                if (errors.hasOwnProperty(key)) {
                    errorMessages += `${errors[key].join(', ')}\n`;
                }
            }
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                padding: '2em'
            });
            toast.fire({
                icon: 'error',
                title: errorMessages,
                padding: '2em'
            });
        } else {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                padding: '2em'
            });
            toast.fire({
                icon: 'error',
                title: 'Error creating sales order: ' + error.response.data.message,
                padding: '2em'
            });
        }
    } finally {
        isSubmitting.value = false;
    }
};
</script>
