import axios from "axios";

export const auth = async (data: any) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // Esto permite cualquier origen, pero en producción deberías limitarlo
  };
  try {
    const response = await axios.post(
      `http://localhost:5056/api/Usuario/auth`,
      data,
      {
        headers: headers,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al hacer auth");
  }
};
