import React from "react";
import { Link } from "gatsby";
import { slugify } from "../utils/urls";

const Tags = ({ tags }) => {
  return (
      <div className="divide-x-2 border-neutral-800 -ml-2 h-10">
        {tags && tags.map((tag) => (
          <Link
            to={`/tag/${slugify(tag)}`}
            className="px-2 font-bold uppercase hover:underline text-[#eda550] inline-block text-sm"
          >
            &#35;{tag}
          </Link>
        ))}
      </div>
  );
};

export default Tags;
