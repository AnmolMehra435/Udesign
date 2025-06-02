
import { useState, useRef } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ImageUploaderProps {
  onImageUpload: (image: string | null) => void;
  currentImage: string | null;
}

const ImageUploader = ({ onImageUpload, currentImage }: ImageUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          onImageUpload(result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const openFileSelector = () => {
    inputRef.current?.click();
  };

  const removeImage = () => {
    onImageUpload(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-4">
        Upload Custom Design
      </h3>

      <Input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />

      {currentImage ? (
        <div className="space-y-4">
          <div className="relative">
            <img
              src={currentImage}
              alt="Custom design"
              className="w-full h-40 object-contain bg-gray-100 dark:bg-gray-700 rounded-lg"
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={openFileSelector} variant="outline" className="flex-1">
              Change Image
            </Button>
            <Button onClick={removeImage} variant="destructive" className="flex-1">
              Remove
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            dragActive
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
              : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={openFileSelector}
        >
          <div className="space-y-4">
            <div className="text-4xl">📁</div>
            <div>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                Upload Your Design
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Drag & drop an image here or click to browse
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                Supports: PNG, JPG, JPEG, GIF
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
