import {articles} from "../../../public/data"


export default function  handler(req,res) {
        const id =req.query.id
        const  findItem=articles.find(x=>id==x.id)

        if (findItem){
                return  res.status(200).json(findItem)
        }
        else {
                return  res.status(404).json({message:`Article with id:${id} not FOUND`})
        }
       
}

 