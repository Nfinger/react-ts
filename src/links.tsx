import React from 'react'
import { ILink } from './types/app'

// Icons
import { IoMdHome } from 'react-icons/io'
import { FaUsers, FaDatabase } from 'react-icons/fa'

// Pages
import AuthPage from './pages/auth/auth'
import Dashboard from './pages/dashoard'
import UserInfo from './pages/user/info'
// Components
import UserList from './components/User/List'
import ProjectInfo from './components/Project/Info'
import Projects from './pages/project'
import CreateProject from './components/Project/Form/Create'
import EditProject from './components/Project/Form/Edit'

export const links: ILink[] = [
    {
        path: "/auth",
        component: AuthPage,
    },
    {
        text: "Dashboard",
        path: "/dashboard",
        icon: <IoMdHome />,
        notification: 0,
        component: Dashboard,
        sidebar: true,
    },
    {
        text: "Users",
        path: "/users",
        icon: <FaUsers />,
        notification: 0,
        component: UserList,
        sidebar: true,
    },
    {
        path: "/user/:id",
        component: UserInfo,
    },
    {
        text: "Projects",
        path: "/projects",
        icon: <FaDatabase />,
        notification: 0,
        component: Projects,
        sidebar: true,
    },
    {
        path: "/projects/new",
        component: CreateProject,
    },
    {
        path: "/project/:id",
        component: ProjectInfo,
    },
    {
        path: "/project/:id/edit",
        component: EditProject,
    }
]