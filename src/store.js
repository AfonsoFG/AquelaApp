import api from './configs/api'

const store = () => {

    /* POSTS */
    let posts = [];
    const postsSubscribers = [];

    const fetchPosts = () => {
        fetch(api.url + api.endpoints.posts + '?q=comments')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            posts = json;
        })
        .then(() => {
            postsSubscribers.forEach((sub) => {
                sub(posts);
            });
        });
    }

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
        removePost,
        fetchPosts
    }
};

export {
    store
}