import Marquee from "react-fast-marquee";


const Mar = () => {
    return (
        <div className='bg-emerald-300 p-2'>
           

            <Marquee>
                <p className='m-4 text-xl font-bold'>I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.</p>
            </Marquee>
        </div>
    );
};

export default Mar;