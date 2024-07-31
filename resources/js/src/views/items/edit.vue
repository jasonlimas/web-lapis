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
                                <li class="breadcrumb-item active" aria-current="page"><span>Edit Item</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                <h1>Edit Item</h1>
                <div class="panel br-4">
                    <div class="panel-body">
                        <!-- Edit items form -->
                        <form @submit.prevent="updateItem">
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="item.item_code" placeholder="Kode item *" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="item.item_desc" placeholder="Deskripsi item *" />
                            </div>
                            <div class="form-group">
                                <input type="number" class="form-control" v-model="item.item_price" placeholder="Harga *" />
                            </div>
                            <small id="emailHelp2" class="block text-muted">*Harus diisi</small>
                            <div class="form-group ps-0 mt-3">
                            </div>
                            <button type="submit" class="btn btn-primary mt-3 me-2">Update</button>
                            <a href="/items" class="btn btn-danger mt-3">Batal</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { useMeta } from '@/composables/use-meta';

useMeta({ title: 'Edit Item' });

const route = useRoute();
const router = useRouter();
const item = ref({
    item_code: '',
    item_desc: '',
    item_price: ''
});

const fetchItem = async () => {
    try {
        const response = await axios.get(`/api/items/${route.params.id}`);
        item.value = response.data;
    } catch (error) {
        console.error('Error fetching item:', error);
        Swal.fire({
            title: 'Error',
            text: 'Failed to fetch item data.',
            icon: 'error',
        });
    }
};

const updateItem = async () => {
    try {
        await axios.put(`/api/items/${route.params.id}`, item.value);
        Swal.fire({
            title: 'Sukses',
            text: 'Item berhasil diubah.',
            icon: 'success',
        }).then(() => {
            router.push('/items');
        });
    } catch (error) {
        console.error('Error updating item:', error);
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
    }
};

onMounted(() => {
    fetchItem();
});
</script>

<style scoped>
    .layout-px-spacing {
        min-height: calc(100vh - 170px) !important;
    }
</style>
