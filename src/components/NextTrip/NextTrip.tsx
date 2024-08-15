import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function NextTrip() {
    // Initialize refs
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Create a GSAP timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: itemRefs.current[0],
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
                markers: false,
                toggleActions: 'play none none reverse',
            }
        });

        itemRefs.current.forEach((itemRef) => {
            if (itemRef) {
                const item = itemRef;

                // Initial state (hidden)
                tl.set(item, { opacity: 0, y: 50 });

                // Scroll-triggered animation
                ScrollTrigger.create({
                    trigger: item,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    onEnter: () => {
                        gsap.to(item, { opacity: 1, y: 0, duration: 0.5 });
                    },
                    onLeaveBack: () => {
                        gsap.to(item, { opacity: 0, y: 50, duration: 0.5 });
                    },
                    onEnterBack: () => {
                        gsap.to(item, { opacity: 1, y: 0, duration: 0.5 });
                    },
                });
            }
        });

        // Clean up ScrollTrigger instances on component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Initialize refs array
    const setRef = (index: number) => (el: HTMLDivElement | null) => {
        itemRefs.current[index] = el;
    };

    return (
        <div className=' dark:bg-gray-900 dark:text-white'>
            <div className="flex justify-between items-center p-5">
                <div>
                    <p className='text-sm font-medium pt-2 m-2'>PLAN YOUR TRIP</p>
                    <p className='text-4xl font-bold pt-2 m-2'>Where to next?</p>
                </div>
                <button className="text-sm py-3 border-b-white rounded-lg shadow hover:bg-blue-500 hover:text-white p-2 dark:border-b-white dark:hover:bg-blue-700">
                    View all destinations
                </button>
            </div>

            {/* Image part */}
            <div className="flex justify-center items-center space-x-4 p-6">
                <div ref={setRef(0)} className="relative w-1/3 overflow-hidden group cursor-pointer">
                    <img
                        src="./src/assets/mumbai.jpg"
                        alt="Mumbai"
                        className="w-full h-64 object-cover rounded-md transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <h3 className="mt-2 font-bold text-center">Mumbai</h3>
                </div>

                <div ref={setRef(1)} className="relative w-1/3 overflow-hidden group cursor-pointer">
                    <img
                        src="./src/assets/assam.jpg"
                        alt="Assam"
                        className="w-full h-64 object-cover rounded-md transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <h3 className="mt-2 font-bold text-center">Assam</h3>
                </div>

                <div ref={setRef(2)} className="relative w-1/3 overflow-hidden group cursor-pointer">
                    <img
                        src="./src/assets/chennai.jpeg"
                        alt="Chennai"
                        className="w-full h-64 object-cover rounded-md transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <h3 className="mt-2 font-bold text-center">Chennai</h3>
                </div>
            </div>
        </div>
    );
}
