import payload from 'payload';
import { CollectionAfterChangeHook } from 'payload/types';

const afterChangeHook: CollectionAfterChangeHook = async () => {
  try {
    // Fetch projects data from the Payload "projects" collection
    const projects = await payload.find({
      collection: 'projects',
      depth: 1, // Specify the depth if needed
      // Add any additional query parameters if needed
    });

    // Do something with the fetched projects data
    console.log('Fetched projects:', projects);

    // You can further process the data or pass it to another function for rendering
    // For example, you can save the fetched data to a file or render it directly in a template
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Handle any errors here
  }
}

export default afterChangeHook;
