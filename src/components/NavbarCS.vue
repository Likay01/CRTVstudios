<template>
  <nav class="navbar navbar-expand-lg bg-white pt-0">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/profile"
              class="nav-link active"
              aria-current="page"
            >
              <div class="icon"><img src="" alt="" class="Pro"/></div
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link active" aria-current="page"
              >About Us</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/product" class="dropdown-item"
                  >Products</router-link
                >
              </li>
              <li>
                <router-link to="/admin" class="dropdown-item"
                  >Admin</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link to="/contact" class="dropdown-item"
                  >Contact Us</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <router-link to="/" class="navbar-brand m-auto">
          <img src="https://i.postimg.cc/mkr16hdD/CRTVstudios.png" alt="home" />
        </router-link>
        <form class="d-flex" role="search">
          <router-link to="/cart" class="navbar-brand m-auto"
            ><i class="fa-solid fa-cart-flatbed"></i
          ></router-link>
          <button
            type="button"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#LoginModal"
          >
            Login
          </button>
          <router-link to="/signup" class="dropdown-item"
            ><button type="button" class="btn signup">
              Sign Up
            </button></router-link
          >
        </form>
      </div>
    </div>
  </nav>

  <!--Login Modal -->
  <div
    class="modal fade"
    id="LoginModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content bg-black">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">
            Login
          </h1>
        </div>
        <div class="modal-body">
          <img
            src="https://i.postimg.cc/CM7ZvndB/My-project-1-37.png"
            alt=""
            class="m-3 w-50"
          />
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label text-white"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="info.email"
                required
              />
              <div id="emailHelp" class="form-text text-white">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label text-white"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="info.psswrd"
                required
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                required
              />
              <label class="form-check-label text-white" for="exampleCheck1"
                >I am not a robot</label
              >
            </div>
            <button type="submit" class="btn btn-warning text-black">
              Submit
            </button>
            
          </form>
        </div>
        <div class="modal-footer">
          <button 
            type="button"
            class="btn btn-secondary text-white"
            data-bs-dismiss="modal"
            v-if="this.logged"
          >
            Close
          </button>
          <router-link to="/signup" class="dropdown-item"
            ><button
              type="button"
              class="btn btn-light"
              data-bs-dismiss="modal"
            >
              Sign Up ?
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div v-if="user">Welcome {{ user.firstname }}</div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        email: "",
        psswrd: "",
      },
    };
  },
  computed: {
    logged() {
      return this.$store.state.message;
    },
    user(){
     return this.$store.state.user
  },
},
  methods: {
    login() {
      this.$store.dispatch('login', this.info);
    }
  }
};
</script>

<style scoped>
.navbar {
  padding-left: 24px;
  padding-right: 24px;
}
img {
  width: 5rem;
}
.signup {
  border-color: black;
  background-color: black;
  color: white;
  border-radius: 0;
}
i {
  margin-right: 1rem;
}
.icon {
  width: 25px;
  height: 25px;
  border: solid 1px;
  border-radius: 50%;
  background-image: url(https://i.postimg.cc/pLdk38Td/226-2267516-male-shadow-circle-default-profile-image-round-hd.jpg);
  background-position: center;
  background-size: cover;
}
.Pro {
  width: 100%;
}
@media only screen and (max-width: 720px) {
  img{
   padding-bottom: 2rem;
  }
  .dropdown-item{
    width: 74px;
  }
  a{
    padding: 2px;
  }
}
</style>
