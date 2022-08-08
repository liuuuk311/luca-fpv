import React from "react";
import { Link } from "gatsby";
import { slugify } from "../utils/urls";

const Tags = ({ tags }) => {
  return (
      <div className="my-2 divide-x-2 border-neutral-800 -ml-2">
        {tags && tags.map((tag) => (
          <Link
            to={`/${slugify(tag)}`}
            className="px-2 font-bold uppercase hover:underline text-[#4A9AC5]"
          >
            #{tag}
          </Link>
        ))}
      </div>
  );
};

export default Tags;
