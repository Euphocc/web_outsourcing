import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import OperationView from '../components/OperationView.vue'
import NotFoundView from '../components/NotFoundView.vue'
import UploadView from '../components/UploadView.vue'

let routes = [
    {
        path: '',
        name: 'default',
        component: HomeView
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/operation',
        name: 'operation',
        component: OperationView
    },
    {
        path: '/upload',
        name: 'upload',
        component: UploadView
    },
    {
        path: "/:path(.*)",
        name: 'notfound',
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router