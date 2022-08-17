///Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* Any file inside the folder pages/api is mapped to /api/* and will 
be treated as an api endpoint instead of a page*/ 


import { GraphQLClient , gql  } from "graphql-request"


const graphqlAPI=process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
const hygraphToken= process.env.HYGRAPH_TOKEN

export default async function comments(req, res) {
  console.log({hygraphToken})

  const {name , email ,slug ,comment} =req.body;
  const graphQLClient = new GraphQLClient(graphqlAPI , {
    headers:{
       authorizaton:`Bearer ${hygraphToken}`
    }
  })

  const query =gql `
     mutation CreateComment($name: String! , $email:String! , $comment:String! , $slug:String!){
       createComment(data:{name: $name , email:$email , comment:$comment , post: {connect:{ slug : $slug}}}) {id}

     }

  `
  try {
    const result = await graphQLClient.request(query ,req.body)

    return res.status(200).send(result);
    
  } catch (error) {
     console.log(error)
     return res.status(500).send(error)
  }

    }
