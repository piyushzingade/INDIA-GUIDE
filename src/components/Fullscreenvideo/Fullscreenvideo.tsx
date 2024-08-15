
export default function FullScreenVideoBackground() {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="./src/assets/campaign.mp4" type="video/mp4" />
            </video>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
                <h1 className="text-6xl font-bold mb-4">BEST IN TRAVEL 2024</h1>
                <button className="px-6 py-3 text-lg font-semibold bg-blue-500 rounded-full hover:bg-blue-700">
                    Discover the winners
                </button>
            </div>

            {/* Overlay for darkening the video */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        </div>
    );
}

