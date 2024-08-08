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
                        <apexchart v-if="!loading" height="350" type="line" :options="options_6" :series="series_6"></apexchart>
                        <div v-else>Loading...</div>
                    </div>
                </div>
            </div>

            <div class="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                <div class="panel br-4">
                    <div class="panel-body">
                        <!-- Donut Chart Component -->
                        <apexchart v-if="!loading" height="350" type="donut" :options="options_7" :series="series_7"></apexchart>
                        <div v-else>Loading...</div>
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

// Get the current year
const currentYear = new Date().getFullYear();
// const currentYear = 2025; // For testing

// Generate all months for the current year
const allMonths = Array.from({ length: 12 }, (_, i) => `${currentYear}-${String(i + 1).padStart(2, '0')}`);

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
    title: { text: 'Status: Paid vs Unpaid', align: 'left', style: { fontWeight: 'normal' } },
    responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: 'bottom' } } }],
    labels: ['Unpaid', 'Paid'],
    colors: ['#FFA500', '#00E396'] // Orange for Unpaid, Default green for Paid
});

const series_7 = ref([44, 55]); // Initial dummy values for testing
const loading = ref(true);

const fetchData = async () => {
    try {
        // Check if the year has changed
        const storedYear = localStorage.getItem('lastYear');
        if (storedYear !== currentYear.toString()) {
            // Reset the donut chart data if the year has changed
            series_7.value = [0, 0];
            localStorage.setItem('lastYear', currentYear.toString());
        }

        const salesResponse = await axios.get('/api/sales/monthly-data');
        const salesData = salesResponse.data;

        // Create a map for easy lookup
        const dataMap = new Map(salesData.map(item => [item.month, item]));

        // Merge with predefined months
        options_6.value.labels = allMonths;
        series_6.value[0].data = allMonths.map(month => dataMap.get(month)?.revenue || 0);
        series_6.value[1].data = allMonths.map(month => dataMap.get(month)?.order_count || 0);

        // Fetch unpaid vs paid totals
        const statusResponse = await axios.get('/api/sales/status-totals');
        const statusData = statusResponse.data;
        console.log('Status Data:', statusData); // Log the status data

        // Convert strings to numbers and update the chart
        const unpaid = parseFloat(statusData.unpaid);
        const paid = parseFloat(statusData.paid);

        if (!isNaN(unpaid) && !isNaN(paid)) {
            series_7.value = [unpaid, paid];
        } else {
            console.error('Invalid status data:', statusData);
        }
        console.log('Series 7:', series_7.value); // Log the updated series
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loading.value = false;
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
