const posts =[];
// Function to update the last activity time of the user
function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date().getTime();
            resolve();
        }, 1000);
    });
}
// Function to create a new post
function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST1'});
            resolve();
        }, 3000)
    }) 
}
function deleteBlog(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (blogs.length > 0) {
            let blog = blogs.pop();
            resolve(blog);
        } else {
            reject('ERROR');
        }
    }, 1000);
});
}