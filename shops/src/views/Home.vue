<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Mercado</h1>
      <p class="lead">Todos los productos que estabas buscando solo aqui.</p>
    </div>

    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <router-link to="/productos/1"
            ><img
              src="../assets/img/1.jpg"
              class="d-block w-100"
              alt="..."
              width="100"
              height="350px"
          /></router-link>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/2.jpg"
            class="d-block w-100"
            alt="..."
            width="100"
            height="350px"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/3.jpg"
            class="d-block w-100"
            alt="..."
            width="100"
            height="350px"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>


export default {
  name: "Home",
  
};
</script>

