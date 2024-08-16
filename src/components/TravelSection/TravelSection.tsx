import { useRef, useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function TravelSection() {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [contentIndex, setContentIndex] = useState(0);

    useEffect(() => {
        // Retrieve the refresh count from local storage
        let refreshCount = parseInt(localStorage.getItem('refreshCount') || '0', 10);
        refreshCount += 1;

        // Update the refresh count in local storage
        localStorage.setItem('refreshCount', refreshCount.toString());

        // Calculate the content index based on the refresh count
        const index = (refreshCount - 1) % 5; // Change the divisor for more groups
        setContentIndex(index);
    }, []);

    // Define multiple sets of images and texts
    const contentSets = [
        {
            images: ['assam.jpg', 'image6.avif', 'image8.avif'],
            texts: [
                '12 of the best free things to do in India',
                '5 destinations locals want you to visit in India',
                'In India for the Summer Olympics? Here\'s what else is happening'
            ]
        },
        {
            images: ['image1.jpg', 'image8.avif', 'mumbai.jpg'],
            texts: [
                'Exploring the hidden gems of Kerala',
                'Top 10 beaches to visit in India',
                'Experience the vibrant festivals of India'
            ]
        },
        {
            images: ['image3.jpg', 'image8.avif', 'mumbai.jpg'],
            texts: [
                'Mountain adventures in the Himalayas',
                'The cultural wonders of Rajasthan',
                'Wildlife safari in India: A must-do experience'
            ]
        },
        {
            images: ['image4.jpeg', 'image8.avif', 'image3.jpg'],
            texts: [
                'The architectural marvels of India',
                'Discover the spirituality of Varanasi',
                'A culinary journey through India'
            ]
        },
        {
            images: ['image5.jpeg', 'image6.avif', 'image9.jpg'],
            texts: [
                'India’s ancient heritage sites',
                'Trekking trails for the adventurous',
                'Relaxation and wellness retreats in India'
            ]
        }
    ];

    const currentContent = contentSets[contentIndex];

    return (
        <div className="relative flex justify-center items-center dark:bg-gray-900 dark:text-white">
            {/* Main Heading Over All Images */}
            <h1 className="absolute mb-8 text-3xl max-w-4xl font-semibold md:text-6xl text-center font-display z-10 pointer-events-none">
                Discover <span className="whitespace-nowrap">story-worthy</span><br /> travel moments
            </h1>
            {/* Items */}
            {currentContent.images.map((src, index) => (
                <div
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className="relative w-full md:w-2/5 lg:w-1/3 h-[500px] overflow-hidden group travel-item rounded-md shadow-lg"
                    style={{ zIndex: 1 }}
                >
                    <img
                        src={`./src/assets/${src}`}
                        alt={`Travel ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                        <h3 className="text-xl font-bold">
                            {currentContent.texts[index]}
                        </h3>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white z-20">
                        <FaArrowRight />
                    </div>
                </div>
            ))}
        </div>
    );
}
