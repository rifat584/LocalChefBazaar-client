import React from "react";
import { useState } from "react";

const MyReviewForm = ({ review }) => {
  console.log(review);
  const {foodName, rating, comment, date}= review;

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{foodName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{rating}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{comment}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">
{date.split("T")[0]}
        </p>
      </td>
{/* update */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Update</span>
        </span>
      </td>
      {/* DELETE REVIEW */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          // onClick={() => mutate(_id)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Delete</span>
        </span>
      </td>
    </tr>
  );
};

export default MyReviewForm;
