import React from 'react'
import { Field, Form } from 'react-final-form'
import { useLocation, useRoute } from 'wouter'
import { Button } from '../../../../core/Button'
import useEditEntity from '../../../../hooks/useEditEntity'
import { ENTITY_TYPE } from '../../constants'

const EditProject = () => {
    const [location, setLocation] = useLocation()
    const [match, { id }] = useRoute(`/${ENTITY_TYPE}/:id/edit`);
    const [project, editProject] = useEditEntity(ENTITY_TYPE, id, () => setLocation(`/${ENTITY_TYPE}/${id}`))

    const submitProjectForm = (values) => {
        editProject(values)
    }

    return (
        <Form
            initialValues={project}
            onSubmit={submitProjectForm}
            render={({ handleSubmit, submitError }) => (
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                        >Project Name</label>
                        <Field
                            component="input"
                            name="name"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            type="text"
                        />
                    </div>
                    <Button text="Submit" type="submit" />
                </form>
            )}
        />
    )
}

export default EditProject