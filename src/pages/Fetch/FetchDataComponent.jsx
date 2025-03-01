

const FetchDataComponent = ({ post }) => {

    const {title,url,thumbnailUrl} = post;
    return (
       
       <div className='m-10 py-6 px-2 bg-slate-300'>
            {/* <p className='text-2xl font-bold'>{post.title}</p>
            <p>{post.body}</p> */}
            <p className='text-2xl font-bold'>{title}</p>
            <img className='h-32 w-32 mt-5 rounded-full border-4 border-black p-2' src={url} alt=""/>
            <img className='h-32 w-32 mt-5 border-4 border-black p-1' src={thumbnailUrl} alt=""/>
        </div>
        
    
    );
};

export default FetchDataComponent;