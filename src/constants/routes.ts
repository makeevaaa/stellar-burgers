export const ROUTES = {
  HOME: '/',
  FEED: '/feed',
  FEED_ORDER: (id: string | number) => `/feed/${id}`,
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  PROFILE_ORDERS: '/profile/orders',
  PROFILE_ORDER: (id: string | number) => `/profile/orders/${id}`,
  INGREDIENTS: '/ingredients',
  INGREDIENT: (id: string | number) => `/ingredients/${id}`
} as const;
