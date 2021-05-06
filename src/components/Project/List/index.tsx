import React from 'react'
import Table from '../../../core/Table'
import useListEntity from '../../../hooks/useListEntity'
import { ENTITY_TYPE, PROJECT_TABLE_HEADERS } from '../constants'

const ProjectList = () => {
    const entities = useListEntity(ENTITY_TYPE)
    return (
        <Table columns={PROJECT_TABLE_HEADERS} data={entities} entityType={ENTITY_TYPE} />
    )
}

export default ProjectList
