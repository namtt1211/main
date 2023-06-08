import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Java',
        to: '/base/java',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Note',
            to: '/base/java/note',
          },
          {
            component: CNavItem,
            name: 'Spring',
            to: '/base/java/spring',
          },
          {
            component: CNavItem,
            name: 'Jsp & Jsf',
            to: '/base/java/jsp',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Database',
        to: '/base/database',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Oracle',
            to: '/base/database/oracle',
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
