async function fetchAPI(endpoint: string, options?: RequestInit) {
  const baseURL = process.env.API_URL || 'http://localhost:3000';
  const url = `${baseURL}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export default fetchAPI;