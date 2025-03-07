import React, { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFechGifs } from "../hook/useFechGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFechGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando .....</h2>}
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GifItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};
