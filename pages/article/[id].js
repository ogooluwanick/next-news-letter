import Link from "next/link"
import { useRouter } from "next/router"
import React from 'react'
import articleIdStyle from "../../styles/ArticleID.module.css"
import { server } from "../../config"

const index = ({article:tempArticle}) => {
        let article = JSON.parse(tempArticle)

  return (
    <div className={articleIdStyle.card}>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go Back &larr;</Link>
    </div>
  )
}


export const getStaticProps= async (context)=>{
        const res = await fetch(`${server}/api/articles/${context.params.id}`)
        const articleResponse = await res.json();
        
        return { props: {article : articleResponse ? JSON.stringify(articleResponse) : null} }
}

export const getStaticPaths= async ()=>{
        const res = await fetch(`${server}/api/articles`)

        const articles = await res.json()

        const ids = articles.map((article) => article.id)
        const paths = ids.map((id) => ({ params: { id: String(id) } }))

        return { paths, fallback: false}
}
export default index