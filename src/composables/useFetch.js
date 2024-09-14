import { ref, onMounted } from 'vue';

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(true);

  const fetchData = async () => {
    isLoading.value = true;
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      data.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetchData();
  });

  return { data, error, isLoading, fetchData };
}
