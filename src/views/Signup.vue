<template>
  <div class="signup-form">
    <form>
      <h2>Register</h2>
      <div class="form-group">
        <input type="text" class="form-control" name="Name" placeholder="Name" required="required">
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="Email"
          required="required"
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="Contact"
          placeholder="Contac Number"
          required="required"
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="Address"
          placeholder="Address"
          required="required"
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="Event"
          placeholder="Event"
          required="required"
        >
      </div>
      <div class="form-group">
        <input
          type="Number"
          class="form-control"
          name="numEvents"
          placeholder="Number of event"
          required="required"
          min="0"
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="Status"
          placeholder="Status"
          required="required"
        >
      </div>
       <div class="form-group">
        <input
          type="password"
          class="form-control"
          name="Password"
          placeholder="Password"
          required="required"
        >
      </div>
      
      <div class="form-group">
        <div class="form-group">
          <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
        </div>
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
//   methods: {
//     uploadImage(event) {
//       const URL = "http://foobar.com/upload";

//       let data = new FormData();
//       data.append("name", "my-picture");
//       data.append("file", event.target.files[0]);

//       let config = {
//         header: {
//           "Content-Type": "image/png"
//         }
//       };

//       axios.put(URL, data, config).then(response => {
//         console.log("image upload response > ", response);
//       });
//     }
//   }
};
</script>


<style scoped>
.form-control {
  height: 40px;
  box-shadow: none;
  color: #96a4a4;
}
.form-control:focus {
  border-color: #5cb85c;
}
.form-control,
.btn {
  border-radius: 3px;
}
.signup-form {
  width: 400px;
  margin: 0 auto;
  padding: 35px 0;
  margin-top: 5%;
}
.signup-form h2 {
  color: #636363;
  margin: 0 0 15px;
  position: relative;
  text-align: center;
}
.signup-form h2:before,
.signup-form h2:after {
  content: "";
  height: 2px;
  width: 30%;
  background: #d4d4d4;
  position: absolute;
  top: 50%;
  z-index: 2;
}
.signup-form h2:before {
  left: 0;
}
.signup-form h2:after {
  right: 0;
}
.signup-form .hint-text {
  color: #999;
  margin-bottom: 30px;
  text-align: center;
}
.signup-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #f2f3f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.signup-form .form-group {
  margin-bottom: 20px;
}
.signup-form input[type="checkbox"] {
  margin-top: 3px;
}
.signup-form .btn {
  font-size: 16px;
  font-weight: bold;
  min-width: 140px;
  outline: none !important;
}
.signup-form .row div:first-child {
  padding-right: 10px;
}
.signup-form .row div:last-child {
  padding-left: 10px;
}
.signup-form a {
  color: #fff;
  text-decoration: underline;
}
.signup-form a:hover {
  text-decoration: none;
}
.signup-form form a {
  color: #5cb85c;
  text-decoration: none;
}
.signup-form form a:hover {
  text-decoration: underline;
}
</style>
