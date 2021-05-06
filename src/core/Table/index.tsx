import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'wouter';
import { get } from "bottom-line-utils";

import { ITableProps } from './types'

const Table = ({
    columns,
    data,
    entityType
}: ITableProps) => {

    if (!data) return null

    const getRow = (row: any, col: any, idx: number) => {
        let text:any = ""
        if (col.render) {
            text = col.render(row, col.key, idx)
        } else {
            text = get(row, col)
        }
        return idx === 0 ? <Link href={`${entityType}/${row.id}`}>{text}</Link> : <span>{text}</span>
    }

    const getCol = col => {
        if (typeof col === "object") {
            return col.key
        }
        return col
    }

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr key={uuidv4()}>
                                    {columns.map((col) => (
                                        <th
                                            key={uuidv4()}
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >{getCol(col)}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((row) => (
                                    <tr key={uuidv4()}>
                                        {columns.map((col, idx) => (
                                            <td key={uuidv4()} className="px-6 py-4 whitespace-nowrap">
                                                {getRow(row, col, idx)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table