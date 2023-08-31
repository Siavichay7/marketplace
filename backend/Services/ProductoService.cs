using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace MarketPlace.Services
{

    public class ProductoService
    {
        private const string connectionString = "Data Source=SIAVICHAY7\\SQLEXPRESS;Initial Catalog=marketplace;Integrated Security=true;";
        static public List<dynamic> ObtenerProductos()
        {
            List<dynamic> productos = new List<dynamic>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                try
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand("SP_Producto", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@Tipo", "Consulta");

                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                Producto producto = new Producto
                                {
                                    idProducto = (int)reader["IdProducto"],
                                    descripcion = reader["Descripcion"].ToString(),
                                    precio = (decimal)reader["Precio"], // Asegúrate de convertirlo al tipo correcto
                                    detalle = reader["Detalle"].ToString(),
                                    imagen = reader["Imagen"].ToString()
                                };

                                productos.Add(producto);
                            }
                        } // El lector se cerrará automáticamente aquí
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
            } // La conexión se cerrará automáticamente aquí
            return productos;
        }

        static public Producto ObtenerProducto(int id)
        {
            Producto producto = null; // Inicializa como null para el caso de no encontrar el producto
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                try
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand("SP_Producto", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@Tipo", "Consulta");
                        command.Parameters.AddWithValue("@IdProducto", id);

                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            if (reader.Read()) // Verifica si hay un producto en el lector
                            {
                                producto = new Producto
                                {
                                    idProducto = (int)reader["IdProducto"],
                                    descripcion = reader["Descripcion"].ToString(),
                                    precio = (decimal)reader["Precio"], // Asegúrate de convertirlo al tipo correcto
                                    detalle = reader["Detalle"].ToString(),
                                    imagen = reader["Imagen"].ToString()
                                };
                            }
                        } // El lector se cerrará automáticamente aquí
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
            } // La conexión se cerrará automáticamente aquí
            return producto;
        }

        public class Producto
        {
            public int idProducto { get; set; }
            public string descripcion { get; set; }
            public dynamic precio { get; set; }
            public string detalle { get; set; }
            public string imagen { get; set; }

            // ... Agrega más propiedades según la estructura de tu tabla
        }
    }
}
