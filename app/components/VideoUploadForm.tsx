"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import { Loader2 } from "lucide-react";
import { useNotification } from "./Notification";
import FileUpload from "./Fileupload";
import { apiClient } from "@/lib/api-clinet";

interface VideoFormData {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export default function VideoUploadForm() {
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { showNotification } = useNotification();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VideoFormData>({
    defaultValues: {
      title: "",
      description: "",
      videoUrl: "",
      thumbnailUrl: "",
    },
  });

  const handleUploadSuccess = (response: IKUploadResponse) => {
    setValue("videoUrl", response.filePath);
    setValue("thumbnailUrl", response.thumbnailUrl || response.filePath);
    showNotification("Video uploaded successfully!", "success");
  };

  const handleUploadProgress = (progress: number) => {
    setUploadProgress(progress);
  };

  const onSubmit = async (data: VideoFormData) => {
    if (!data.videoUrl) {
      showNotification("Please upload a video first", "error");
      return;
    }

    setLoading(true);
    try {
      await apiClient.createVideo(data);
      showNotification("Video published successfully!", "success");

      // Reset form after successful submission
      setValue("title", "");
      setValue("description", "");
      setValue("videoUrl", "");
      setValue("thumbnailUrl", "");
      setUploadProgress(0);
    } catch (error) {
      showNotification(
        error instanceof Error ? error.message : "Failed to publish video",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Title
        </label>
        <input
          type="text"
          className={`w-full px-4 py-3 rounded-xl border bg-white text-gray-800 
      placeholder-gray-400 shadow-sm focus:outline-none 
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
      transition duration-200 ease-in-out ${
        errors.title ? "border-red-500 focus:ring-red-400" : "border-gray-300"
      }`}
          placeholder="Enter your title..."
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <span className="text-red-500 text-sm mt-1">
            {errors.title.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          className={`w-full h-28 px-4 py-3 rounded-xl border bg-white text-gray-800 
      placeholder-gray-400 shadow-sm focus:outline-none 
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
      transition duration-200 ease-in-out resize-none ${
        errors.description
          ? "border-red-500 focus:ring-red-400"
          : "border-gray-300"
      }`}
          placeholder="Write a short description..."
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </span>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Video
        </label>
        <div className="rounded-xl border-2 border-dashed border-gray-300 p-6 flex flex-col  bg-gray-50 hover:border-blue-500 transition duration-200">
          <FileUpload
            fileType="video"
            onSuccess={handleUploadSuccess}
            onProgress={handleUploadProgress}
          />
          <p className="text-gray-400 mt-2 text-sm">
            Drag & drop a video or click to select
          </p>
        </div>
        {uploadProgress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
            <div
              className="bg-blue-900 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer bg-blue-800 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-blue-600 hover:shadow-lg transition flex items-center justify-center "
        disabled={loading || !uploadProgress}
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Publishing Video...
          </>
        ) : (
          "Publish Video"
        )}
      </button>
    </form>
  );
}
