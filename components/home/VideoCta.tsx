"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

export default function VideoCta() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div
        className="w-full min-h-80 md:min-h-350px flex items-center justify-center bg-[url('/images/bg/19.jpg')] bg-cover bg-center bg-no-repeat bg-fixed relative z-0"
      >
        <div className="w-full h-full bg-black/30 absolute top-0 left-0 -z-1" />
        
        <a
          href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"
          className="w-50px h-50px lg:w-20 lg:h-20 text-center lg:text-lg text-secondary-color shadow-box-shadow-2 rounded-full bg-white flex items-center justify-center animate-pulse1"
          onClick={(e) => {
            e.preventDefault();
            setLightboxOpen(true);
          }}
        >
          <i className="icon-play" />
        </a>

      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        plugins={[Video]}
        slides={[
          {
            type: "video",
            sources: [
              {
                src: "https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0",
                type: "video/youtube",
              },
            ],
          },
        ]}
      />
    </>
  );
}