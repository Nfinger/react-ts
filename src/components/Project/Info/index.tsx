import React from 'react'
import { useLocation, useRoute } from 'wouter';
import { Button } from '../../../core/Button';
import useSingleEntity from '../../../hooks/useSingleEntity'
import { ENTITY_TYPE } from '../constants';
import DeleteProject from '../Modal/Delete';

const ProjectInfo = () => {
    const [location, setLocation] = useLocation()
    const [match, { id }] = useRoute(`/${ENTITY_TYPE}/:id`);
    const project = useSingleEntity(ENTITY_TYPE, id)
    return (
        <div>
            {project?.name}
            <Button text="Edit Project" onClick={() => setLocation(`/project/${id}/edit`)} />
            <DeleteProject id={id} />
        </div>
    )
}

export default ProjectInfo