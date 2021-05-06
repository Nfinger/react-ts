import React from 'react'
import useDeleteEntity from '../../../../hooks/useDeleteEntity'
import Modal from '../../../../core/Modal'
import { ENTITY_TYPE } from '../../constants'
import { IDeleteProjectProps } from './types'
import { useLocation } from 'wouter'

const DeleteProject = (props: IDeleteProjectProps) => {
  const [location, setLocation] = useLocation()
  const [success, deleteProject] = useDeleteEntity(ENTITY_TYPE, props.id, () => setLocation('/projects'))
  return (
      <Modal
        buttonText="Delete Project"
        okText="Delete"
        title="Delete Project"
        onOk={deleteProject}
        content={<p>Are you sure you want to delete this project?</p>}
      />
  )
}

export default DeleteProject
