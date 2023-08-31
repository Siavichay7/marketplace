import axios from "axios";

export const getProductos = async () => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // Esto permite cualquier origen, pero en producción deberías limitarlo
  };
  try {
    const response = await axios.get(`http://localhost:5056/api/Producto`, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los productos");
  }
};

export const getProductoById = async (id: number) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // Esto permite cualquier origen, pero en producción deberías limitarlo
  };
  try {
    const response = await axios.get(
      `http://localhost:5056/api/Producto/${id}`,
      {
        headers: headers,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los productos");
  }
};
