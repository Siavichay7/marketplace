using MarketPlace.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace MarketPlace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        [HttpGet(Name = "productos")]
        public List<dynamic> ListaProductos()
        {
            try
            {
                return ProductoService.ObtenerProductos();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("{id}")]
        public dynamic ObtenerProducto(int id)
        {
            try
            {
                return ProductoService.ObtenerProducto(id);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
