

export const getPosts = async () => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = response.json();
    } catch (error) {
        console.log(error)
        throw new Error("Something went wrong!")
    }
    return data;
}

