<template>
  <div class="head">
    <v-layout align-center justify-center>
      <nav class="navbar navbar-expand-lg fixed-top row">
        
        <router-link tag="li" class="col" class-active="active" to="/" exact>Home</router-link>
        <router-link tag="li" class="col" class-active="active" to="/About" exact>About</router-link>
  
        <b-dropdown id="dropdown-buttons" text="Category" class="m-6" style="width:10%">
          <router-link tag="li" active-class="active" class="dp" to="/BurialCategory">
            <a>Burial</a>
          </router-link>
          <!-- <router-link tag="li" active-class="active" class="dp" to="/WeddingCategory">
              <a>Wedding</a>
            </router-link>
             <router-link tag="li" active-class="active" class="dp" to="/BirthdayCategory">
              <a>Birthday</a>
          </router-link>-->
          <router-link tag="li" active-class="active" class="dp" to="/BaptistCategory">
            <a>Baptist</a>
          </router-link>
        </b-dropdown>
        <router-link tag="li" class="col" class-active="active" to="/Login" exact>Login</router-link>
        <router-link tag="li" class="col" class-active="active" to="/Signup" exact>Signup</router-link>
        <input class="form-control mr-sm-9" id="search" type="text" placeholder="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="searchBtn">Search</button>
        
      </nav>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {};
    // link [
    //   {
    //     name: "/Home",
    //     path: "/"

    //   }
    // ]
  }
};
</script>
<style>
nav {
  list-style-type: none;
  margin-left: 30%;
  padding: 0;
  width: 100%;
  background-color: #f1f1f1;
}
.col {
  width: 100%;
}
nav li {
  display: block;
  color: #000;
  padding: 10px 20px;
  width: 30%;
  text-decoration: none;
}
nav li:hover,
nav li:active {
  background-color: #555;
  color: white;

  cursor: pointer;
}
.form-control {
  width: 20%;
}
.head {
  width: 100%;
  margin: 0;
}
.dp {
  width: 100%;
}
.form-inline {
}
#search {
  width: 20%;
}
#dropdown-buttons {
  margin-right: 5%;

  width: 20%;
}
#searchBtn {
  margin-right: 2%;
}
.topNav {
  margin-left: 20%;
}
</style>

