<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Customers</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Daftar Customer</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="custom-table">
                        <div class="d-flex justify-content-between align-items-center p-3">
                            <div></div> <!-- Empty div to push button to the right -->
                            <a href="/items/create" class="btn btn-primary">Tambah Customer</a>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #action="props">
                                <div class="d-flex justify-content-around">
                                    <a href="javascript:;" class="edit" @click="edit_row(props.row)">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-edit table-edit"
                                        >
                                            <path d="M12 20h9"></path>
                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                        </svg>
                                    </a>
                                    <a href="javascript:;" class="cancel" @click="confirmDelete(props.row)">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-trash-2 table-cancel"
                                        >
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                    </a>
                                </div>
                            </template>
                            <template #price="props"> Rp {{ props.row.item_price }} </template>
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
import Swal from 'sweetalert2';

import { useMeta } from '@/composables/use-meta';
useMeta({ title: 'Daftar Customer' });

const columns = ref(['cust_code', 'cust_name', 'action']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { cust_code: 'col-code', cust_desc: 'col-name', action: 'actions text-center' },
    sortable: [],
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    resizableColumns: false,
});

onMounted(() => {
    fetchItems();
});

const fetchItems = async () => {
    try {
        const response = await axios.get('/api/items');
        items.value = response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        Swal.fire({
            title: 'Error',
            text: 'Failed to fetch items.',
            icon: 'error',
        });
    }
};

const confirmDelete = (item) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
    }).then((result) => {
        if (result.isConfirmed) {
            deleteItem(item);
        }
    });
};

const deleteItem = async (item) => {
    try {
        await axios.delete(`/api/items/${item.id}`);
        items.value = items.value.filter((d) => d.id !== item.id);
        Swal.fire({
            title: 'Deleted!',
            text: 'Your item has been deleted.',
            icon: 'success',
        });
    } catch (error) {
        console.error('Error deleting item:', error);
        Swal.fire({
            title: 'Error',
            text: 'Failed to delete item.',
            icon: 'error',
        });
    }
};

const edit_row = (item) => {
    // Redirect to the edit page with the item's id
    window.location.href = `/items/edit/${item.id}`;
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
</style>
