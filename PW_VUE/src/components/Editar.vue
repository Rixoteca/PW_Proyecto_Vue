<template>
    <div class="Editar">
        <h2>Datos del articulo</h2>
        <br />
        <label for="txtdescripcion">Descripcion</label>
        <input 
        type="text" 
        name="txtdescripcion" 
        id="txtdescripcion" 
        v-model="articulos.descripcion"
        class="form-control"
        /> 
        <br />
        <label for="txtprecio">Precio</label>
        <input 
        type="text" 
        name="txtprecio" 
        id="txtprecio" 
        v-model="articulos.precio"
        class="form-control"
        /> 
        <br />
        <label for="txtcantidad">Cantidad</label>
        <input 
        type="text" 
        name="txtcantidad" 
        id="txtcantidad" 
        v-model="articulos.cantidad"
        class="form-control"
        /> 
        <br>
        <button @click.prevent="actualizar()" class="btn btn-primary btn-lg">
            Actualizar articulos
        </button>

         </div>
</template>

<script>
import {baseURL} from "../utils/constantes";
import axios from "axios";

export default{
    name: "Detalle",
    components: {},
    props: {
        id: Number,
    },
    data: function(){
        return{
            articulos: [],
        }
    },
    created() {
        this.traeDetalle()
    },
    methods: {
        traeDetalle: async function(){
        let a = [];
        await axios
        .get(baseURL + "/articulos/" + this.id)
        .then(function(response){
            console.log(response.data[0]);
            a = response.data[0];
       })
       .catch(function(error){
            console.log(error);
       })
       this.articulos = a;
    },
    actualizar: async function(){
        const res = await axios.put(baseURL + "/articulos/" + this.id,  {
            descripcion: this.articulos.descripcion,
            precio: this.articulos.precio,
            cantidad: this.articulos.cantidad,
        })
        console.log(res)
    }
  }, 
}
</script>