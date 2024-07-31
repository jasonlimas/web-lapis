<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Items</a></li>
                                <li class="breadcrumb-item"><a href="/items">Daftar Item</a></li>
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
                        <!-- Add items form -->
                        <form @submit.prevent="submitForm">
                            <div class="form-group">
                                <input v-model="item_code" type="text" class="form-control" placeholder="Kode item *" required />
                            </div>
                            <div class="form-group">
                                <input v-model="item_desc" type="text" class="form-control" placeholder="Deskripsi item *" required />
                            </div>
                            <div class="form-group">
                                <input v-model="item_price" type="number" class="form-control" placeholder="Harga *" required />
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
import Swal from 'sweetalert2';
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
            item_price: item_price.value,
        });
        Swal.fire({
            title: 'Sukses',
            text: 'Item berhasil ditambahkan!',
            icon: 'success',
        }).then(() => {
            router.push('/items');
        });
    } catch (error) {
        if (error.response && error.response.status === 422) {
            const errors = error.response.data.errors;
            let errorMessage = '';
            for (const key in errors) {
                if (errors.hasOwnProperty(key)) {
                    errorMessage += errors[key][0] + '\n';
                }
            }

            const toast =  window.Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                padding: '2em'
            });
            toast.fire({
                icon: 'error',
                title: 'Kode item tidak tersedia. Masukkan kode baru.',
                padding: '2em'
            });
        } else {
            const toast =  window.Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                padding: '2em'
            });
            toast.fire({
                icon: 'error',
                title: 'An unexpected error occured.',
                padding: '2em'
            });
        }
    }
};
</script>

<style scoped>
.layout-px-spacing {
    min-height: calc(100vh - 170px) !important;
}
</style>
