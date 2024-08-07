<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Blank Page</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                <div class="panel br-4">
                    <div class="panel-body">
                        <!-- Mixed Chart Component -->
                        <apexchart height="350" type="line" :options="options_6" :series="series_6"></apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useMeta } from '@/composables/use-meta';
import VueApexCharts from 'vue3-apexcharts';

// Set meta information for the page
useMeta({ title: 'Blank Page' });

// Define chart options and series data
const options_6 = ref({
    chart: { toolbar: { show: false } },
    dataLabels: { enabled: false },
    stroke: { width: [0, 4] },
    title: { text: 'Traffic Sources', align: 'left', style: { fontWeight: 'normal' } },
    xaxis: { type: 'datetime' },
    yaxis: [
        { title: { text: 'Revenue' } },
        { opposite: true, title: { text: 'Order Count' } }
    ]
});

const series_6 = ref([
    { name: 'Revenue', type: 'column', data: [] },
    { name: 'Order Count', type: 'line', data: [] }
]);

onMounted(async () => {
    try {
        const response = await axios.get('/api/sales-data');
        const salesData = response.data;

        options_6.value.labels = salesData.months;

        series_6.value = [
            { name: 'Revenue', type: 'column', data: salesData.revenue },
            { name: 'Order Count', type: 'line', data: salesData.order_count }
        ];
    } catch (error) {
        console.error('Error fetching sales data:', error);
    }
});
</script>

<style scoped>
.layout-px-spacing {
    min-height: calc(100vh - 170px) !important;
}
</style>
