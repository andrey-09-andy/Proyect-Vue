<template>
  <div class="mb-3">
    <h1>{{ $route.params.id.name }}</h1>

    <div class="row">
      <div class="col-md-4">
        <img :src="$route.params.id.src" class="img-fluid" alt="" />
        <br />
        <small> ${{ $route.params.id.price }} </small>
        <p></p>
        <a href="/productos" class="btn btn-outline-danger btn-block">
          regresar</a
        >
      </div>
      <div class="col-md-8">
        <hr />
        <div class="list-group">
          <table class="table table-striped border-2">
            <thead>
              <tr>
                <th>Ram</th>
                <td>{{ $route.params.id.descripcion.ram }}</td>
              </tr>
              <tr>
                <th>Tipo de Ram</th>
                <td>{{ $route.params.id.descripcion.tiporam }}</td>
              </tr>
              <tr>
                <th>Almacenamiento</th>
                <td>{{ $route.params.id.descripcion.SSD }}</td>
              </tr>
              <tr>
                <th>Procesador</th>
                <td>{{ $route.params.id.descripcion.procesador }}</td>
              </tr>
              <tr>
                <th>Pantalla</th>
                <td>{{ $route.params.id.descripcion.pantalla }}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productoS",
};
</script>
