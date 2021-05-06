import { useState, useEffect } from 'react';
import { Supabase } from '../logic/supabase';
import useSingleEntity from './useSingleEntity';

function useEditEntity(entityType: string, entityId: string, callback: Function) {
  const table = new Supabase(entityType)
  const singleEntity = useSingleEntity(entityType, entityId)
  const [entity, setEntity] = useState(singleEntity);

  const handleEntityEdited = (entity) => setEntity(entity)

  const editEntity = (data: Object) => {
    table.update(data, {id: entityId}, handleEntityEdited)
      .then(callback)
  }

  return [entity || singleEntity, editEntity];
}

export default useEditEntity