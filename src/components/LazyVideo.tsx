"use client";

import { useEffect, useRef } from "react";

type LazyVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

/**
 * Görünür alana girene kadar video dosyasını indirmez; ekrandan çıkınca
 * duraklatır. "Hareketi azalt" tercihinde yalnızca poster gösterilir.
 */
export default function LazyVideo({ src, poster, label, className = "" }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) video.src = src;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
