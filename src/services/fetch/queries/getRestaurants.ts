import $fetch from '../index'

export default async (start = 1 as number | undefined, limit = 10 as number | undefined, searchText?: string) => {
  const query = `
  {
    restaurants(
      delivery: true
      index: ${start}
      limit: ${limit}
      query: "${searchText}"
      userAddressId: 1
    ) {
      avgScore
      deal {
        delivery
        id
        int
        min_spend_amount
        reward_percent
        time_frame_id
      }
      delivery
      deliveryFee {
        amount
        freeDeliveryMoreThanAmount
        freeDeliveryMoreThanEnabled
      }
      deliveryReOpenDate
      deliveryType
      distance
      freebie {
        id
        itemCount
        minSpendAmount
        tagName
      }
      inDistance
      isNew
      minOrderAmount
      minOrderEnabled
      name
      open
      picture {
        alt
        bundle
        height
        id
        title
        url
        width
      }
      reOpenDate
      restaurantAddressPostalCode
      restaurantAddressSlugAdminWard
      restaurantAddressSlugCityName
      restaurantCollectionWorkingTimeStatus
      restaurantDeliveryDriverStatus
      restaurantDeliveryStatus
      restaurantDeliveryWorkingTimeStatus
      restaurantItemId
      restaurantNextVacationEndDate
      restaurantNextVacationStartDate
      restaurantNextVacationStatus
      restaurantOpenStatus
      restaurantStatusCode
      restaurantStatusParams
      restaurantWorkingHourOpenTime
      slugName
      types {
        iconId
        id
        name
      }
      uid
    }
  }
  `

  return $fetch(query).then(res => {
    return res.data.restaurants
  })
}