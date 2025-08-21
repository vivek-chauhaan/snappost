"use client";
import "./globals.css";
import React, { useEffect, useState } from "react";
import VideoFeed from "./components/VideoFeed";
import { IVideo } from "@/models/Video";
import { apiClient } from "@/lib/api-clinet";

export default function Home() {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await apiClient.getVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center  bg-gradient-to-br from-pink-50 via-white to-purple-100 px-4 py-12">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
          Snap-Post
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Please <span className="font-semibold text-purple-600">login</span> or{" "}
          <span className="font-semibold text-pink-500">register</span> to get
          started. Once logged in, you can{" "}
          <span className="font-semibold">upload videos and images</span> and
          share them with the world 🌍✨
        </p>
      </div>

      {/* Video Feed Section */}
      <div>
        <VideoFeed videos={videos} />
      </div>
    </main>
  );
}
