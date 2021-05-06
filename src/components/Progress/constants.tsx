import { get } from 'bottom-line-utils'
import React from 'react'
import ProgressBar from '../../core/ProgressBar'

export const ENTITY_TYPE = "progress"
export const PROGRESS_TABLE_HEADERS: any = [
    "goal.name",
    {
        key: 'progress',
        render: (row, key, idx) => <ProgressBar completed={get(row, key)} />
      },
]