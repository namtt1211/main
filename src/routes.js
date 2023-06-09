import React from 'react'

// Base
const Note = React.lazy(() => import('./views/base/java/note/Note'))
const Jsp = React.lazy(() => import('./views/base/java/jsp/Jsp'))
const Spring = React.lazy(() => import('./views/base/java/spring/Spring'))
const Oracle = React.lazy(() => import('./views/base/database/oracle/Oracle'))

//ReactJs
const Hook = React.lazy(() => import('./views/reactjs/F8/Hook'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/base/java/note', name: 'Note', element: Note },
  { path: '/base/java/jsp', name: 'Jsp', element: Jsp },
  { path: '/base/java/spring', name: 'Spring', element: Spring },
  { path: '/base/database/oracle', name: 'Oracle', element: Oracle },
  { path: '/reactjs/F8/hook', name: 'Hook', element: Hook },
]

export default routes
