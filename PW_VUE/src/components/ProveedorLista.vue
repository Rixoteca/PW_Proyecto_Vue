<template>
    <div class="ProveedorLista">
       <!-- <button @click.prevent="traeArticulos()">Datos</button> -->
       <button @click="nuevoProveedor()" class="btn btn-success btn-lg">
         Nuevo - Proveedor
       </button>
       <table class="table table-striped">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>nombre</th>
                    <th>direccion</th>
                    <th>rfc</th>
                    <th>Acciones</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="pro in Proveedor" :key="pro.id">
                    <td>
                        <a href="" @click.prevent="detalleProveedor(pro.id)"> {{ pro.id }} </a>
                    </td>
                    <td>{{ pro.nombre }}</td>
                    <td>{{ pro.direccion }}</td>
                    <td>{{ pro.rfc }}</td>
                    <td>
                        <button @click.prevent="editarProveedor(pro.id)">Editar</button>
                    </td>
                    <td>
                        <button @click.prevent="eliminarProveedor(pro.id)">Eliminar</button>
                    </td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { baseURL } from '../utils/constantes.js';
import axios from "axios";

export default {
    name:"ProveedorLista",
    componentes:{},
    data: function(){
        return {
            Proveedor: []
        };
    },
    created(){
        this.traeProveedor()
    },
    methods: {
       traeProveedor: async function(){
        let a = [];
        await axios.get(baseURL + "/Proveedor")
        .then(function(response){
            console.log(response);
            a = response.data;
       })
       .catch(function(error){
            console.log(error);
       })
       this.Proveedor = a;
    },
    detalleProveedor: function (id){
        console.log(id)
        this.$router.push({name:"detalleProveedor", params: {id} })
    },
    editarProveedor: function (id){
        this.$router.push({name:"editarProveedor", params: {id: id} })
    },
    eliminarProveedor: async function(id){
        const res = await axios.delete(baseURL + "/Proveedor/" + id)
        this.traeProveedor()
        console.log(res)
    },
    nuevoProveedor: function(){
        this.$router.push({name:"nuevoProveedor",params:{}})
    },
  },
}
</script>