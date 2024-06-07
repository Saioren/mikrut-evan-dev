export const fetchSlideByID = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/media/${id}?depth=1&draft=false`);
      if (!response.ok) {
        throw new Error(`Failed to fetch media by ID: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching media by ID:', error);
      return null;
    }
  };
  