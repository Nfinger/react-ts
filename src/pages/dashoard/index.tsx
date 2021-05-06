import React from 'react'
import UserList from '../../components/User/List'
import Modal from '../../core/Modal'
import { getCurrentUser} from '../../logic/auth'


const Dashboard = () => {
    const currentUser = getCurrentUser()

    return (
        <div>
            HI {currentUser?.email}
            {/* <Modal 
                title="Payment successful"
                content={
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      your an email with all of the details of your order.
                    </p>
                }
                okText="Gracias"
                 buttonText="Open Modalzzz"
            /> */}
        </div>
    )
}


export default Dashboard