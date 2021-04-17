<template>
    <div>
        <h1>Detalles Del Articulo</h1>

        <router-link :to="{name:'detalles',params:{id:item}}" 
        v-for="(item,index) of descripcion" :key="index">
            <button :to="{item}">Ver Mas</button>
        </router-link>

        <detalles/><!--este viene de router-->

        <button @click="home">home</button>
        <button @click="anterior">Anterior</button>
        <button @click="siguiente">siguiente</button>
    </div>
</template>


<script>

import detalles from "@/components/detalleS.vue";

export default {
    components:{
        detalles
    },
    data(){
        return{
            descripcion:['hp','lg']
        }
    },
    methods: {
        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$touter.go(-1)
        },
        siguiente(){
            this.$router.go(1)
        }
    },
  
}
</script>