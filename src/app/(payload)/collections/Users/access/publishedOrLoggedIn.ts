export const publishedOrLoggedIn = ({ req: { user } }) => {
    console.log('Checking if user is logged in or content is published:', user);
    if (user) {
      return true; // If the user is logged in, allow access
    }
  
    return {
      // If the user is not logged in, allow access to published content
      or: [
        {
          '_status': {
            equals: 'published',
          },
        },
      ],
    };
  };
  