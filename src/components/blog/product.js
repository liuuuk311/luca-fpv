import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const Product = ({ link, imageUrl, description, category, title, price, callToAction }) => {
  return (
    <div class="w-full my-4">
      <div class="bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
        {category && (
          <div class="">
            <span class="bg-sky-100 text-sky-800 text-md font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              {category}
            </span>
          </div>
        )}
        <div class="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <OutboundLink href={link} target="_blank">
              <img
                class="rounded-lg p-8"
                src={imageUrl}
                alt={title}
              />
            </OutboundLink>
          </div>
          <div class="px-5 pb-5 md:w-2/3">
            <OutboundLink href={link} target="_blank">
              <h3 class="text-gray-900 font-semibold text-2xl tracking-tight">
                {title}
              </h3>
            </OutboundLink>
            <div class="text-md md:text-sm my-2">
              {description}
            </div>
            <div class="flex items-center justify-between mt-3">
              <span class="text-3xl font-bold text-gray-900">
                {price}
              </span>
              <OutboundLink
                href={link}
                target="_blank"
                class="text-white bg-sky-600 uppercase hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 font-semibold rounded-lg text-sm p-3 text-center"
                style={{ color: "white" }}
              >
                {callToAction}
              </OutboundLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
