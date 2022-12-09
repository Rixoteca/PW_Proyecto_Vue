import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Articulos from  '../views/Articulos.vue'
import Detalle from '../components/Detalle.vue'
import Editar from '../components/Editar.vue'
import Nuevo from '../components/Nuevo.vue'
import Clientes from '../views/Clientes.vue'
import NuevoCliente from '../components/NuevoCliente.vue'
import EditarCliente from '../components/EditarCliente.vue'
import DetalleCliente from '../components/DetalleCliente.vue'
import Proveedores from '../views/Proveedores.vue'
import NuevoProveedor from '../components/NuevoProveedor.vue'
import EditarProveedor from '../components/EditarProveedor.vue'
import DetalleProveedor from '../components/DetalleProveedor.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Proveedor',
    name: 'Proveedor',
    component: Proveedores
  },
  {
    path: '/detalleProveedor',
    name: 'detalleProveedor',
    component: DetalleProveedor,
    props: true
  },
  {
    path: '/nuevoProveedor',
    name: 'nuevoProveedor',
    component: NuevoProveedor,
    props: true
  },
  {
    path: '/editarProveedor',
    name: 'editarProveedor',
    component: EditarProveedor,
    props: true
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/articulos',
    name: 'articulos',
    component: Articulos
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: Clientes,
  },
  {
    path: '/detalleCliente',
    name: 'detalleCliente',
    component: DetalleCliente,
    props: true
  },
  {
    path: '/nuevoCliente',
    name: 'nuevoCliente',
    component: NuevoCliente,
    props: true
  },
  {
    path: '/editarCliente',
    name: 'editarCliente',
    component: EditarCliente,
    props: true
  },
  {
    path: '/detalle',
    name: 'detalle',
    component: Detalle,
    props: true
  },
  {
    path: '/editar',
    name: 'editar',
    component: Editar,
    props: true
  },
  {
    path: '/nuevo',
    name: 'nuevo',
    component: Nuevo,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
