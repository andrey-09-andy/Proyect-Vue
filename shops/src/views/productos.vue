<template>
  <div>
    <div class="col-sm-4 center-block">
      <input
        class="form-control mr-sm-2 "
        v-model="search"
        placeholder="Search..."
      />
    </div>
<p></p>
    <div class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div
              class="col-md-4"
              v-for="item of filteredProductos"
              :key="item.id"
            >
              <div class="img-event intrinsic">
                <img :src="item.src" alt="" class="img-fluid" width="300px" />
              </div>

              <div class="card-body">
                <h2>{{ item.name }}</h2>
                <div class="row">
                  <h5 class="text-center">${{ item.price }}</h5>
                </div>
                <router-link :to="{ name: 'Detalles', params: { id: item } }">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-block"
                  >
                    Ver mas
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      search: " ",

      productos: [
        {
          id: 1,
          name: "Dell Inspiron 15",
          src: require("../assets/img/dell.jpg"),
          price: "5.199.200",
          descripcion: {
            ram: "12 GB",
            tiporam: "DDR3",
            SSD: "1 TB",
            procesador: "intel i5-10210U",
            pantalla: "2160x1440",
          },
        },
        {
          id: 2,
          name: "Portatil Huawei Matebook 13 i5 8+512gb",
          src: require("../assets/img/retina13.jpg"),
          price: "3.379.00",
          descripcion: {
            ram: "8 GB",
            tiporam: "DDR3",
            SSD: "512 GB",
            procesador: "intel i5-10210U",
            pantalla: "2160x1440",
          },
        },
        {
          id: 3,
          name: 'Macbook Pro 15.4" Retina MC975LL/A Model 2012',
          src: require("../assets/img/early.png"),
          price: "5.599.999",
          descripcion: {
            ram: "4 GB",
            tiporam: "DDR3",
            SSD: "512 GB",
            procesador: "intel i3-10210U",
            pantalla: "2160x1440",
          },
        },
        {
          id: 4,
          name: "Lenovo L5 Ryzen 7",
          src: require("../assets/img/LENOVO.png"),
          price: "4.999.999",
          descripcion: {
            ram: "16 GB",
            tiporam: "DDR3",
            SSD: "512 GB / 1TB",
            procesador: "intel i5-10210U",
            pantalla: "2160x1440",
          },
        },
      ],
    };
  },

  /* esto es la funcion para buscar  */
  computed: {
    filteredProductos: function() {
      return this.productos.filter((item) => {
        return item.name.toLowerCase().match(this.search);
      });
    },
  },
};
</script>
