
import React, { useEffect, useState } from 'react';
/**
 * A React functional component that renders a video element.
 *
 * @function Video
 * @returns {JSX.Element} - A JSX element representing the video component.
 */
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Video() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init();
        if (window.location.hash === '#video') {
            const element = document.getElementById('video');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const handleVideoLoad = () => {
        setLoading(false);
    };

    return (
        <div id="video" className="pt-16" data-aos="fade-up">
            <div className="flex flex-col items-center mx-4 sm:mx-12">
                <h1 className="text-gray-900 dark:text-gray-100 text-3xl font-bold mb-10 mt-5 mx-5 text-center truncate">
                    Video of our application
                </h1>
                <div className={`rounded-lg m-auto w-full h-72 sm:w-2/3 md:w-1/2 lg:w-1/2 bg-gray-300 dark:bg-gray-700 ${loading ? 'animate-pulse' : ''}`} style={{ display: loading ? 'block' : 'none' }}></div>
                <iframe
                    src="https://drive.google.com/file/d/1s_tjnkgE_WG_Zuiqrui4HJ6uwxqiCbOU/preview"
                    allow="autoplay"
                    className={`rounded-lg m-auto w-full h-auto sm:w-2/3 md:w-1/2 lg:w-1/2 ${loading ? 'hidden' : ''}`}
                    style={{ aspectRatio: '16/9' }}
                    title="Video of our application"
                    onLoad={handleVideoLoad}

                    data-aos="fade-up" // Applica animazione al caricamento
                ></iframe>
            </div>
        </div>
    );
}
