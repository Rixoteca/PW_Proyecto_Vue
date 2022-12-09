<template>
    <div class="DetalleProveedor">Proveedor numero:{{ id }}
    <br>
    Nombre: {{Proveedor.nombre}}
    <br>
    Direccion: {{Proveedor.direccion}}
    <br>
    RFC: {{Proveedor.rfc}}
    </div>
    

</template>

<script>
import axios from '../configurations/axios';
import { endpoints } from '../configurations/endpoints';

export default{
    name: "DetalleProveedor",
    components: {},
    props: {
        id: Number,
    },
    data: function(){
        return{
            Proveedor: {
                nombre: '',
                direccion: '',
                rfc: ''
            },
        }
    },
    created() {
        this.traeDetalleProveedor()
    },
    methods: {
        traeDetalleProveedor: async function(){
        console.log('el id', this.id);
        const { id } = this.$route.params;

        const [ Proveedor ] = await axios.get(endpoints.Proveedor.obtenerDetalle(id));
        this.Proveedor = Proveedor;
    },
    },
}
</script>