import payload from 'payload';
import { CollectionAfterChangeHook } from 'payload';

const afterChangeHook: CollectionAfterChangeHook = async () => {
  try {
    // Fetch projects data from the Payload "projects" collection
    const skills = await payload.find({
      collection: 'skillsCollection',
    })

    console.log('Fetched skills:', skills);

    // You can further process the data or pass it to another function for rendering
    // For example, you can save the fetched data to a file or render it directly in a template
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Handle any errors here
  }
}

export default afterChangeHook;
