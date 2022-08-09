let oldPostNum; 

export const getPosts = async () => {
    const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts?key=${process.env.KEY}`).then((res) => res.json() )
    let postNum = res.items.length;
    const posts = res.items.map(post => post)
    if(postNum !== oldPostNum){
        console.log(postNum)
        deploy()
        oldPostNum = postNum;
    }
    return {posts}
   
}


let deploy = async() => {
    console.log('trigger deploy')
    const res = await fetch(`https://api.netlify.com/build_hooks/${process.env.DEPLOY}`)
}