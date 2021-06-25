<template>
  <div class="m-1 p-1">
    <b-form @submit.prevent="submit">
      <div class="alert alert-danger" v-if="user.errors.length">
        <ul class="mb-0">
          <li v-for="(error, index) in user.errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input
          v-model="user.first_name"
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
          v-model="user.last_name"
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
          v-model="user.email"
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
          v-model="user.password"
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
          v-model="user.password_confirmation"
          type="password"
          required
          class="form-control"
          id="password_confirmation"
          aria-describedby="password_confirmation"
        />
      </div>
      <b-form-checkbox
        id="ToS"
        v-model="user.term"
        true-value="1"
        false-value="0"
      >
        I accept the terms and use
      </b-form-checkbox>
      <button type="submit" class="btn btn-primary">Register</button>
    </b-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        term: "",
        errors: [],
      },
    };
  },

  methods: {
    ...mapActions("auth", ["register"]),
    async submit() {
      this.user.errors = [];

      if (!this.user.first_name) {
        this.user.errors.push("First name is required!");
      }

      if (!this.user.last_name) {
        this.user.errors.push("Last name is required!");
      }

      if (!this.user.email) {
        this.user.errors.push("Provide email address!");
      }

      if (
        !this.user.password ||
        this.user.password.search(/\d/) == -1 ||
        this.user.password.length < 8
      ) {
        this.user.errors.push(
          "Password has to have at least one digit and be 8 characters long!"
        );
      }

      if (!this.user.password_confirmation) {
        this.user.errors.push("Confirm your password!");
      }

      if (this.user.password !== this.user.password_confirmation) {
        this.user.errors.push("Passwords are not matching.");
      }
      await this.register(this.user);
      console.log("User registered!");
      // this.user
      this.$router.push("/");
    },
  },
};
</script>