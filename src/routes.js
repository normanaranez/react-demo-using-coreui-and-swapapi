import React from 'react'

const People = React.lazy(() => import('./views/people/People'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: People },
  { path: '/people', name: 'People', element: People },
]

export default routes
