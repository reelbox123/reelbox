import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
import React, { useState, useEffect, useRef } from 'react';
// import { useInView } from "react-intersection-observer";
const videos = [
  {
    src:  'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Video 1',
    image: '/Images/Love.png',
    icon: '/Images/play.png',
    type: 'video/mp4',
  },
  {
    src: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    title: 'Video 2',
    image: '/Images/Love.png',
    icon: '/Images/play.png',
    type: 'video/mp4',
  },
  {
    src: 'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4',
    title: 'Video 3',
    image: '/Images/Love.png',
    type: 'video/mp4',
  },
  {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    title: 'Vidoe 4',
    image: '/Images/Love.png',
    type: 'video/mp4',
  },
];
  
function Dashboard () {
  const [currentReelIndex, setCurrentReelIndex] = useState(null);
  const videoRefs = useRef([]); // Refs to all audio elements

  const handleReelVisibility = (index) => {
    setCurrentReelIndex(index); // Update current reel index to the visible one
  };
  const playVideo = (index) => {
      if (videoRefs.current[index]) {
        videoRefs.current[index].play();
      }
  };
  const pauseVideo = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      }
  };
    
  useEffect(() => {
  if (currentReelIndex !== null) {
    playVideo(currentReelIndex);

    // Pause other audio elements
    videoRefs.current.forEach((video, idx) => {
      if (idx !== currentReelIndex) {
        video.pause();
      }
    });
  }
  }, [currentReelIndex]);
  useEffect(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index, 10);
        handleReelVisibility(index);
      }
    });
  }, options);
  const reelElements = document.querySelectorAll('.reel');
  reelElements.forEach((element) => observer.observe(element));

  return () => {
    reelElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <section>
              <div className="text-white flex justify-left items-left flex-col pl-[300px] pt-[100px]">
                <h1 className="text-[20px] mb-[20px]">SHORT REELS</h1>
                <div className="flex justify-left items-center mb-[30px]">
                  <img className="mr-[10px]" src="/Images/Ellipse 3.png" alt="" />
                  <p>David lahmann channel</p>
                </div>
                <p className="text-[17px] tracking-widest">How to make it work at a goal</p>
              </div>
              <div className="pl-[200px] flex justify-center items-center flex-col pt-[30px]">
              {videos.map((video, index) => (
                    <div
                        className="reel flex justify-center items-center flex-col pt-[80px]"
                        key={index}
                        data-index={index}
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={video.src}
                        autoPlay={false}
                        controls={false}
                        onClick={() => (videoRefs.current[index].paused ? playVideo(index) : pauseVideo(index))}
                        className="cursor-pointer rounded-md"
                        style={{width: '100%', height: '60vh'}}
                      />
                      <img className="" src={video.image} alt="" srcSet="" />
                      <h2 className="mt-[30px] text-white text-[20px] mb-[10px]">{video.title}</h2>
                    </div>
                    ))}
              </div>
            </section>
        </>
    )
}
export default Dashboard