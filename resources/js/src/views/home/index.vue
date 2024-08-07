<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Home</span></li>
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

            <div class="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                <div class="panel br-4">
                    <div class="panel-body">
                        <!-- Donut Chart Component -->

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
useMeta({ title: 'Home' });

// Define all months
const allMonths = [
    '2024-01', '2024-02', '2024-03', '2024-04', '2024-05', '2024-06',
    '2024-07', '2024-08', '2024-09', '2024-10', '2024-11', '2024-12'
];

const options_6 = ref({
    chart: { toolbar: { show: false } },
    dataLabels: { enabled: false },
    stroke: { width: [0, 4] },
    title: { text: 'Sales Data', align: 'left', style: { fontWeight: 'normal' } },
    labels: allMonths,
    xaxis: { type: 'category' },
    yaxis: [
        { title: { text: 'Revenue' } },
        { opposite: true, title: { text: 'Order Count' } }
    ]
});

const series_6 = ref([
    { name: 'Revenue', type: 'column', data: new Array(12).fill(0) },
    { name: 'Order Count', type: 'line', data: new Array(12).fill(0) }
]);

const options_7 = ref({
    chart: { toolbar: { show: false } },
    responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: 'bottom' } } }],
    labels: ['Unpaid', 'Paid']
});

const series_7 = ref([0, 0]); // Initialize with zeros

const fetchData = async () => {
    try {
        const salesResponse = await axios.get('/api/sales/monthly-data');
        const salesData = salesResponse.data;

        // Create a map for easy lookup
        const dataMap = new Map(salesData.map(item => [item.month, item]));

        // Merge with predefined months
        options_6.value.labels = allMonths;
        series_6.value[0].data = allMonths.map(month => dataMap.get(month)?.revenue || 0);
        series_6.value[1].data = allMonths.map(month => dataMap.get(month)?.order_count || 0);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

onMounted(() => {
    fetchData();
});
</script>

<style scoped>
.layout-px-spacing {
    min-height: calc(100vh - 170px) !important;
}
</style>
