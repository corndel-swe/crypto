<template>
  <div class="container">
    <div class="box"></div>
  </div>
</template>

<style>
.container {
  width: 250px;
  height: 200px;
  display: grid;
  place-items: center;
  resize: horizontal;
  overflow: auto;
  background-color: hsl(0, 0%, 20%);
  container-type: inline-size;
}

.box {
  width: 100px;
  height: 100px;
  background-color: red;
}

@container (min-width: 200px) and (max-width: 300px) {
  .box {
    background-color: blue;
  }
}
</style>
