<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Customers</a></li>
                                <li class="breadcrumb-item"><a href="/customers">Daftar Customer</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Edit Customer</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                <h1>Edit Customer</h1>
                <div class="panel br-4">
                    <div class="panel-body">
                        <!-- Add items form -->
                        <form @submit.prevent="submitForm">
                            <div class="form-group">
                                <input v-model="cust_code" type="text" class="form-control" placeholder="Kode customer *" required />
                            </div>
                            <div class="form-group">
                                <input v-model="cust_desc" type="text" class="form-control" placeholder="Nama customer *" required />
                            </div>
                            <div class="form-group">
                                <textarea v-model="cust_addr" class="form-control" placeholder="Alamat *" required rows="4"></textarea>
                            </div>
                            <small id="emailHelp2" class="block text-muted">*Harus diisi</small>
                            <div class="form-group ps-0 mt-3"></div>
                            <button type="submit" class="btn btn-primary mt-3 me-2">Update</button>
                            <a href="/customers" class="btn btn-danger mt-3">Batal</a>
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
import Swal from 'sweetalert2';
import { useRouter, useRoute } from 'vue-router';

const cust_code = ref('');
const cust_desc = ref('');
const cust_addr = ref('');
const router = useRouter();
const route = useRoute();

onMounted(async () => {
    const id = route.params.id;
    try {
        const response = await axios.get(`/api/customers/${id}`);
        console.log(response.data); // Log the response to check the fetched data
        const customer = response.data;
        cust_code.value = customer.cust_code;
        cust_desc.value = customer.cust_desc;
        cust_addr.value = customer.cust_addr;
    } catch (error) {
        console.error('Error fetching customer data:', error);
        Swal.fire({
            title: 'Error',
            text: 'Failed to load customer data.',
            icon: 'error',
        });
    }
});

const submitForm = async () => {
    const id = route.params.id;
    try {
        await axios.put(`/api/customers/${id}`, {
            cust_code: cust_code.value,
            cust_desc: cust_desc.value,
            cust_addr: cust_addr.value,
        });
        Swal.fire({
            title: 'Sukses',
            text: 'Customer berhasil diubah!',
            icon: 'success',
        }).then(() => {
            router.push('/customers');
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
                title: 'Kode customer tidak tersedia. Masukkan kode baru.',
                padding: '2em'
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'An unexpected error occurred.',
                icon: 'error',
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
