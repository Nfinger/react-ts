import React from 'react'
import Table from '../../../core/Table'
import useListEntity from '../../../hooks/useListEntity'
import { ENTITY_TYPE, USER_TABLE_HEADERS } from '../constants'

const UserList = () => {
    const entities = useListEntity(ENTITY_TYPE)
    return (
        <Table columns={USER_TABLE_HEADERS} data={entities} entityType={ENTITY_TYPE} />
    )
}

export default UserList
