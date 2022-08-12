import $fetch from '../index'

export default async (start = 1 as number | undefined, limit = 1 as number | undefined) => {
  const query = `{
  pastOrders(index: ${start}, limit: ${limit}) {
    address {
      addressLine1
      addressLine2
      flatNumber
      fullName
      geoEnabled
      id
      lat
      lon
      postalCode
      tips
      title
      userAddressId
    }
    deliveryDriver {
      avgScore
      email
      firstName
      lastName
      mobileNumber
      uid
    }
    deliveryFee
    deliveryTime
    deliveryType
    earnedPoints
    items {
      amount
      description
      id
      name
      note
      oldAmount
      quantity
      totalAmount
    }
    orderCheckDeadline
    orderCompletedRewardPoints
    orderDate
    orderDeclineReason
    orderDeliveryDeadline
    orderEarliestDeliveryDeadline
    orderEarliestPreparingDeadline
    orderLatestDeliveryDeadline
    orderLatestPreparingDeadline
    orderPreparingDeadline
    orderPreparingDelay
    preOrder
    preparationTime
    promoCode {
      afterGainAmount
      beforeGainAmount
      code
      createdAt
      description
      expiryAt
      gainAmount
      gainStage
      gainType
      id
      minOrderAmount
      restaurantName
      restaurantUID
      title
      type
      useAble
      useAbleForRestaurant
      usedAt
    }
    refund {
      amount
    }
    restaurant {
      contactMobileNumber
      deliveryType
      name
      uid
    }
    restaurantDeliveryType
    review {
      createdAt
      id
      pointsEarned
    }
    smallAmountFee
    status
    subTotal
    tip {
      amount
      createdAt
    }
    total
    totalPromoCodeAmount
    uid
    usedPoints
    userCanCall
    userCanRate
    userCanReOrder
    userCanTip
  }
}`

  return $fetch(query).then(res => {
    return res.data.pastOrders
  })
}