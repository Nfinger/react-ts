import React from 'react'
import useSingleEntity from '../../../hooks/useSingleEntity'
import { ENTITY_TYPE } from '../constants';
import { IUserInfoProps } from './types';

const UserInfo = ({ id }: IUserInfoProps) => {
    
    const user = useSingleEntity(ENTITY_TYPE, id)

    return (
        <div>
            {user?.name}
        </div>
    )
}

export default UserInfo