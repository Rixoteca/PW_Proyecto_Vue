<template>
    <div class="NuevoCliente">
        <h2>Datos del cliente - nuevo</h2>
        <br />
        <label for="txtcliente">Nombre</label>
        <input 
        type="text" 
        name="txtnombre" 
        id="txtnombre" 
        v-model="cliente.nombre"
        class="form-control"
        /> 
        <br />
        <label for="txtprecio">Direccion</label>
        <input 
        type="text" 
        name="txtdireccion" 
        id="txtdireccion" 
        v-model="cliente.direccion"
        class="form-control"
        /> 
        <br />
        <label for="txtrfc">rfc</label>
        <input 
        type="text" 
        name="txtrfc" 
        id="txtcrfc" 
        v-model="cliente.rfc"
        class="form-control"
        /> 
        <br>
        <button @click.prevent="nuevoCliente()" class="btn btn-primary btn-lg">
            Nuevo Clientes
        </button>
    </div>

</template>

<script>
import { baseURL } from '../utils/constantes.js';
import axios from "axios";

export default {
    name: "NuevoCliente",
    components: {},
    data: function () {
        return {
            cliente: []
        };
    },
    methods: {
        nuevoCliente: async function(){
        const res = await axios.post(baseURL + "/cliente/",  {
        nombre: this.cliente.nombre,
        direccion: this.cliente.direccion,
        rfc: this.cliente.rfc,
        })
        console.log(res)
        }
    },
}
</script>