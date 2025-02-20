import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BooksComponent from './BooksComponent';
import './FetchBooks.css'


const FetchBooks = () => {
    const a = useLoaderData();
    // console.log(a);
    return (
        <div >
           <div className='books m-10'>
           {
                a.map(b => <BooksComponent
                    key={b._id} b={b}
                />)
            }
           </div>
        </div>
    );
};

export default FetchBooks;