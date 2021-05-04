import AuthPage from './pages/auth/auth'
import Dashboard from './pages/dashoard'
import { ILink } from './types/app'

export const links: ILink[] = [
    {
        text: "",
        path: "/auth",
        icon: "",
        notification: 0,
        component: AuthPage,
        sidebar: false,
        key: 0,
    },
    {
        text: "Dashboard",
        path: "/dashboard",
        icon: "",
        notification: 0,
        component: Dashboard,
        sidebar: true,
        key: 1,
    }
]