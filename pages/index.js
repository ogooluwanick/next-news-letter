import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
       
  return (
    <div>
        <Head>
                <title>🌹O.G.O🌹 News Letters</title>
                <meta name='keywords' content='News, Web Dev, Next js, Ogooluwanick' />
                <meta name='description' content="Ogooluwanick's Next js News letters"/>
        </Head>

        <ArticleList articles={articles}/>
        
    </div>
  )
}

export const getStaticProps= async ()=>{                                    //From local API 
        const res = await fetch(`/api/articles`)
        const articles = await res.json()
        
        return { props: {articles} }
}


// export const getStaticProps= async ()=>{                             //From outside 
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//         const articles = await res.json()
        
//         return { props: {articles} }
// }
