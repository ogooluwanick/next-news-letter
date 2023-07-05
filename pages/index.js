import ArticleList from '../components/ArticleList'
import {server} from "../config/index"

export default function Home({articles:tempArticles}) {
        let articles = JSON.parse(tempArticles)
       
  return (
    <div>
        <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps= async ()=>{                                    //From local API 
        const res = await fetch(`${server}/api/articles`);
        const articlesResponse = await res.json();
        const articles = JSON.stringify(articlesResponse);
        
        return { props: {articles } }
}
