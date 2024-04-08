
import Hero from './../../components/Hero/Hero';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Green Villa | Home</title>
            </Helmet>
            <Hero/>  
        </div>
    );
};

export default Home;