import { ref } from 'vue';

export function useDelete() {
  const isDeleting = ref(false);
  const error = ref(null);

  const deleteResource = async (url) => {
    isDeleting.value = true;
    error.value = null;

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmJiM2Y3ODkwMDk0NDFiNmE2ZjIwNCIsImlzQWRtaW4iOmZhbHNlLCJwZXJtaXNzaW9ucyI6WyJjYW5fcG9zdF9ibG9nIiwiY2FuX2RlbGV0ZV9ibG9nIiwiY2FuX3ZpZXdfYmxvZyIsImNhbl92aWV3X2Jsb2dzIiwiY2FuX2VkaXRfYmxvZyIsImNhbl9wb3N0X3VzZXIiLCJjYW5fZGVsZXRlX3VzZXIiLCJjYW5fdmlld191c2VyIiwiY2FuX3ZpZXdfdXNlcnMiLCJjYW5fZWRpdF91c2VyIiwiY2FuX3Bvc3RfcGVybWlzc2lvbiIsImNhbl9kZWxldGVfcGVybWlzc2lvbiIsImNhbl92aWV3X3Blcm1pc3Npb24iLCJjYW5fdmlld19wZXJtaXNzaW9ucyIsImNhbl9lZGl0X3Blcm1pc3Npb24iXSwiaWF0IjoxNzE0MTQwMTcxfQ.t1m-wcQFmzl9-ryO64E37M5iouabgq9i7WsDMspcpbQ', // Replace with your actual token
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete the resource');
      }

      return await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      isDeleting.value = false;
    }
  };

  return { deleteResource, isDeleting, error };
}
