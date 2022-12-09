<template>
    <div class="ClientesLista">
       <!-- <button @click.prevent="traeArticulos()">Datos</button> -->
       <button @click="nuevoCliente()" class="btn btn-success btn-lg">
         Nuevo - Cliente
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
                <tr v-for="cli in cliente" :key="cli.id">
                    <td>
                        <a href="" @click.prevent="detalleCliente(cli.id)"> {{ cli.id }} </a>
                    </td>
                    <td>{{ cli.nombre }}</td>
                    <td>{{ cli.direccion }}</td>
                    <td>{{ cli.rfc }}</td>
                    <td>
                        <button @click.prevent="editarCliente(cli.id)">Editar</button>
                    </td>
                    <td>
                        <button @click.prevent="eliminarCliente(cli.id)">Eliminar</button>
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
    name:"ClientesLista",
    componentes:{},
    data: function(){
        return {
            cliente: []
        };
    },
    created(){
        this.traeClientes()
    },
    methods: {
       traeClientes: async function(){
        let a = [];
        await axios.get(baseURL + "/cliente")
        .then(function(response){
            console.log(response);
            a = response.data;
       })
       .catch(function(error){
            console.log(error);
       })
       this.cliente = a;
    },
    detalleCliente: function (id){
        console.log(id)
        this.$router.push({name:"detalleCliente", params: {id} })
    },
    editarCliente: function (id){
        this.$router.push({name:"editarCliente", params: {id: id} })
    },
    eliminarCliente: async function(id){
        const res = await axios.delete(baseURL + "/cliente/" + id)
        this.traeClientes()
        console.log(res)
    },
    nuevoCliente: function(){
        this.$router.push({name:"nuevoCliente",params:{}})
    },
  },
}
</script>