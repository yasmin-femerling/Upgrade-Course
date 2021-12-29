const posts = [
    {title:'Post One', body:'Body One'},
    {title:'Post Two', body:'Body Two'},
]

function getPosts(){
    setTimeout(() => {
        let output='';
        posts.forEach((post) =>{
            output += `<li>${post.title}</li>`;
        });
        
    }, 1000);

}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000);
}

createPost({title:'Post Three', 
body:'Body Three'}, getPosts);