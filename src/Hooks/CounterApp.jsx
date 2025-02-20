import { useState } from "react";


const CounterApp = () => {
    const [count, setCount] = useState(100);
    console.log(count);

    const increment = () => {
        setCount(preventCount => preventCount +1);
    }
     const decrement = () => {
         setCount(preventCount => preventCount -1);
   }
    return (
       
         <div className='flex justify-center items-center gap-5 bg-purple-300 py-20 shadow-2xl'>
           <button className='btn btn-outline btn-error' onClick={decrement}>Decrement</button>
            <p className='text-xl font-bold'>{count}</p> 
           <button className='btn btn-outline btn-success' onClick={increment}>Iecrement</button>
        </div>
    );
};

export default CounterApp;