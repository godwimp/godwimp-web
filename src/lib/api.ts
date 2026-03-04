async function fetchAPI(endpoint: string, options?: RequestInit) {
<<<<<<< HEAD
  const baseURL = process.env.API_URL || "http://localhost:3000";
=======
  const baseURL = process.env.API_URL || 'http://localhost:3000';
>>>>>>> 6dade488c8b37cd1f5ca7e86b54a6d8a9b1790ad
  const url = `${baseURL}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
<<<<<<< HEAD
        "Content-Type": "application/json",
=======
        'Content-Type': 'application/json',
>>>>>>> 6dade488c8b37cd1f5ca7e86b54a6d8a9b1790ad
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

<<<<<<< HEAD
    const json = await response.json();

    return json.data;
  } catch (error) {
    console.error("Fetch error:", error);
=======
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
>>>>>>> 6dade488c8b37cd1f5ca7e86b54a6d8a9b1790ad
    throw error;
  }
}

export default fetchAPI;
