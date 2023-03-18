function Post () {
    return (
        <div className="col-4 px-1">
            <div className='post'>
               <div className='post-body'>
                   <h2 className='post-title'>زغالی سماور   * / ذغالی ۱ لیتری با سرویس</h2>
                   <div className="post-status">نو</div>
                   <div className="post-price">۱۶۰,۰۰۰ تومان</div>
                   <div className="post-bottom">
                       <span style={ { color: '#A62626', marginLeft: 4 } }>فروشگاه</span>
                       <span className='post-description'>سماور سازی پورحیدر شیرازی در دستگرده</span>
                   </div>
               </div>
               <img className='post-img img-fluid' src="/Images/posts/1.webp" alt=""/>
            </div>
        </div>
    )
}

export default Post