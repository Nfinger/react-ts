import React from 'react'
import { getCurrentUser} from '../../logic/auth'


const Dashboard = () => {
    const currentUser = getCurrentUser()

    return (
        <div>
            HI {currentUser?.email}
        </div>
    )
}


export default Dashboard