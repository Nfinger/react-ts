import React from 'react'
import { useLocation } from 'wouter'
import ProjectList from '../../components/Project/List'
import { Button } from '../../core/Button'

const Projects = () => {
    const [location, setLocation] = useLocation()
    return (
        <>
            <Button text="New Project" onClick={() => setLocation('/project/new')} />
            <ProjectList />
        </>
    )
}

export default Projects