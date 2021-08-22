export default {
  isLoggedIn: (state) => {
    try {
      return state.authUser !== null
    } catch {
      return false
    }
  }
}
