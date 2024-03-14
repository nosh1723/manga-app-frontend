import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Listmanga from '../components/Listmanga';

const Homepage = () => {
    return (
        <div>
            <Header />
            <div
                className="w-full h-[20rem] 2xl:h-[36rem] md:h-[26rem] lg:h-[30rem] xl:h-[32rem] z-[-10] bg-no-repeat bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://embed.pixiv.net/spotlight.php?id=9439&lang=en')",
                }}
            ></div>
            <Listmanga />
            <Footer />
        </div>
    );
};

export default Homepage;