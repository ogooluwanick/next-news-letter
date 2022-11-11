import Head from 'next/head'
import React from 'react'

const Meta = ({title,keywords,description}) => {
  return (
    <Head>
                <meta name='keywords' content={`${keywords}`} />
                <meta name='description' content={description} />
                <meta charSet='utf-8' />
                <link rel='icon' href='logoIcon.png' />
                <title>{`🌹O.G.O🌹 | ${title}`} </title>  
    </Head>
  )
}

Meta.defaultProps={
        title:"News Letters",
        keywords:"News, Web Dev, Next js, Ogooluwanick",
        description:"Ogooluwanick's Next js News letters"

}

export default Meta