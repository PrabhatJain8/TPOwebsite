using MailKit;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TPOwebsite.Models;

namespace TPOwebsite.Controllers
{
	[ApiController]
	public class LoginRegisterController : Controller
    {
        private readonly AppDbContext _context;
		private readonly UserManager<IdentityUser> _userManager;
		private readonly IConfiguration _configuration;
		private readonly IEmailService _mailService;
		public LoginRegisterController( AppDbContext context, UserManager<IdentityUser> userManager,
			IConfiguration configuration,IEmailService mailService)
        {
            _context= context;
            _userManager= userManager;
            _configuration= configuration;
            _mailService= mailService;
        }
        [Route("Login")]
        [HttpPost]
		public async Task<IActionResult> StudentLogin([FromBody]Login login)
        {
            var emailExist = _context.Logins.FirstOrDefault(user => user.email == login.email);
            var user = _context.Logins.FirstOrDefault(user=> user.email==login.email && user.password==login.password);
			
			if (user == null  )
            {
                if (emailExist != null)
                {
                    return NotFound("Entered Password is Wrong!");
                }
                return NotFound("User Not Found!");
            }

			if (user!=null )
			{
				var register = _context.Registers.FirstOrDefault(user => user.college_email == login.email);
                var userName = register==null ?"":register.name;
                var Email=user.email;
                if (user.role == "admin")
                {
                    userName = "ADMIN";
                    Email = "";
                }

				
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("MY@#123superSecretKey@345"));
				var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                
                var tokeOptions = new JwtSecurityToken(
                    issuer: "https://localhost:4200",
                    audience: "https://localhost:7277",
                    claims: new Claim[]
                    {
                        new Claim("Role",user.role),
                        new Claim("UserName",userName),
                        new Claim("UserEmail",Email)
                        
                    },
                    expires: DateTime.Now.AddMinutes(120),
                    signingCredentials: signinCredentials
                   

                ) ;
				var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
				return Ok(new  { Token = tokenString });
			}
            return Unauthorized();
		}

        //[HttpGet("{Email}")]
        //public IActionResult GetRole(string Email)
        //{
        //    var student = _context.Logins.FirstOrDefault(user=>user.email==Email);
        //    if (student == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(student);
        //}
           
        [Route("Register")]
        [HttpPost]
        public async Task<IActionResult> StudentRegister([FromBody]Register register)
        {


			
			var stud = _context.Registers.FirstOrDefault(user=>user.college_email==register.college_email);
            if (stud != null)
            {
                return NotFound("Email is already present!");
            }

            var userName = register.name;
           
            var userFind = await _userManager.FindByNameAsync(userName);
            if (userFind != null)
            {
                return BadRequest("User with this username already exist");       
            }
			IdentityUser RegisterUser = new()
			{
				Email = register.college_email,
				SecurityStamp = Guid.NewGuid().ToString(),
				UserName = userName,

			};
			var result = await _userManager.CreateAsync(RegisterUser, register.password);
			if (!result.Succeeded)
			{
				return NotFound("Something Wrong Happend Try Again!");
			}

			_context.Registers.Add(register);
            _context.SaveChanges();

            var login = new Login
            {
                email = register.college_email,
                password = register.password,
                role="student"
                
            };
            _context.Logins.Add(login);
            _context.SaveChanges();

            var student = new Student
            {
                name = register.name,
                reg_no= register.reg_no,
                college_email=register.college_email,
            };
            _context.Students.Add(student);
            _context.SaveChanges();
            return Ok(register);
        }

        [Route("AlreadyExist")]
        [HttpPost]
        public IActionResult Checking([FromBody] Register r)
        {
            var user1 = _context.Registers.FirstOrDefault(u=>u.name== r.name);
            var user2 = _context.Registers.FirstOrDefault(u=>u.college_email==r.college_email);
            if(user1==null && user2 == null)
            {
                return Ok();
            }
            else if (user1 != null)
            {
                return BadRequest("Username already exist");
            }
            else
            {
                return BadRequest("Email already exist");
            }
        }

        [Route("ChangePassword")]
        [HttpPost]
        public async Task<IActionResult> ChangePass([FromBody] ChangePassword change)
        {
            if (!change.isForgot)
            {
                var myuser = _context.Logins.FirstOrDefault(user => user.email == change.email && user.password == change.oldPass);
                if (myuser == null)
                {
                    return BadRequest("Entered Old Password dont match");
                }
            }
            var user = _context.Logins.FirstOrDefault(u => u.email == change.email);
            user.password = change.newPass;

            await _context.SaveChangesAsync();

			var Identityuser = await _userManager.FindByEmailAsync(user.email);

			var token = await _userManager.GeneratePasswordResetTokenAsync(Identityuser);

			var result = await _userManager.ResetPasswordAsync(Identityuser, token, change.newPass);
			if (!result.Succeeded)
			{
				return BadRequest("Something went wrong");
			}
            return Ok(user);

		}


		[HttpPost("sendEmail")]
		public async Task<IActionResult> SendMail([FromBody] EmailInfo emailInfo)
		{
            try
            {
                if (emailInfo.Subject == "ForgotPassword")
                {
                    var findUser = _context.Logins.FirstOrDefault(user => user.email == emailInfo.EmailTo);
                    if (findUser == null)
                    {
                        return BadRequest("Entered Email id is not registered");
                    }
                }
				Random generator = new Random();
				string r = generator.Next(0, 1000000).ToString("D6");
                Globals.code = r;
				emailInfo.Subject = $"Verify Email [{r}]" ;
                emailInfo.Body = $"Your 6 digit verification code is <b>{r}</b> <br> Please don't share this code with anyone. ";
				await _mailService.SendEmailAsync(emailInfo);
				return Ok();
			}
			catch (Exception ex)
			{
                throw;
			}
		}


        [HttpGet("verify/{userCode}")]
        public IActionResult Verify(String userCode)
        {
            if (userCode == Globals.code)
            {
                return Ok();
            }
            return BadRequest("Code doesn't matched");
        }




	}
}
