<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Sign In
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="email" label="Email" type="email" required />
          <v-text-field v-model="password" label="Password" required type="password" />
          <v-btn color="primary" class="ma-2" @click="login">
            Login
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  layout: 'login',
  data () {
    return {
      email: null,
      password: null
    }
  },
  mounted () {

  },
  methods: {
    async login () {
      await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
      await this.$router.push('/profile')
    }
  }
}
</script>
