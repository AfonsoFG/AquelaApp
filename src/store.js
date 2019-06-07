const store = () => {

    const posts = [];
    const postsSubscribers = [];

    const addPost = (post) => {
        posts.push(post);
        callPostsSubscribers();
    }

    const removePost = () => {
        posts.pop();
        callPostsSubscribers();
    }

    const getPosts = (posts) => {
        return posts;
    }

    const callPostsSubscribers = () => {
        postsSubscribers.forEach((subscriber) => {
            subscriber(posts);
        });
    }

    const subscribePosts = (cb) => {
        cb(posts);
        postsSubscribers.push(cb);
    }

    return {
        addPost,
        getPosts,
        subscribePosts,
        removePost
    }
};

export {
    store
}