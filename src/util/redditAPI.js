
// const headers = new Headers();
// headers.append("User-Agent", "your bot 0.1");
let headers = new Headers({
    "Accept"       : "application/json",
    "Content-Type" : "application/json",
    "User-Agent"   : "MY-UA-STRING"
});

async function getRedditData (subreddit) {
    

  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        return data.data.children
    })
    .then(children => children.map(child => {
        const { title, permalink, url, author, created_utc, num_comments, ups, downs, thumbnail } = child.data
        
        return {
            title,
            permalink,
            url,
            author,
            created_utc,
            num_comments,
            ups,
            downs,
            thumbnail
        }
    
    }))
}

export default getRedditData
