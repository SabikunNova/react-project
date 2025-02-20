
import './Home.css'
import Banner from './HomeComponent/Banner';
import Image from './HomeComponent/Image';
import Mar from './HomeComponent/Mar';
const Home = () => {
    return (
        <div>
            <Mar/>
            <Banner/>
            <Image/>
        </div>
    );
};

export default Home;