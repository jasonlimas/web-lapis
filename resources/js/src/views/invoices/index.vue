<template>
    <div class="layout-px-spacing apps-invoice-list">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Invoices</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Invoice List</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6">
                    <div class="custom-table">
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #beforeFilter>
                                <div class="button-group">
                                    <router-link to="/invoices/create" class="btn me-2 btn-primary"
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
                                            class="feather feather-plus"
                                        >
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                        Tambah Invoice
                                    </router-link>

                                    <button type="button" class="btn ml-2 btn-danger" @click="delete_selected_rows()">
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
                                            class="feather feather-trash-2"
                                        >
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                        Hapus
                                    </button>
                                </div>
                            </template>
                            <template #id="props">
                                <div class="checkbox-outline-primary custom-control custom-checkbox">
                                    <input variant="primary" type="checkbox" class="custom-control-input" :id="'chk' + props.row.id" @change="selected_row(props.row.id)" />
                                    <label class="custom-control-label" :for="'chk' + props.row.id"></label>
                                </div>
                            </template>
                            <template #invoice="props">
                                <router-link :to="'/invoices/show/' + props.row.id">
                                    <span class="inv-number">{{ props.row.invoice }}</span>
                                </router-link>
                            </template>
                            <template #name="props">
                                <div class="d-flex">
                                    <p class="align-self-center mb-0 admin-name">{{ props.row.name }}</p>
                                </div>
                            </template>
                            <template #date="props">
                                <span class="inv-date">
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
                                        class="feather feather-calendar"
                                    >
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    {{ props.row.date }}
                                </span>
                            </template>
                            <template #amount="props"> Rp {{ props.row.amount }} </template>
                            <template #status="props">

                                <div class="checkbox-success custom-control custom-checkbox" :class="getStatusClass(props.row.status.key)">
                                    <input type="checkbox" class="custom-control-input"
                                        :checked="props.row.status.key === 'Paid'"
                                        @change="toggleStatus(props.row)"
                                        :id="'chk_' + props.row.id"/>
                                    <label class="custom-control-label"
                                    :for="'chk_' + props.row.id">{{ props.row.status.key }}</label>
                                </div>

                                <!-- old

                                <div :class="getStatusClass(props.row.status.key)">
                                    <input
                                        type="checkbox"
                                        :checked="props.row.status.key === 'Paid'"
                                        @change="toggleStatus(props.row)"
                                        :id="'chk_' + props.row.id"
                                    />
                                    <label :for="'chk_' + props.row.id">{{ props.row.status.key }}</label>
                                </div>

                                -->

                            </template>
                            <template #actions="props">
                                <div class="mb-4 me-2 custom-dropdown dropdown btn-group">
                                    <a class="btn dropdown-toggle btn-icon-only" href="#" role="button" id="pendingTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            style="width: 24px; height: 24px"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-more-horizontal"
                                        >
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="pendingTask">
                                        <li>
                                            <router-link href="javascript:void(0);" :to="`/invoices/edit/${props.row.id}`" class="dropdown-item action-edit"
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
                                                    class="feather feather-edit-3"
                                                >
                                                    <path d="M12 20h9"></path>
                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                </svg>
                                                Edit
                                            </router-link>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" @click="delete_row(props.row)" class="dropdown-item action-delete"
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
                                                    class="feather feather-trash"
                                                >
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>
                                                Delete
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import '@/assets/sass/apps/invoice-list.scss';

import { useMeta } from '@/composables/use-meta';
useMeta({ title: 'Invoice List' });

const items = ref([]);
const columns = ref(['id', 'invoice', 'name', 'date', 'amount', 'status', 'actions']);
const table_option = ref({
    headings: {
        id: (h, row, index) => {
            return '#';
        },
    },
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { actions: 'actions text-center' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    resizableColumns: false,
    sortable: ['invoice', 'name', 'date', 'amount', 'status'],
    sortIcon: {
        base: 'sort-icon-none',
        up: 'sort-icon-asc',
        down: 'sort-icon-desc',
    },
});
const selected_rows = ref([]);

onMounted(() => {
    bind_data();
});

const bind_data = async () => {
    try {
        const response = await axios.get('/api/invoices');
        items.value = response.data.map(invoice => ({
            id: invoice.id,
            invoice: invoice.so_nbr,
            name: invoice.customer_name,
            date: new Date(invoice.so_ord_date).toLocaleDateString('en-US'),
            amount: invoice.so_total,
            status: { key: invoice.so_status, class: getStatusClass(invoice.so_status) },
        }));
    } catch (error) {
        console.error('Error fetching invoices:', error);
    }
};

const getStatusClass = (status) => {
    return status === 'Paid' ? 'badge badge-success me-1' : 'badge badge-warning me-1';
};

const toggleStatus = async (item) => {
    item.status.key = item.status.key === 'Paid' ? 'Unpaid' : 'Paid';
    item.status.class = getStatusClass(item.status.key);
    try {
        await axios.put(`/api/invoices/status/${item.id}`, { status: item.status.key });
        // Refresh the component data to reflect the change
        bind_data();
    } catch (error) {
        console.error('Error updating status:', error);
        alert('Error updating status');
    }
};

const delete_row = async (item) => {
    if (confirm('Are you sure want to delete selected row?')) {
        try {
            await axios.delete(`/api/invoices/${item.id}`);
            items.value = items.value.filter((d) => d.id != item.id);
        } catch (error) {
            console.error('Error deleting invoice:', error);
            alert('Error deleting invoice');
        }
    }
};

const delete_selected_rows = async () => {
    if (confirm('Are you sure want to delete selected rows?')) {
        try {
            await Promise.all(selected_rows.value.map(id => axios.delete(`/api/invoices/${id}`)));
            items.value = items.value.filter((d) => !selected_rows.value.includes(d.id));
            selected_rows.value = [];
        } catch (error) {
            console.error('Error deleting selected invoices:', error);
            alert('Error deleting selected invoices');
        }
    }
};

//checkbox selection
const selected_row = (val) => {
    if (selected_rows.value.includes(val)) {
        selected_rows.value = selected_rows.value.filter(id => id !== val);
    } else {
        selected_rows.value.push(val);
    }
};
</script>

<style scoped>
/* Add custom styles for your table here, if needed */
.table th.col-code, .table td.col-code {
    width: 50px; /* Adjust as needed */
}
.table th.col-name, .table td.col-name {
    width: 350px; /* Adjusted to take more space */
}
.table th.col-price, .table td.col-price {
    width: 130px; /* Adjusted to take less space */
}

@media (max-width: 768px) {
    .button-group .btn {
        margin-bottom: 10px;
    }
}

.badge-success {
    background-color: #28a745;
}

.badge-warning {
    background-color: #ffc107;
}
</style>
