<template>
    <div class="ArticulosLista">
       <!-- <button @click.prevent="traeArticulos()">Datos</button> -->
       <button @click="nuevoArticulo()" class="btn btn-success btn-lg">
         Nuevo
       </button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="art in articulos" :key="art.id">
                    <td>
                        <a href="" @click.prevent="detalleArticulo(art.id)"> {{ art.id }} </a>
                    </td>
                    <td>{{ art.descripcion }}</td>
                    <td>{{ art.precio }}</td>
                    <td>{{ art.cantidad }}</td>
                    <td>
                        <button @click.prevent="editarArticulo(art.id)">Editar</button>
                    </td>
                    <td>
                        <button @click.prevent="eliminarArticulo(art.id)">Eliminar</button>
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
    name:"ArticulosLista",
    componentes:{},
    data: function(){
        return {
            articulos: []
        };
    },
    created(){
        this.traeArticulos()
    },
    methods: {
       traeArticulos: async function(){
        let a = [];
        await axios.get(baseURL + "/articulos")
        .then(function(response){
            console.log(response);
            a = response.data;
       })
       .catch(function(error){
            console.log(error);
       })
       this.articulos = a;
    },
    detalleArticulo: function (id){
        this.$router.push({name:"detalle",params: {id: id} })
    },
    editarArticulo: function (id){
        this.$router.push({name:"editar",params: {id: id} })
    },
    eliminarArticulo: async function(id){
        const res = await axios.delete(baseURL + "/articulos/" + id)
        this.traeArticulos()
        console.log(res)
    },
    nuevoArticulo: function(){
        this.$router.push({name:"nuevo",params:{}})
    },
  },
}
</script>