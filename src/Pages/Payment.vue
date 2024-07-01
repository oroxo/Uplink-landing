<template>
    <section class="lg:h-screen bg-sky-1000">
        <div class="body">
            <img class="stars" src="/stars-s.png" data-value="5">
            <div class="container1">
                <div class="relative mb-4 flex w-100 flex-wrap items-stretch" v-if="status == 'show'">
                    <table style="color: whitesmoke">
                        <tr>
                            <th colspan="4">{{ clientData.nombre + " / " + clientData.cedula }}</th>
                        </tr>
                        <tr>
                            <td colspan="4" style="text-align: center"> {{ clientData.servicios.length == 1 ?
                                clientData.servicios.length + " Servicio" : clientData.servicios.length + " Servicios"
                                }}
                            </td>
                        </tr>
                        <tr v-if="clientData.facturacion.facturas_nopagadas > 0">
                            <td colspan="2">Facturas no pagadas: </td>
                            <td colspan="2">{{ clientData.facturacion.facturas_nopagadas }}</td>
                        </tr>
                        <tr v-if="clientData.facturacion.facturas_nopagadas > 0">
                            <td colspan="2">Total Adeudado:</td>
                            <td colspan="2">{{ clientData.facturacion.total_facturas + " Bs." }}</td>
                        </tr>
                        <tr v-else>
                            <td colspan="4" class="text-center">Cliente Solvente</td>
                        </tr>
                        <tr>
                            <td colspan="2"><button
                                    class="relative mb-4 z-[2] flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                    type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light"
                                    @click="searchHistory()">
                                    Historico De Facturas
                                </button></td>
                            <td colspan="2"><button
                                    class="relative mb-4 z-[2] float-right flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                    type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light"
                                    v-if="clientData.facturacion.total_facturas > 0" @click="clientPay()">
                                    Pagar
                                </button></td>
                        </tr>
                    </table>
                </div>
                <div class="relative mb-4 flex w-100 flex-wrap items-stretch" v-if="status == 'select_payment'">
                    <table style="color: whitesmoke">
                        <tr>
                            <th colspan="4">{{ clientData.nombre + " / " + clientData.cedula }}</th>
                        </tr>
                        <tr v-if="clientData.facturacion.facturas_nopagadas > 0">
                            <td colspan="2">Total Adeudado:</td>
                            <td colspan="2">{{ clientData.facturacion.total_facturas + " Bs." }}</td>
                        </tr>
                        <tr v-if="clientData.facturacion.facturas_nopagadas > 0">
                            <td colspan="2"><img :src="BDVLogo" alt="Banco De Venezuela"
                                    style="max-width: 140px; -webkit-filter: drop-shadow(2px 2px 2px #fff); filter: drop-shadow(0px 0px 1px #fff);">
                            </td>
                            <td colspan="2"><button
                                    class="relative mb-4 z-[2] flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                    type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light"
                                    @click="PagarBDV()">
                                    Pagar
                                </button></td>
                        </tr>
                        <tr v-if="clientData.facturacion.facturas_nopagadas > 0">
                            <td colspan="2"><img :src="BanescoLogo" alt="Banco De Venezuela"
                                    style="max-width: 140px; -webkit-filter: drop-shadow(2px 2px 2px #fff); filter: drop-shadow(0px 0px 1px #fff);">
                            </td>
                            <td colspan="2"><button
                                    class="relative mb-4 z-[2] flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                    type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light"
                                    @click="resetSearch()" disabled>
                                    Pagar
                                </button></td>
                        </tr>

                        <tr v-if="clientData.facturacion.facturas_nopagadas > 0">
                            <td colspan="2"><button
                                    class="relative mb-4 z-[2] flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                    type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light"
                                    @click="resetSearch()">
                                    Cancelar
                                </button></td>
                            <!-- <td colspan="2"><button
                                    class="relative mb-4 z-[2] float-right flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                    type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light"
                                    v-if="clientData.facturacion.total_facturas > 0" @click="clientPay()">
                                    Pagar
                                </button></td> -->
                        </tr>
                    </table>
                </div>
                <div class="relative mb-4 flex w-100 flex-wrap items-stretch rounded-lg" v-if="status == 'invoices'">
                    <table class="border-collapse min-w-full">
                        <thead class="bg-white border-b">
                            <tr>
                                <th class="text-sm font-medium text-gray-900 px-6 py-4 text-center" colspan="4">{{
                                    clientData.nombre + " / " + clientData.cedula }}</th>
                            </tr>
                            <tr>
                                <th class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                                    style="text-align: center"> Factura</th>
                                <th class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                                    style="text-align: center"> Monto</th>
                                <th class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                                    style="text-align: center"> Estado</th>
                                <th class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                                    style="text-align: center"> Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(invoice, index) in invoicesData" class="border-b"
                                :class="{ 'bg-gray-100': index % 2 == 0, 'bg-white': index % 2 != 0 }">
                                <td class="x-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">{{
                                    invoice.id }}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">{{
                                    invoice.total + " Bs." }}</td>
                                <td class="text-sm font-light px-6 py-4 whitespace-nowrap text-center capitalize"
                                    :class="{ 'text-green-900': invoice.estado == 'pagado', 'text-red-900': invoice.estado == 'vencido' }">
                                    {{ invoice.estado }}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">{{
                                    invoice.emitido }}</td>
                            </tr>
                        </tbody>
                        <tr v-if="clientData.facturacion.facturas_nopagadas > 0">
                            <td class="text-center" colspan="2">Deuda Total:</td>
                            <td class="text-center" colspan="2">{{ clientData.facturacion.total_facturas }}</td>
                        </tr>
                        <tr v-if="clientData.facturacion.facturas_nopagadas > 0">
                            <td class="content-center" colspan="2">
                                <button
                                    class="relative mb-4 z-[2] flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                    type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light"
                                    @click="backFromHistory()">
                                    Regresar
                                </button>
                            </td>
                            <td class="grid-cols-2" colspan="2">
                                <button
                                    class="relative mb-4 z-[2] float-right flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                    type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light"
                                    v-if="clientData.facturacion.total_facturas > 0" @click="clientPay()">
                                    Pagar
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div v-if="status == 'search'">
                    <label for="hs-search-box-with-loading-3"
                        class="block text-sm font-medium mb-2 dark:text-white">Buscar Cliente</label>
                    <div class="flex rounded-lg shadow-sm">
                        <select v-model="kind" name="hs-inline-leading-select-country"
                            class="block border-gray-200 shadow-sm rounded-s-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            <option value="V">V</option>
                            <option value="E">E</option>
                            <option value="J">J</option>
                            <option value="G">G</option>
                            <option value="P">P</option>
                        </select>
                        <input type="text" id="hs-search-box-with-loading-3" name="hs-search-box-with-loading-3"
                            v-model="dni"
                            class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-0 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Cedula/RIF">
                        <button type="button" @click="searchClient()"
                            class="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                        </button>
                    </div>
                    <h2>{{ errorMSG != null ? errorMSG : '' }}</h2>
                </div>

                <div v-if="status == 'PagoBDV'">


                    <div
                        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <p class="text-lg text-gray-900 dark:text-white">Datos del pagador</p>
                        <div class="flex relative z-0 w-full mb-5 group">
                            <select v-model="PagoBDV.idLetter" required name="hs-inline-leading-select-country"
                                class="block py-2.5 px-0 w-10 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option value="V">V</option>
                                <option value="E">E</option>
                                <option value="J">J</option>
                                <option value="G">G</option>
                                <option value="P">P</option>
                            </select>
                            <input type="text" id="hs-search-box-with-loading-3" name="hs-search-box-with-loading-3"
                                v-model="PagoBDV.idNumber"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="Cedula/RIF" required>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="email" name="floating_email" v-model="PagoBDV.email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Correo Electronico
                            </label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="tel" pattern="[0-9]{11}" v-model="PagoBDV.cellphone" name="floating_password"
                                id="floating_password"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_password"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Telefono
                            </label>
                        </div>
                        <button @click="BDV_URL()"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pagar</button>
                    </div>


                </div>

                <div class="relative mb-4 flex w-60 flex-wrap items-stretch" v-if="status == 'search1'">
                    <div class="w-1/6">
                        <select data-te-select-init v-model="kind">
                            <option value="V">V</option>
                            <option value="E">E</option>
                            <option value="J">J</option>
                            <option value="G">G</option>
                            <option value="P">P</option>
                        </select>
                    </div>
                    <input type="search"
                        class="relative m-0 -mr-0.5 block w-4/6 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-neutral-200 font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Buscar" aria-label="Search" v-model="dni" aria-describedby="button-addon1" />

                    <!--Search button-->
                </div>
                <button
                    class="relative mb-4 z-[2] flex items-center float-end rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button" id="button-addon1" v-if="status == 'search1'" data-te-ripple-init
                    data-te-ripple-color="light" @click="searchClient()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                        <path fill-rule="evenodd"
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
    height: 100vh;
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
    background-color: rgba(0, 0, 0, 0.8);

}

.body h2 {
    color: #fff;
}

.body .img {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    object-fit: contain;
    opacity: 0.2;
    overflow: hidden;
}
</style>

<script>
import { Ripple, Select, initTE } from "tw-elements";
import BDVLogo from '@/assets/BDV-Logo.png'
import BanescoLogo from '@/assets/Banesco-Logo.png'
import axios from '../axios-configure';
import { onMounted } from "vue";
export default {
    name: 'Payment',
    setup() {
        document.addEventListener("mousemove", parallax);

        function parallax(e) {
            document.querySelectorAll(".stars").forEach(function (move) {

                var moving_value = move.getAttribute("data-value");

                var x = (e.clientX * moving_value) / 100;
                var y = (e.clientY * moving_value) / 100;

                move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

            });
        }
        return {
            BDVLogo,
            BanescoLogo
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
            PagoBDV: {
                opcion: "GetBDV",
                idLetter: null,  //Letra de la cédula - V, E o P
                idNumber: null,  //Número de cédula
                amount: null,  //Monto a combrar, DECIMAL
                currency: null,  //del pago, 0 - Bolivar Fuerte, 1 - Dolar
                reference: null,  //Código de referecia o factura
                title: null,  //Titulo para el pago, Ej: Servicio de Cable
                description: null,  //Descripción del pago, Ej: Abono mes de marzo 2017
                email: null,
                cellphone: null,
                rifLetter: null,  //Letra de la cédula - V, E o P
                rifNumber: null,  //Número de cédula
            },
            invoicesData: [],
            startTime: null,
            timerID: null,
            timerStep: 10000,
            errorMSG: null
        }
    },
    mounted() {
        initTE({ Ripple });
        initTE({ Select });
    },
    methods: {
        searchClient() {
            this.errorMSG = null
            const url = "https://uplinkdevenezuela.com.ve/ope.php"
            axios.post(
                url, { opcion: "GetClientsDetails", cedula: this.kind + this.dni }, { timeout: 8000, signal: AbortSignal.timeout(8000) }
            ).then((response) => {
                if (response.data.estado == "exito") {
                    this.clientData = response.data.datos[0];
                    this.status = "show"
                    if (this.clientData.facturacion.facturas_nopagadas <= 0) {
                        this.startTime = (new Date()).getTime();
                        this.timerID = setTimeout(this.resetSearch, this.timerStep);
                    }
                } else if (response.data.estado == "error") {
                    this.errorMSG = response.data.mensaje
                }
            })
        },
        searchHistory() {
            const url = "https://uplinkdevenezuela.com.ve/ope.php"
            axios.post(
                url, { opcion: "GetInvoices", idcliente: this.clientData.id, limit: 4 }, { timeout: 8000, signal: AbortSignal.timeout(8000) }
            ).then((response) => {
                this.invoicesData = response.data.facturas;
                this.status = "invoices"
            })
        },
        PagarBDV() {
            this.status = "PagoBDV"
            this.PagoBDV.idLetter = this.kind
            this.PagoBDV.idNumber = this.dni
            this.PagoBDV.amount = this.clientData.facturacion.total_facturas
            this.PagoBDV.currency = '0'
            this.PagoBDV.reference = "Total Adeudado"
            this.PagoBDV.title = "Pago Servicio de Internet"
            this.PagoBDV.description = "abono del mes"
            this.PagoBDV.email = this.clientData.correo.replace(/\s/g, '')
            this.PagoBDV.cellphone = this.clientData.movil



        },
        BDV_URL() {
            const headers = {
                'Content-Type': 'application/json',
            }
            const url = "https://uplinkdevenezuela.com.ve/ope.php"
            axios.post(
                url, this.PagoBDV, { headers: headers, timeout: 8000, signal: AbortSignal.timeout(8000) }
            ).then((response) => {
                if(response.data.success == true){
                    let newTab = window.open(response.data.urlPayment,'_blank');
                }
            })
        },
        PagarBanesco() {
            this.status = "PagoBanesco"
        },
        resetSearch() {
            this.status = "search"
            this.kind = "V"
            this.dni = null
            this.clientData = {
                nombre: null,
                estado: null,
                clientid: null
            }
            this.invoicesData = []
        },
        clientPay() {
            this.status = 'select_payment'
        },
        backFromHistory() {
            this.status = "show"
        }
    },
    created() {
    },
    computed: {
        RemainingTime: function () {
            return (this.timerStep - ((new Date()).getTime() - this.startTime) / 1000)
        }
    }
}


</script>
<style>
input {
    color: #fff !important;
}

input:focus {
    color: #fff !important;
}
</style>