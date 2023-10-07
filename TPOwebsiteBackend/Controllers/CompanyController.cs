using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TPOwebsite.Models;

namespace TPOwebsite.Controllers
{
	[Route("[controller]")]
	
	public class CompanyController : Controller
	{
		private readonly ICompanyRepository _companyRepository;
		public CompanyController(ICompanyRepository companyRepository)
		{
			_companyRepository = companyRepository;
		}

		[Authorize]
		[HttpGet]
		public async Task<List<Company>> GetAllCompany()
		{

			return await _companyRepository.GetAll();
		}

		// GET api/<EmployeeController>/5
		[Authorize]
		[HttpGet("{id}")]
		public async Task<IActionResult> GetCompany(int id)
		{
			var company = await _companyRepository.GetById(id);

			if (company == null)
			{
				return NotFound();
			}
			return Ok(company);
		}

		[Authorize]
		[HttpPost]
		public async Task<IActionResult> CreateCompany([FromBody] Company c)
		{
			var IsCreated = await _companyRepository.Create(c);

			return Ok(c);
			
		}

		[Authorize]
		[HttpPut("{id}")]
		public async Task<IActionResult> UpdateCompany(int id, [FromBody] Company c)
		{
			var IsUpdated = await _companyRepository.Update(id, c);

			if (IsUpdated == false)
			{
				return NotFound("Company Not found");
			}

			return Ok(c);
		}

		[Authorize]
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteCompany(int id)
		{
			var IsDeleted = await _companyRepository.Delete(id);
			if (IsDeleted == false)
			{
				return NotFound("Company not found");
			}

			return NoContent();
		}
	}
}
