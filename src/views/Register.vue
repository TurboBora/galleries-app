<template>
  <div>
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input
          v-model="userData.first_name"
          type="text"
          required
          class="form-control"
          id="firstName"
          aria-describedby="firstName"
        />
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input
          v-model="userData.last_name"
          type="text"
          required
          class="form-control"
          id="lastName"
          aria-describedby="lastName"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="userData.email"
          type="email"
          required
          class="form-control"
          id="email"
          aria-describedby="email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="userData.password"
          type="password"
          required
          class="form-control"
          id="password"
          aria-describedby="password"
        />
      </div>
      <div class="mb-3">
        <label for="password_confirmation" class="form-label"
          >Confirm password</label
        >
        <input
          v-model="userData.password_confirmation"
          type="password"
          required
          class="form-control"
          id="password_confirmation"
          aria-describedby="password_confirmation"
        />
      </div>
      <div>
        <input type="checkbox" id="ToS" true-value="1" false-value="0" v-model="userData.term">
          <label for="ToS">I accept the terms</label>
          <div>{{userData.term}}</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      userData: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        term: "",
      },
    };
  },

  methods: {
    ...mapActions("auth", ["register"]),
    async submit() {
        console.log(this.userData);
      await this.register(this.userData);
      this.$router.push('/');
    },
  },
};
</script>