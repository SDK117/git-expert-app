export const getGifs = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KGYQCiVK7ObhS64X8AUwAxv5zEjh0Iq5&q=${category}&limit=20`;

    const resp = await fetch(url);

    if (resp.status === 429) {
      throw new Error("Límite de peticiones excedido. Intenta más tarde.");
    }

    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    return gifs;
  } catch (error) {
    console.error("Error al obtener los GIFs:", error.message);
    return []; // Devuelve un array vacío si hay error
  }
};
