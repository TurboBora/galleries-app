<template>
  <b-container>
    <h1>Login</h1>
    <b-form @submit.prevent="handleLogin">
      <b-row align-h="center" cols="1">
        <b-col>
          <b-form-group
            id="input-group-email"
            label="Email address:"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="user.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id="input-group-password"
            label="Password:"
            label-for="password"
          >
            <b-form-input
              id="password"
              v-model="user.password"
              placeholder="Enter password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
            <b-button type="submit" variant="outline-primary">
                Log in
            </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  computed: {},
  methods: {
    ...mapActions("auth", ["login"]),
    async handleLogin(){
        await this.login(this.user);
        console.log('User Ulogovan');
        this.$router.push('/');
    }
  },
};
</script>

<style>
</style>