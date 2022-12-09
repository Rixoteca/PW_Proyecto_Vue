<template>
    <div class="NuevoProveedor">
        <h2>Datos del Proveedor - nuevo</h2>
        <br />
        <label for="txtProveedor">Nombre</label>
        <input 
        type="text" 
        name="txtnombre" 
        id="txtnombre" 
        v-model="Proveedor.nombre"
        class="form-control"
        /> 
        <br />
        <label for="txtprecio">Direccion</label>
        <input 
        type="text" 
        name="txtdireccion" 
        id="txtdireccion" 
        v-model="Proveedor.direccion"
        class="form-control"
        /> 
        <br />
        <label for="txtrfc">rfc</label>
        <input 
        type="text" 
        name="txtrfc" 
        id="txtcrfc" 
        v-model="Proveedor.rfc"
        class="form-control"
        /> 
        <br>
        <button @click.prevent="nuevoProveedor()" class="btn btn-primary btn-lg">
            Nuevo Proveedor
        </button>
    </div>

</template>

<script>
import { baseURL } from '../utils/constantes.js';
import axios from "axios";

export default {
    name: "NuevoProveedor",
    components: {},
    data: function () {
        return {
            Proveedor: []
        };
    },
    methods: {
        nuevoProveedor: async function(){
        const res = await axios.post(baseURL + "/Proveedor/",  {
        nombre: this.Proveedor.nombre,
        direccion: this.Proveedor.direccion,
        rfc: this.Proveedor.rfc,
        })
        console.log(res)
        }
    },
}
</script>