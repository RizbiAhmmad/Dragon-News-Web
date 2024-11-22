import React from "react";
import { FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    author,
    rating,
    total_view,
    details,
  } = news;

  return (
    <div className="card mb-4 bg-base-100 shadow-md border rounded-lg overflow-hidden w-[518px] mx-auto">
      {/* Author Section */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">{author?.published_date}</p>
          </div>
        </div>
        <FiShare2 className="text-gray-500 cursor-pointer" size={20} />
      </div>

      {/* Thumbnail Image */}
      <div className="h-[400px] w-full">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h1 className="font-semibold text-lg mb-2">{title}</h1>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {details.length > 120 ? `${details.slice(0, 120)}...` : details}
          <span className="text-primary font-medium cursor-pointer"> Read More</span>
        </p>

        {/* Footer Section */}
        <div className="flex justify-between items-center">
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-sm font-medium">{rating?.number}</span>
          </div>

          {/* Total Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FiEye />
            <span className="text-sm font-medium">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
