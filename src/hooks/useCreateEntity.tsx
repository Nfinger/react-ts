import { useState, useEffect } from 'react';
import { Supabase } from '../logic/supabase';

function useCreateEntity(entityType: string) {
  const table = new Supabase(entityType)
  const [entity, setEntity] = useState(null);

  const handleEntityCreated = (entity) => setEntity(entity)

  const createEntity = (data: Object) => {
    table.create(data, handleEntityCreated)
  }

  return [entity, createEntity];
}

export default useCreateEntity