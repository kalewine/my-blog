import React from 'react'
import Image from 'next/image'



const Posts = ({image, title, date, content}) => {
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    
    const formatDate = (dateString) => {
        let year = dateString.slice(0, 4)
        let monthNum = dateString[5] === "0"  ? dateString.slice(6, 7) : dateString.slice(5, 7)
        let month = months[monthNum-1]
        let day = dateString.slice(8, 10)
        return `${month} ${day}, ${year}`
    }

    const parseContent = (content) => {
           let nodeTree = parse(content)
           
            
    }

    return (
        <section className='post'>
            <h3 className='post__title'>{title}</h3>
            <h4 className='post__date'>{formatDate(date)}</h4>
            <div className="post__img">
                <Image
                    src={image}
                    alt="square grid of white dots"
                    height='300'
                    width='300'
                    layout="responsive"
                />
            </div>
            <div className='post__content' dangerouslySetInnerHTML={{__html: content}}></div>
        </section>
    )
}


export default Posts