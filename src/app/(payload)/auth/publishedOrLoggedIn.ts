export const publishedOrLoggedIn = ({ req: { user } }) => {
    if (user) {
        return true;
    }

    return {
        or: [
            {
                '_status': {
                    equals: 'published',
                },
            },
        ],
    };
};
