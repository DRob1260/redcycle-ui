import faker from "faker";

const mockPosts = (numberOfPosts) => {
    const posts = [];
    for(let i = 0; i < numberOfPosts; i++)
        posts.push(mockPost());
    return Promise.resolve(posts);
}

const mockPost = () => {
    const object = faker.commerce;
    return {
        imageUrl: faker.image.imageUrl(),
        title: object.productName(),
        description: object.productDescription()
    }
}

export { mockPosts };
