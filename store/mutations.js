import initialState from './state'

export default {
  ON_AUTH_STATE_CHANGED_MUTATION (state, { authUser }) {
    if (authUser) {
      const { uid, email, emailVerified, displayName } = authUser
      state.authUser = {
        uid,
        displayName,
        email,
        emailVerified
      }
      state.isLoggedIn = true
    } else {
      Object.assign(state, initialState())
    }
  }
}
