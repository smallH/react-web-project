import auth from './reducer'

export default auth

const getTokenFromAuth = state => (state.auth.token)
export const getToken = state => (getTokenFromAuth(state))
