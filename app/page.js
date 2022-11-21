import Article from "./article"

const api = 'https://jsonplaceholder.typicode.com/posts'

const delayFetch = (url, options) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(fetch(url, options))
    , options.delay)
  })

const loadDataFromServer = async ()=> {
    const response = await delayFetch(api, {delay: 5000})
    return response.json()
}

export default async () => {
    const articles = await loadDataFromServer()
    return (<>
        <h1>My blog</h1>
        {articles.map( p => <Article key={p.id} {...p}/>)}
    </>)
}