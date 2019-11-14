<template>
  <!-- MAIN (Center website) -->
  <div class="main">
    <hr>

    <center>
      <h2>Baptist Category</h2>
    </center>

    <!-- Portfolio Gallery Grid -->
    <div class="row">
      <div class="column">
        <div class="content">
          <img src="../assets/img3.png" alt="Mountains" style="width:100%">
          <h3>My Work</h3>
          <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <img src="../assets/img3.png" alt="Lights" style="width:100%">
          <h3>My Work</h3>
          <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <img src="../assets/img3.png" alt="Nature" style="width:100%">
          <h3>My Work</h3>
          <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <img src="../assets/img3.png" alt="Mountains" style="width:100%">
          <h3>My Work</h3>
          <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
        </div>
      </div>
      <!-- END GRID -->
    </div>

    <!-- END MAIN -->
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
  padding: 20px;
  font-family: Arial;
}

/* Center website */
.main {
  max-width: 1000px;
  margin: auto;
  margin-top: 5%;
}

h1 {
  font-size: 50px;
  word-break: break-all;
}

.row {
  margin: 8px -16px;
}

/* Add padding BETWEEN each column */
.row,
.row > .column {
  padding: 8px;
}

/* Create four equal columns that floats next to each other */
.column {
  float: left;
  width: 25%;
}

/* Clear floats after rows */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Content */

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 900px) {
  .column {
    width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
