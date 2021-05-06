import { useState, useEffect } from 'react';
import { Supabase } from '../logic/supabase';

function useSingleEntity(entityType: string, entityId: string) {
  const table = new Supabase(entityType)
  const [entity, setEntity] = useState(null);

  const handleEntityFetch = (entity) => setEntity(entity)

  useEffect(() => {
    table.findById(entityId, handleEntityFetch)
  }, []);

  return entity;
}

export default useSingleEntity