import Link from "next/link"
import { useRouter } from "next/router"
import React from 'react'

const index = ({article}) => {
        // let route=useRouter()
        // let id=route.query.id
  return (
    <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go Back&rarr;</Link>
    </div>
  )
}

export const getServerSideProps= async (context)=>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
        const article = await res.json()
        
        return { props: {article} }
}

export default index