import { useBoolean } from 'react-use';
import { Supabase } from '../logic/supabase';

function useDeleteEntity(entityType: string, entityId: string, callback: Function) {
  const table = new Supabase(entityType)
  const [success, setSuccess] = useBoolean(false)

  const handleEntityDeleted = (entity) => setSuccess(entity)

  const deleteEntity = () => {
    table.delete({id: entityId}, handleEntityDeleted)
      .then(callback)
  }

  return [success, deleteEntity];
}

export default useDeleteEntity