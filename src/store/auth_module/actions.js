import { AUTH_AUTHENTICATE_USER, AUTH_LOGOUT_USER } from 'src/store/store_types/mutations'

export function authenticateUser (context, payload) {
  const { commit } = context

  commit(AUTH_AUTHENTICATE_USER, payload)
}

export function logoutUser (context) {
  context.commit(AUTH_LOGOUT_USER)
}
