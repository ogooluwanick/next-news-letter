const  dev=process.env.NODE_ENV!=="production"

export const server =dev?"http://localhost:3001":"https://ogo-news-letters.netlify.app"