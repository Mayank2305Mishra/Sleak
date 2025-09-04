"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Upload } from "lucide-react";

export default function FileInputBlock() {
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="w-full sm:w-1/4">
      <Label htmlFor="file-upload" className="sr-only">
        Upload Files
      </Label>

      <div className="relative">
        <Input
          id="file-upload"
          type="file"
          multiple
          onChange={handleChange}
          className="hidden"
        />

        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center gap-2 bg-black/80 text-gray-200 
                     rounded-2xl border border-gray-700 p-6 cursor-pointer 
                     hover:bg-gray-950 hover:border-gray-500 transition-all duration-300 shadow-lg"
        >
          <Upload className="w-8 h-8 text-gray-300" />
          <span className="font-medium text-sm">Click to upload files</span>
          <span className="text-xs text-gray-400">Supports multiple files</span>
        </label>
      </div>
      {/* File Preview */}
      {files.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {files.map((file, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-gray-800 text-gray-200 
                         px-3 py-1.5 rounded-full text-sm shadow-sm border border-gray-700
                         hover:bg-gray-700 transition-colors max-w-full"
            >
              <FileText className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span className="truncate max-w-[150px]">{file.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
