<template>
<footer>
  <div class="about" >

   <p>
     &copy; Andrey {{calculate()}}
   </p>
  </div>
  </footer>
</template>

<script>

export default {
  data:()=>({
    anio:number,
  }),
  methods: {
    calculate(){
      return this.anio=new Date().getFullYear();
    }
  },
}
</script>
