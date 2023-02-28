import React, { useEffect, useState } from 'react'

function MovieReview({id, apiKey}) {
    const [reviews, setReviews] = useState([]);
    const imagePath = 'https://image.tmdb.org/t/p/w500' 

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
        .then((res, req) => res.json())
        .then(data => setReviews(data.results))
    },[id])
    
    return (
        <div className='px-4'>
            <h3 className='text-2xl font-bold mt-12 mb-10'>Reviews</h3>
            <div>
                {
                    reviews.length == 0 ? <div>No review found</div> :
                    reviews.map(item => {
                        let reviewDate = new Date(item?.created_at)
                        return(
                            <div className='mb-8' key={item?.id}>
                                <div className='flex mb-4 gap-4'>
                                    <div className='h-16 shrink-0 w-16 bg-primary-red rounded-full overflow-hidden'>
                                        <img 
                                            src={item?.author_details?.avatar_path ? imagePath + item?.author_details?.avatar_path : "https://static.vecteezy.com/system/resources/previews/004/991/321/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"} 
                                            alt="" 
                                            width="64"
                                            className='min-h-full' 
                                        />
                                    </div>
                                    <div>
                                        <h4 className='text-xl font-semibold text-primary-red'>{item?.author}</h4>
                                        <span>{`${reviewDate.getDate()}/${reviewDate.getMonth() + 1}/${reviewDate.getFullYear()}`}</span>
                                    </div>
                                </div>
                                <article>
                                    <p className='text-sm leading-6 text-justify'>{item?.content}</p>
                                </article>
                            </div>
                        )
                    })
                }       
            </div>
        </div>
    )
}

export default MovieReview
