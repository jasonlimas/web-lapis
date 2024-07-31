<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Items</a></li>
                                <li class="breadcrumb-item"><a href="javascript:;">Daftar Item</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Tambah Item</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                <h1>Tambah Item</h1>
                <div class="panel br-4">
                    <div class="panel-body">
                        <form @submit.prevent="submitForm">
                            <div class="form-group">
                                <input v-model="item_code" type="text" class="form-control" id="item_code" placeholder="Kode item *" />
                            </div>
                            <div class="form-group">
                                <input v-model="item_desc" type="text" class="form-control" id="item_desc" placeholder="Deskripsi item *" />
                            </div>
                            <div class="form-group">
                                <input v-model="item_price" type="number" class="form-control" id="item_price" placeholder="Harga *" />
                            </div>
                            <small id="emailHelp2" class="block text-muted">*Harus diisi</small>
                            <div class="form-group ps-0 mt-3"></div>
                            <button type="submit" class="btn btn-primary mt-3 me-2">Tambah</button>
                            <a href="/items" class="btn btn-danger mt-3">Batal</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const item_code = ref('');
const item_desc = ref('');
const item_price = ref('');
const router = useRouter();

const submitForm = async () => {
    try {
        const response = await axios.post('/api/items', {
            item_code: item_code.value,
            item_desc: item_desc.value,
            item_price: item_price.value
        });
        console.log(response.data);
        alert('Item created successfully');
        // Redirect to the items list page
        router.push('/items');
    } catch (error) {
        console.error('Error response:', error.response);
        alert('Failed to create item');
    }
};
</script>

<style scoped>
.layout-px-spacing {
    min-height: calc(100vh - 170px) !important;
}
</style>
