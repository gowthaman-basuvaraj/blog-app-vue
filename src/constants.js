const constants = {
    Blog: {
        all: 'https://jsonplaceholder.typicode.com/posts',
        comments: (id) => `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    },
    User: {
        all: 'https://jsonplaceholder.typicode.com/users',
        id: (id) => `https://jsonplaceholder.typicode.com/users/${id}`,
        posts: (id) => `https://jsonplaceholder.typicode.com/users/${id}/posts`,
        comments: (id) => `https://jsonplaceholder.typicode.com/users/${id}/comments`,
    }
}
export default constants