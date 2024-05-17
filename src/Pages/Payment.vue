<template>
    <section class="lg:h-screen bg-sky-1000">
        <div class="body">
            <img class="stars" src="/stars-s.png" data-value="5">
            <div class="container1">
                <div class="relative mb-4 flex w-100 flex-wrap items-stretch"  v-if="status == 'show'">
                <table style="color: whitesmoke">
                    <tr>
                        <th colspan="4">{{ clientData.nombre + " / " + clientData.cedula}}</th>
                    </tr>
                    <tr>
                        <td colspan="4" style="text-align: center"> {{ clientData.servicios.length==1? clientData.servicios.length+" Servicio":clientData.servicios.length+" Servicios" }}</td>
                    </tr>
                    <tr v-if="clientData.facturacion.facturas_nopagadas > 0 ">
                        <td colspan="2">Facturas no pagadas: </td>
                        <td colspan="2">{{ clientData.facturacion.facturas_nopagadas }}</td>
                    </tr>
                    <tr v-if="clientData.facturacion.facturas_nopagadas > 0 ">
                        <td colspan="2">Total Adeudado:</td>
                        <td colspan="2">{{ clientData.facturacion.total_facturas+" Bs." }}</td>
                    </tr>
                    <tr v-else>
                        <td colspan="4" class="text-center">Cliente Solvente</td>
                    </tr>
                    <tr v-if="clientData.facturacion.facturas_nopagadas > 0 ">
                        <td colspan="2"><button
                class="relative mb-4 z-[2] flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
                @click="searchHistory()">
                Historico De Facturas
        </button></td>
                        <td colspan="2"><button
                class="relative mb-4 z-[2] float-right flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
                v-if="clientData.facturacion.total_facturas > 0"
                @click="searchClient()">
                Pagar
        </button></td>
                    </tr>
                </table>
                </div>
                <div class="relative mb-4 flex w-100 flex-wrap items-stretch rounded-lg"  v-if="status == 'invoices'">
                <table class="border-collapse min-w-full">
                    <thead class="bg-white border-b">
                        <tr>
                            <th class="text-sm font-medium text-gray-900 px-6 py-4 text-center" colspan="4">{{ clientData.nombre + " / " + clientData.cedula}}</th>
                        </tr>
                        <tr>
                            <th class="text-sm font-medium text-gray-900 px-6 py-4 text-center" style="text-align: center"> Factura</th>
                            <th class="text-sm font-medium text-gray-900 px-6 py-4 text-center" style="text-align: center"> Monto</th>
                            <th class="text-sm font-medium text-gray-900 px-6 py-4 text-center" style="text-align: center"> Estado</th>
                            <th class="text-sm font-medium text-gray-900 px-6 py-4 text-center" style="text-align: center"> Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(invoice, index) in invoicesData" class="border-b" :class="{'bg-gray-100': index%2==0, 'bg-white': index%2!=0}">
                            <td class="x-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">{{ invoice.id }}</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">{{ invoice.total+" Bs." }}</td>
                            <td class="text-sm font-light px-6 py-4 whitespace-nowrap text-center capitalize" :class="{'text-green-900': invoice.estado == 'pagado', 'text-red-900': invoice.estado == 'vencido'}">{{ invoice.estado }}</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">{{ invoice.emitido }}</td>
                        </tr>
                    </tbody>
                    <tr v-if="clientData.facturacion.facturas_nopagadas > 0 ">
                        <td class="text-center" colspan="2">Deuda Total:</td>
                        <td class="text-center" colspan="2">{{ clientData.facturacion.total_facturas }}</td>
                    </tr>
                    <tr v-if="clientData.facturacion.facturas_nopagadas > 0 ">
                        <td class="content-center" colspan="2">
                            <button
                            class="relative mb-4 z-[2] flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                            type="button"
                            id="button-addon1"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            @click="backFromHistory()">
                            Regresar
                            </button>
                        </td>
                        <td class="grid-cols-2" colspan="2">
                            <button
                                class="relative mb-4 z-[2] float-right flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                type="button"
                                id="button-addon1"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                v-if="clientData.facturacion.total_facturas > 0"
                                @click="searchClient()">
                                Pagar
                            </button>
                        </td>
                    </tr>
                </table>
                </div>
                <div class="relative mb-4 flex w-60 flex-wrap items-stretch"  v-if="status == 'search'">
                    <div class="w-1/6">
                        <select data-te-select-init v-model="kind">
                            <option value="V">V</option>
                            <option value="E">E</option>
                            <option value="J">J</option>
                            <option value="G">G</option>
                            <option value="P">P</option>
                        </select>
                    </div>
                    <input
                    type="search"
                    class="relative m-0 -mr-0.5 block w-4/6 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-neutral-200 font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    v-model="dni"
                    aria-describedby="button-addon1" />
                    
                    <!--Search button-->
                </div>
                <button
                class="relative mb-4 z-[2] flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                v-if="status == 'search'"
                data-te-ripple-init
                data-te-ripple-color="light"
                @click="searchClient()">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd" />
            </svg>
        </button>
        
    </div>
</div>
</section>

</template>

<style>

.body {
    width: 100vw;
    height:100vh;
    background: url(/sky-s.png) no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.container1 {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: rgba(0,0,0,0.8);
    
}

.body h2{
    color: #fff;
}

.body .img {
    position: absolute;
    width: 100vw;
    height:100vh;
    top: 0;
    left: 0;
    object-fit: contain;
    opacity: 0.2;
    overflow: hidden;
}

</style>

<script>
import { Ripple, Select, initTE } from "tw-elements";
import axios from '../axios-configure';
import { onMounted } from "vue";
export default {
    name: 'Payment',
    setup() {
        document.addEventListener("mousemove", parallax);
        
        function parallax(e){
            document.querySelectorAll(".stars").forEach(function(move){
                
                var moving_value = move.getAttribute("data-value");
                
                var x = (e.clientX * moving_value)/100;
                var y = (e.clientY * moving_value)/100;
                
                move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
                
            });
        }
        return {
        }
    },
    data() {
        return {
           kind: "V",
            dni: null,
            status: 'search',
            clientData: {
                nombre: null,
                estado: null,
                clientid: null
            },
            invoicesData:[],
        }
    },
    mounted() {
        initTE({ Ripple });
        initTE({ Select });
    },
    methods: {
        searchClient(){
            const url = "https://uplinkdevenezuela.com.ve/ope.php"
            axios.post(
                url, { opcion: "GetClientsDetails", cedula: this.kind+this.dni},{ timeout: 8000, signal: AbortSignal.timeout(8000)}
            ).then((response) => {
                this.clientData = response.data.datos[0];
                this.status = "show"
            })
        },
        searchHistory(){
            const url = "https://uplinkdevenezuela.com.ve/ope.php"
            axios.post(
                url, { opcion: "GetInvoices", idcliente: this.clientData.id, limit: 4},{ timeout: 8000, signal: AbortSignal.timeout(8000)}
            ).then((response) => {
                this.invoicesData = response.data.facturas;
                this.status = "invoices"
            })
        },
        backFromHistory(){
            this.status = "show"
        }
    },
    created() {
    },
}


</script>
<style>

input{
    color: #fff !important;
}

input:focus {
    color: #fff !important;
}

</style>