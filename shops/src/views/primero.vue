<template>
  <div class="row">
    <div class="col">
      <div class="card w-75 card-body">
        <div class="list-group" v-show="!isHidden">
          <table class="table table-striped border-2">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Cargo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in elements" :key="i">
                <td>{{ 1 + i }}</td>
                <td>{{ item.Profesor }}</td>
                <td>{{ item.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p></p>
      <button class="btn btn-primary" v-on:click="isHidden = !isHidden">
        Clip Aqui
      </button>
    </div>
    <!-- Segunda parte -->
    <div class="col">
      <div class="card w-75 card-body">
        <table class="table table-striped border-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(elem, i) in ele" :key="i">
              <td>{{ 1 + i }}</td>
              <td>{{ elem }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    elements: [
      { Profesor: "Pepito",
        name: "Movil1" },
      {
        Profesor: "juan",
        name: "nn",
      },
      {
        Profesor: "Juanita",
        name: "programacion",
      },
    ],

    ele: ["kira", "Pepito", "Perez"],

    isHidden: false,
  }),
};
</script>
