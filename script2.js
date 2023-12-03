const posts = [];

let lastActivityTime = null;



// Simulating createPost function

function createPost(post) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      posts.push(post);

      resolve();

    }, 1000);

  });

}



// Simulating deletePost function

function deletePost() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (posts.length > 0) {

        const deletedPost = posts.pop();

        resolve(deletedPost);

      } else {

        reject("ERROR: No posts to delete");

      }

    }, 1000);

  });

}



// New function: updateLastUserActivityTime

function updateLastUserActivityTime() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      lastActivityTime = new Date();

      resolve(lastActivityTime);

    }, 1000);

  });

}



// Usage using Promise.all

Promise.all([createPost({ title: 'Post One' }), updateLastUserActivityTime()])

  .then(([_, updatedTime]) => {

    console.log("Posts after creating Post One:", posts);

    console.log("Last Activity Time:", updatedTime);



    return Promise.all([createPost({ title: 'Post Two' }), updateLastUserActivityTime()]);

  })

  .then(([_, updatedTime]) => {

    console.log("Posts after creating Post Two:", posts);

    console.log("Last Activity Time:", updatedTime);



    // Now let's delete the last post

    return deletePost();

  })

  .then((deletedPost) => {

    console.log("Deleted Post:", deletedPost);

    console.log("Remaining Posts:", posts);

  })

  .catch((error) => console.log(error));

