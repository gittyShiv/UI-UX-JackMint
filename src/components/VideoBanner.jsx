import React from "react";

export default function VideoBanner() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Video - Optimized */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/your-video.mp4" type="video/mp4" />
        <source src="/your-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      {/* Optional: Dark overlay for style */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary/80"></div>
      
      {/* Optional: Text overlay on video */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            🎰 Win Big with JackMint! 🎰
          </h2>
          <p className="text-xl text-[#16ffe0] font-semibold drop-shadow-lg">
            Your chance to win starts here
          </p>
        </div>
      </div>
    </section>
  );
}