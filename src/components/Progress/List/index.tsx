import React from 'react'
import ProgressBar from '../../../core/ProgressBar'
import Table from '../../../core/Table'
import useListEntity from '../../../hooks/useListEntity'
import { ENTITY_TYPE, PROGRESS_TABLE_HEADERS } from '../constants'
import { IProgressListProps } from './types'

const ProgressList = ({
    field = "",
    operator = null,
    value = "",
    select = '*'
}: IProgressListProps) => {
    const entities = useListEntity(ENTITY_TYPE, field, operator, value, select)
    return (
        <>
            <Table columns={PROGRESS_TABLE_HEADERS} data={entities} entityType={ENTITY_TYPE} />
        </>
    )
}

export default ProgressList
