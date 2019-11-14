<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link tag="li" class="col" class-active="active" to="/Home" >Home</router-link>
        <router-link tag="li" class="col" class-active="active" to="/About" >About</router-link>
        <b-nav-item-dropdown text="Category" right>
           <router-link tag="li" class="col" class-active="active" to="/BirthdayCategory" >Birthday</router-link>
        <router-link tag="li" class="col" class-active="active" to="/WeddingCategory" >Wedding</router-link>
         <router-link tag="li" class="col" class-active="active" to="/BurialCategory" >Burial</router-link>
        <router-link tag="li" class="col" class-active="active" to="/BaptistCategory" >Baptist</router-link>
        </b-nav-item-dropdown>
      <!-- Right aligned nav items -->
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
       <b-navbar-nav class="ml-auto">
         <router-link tag="li" class="col" class-active="active" to="/Login" >Login</router-link>
        <router-link tag="li" class="col" class-active="active" to="/Signup" >Signup</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
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
<style scoped>
/* Remove the navbar's default margin-bottom and rounded borders */
.navbar {
  margin-bottom: 0;
  border-radius: 0;
}
.col{
  font-size:20px;
}

</style>

