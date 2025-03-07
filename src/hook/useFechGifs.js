import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFechGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setisLoading(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getImages();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [category]);
  return {
    images: images,
    isLoading
  };
};
