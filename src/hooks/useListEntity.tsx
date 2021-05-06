import { useState, useEffect } from 'react';
import { Supabase } from '../logic/supabase';

function useListEntity(entityType: string, field?: string | { field: string; operator: string; value: any; }[], operator: string | null = null, value: string = "", select: string = '*') {
  const table = new Supabase(entityType)
  const [entities, setEntities] = useState(null);

  const handleEntityFetch = (entities: any[]) => setEntities(entities)

  useEffect(() => {
    if (field) {
      table.filter(field, operator, value, select, handleEntityFetch)
    } else {
      table.getAll(handleEntityFetch)
    }
  }, []);

  return entities;
}

export default useListEntity