<template>
    <div class="DetalleCliente">Cliente numero:{{ id }}
    <br>
    Nombre: {{cliente.nombre}}
    <br>
    Direccion: {{cliente.direccion}}
    <br>
    RFC: {{cliente.rfc}}
    </div>
    

</template>

<script>
import axios from '../configurations/axios';
import { endpoints } from '../configurations/endpoints';

export default{
    name: "DetalleCliente",
    components: {},
    props: {
        id: Number,
    },
    data: function(){
        return{
            cliente: {
                nombre: '',
                direccion: '',
                rfc: ''
            },
        }
    },
    created() {
        this.traeDetalleCliente()
    },
    methods: {
        traeDetalleCliente: async function(){
        console.log('el id', this.id);
        const { id } = this.$route.params;

        const [ cliente ] = await axios.get(endpoints.cliente.obtenerDetalle(id));
        this.cliente = cliente;
    },
    },
}
</script>