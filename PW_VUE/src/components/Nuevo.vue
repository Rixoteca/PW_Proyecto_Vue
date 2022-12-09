<template>
    <div class="Nuevo">
        <h2>Datos del articulo - nuevo</h2>
        <br />
        <label for="txtdescripcion">Descripcion</label>
        <input type="text" name="txtdescripcion" id="txtdescripcion" v-model="articulos.descripcion"
            class="form-control" />
        <br />
        <label for="txtprecio">Precio</label>
        <input type="text" name="txtprecio" id="txtprecio" v-model="articulos.precio" class="form-control" />
        <br />
        <label for="txtcantidad">Cantidad</label>
        <input type="text" name="txtcantidad" id="txtcantidad" v-model="articulos.cantidad" class="form-control" />
        <br>
        <button @click.prevent="nuevo()" class="btn btn-primary btn-lg">
            Nuevo articulos
        </button>
    </div>

</template>

<script>
import axios from "axios";
import { baseURL } from '../utils/constantes.js';
import swal from 'sweetalert2';

export default {
    name: "Nuevo",
    components: {},
    data: function () {
        return {
            articulos: []
        };
    },
    methods: {
        nuevo: async function () {
            try {
                const res = await axios.post(baseURL + "/articulos/", {
                    descripcion: this.articulos.descripcion,
                    precio: this.articulos.precio,
                    cantidad: this.articulos.cantidad,
                })
                console.log(res)
                swal.fire('Artículo creado', 'Artículo guardado con éxito', 'success');
                this.$router.push({name: 'articulos'});
            } catch (error) {
                swal.fire('Error', 'No pude guardar el artículo', 'error');
            }
        }
    },
}
</script>