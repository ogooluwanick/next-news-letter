import {articles} from "../../../public/data.js"


export default function  handler(req,res) {
       return  res.status(200).json(articles)
}

 