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

function createPost(post) {
    return new Promise((resolve,reject) =>{
        
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            }else{
                reject('Error');
            }
        },2000);
    })
}

createPost({title:'Post Three', 
body:'Body Three'})
.then(getPosts)
.catch(err => console.log(err));

//Other way to handle promises

async function init(){
        await createPost({title:'Pst Three',body:'Bodyy Three'});
        getPosts();
}

init();

//Cleaner Way for fetch
async function fetchUsers(){
    const res = await fetch
    ('url');

    const data = await res.json();
    console.log(data);
}

fetchUsers;
//Promise.all
const promise1= Promise.resolve('Hello Wolrd');
const promise2= 10;
const promise3 = feth('https://jsonplaceholder.typicode.com/users').then(
    res=> res.json()
);

Promise.all([promise1,promise2,promise3]).then(values => console.log(values));