import React from 'react'
import { useRoute } from 'wouter';
import ProgressList from '../../components/Progress/List'
import UserInfo from '../../components/User/Info'

const User = () => {
    const [match, { id }] = useRoute(`/user/:id`);

    return (
        <>
            <UserInfo id={id} />
            <ProgressList
                field="user"
                operator="eq"
                value={id}
                select={`
                    id,
                    progress,
                    complete,
                    goal:goal(
                        name,
                        points    
                    )
                `} />
        </>
    )
}

export default User