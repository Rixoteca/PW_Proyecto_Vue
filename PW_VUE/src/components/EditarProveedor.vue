<template>
    <div class="EditarProveedor">
        <h2>Datos del Proveedor</h2>
        <br />
        <label for="txtnombre">Nombre</label>
        <input 
        type="text" 
        name="txtnombre" 
        id="txtnombre" 
        v-model="Proveedor.nombre"
        class="form-control"
        /> 
        <br />
        <label for="txtdireccion">Direccion</label>
        <input 
        type="text" 
        name="txtdireccion" 
        id="txtdireccion" 
        v-model="Proveedor.direccion"
        class="form-control"
        /> 
        <br />
        <label for="txtcantidad">rfc</label>
        <input 
        type="text" 
        name="txtrfc" 
        id="txtrfc" 
        v-model="Proveedor.rfc"
        class="form-control"
        /> 
        <br>
        <button @click.prevent="actualizarProveedor()" class="btn btn-primary btn-lg">
            Actualizar Proveedor
        </button>

         </div>
</template>

<script>
import {baseURL} from "../utils/constantes";
import axios from "axios";

export default{
    name: "DetalleProveedor",
    components: {},
    props: {
        id: Number,
    },
    data: function(){
        return{
            Proveedor: [],
        }
    },
    created() {
        this.traeDetalleProveedor()
    },
    methods: {
        traeDetalleProveedor: async function(){
        let a = [];
        await axios
        .get(baseURL + "/Proveedor/" + this.id)
        .then(function(response){
            console.log(response.data[0]);
            a = response.data[0];
       })
       .catch(function(error){
            console.log(error);
       })
       this.Proveedor = a;
    },
    actualizarProveedor: async function(){
        const res = await axios.put(baseURL + "/Proveedor/" + this.id,  {
            nombre: this.Proveedor.nombre,
            direccion: this.Proveedor.direccion,
            rfc: this.Proveedor.rfc,
        })
        console.log(res)
    }
  }, 
}
</script>