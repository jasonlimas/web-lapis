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
                        <!-- Add items form -->
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="item_code" placeholder="Kode item *" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="item_desc" placeholder="Deskripsi item *" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="item_price" placeholder="Harga *" />
                            </div>
                            <small id="emailHelp2" class="block text-muted">*Harus diisi</small>
                            <div class="form-group ps-0 mt-3">
                            </div>
                            <button type="submit" class="btn btn-primary mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .layout-px-spacing {
        min-height: calc(100vh - 170px) !important;
    }
</style>

<script setup>
    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Blank Page' });
</script>
