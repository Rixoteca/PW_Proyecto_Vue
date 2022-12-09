<template>
    <div class="EditarCliente">
        <h2>Datos del Cliente</h2>
        <br />
        <label for="txtnombre">Nombre</label>
        <input 
        type="text" 
        name="txtnombre" 
        id="txtnombre" 
        v-model="cliente.nombre"
        class="form-control"
        /> 
        <br />
        <label for="txtdireccion">Direccion</label>
        <input 
        type="text" 
        name="txtdireccion" 
        id="txtdireccion" 
        v-model="cliente.direccion"
        class="form-control"
        /> 
        <br />
        <label for="txtcantidad">rfc</label>
        <input 
        type="text" 
        name="txtrfc" 
        id="txtrfc" 
        v-model="cliente.rfc"
        class="form-control"
        /> 
        <br>
        <button @click.prevent="actualizarCliente()" class="btn btn-primary btn-lg">
            Actualizar Clientes
        </button>

         </div>
</template>

<script>
import {baseURL} from "../utils/constantes";
import axios from "axios";

export default{
    name: "DetalleCliente",
    components: {},
    props: {
        id: Number,
    },
    data: function(){
        return{
            cliente: [],
        }
    },
    created() {
        this.traeDetalleCliente()
    },
    methods: {
        traeDetalleCliente: async function(){
        let a = [];
        await axios
        .get(baseURL + "/cliente/" + this.id)
        .then(function(response){
            console.log(response.data[0]);
            a = response.data[0];
       })
       .catch(function(error){
            console.log(error);
       })
       this.cliente = a;
    },
    actualizarCliente: async function(){
        const res = await axios.put(baseURL + "/cliente/" + this.id,  {
            nombre: this.cliente.nombre,
            direccion: this.cliente.direccion,
            rfc: this.cliente.rfc,
        })
        console.log(res)
    }
  }, 
}
</script>