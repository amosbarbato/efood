import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantList: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetRestaurantListQuery } = api
export default api
