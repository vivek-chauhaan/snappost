import { IVideo } from "@/models/Video";
import VideoComponent from "./VideoComponent";

interface VideoFeedProps {
  videos: IVideo[];
}

export default function VideoFeed({ videos }: VideoFeedProps) {
  return (
    // <div className="grid grid-cols-1 text-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //   {videos.map((video) => (
    //     <VideoComponent key={video._id?.toString()} video={video} />
    //   ))}

    //   {videos.length === 0 && (
    //     <div className="col-span-full text-center py-12">
    //       <p className="text-base-content/70">No videos found</p>
    //     </div>
    //   )}
    // </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mx-auto lg:grid-cols-3 gap-6 p-4">
      {videos.map((video) => (
        <div
          key={video._id?.toString()}
          className="transition transform hover:scale-[1.02]  hover:shadow-xl rounded-xl overflow-hidden bg-white shadow-md"
        >
          <VideoComponent video={video} />
        </div>
      ))}

      {videos.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center px-10 py-16 bg-white shadow-md rounded-xl">
          <p className="text-gray-500 text-lg font-medium">
            No videos found 🎥
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Upload your first video and get started 🚀
          </p>
        </div>
      )}
    </div>
  );
}
