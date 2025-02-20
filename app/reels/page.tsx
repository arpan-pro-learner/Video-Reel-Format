// "use client";

// import { useRef, useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import { Heart, Share2, Volume2, VolumeX, Tag } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { getRandomVideos, type PexelsVideo } from "@/lib/pexels";

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   url: string;
//   position: { x: number; y: number };
// }

// interface VideoReel {
//   id: string;
//   videoUrl: string;
//   thumbnailUrl: string;
//   products: Product[];
//   likes: number;
//   description: string;
//   title: string;
//   author: string;
// }

// function VideoPlayer({ reel, isActive }: { reel: VideoReel; isActive: boolean }) {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const [showTags, setShowTags] = useState(false);
//   const [isLiked, setIsLiked] = useState(false);

//   const { ref, inView } = useInView({
//     threshold: 0.7,
//   });

//   useEffect(() => {
//     if (!videoRef.current) return;

//     if (inView && isActive) {
//       videoRef.current.play().catch(() => {
//         console.log("Autoplay prevented");
//       });
//       setIsPlaying(true);
//     } else {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   }, [inView, isActive]);

//   const togglePlay = () => {
//     if (!videoRef.current) return;

//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play().catch(console.error);
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const toggleMute = () => {
//     if (!videoRef.current) return;
//     videoRef.current.muted = !isMuted;
//     setIsMuted(!isMuted);
//   };

//   return (
//     <div
//       ref={ref}
//       className="relative bg-black rounded-lg overflow-hidden"
//       style={{ height: "calc(100vh - 2rem)", maxHeight: "800px" }}
//     >
//       <video
//         ref={videoRef}
//         className="h-full w-full object-cover"
//         loop
//         muted={isMuted}
//         playsInline
//         onClick={togglePlay}
//         poster={reel.thumbnailUrl}
//         src={reel.videoUrl}
//       />

//       <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
//         <div className="flex items-center justify-between">
//           <div className="flex flex-col gap-2">
//             <p className="text-white font-medium line-clamp-2">{reel.description}</p>
//           </div>

//           <div className="flex flex-col gap-4">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-white hover:bg-white/20"
//               onClick={() => setIsLiked(!isLiked)}
//             >
//               <Heart className={cn("w-6 h-6", isLiked && "fill-red-500 text-red-500")} />
//             </Button>

//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-white hover:bg-white/20"
//               onClick={toggleMute}
//             >
//               {isMuted ? (
//                 <VolumeX className="w-6 h-6" />
//               ) : (
//                 <Volume2 className="w-6 h-6" />
//               )}
//             </Button>

//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-white hover:bg-white/20"
//               onClick={() => setShowTags(!showTags)}
//             >
//               <Tag className="w-6 h-6" />
//             </Button>

//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-white hover:bg-white/20"
//             >
//               <Share2 className="w-6 h-6" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {showTags && (
//         <div className="absolute inset-0 pointer-events-none">
//           {reel.products.map((product) => (
//             <div
//               key={product.id}
//               className="absolute animate-fade-in"
//               style={{
//                 left: `${product.position.x}%`,
//                 top: `${product.position.y}%`,
//               }}
//             >
//               <div className="relative group pointer-events-auto">
//                 <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer">
//                   <Tag className="w-4 h-4 text-black" />
//                 </div>

//                 <div className="absolute left-full ml-2 hidden group-hover:block bg-white rounded-lg p-3 shadow-lg">
//                   <p className="font-medium text-sm">{product.name}</p>
//                   <p className="text-sm text-gray-600">${product.price}</p>
//                   <Button
//                     size="sm"
//                     className="mt-2"
//                     onClick={() => window.location.href = product.url}
//                   >
//                     View Product
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function ReelsPage() {
//   const [reels, setReels] = useState<VideoReel[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [activeReelIndex, setActiveReelIndex] = useState(0);

//   useEffect(() => {
//     async function loadVideos() {
//       const pexelsVideos = await getRandomVideos(5);

//       const formattedReels: VideoReel[] = pexelsVideos.map((video: PexelsVideo) => {
//         const videoFile = video.video_files.find(
//           (f) => f.quality === "hd" || f.quality === "sd"
//         );

//         return {
//           id: String(video.id),
//           videoUrl: videoFile?.link || "",
//           thumbnailUrl: video.image,
//           title: "Amazing Video Reel",
//           author: "Content Creator",
//           products: [
//             {
//               id: "p1",
//               name: "Featured Product",
//               price: 99.99,
//               url: "#",
//               position: { x: 30, y: 50 },
//             },
//           ],
//           likes: Math.floor(Math.random() * 10000),
//           description: "Discover amazing products in this video! #trending #fashion",
//         };
//       });

//       setReels(formattedReels);
//       setLoading(false);
//     }

//     loadVideos();
//   }, []);

//   if (loading) {
//     return (
//       <div className="h-screen w-full flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gray-900 p-4">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
//         {/* Video Column */}
//         <div className="lg:col-span-7 xl:col-span-8">
//           <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
//             {reels.map((reel, index) => (
//               <div key={reel.id} className="snap-start py-2">
//                 <VideoPlayer
//                   reel={reel}
//                   isActive={index === activeReelIndex}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Info Panel */}
//         <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
//           <div className="bg-gray-800 rounded-lg p-6 sticky top-4">
//             <div className="space-y-6">
//               {reels[activeReelIndex] && (
//                 <>
//                   <div>
//                     <h2 className="text-2xl font-bold text-white mb-2">
//                       {reels[activeReelIndex].title}
//                     </h2>
//                     <p className="text-gray-400">
//                       By {reels[activeReelIndex].author}
//                     </p>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold text-white mb-2">
//                       Description
//                     </h3>
//                     <p className="text-gray-300">
//                       {reels[activeReelIndex].description}
//                     </p>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold text-white mb-2">
//                       Featured Products
//                     </h3>
//                     <div className="space-y-3">
//                       {reels[activeReelIndex].products.map((product) => (
//                         <div
//                           key={product.id}
//                           className="bg-gray-700 rounded-lg p-3"
//                         >
//                           <p className="font-medium text-white">
//                             {product.name}
//                           </p>
//                           <p className="text-gray-300">
//                             ${product.price}
//                           </p>
//                           <Button
//                             size="sm"
//                             className="mt-2"
//                             onClick={() => window.location.href = product.url}
//                           >
//                             View Product
//                           </Button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// code from chat gpt

"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Heart,
  Share2,
  PlayCircle,
  PauseCircle,
  VolumeX,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { getRandomVideos, type PexelsVideo } from "@/lib/pexels";

interface Product {
  id: string;
  name: string;
  price: number;
  url: string;
  position: { x: number; y: number };
}

interface VideoReel {
  id: string;
  videoUrl: string;
  thumbnailUrl: string;
  products: Product[];
  likes: number;
  isLiked: boolean;
  title: string;
  author: string;
}

function VideoPlayer({
  reel,
  isActive,
}: {
  reel: VideoReel;
  isActive: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [likedReel, setLikedReel] = useState<VideoReel | null>(null);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (!videoRef.current) return;
    if (inView && isActive) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay prevented");
      });
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [inView, isActive]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleLike = () => {
    setLikedReel((prevReel) => {
      if (!prevReel) {
        return {
          ...reel,
          isLiked: true,
          likes: reel.likes + 1,
        };
      } else {
        return {
          ...prevReel,
          isLiked: !prevReel.isLiked,
          likes: prevReel.isLiked ? prevReel.likes - 1 : prevReel.likes + 1,
        };
      }
    });
  };

  const openSharePopup = () => {
    setIsSharePopupOpen(true);
  };

  const closeSharePopup = () => {
    setIsSharePopupOpen(false);
  };

  return (
    <div
      ref={ref}
      className="relative bg-black rounded-lg overflow-hidden w-full h-screen"
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        loop
        muted={isMuted}
        playsInline
        aria-label="Video player"
        poster={reel.thumbnailUrl}
        src={reel.videoUrl}
      />

      <div className="absolute bottom-4 right-4 flex flex-col items-end gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <PauseCircle className="w-8 h-8" />
          ) : (
            <PlayCircle className="w-8 h-8" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          onClick={toggleMute}
        >
          {isMuted ? (
            <VolumeX className="w-8 h-8" />
          ) : (
            <Volume2 className="w-8 h-8" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          onClick={toggleLike}
        >
          <Heart
            className={cn(
              "w-8 h-8",
              likedReel?.isLiked && "fill-red-500 text-red-500"
            )}
          />
        </Button>
        <Popover open={isSharePopupOpen} onOpenChange={setIsSharePopupOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={openSharePopup}
            >
              <Share2 className="w-8 h-8" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-gray-800 rounded-lg p-6 shadow-lg w-80">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                Share this video
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-gray-700 hover:bg-gray-600 text-white"
                  onClick={() => {
                    // Add your app sharing logic here
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M6.94 5.12H17.06A1.88 1.88 0 0 1 19 7v10a1.88 1.88 0 0 1-1.94 1.88H6.94A1.88 1.88 0 0 1 5 17V7a1.88 1.88 0 0 1 1.94-1.88m5.56 14.16c.97 0 1.75-.78 1.75-1.75s-.78-1.75-1.75-1.75-1.75.78-1.75 1.75.78 1.75 1.75 1.75m6-12.41h-12v9.41h12v-9.41Z" />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-gray-700 hover:bg-gray-600 text-white"
                  onClick={() => {
                    // Add your app sharing logic here
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-gray-700 hover:bg-gray-600 text-white"
                  onClick={() => {
                    // Add your app sharing logic here
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
                  </svg>
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="bg-gray-700 hover:bg-gray-600 text-white w-full justify-start"
                onClick={() => {
                  navigator.clipboard.writeText(reel.videoUrl);
                  alert("Video link copied to clipboard!");
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
                Copy link
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-gray-700 hover:bg-gray-600 text-white w-full justify-start"
                onClick={closeSharePopup}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                Close
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default function ReelsPage() {
  const [reels, setReels] = useState<VideoReel[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeReelIndex, setActiveReelIndex] = useState(0);

  useEffect(() => {
    async function loadVideos() {
      const pexelsVideos = await getRandomVideos(5);

      const formattedReels: VideoReel[] = pexelsVideos.map(
        (video: PexelsVideo) => {
          const videoFile = video.video_files.find(
            (f) => f.quality === "hd" || f.quality === "sd"
          );
          return {
            id: String(video.id),
            videoUrl: videoFile?.link || "",
            thumbnailUrl: video.image,
            title: "Amazing Video Reel",
            author: "Content Creator",
            products: [
              {
                id: "p1",
                name: "Featured Product",
                price: 99.99,
                url: "#",
                position: { x: 30, y: 50 },
              },
            ],
            likes: Math.floor(Math.random() * 10000),
            isLiked: false,
          };
        }
      );
      setReels(formattedReels);
      setLoading(false);
    }
    loadVideos();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Video Column */}
        <div className="lg:col-span-7 xl:col-span-8 overflow-hidden">
          <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory scrollbar-hide">
            {reels.map((reel, index) => (
              <div key={reel.id} className="snap-start">
                <VideoPlayer reel={reel} isActive={index === activeReelIndex} />
              </div>
            ))}
          </div>
        </div>
        {/* Info Panel */}
        <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
          <div className="bg-gray-800 rounded-lg p-6 sticky top-4 h-half overflow-y-auto scrollbar-hide">
            <div className="space-y-6">
              {reels[activeReelIndex] && (
                <>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {reels[activeReelIndex].title}
                    </h2>
                    <p className="text-gray-400">
                      By {reels[activeReelIndex].author}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Featured Products
                    </h3>
                    <div className="space-y-3">
                      {reels[activeReelIndex].products.map((product) => (
                        <div
                          key={product.id}
                          className="bg-gray-700 rounded-lg p-3"
                        >
                          <p className="font-medium text-white">
                            {product.name}
                          </p>
                          <p className="text-gray-300">${product.price}</p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() => (window.location.href = product.url)}
                          >
                            View Product
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
