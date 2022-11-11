import Link from 'next/link'
import React from 'react'
import articleStyles from "../styles/Article.module.css"

const ArticleItem = ({item}) => {
  return (
    <Link href={"/article/[id]"} as={"/article/"+item.id}>
        <div className={articleStyles.card}   >
                <h3>{item.title} &rarr;</h3>
                <p>{item.body}</p>
        </div>
    </Link>
  )
}

export default ArticleItem