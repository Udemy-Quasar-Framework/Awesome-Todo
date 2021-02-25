
export function authenticateUser (state, payload) {
  const { isAuthenticated, accessToken } = payload

  state.isAuthenticated = isAuthenticated
  state.accessToken = accessToken
}

export function logoutUser (state) {
  state.isAuthenticated = false
  state.accessToken = ''
}
