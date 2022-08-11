import React from "react";
import { Link } from "gatsby";
import { slugify } from "../utils/urls";

const Categories = ({ categories }) => {

  return (
    <div className="my-4">
      <h3>Categorie</h3>
      <div className="divide-x-2 border-neutral-800 -ml-2">
        {categories.map((category) => (
          <Link
            to={`/categoria/${slugify(category)}`}
            className="px-2 font-bold hover:underline"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
