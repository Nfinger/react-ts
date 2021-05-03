import React, { useEffect } from 'react'
import { signOut, getCurrentUser} from '../../logic/auth'
import { Button } from '../../components/Button'
import { useLocation } from 'wouter'

const Dashboard = () => {
    const currentUser = getCurrentUser()
    const [location, setLocation] = useLocation()

    const logOut = () => {
        signOut()
        setLocation('/auth')
    }

    return (
        <div>
            HI {currentUser?.email}
            <Button
                text="Sign Out"
                onClick={logOut}
            />
        </div>
    )
}


export default Dashboard