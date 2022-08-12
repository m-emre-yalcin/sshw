import $fetch from '../index'
import decode from 'jwt-decode'

export default async (email: string, password: string) => {
  const query = `mutation {
    loginWithEmail(email: "${email}", password: "${password}") {
      token
    }
  }`
  type Token = { userUID: string, createdAt: string }


  return $fetch(query).then(res => {
    try {
      const { userUID }: Token = decode(res.data.loginWithEmail.token)
      localStorage.setItem("userUID", userUID)
      localStorage.setItem("token", res.data.loginWithEmail.token)
      return userUID
    } catch (e: any) {
      throw new Error(e);
    }
  })
}