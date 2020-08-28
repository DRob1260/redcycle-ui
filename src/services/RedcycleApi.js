import { mockPosts } from "../components/App/Home/MockPosts";

const getPosts = () => {
    return new Promise((resolve, reject) => {
        mockPosts(30).then(posts => {
            resolve(posts);
        }).catch(error => {
            reject(error);
        })
    });
}

export { getPosts };
