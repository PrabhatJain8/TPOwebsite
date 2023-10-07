using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TPOwebsite.Models;

namespace TPOwebsite.Controllers
{
	[Route("[controller]")]
	public class CommentController : Controller
	{
		private readonly AppDbContext _context;

		public CommentController(AppDbContext context)
		{
			_context= context;
		}

		//[Authorize]

		[HttpGet("{companyName}")]
		public async Task<List<CompanyComment>> GetAll(string companyName)
		{
			var company = companyName.ToLower();
			return await _context.CompanyComments.Where(x => x.companyName==company).ToListAsync();
		}

		//[Authorize]
		[HttpPost]
		public async Task<IActionResult> AddComment([FromBody] CompanyComment comment)
		{
			comment.companyName = comment.companyName.ToLower();
			await _context.CompanyComments.AddAsync(comment);
			await _context.SaveChangesAsync();
			return Ok(comment);

		}

	}
}
