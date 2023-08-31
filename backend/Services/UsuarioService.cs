using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace MarketPlace.Services
{
    public class UsuarioService
    {
        static byte[] GenerateRandomKey(int keySizeInBits)
        {
            using (var generator = new RNGCryptoServiceProvider())
            {
                byte[] key = new byte[keySizeInBits / 8];
                generator.GetBytes(key);
                return key;
            }
        }
        static public dynamic Auth(string correo, string clave)
        {
            int keySizeInBits = 256;
            byte[] key = GenerateRandomKey(keySizeInBits);
            dynamic data = null;
            // Autenticación simulada
            if (IsAuthenticated(correo, clave))
            {
                string token = GenerateJwtToken(correo, Convert.ToBase64String(key));
                Console.WriteLine("JWT Token: " + token);
                data = token;
            }
            else
            {
                Console.WriteLine("Authentication failed.");
                data = "Authentication failed.";
            }
            return data;
        }

        static bool IsAuthenticated(string email, string password)
        {
            // Aquí debes implementar tu lógica real de autenticación
            // Verifica el correo y la contraseña en tu base de datos, por ejemplo
            if (email == "xsiavichay@gmail.com" && password == "123456")
            {
                return true;
            } else
            {
                return false;
            }
        }

        static string GenerateJwtToken(string email, string secretKey)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secretKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Email, email)
                }),
                Expires = DateTime.UtcNow.AddHours(1), // Tiempo de expiración del token
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public class AuthRequest
        {
            public string correo { get; set; }
            public string clave { get; set; }
        }
    }
}
