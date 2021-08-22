// import initialState from './state'

export default {
  async nuxtServerInit ({ dispatch, commit }, { res }) {
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, idToken: token, ...authUser } = res.locals.user

      await commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims, token })
    }
  }
  // onAuthStateChangedAction (state, { authUser }) {
  //   console.log(authUser)
  //   if (!authUser) {
  //     Object.assign(state, initialState())
  //
  //     return
  //   }
  //   const { uid, email, emailVerified, displayName } = authUser
  //
  //   state.authUser = {
  //     uid,
  //     displayName,
  //     email,
  //     emailVerified
  //   }
  //   state.isLoggedIn = true
  // }
}
