import $fetch from '../index'

export default async (uid: string) => {
  const query = `{
    user {
      addresses {
        addressIconId
        addressLine1
        addressLine2
        adminWard
        default
        flatNumber
        fullName
        geoEnabled
        id
        lat
        lon
        postalCode
        slugAdminWard
        tips
        title
      }
      createdAt
      email
      emailVerified
      firebaseUserUid
      firstName
      lastName
      mobileNumber
      points
      profilePicture {
        alt
        bundle
        height
        id
        title
        url
        width
      }
      smsVerified
      uid
    }
  }`

  return $fetch(query).then(res => {
    return res.data.user
  })
}