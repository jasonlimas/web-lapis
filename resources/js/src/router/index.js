import { createRouter, createWebHistory } from 'vue-router';

import store from '../store';

// Vue.use(VueRouter);
// import { createApp } from 'vue';
// const app = createApp();
// app.use(createRouter);

const routes = [
    // Home
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue'),
    },

    // Items
    {
        path: '/items',
        name: 'items',
        component: () => import('../views/items/index.vue'),
    },
    {
        path: '/items/create',
        name: 'items-create',
        component: () => import('../views/items/create.vue')
    },
    {
        path: '/items/edit/:id',
        name: 'items-edit',
        component: () => import('../views/items/edit.vue')
    },

    // Customers
    {
        path: '/customers',
        name: 'customers',
        component: () => import('../views/customers/index.vue')
    },
    {
        path: '/customers/create',
        name: 'customers-create',
        component: () => import('../views/customers/create.vue')
    },
    {
        path: '/customers/edit/:id',
        name: 'customers-edit',
        component: () => import('../views/customers/edit.vue')
    },

    // Orders
    // Invoices
    {
        path: '/invoices',
        name: 'invoices',
        component: () => import('../views/invoices/index.vue')
    },
    {
        path: '/invoices/create',
        name: 'invoices-create',
        component: () => import('../views/invoices/create.vue')
    },
    {
        path: '/invoices/edit/:id',
        name: 'invoices-edit',
        component: () => import('../views/invoices/edit.vue')
    },
    {
        path: '/invoices/show/:id',
        name: 'invoices-show',
        component: () => import('../views/invoices/show.vue')
    }
];

const router = new createRouter({
    // mode: 'history',
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
        store.commit('setLayout', 'auth');
    } else {
        store.commit('setLayout', 'app');
    }
    next(true);
});

export default router;
