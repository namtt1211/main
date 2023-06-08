import React from 'react'

// Base
const Java = React.lazy(() => import('./views/base/java/Java'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/base/java', name: 'Java', element: Java },
  { path: '/base/navs', name: 'Navs', element: Navs },
]

export default routes
