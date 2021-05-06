import React from 'react'
import { useRoute } from 'wouter';
import useSingleEntity from '../../../hooks/useSingleEntity'
import { getCurrentUser } from '../../../logic/auth';
import { ENTITY_TYPE } from '../constants';

const UserInfo = () => {
    const [match, { id }] = useRoute(`/${ENTITY_TYPE}/:id`);
    const user = useSingleEntity(ENTITY_TYPE, id)
    return (
        <div>
            {user?.name}
        </div>
    )
}

export default UserInfo