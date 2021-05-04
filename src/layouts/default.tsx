import React from 'react'
import Sidebar from '../components/Sidebar'
import { links } from '../links'

const DefaultLayout = ({ children }) => (
    <main className="flex flex-no-wrap bg-gray-200">
        <Sidebar links={links} />
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
            <div className="w-full h-full rounded ">
                {children}
            </div>
        </div>
    </main>
)

export default DefaultLayout
