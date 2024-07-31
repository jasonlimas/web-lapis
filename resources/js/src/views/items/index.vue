<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Items</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Daftar Item</span></li>
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
                            <a href="/items/create" class="btn btn-primary">Add Item</a>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #action="props">
                                <a href="javascript:;" class="cancel" @click="delete_row(props.row)">
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
                            </template>
                            <template #price="props"> Rp {{ props.row.price }} </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Range Search Table' });

    const columns = ref(['code', 'name', 'price', 'action']);
    const items_all = ref([]);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { code: 'col-code', name: 'col-name', price: 'col-price', action: 'actions text-center' },
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
        bind_data();
    });

    const bind_data = () => {
        items_all.value = items.value = [
            { id: 1, code: 'A001', name: 'Product 1', price: '320,800' },
            { id: 2, code: 'A002', name: 'Product 2', price: '170,750' },
            { id: 3, code: 'A003', name: 'Product 3', price: '86,000' },
            { id: 4, code: 'A004', name: 'Product 4', price: '433,060' },
            { id: 5, code: 'A005', name: 'Product 5', price: '162,700' },
            { id: 6, code: 'A006', name: 'Product 6', price: '372,000' },
            { id: 7, code: 'A007', name: 'Product 7', price: '137,500' },
            { id: 8, code: 'A008', name: 'Product 8', price: '327,900' },
            { id: 9, code: 'A009', name: 'Product 9', price: '205,500' },
            { id: 10, code: 'A010', name: 'Product 10', price: '103,600' },
            { id: 11, code: 'A011', name: 'Product 11', price: '90,560' },
            { id: 12, code: 'A012', name: 'Product 12', price: '342,000' },
            { id: 13, code: 'A013', name: 'Product 13', price: '470,600' },
            { id: 14, code: 'A014', name: 'Product 14', price: '313,500' },
            { id: 15, code: 'A015', name: 'Product 15', price: '385,750' },
            { id: 16, code: 'A016', name: 'Product 16', price: '198,500' },
            { id: 17, code: 'A017', name: 'Product 17', price: '725,000' },
            { id: 18, code: 'A018', name: 'Product 18', price: '237,500' },
            { id: 19, code: 'A019', name: 'Product 19', price: '132,000' },
            { id: 20, code: 'A020', name: 'Product 20', price: '217,500' },
            { id: 21, code: 'A021', name: 'Product 21', price: '345,000' },
            { id: 22, code: 'A022', name: 'Product 22', price: '675,000' },
            { id: 23, code: 'A023', name: 'Product 23', price: '106,450' },
            { id: 24, code: 'A024', name: 'Product 24', price: '85,600' },
            { id: 25, code: 'A025', name: 'Product 25', price: '1,200,000' },
            { id: 26, code: 'A026', name: 'Product 26', price: '92,575' },
            { id: 27, code: 'A027', name: 'Product 27', price: '57,650' },
        ];
    };

    const delete_row = (item) => {
        if (confirm('Are you sure want to delete selected row ?')) {
            items.value = items.value.filter((d) => d.id != item.id);
        }
    };
</script>

<style scoped>
/* Add custom styles for your table here, if needed */
.table th.col-code, .table td.col-code {
    width: 100px; /* Adjust as needed */
}
.table th.col-name, .table td.col-name {
    width: 350px; /* Adjusted to take more space */
}
.table th.col-price, .table td.col-price {
    width: 130px; /* Adjusted to take less space */
}
</style>
