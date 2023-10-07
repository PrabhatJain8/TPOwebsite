using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TPOwebsite.Models;

namespace TPOwebsite.Controllers
{
	[Route("[controller]")]
	public class UpcomingController : Controller
	{
		private readonly IUpcomingRepository _repository;

		public UpcomingController(IUpcomingRepository repository)
		{
			_repository = repository;
		}

		[Authorize]
		[HttpGet] 
		public async Task<List<Upcoming>> GetAllUpcomings() 
		{
			
			return await _repository.GetAll();
		}

		[Authorize]
		[HttpGet("{id}")]
		public async Task<IActionResult> GetUpcoming(int id)
		{
			var company = await _repository.GetById(id);
			if (company == null)
			{
				return NotFound();
			}
			return Ok(company);
		}

		[Authorize]
		[HttpGet("Description/{id}")]
		public async Task<IActionResult> GetDescription(int id)
		{
			var description  =await _repository.GetDescById(id);
			if (description == null)
			{
				return NotFound();
			}
			return Ok(description);
		}

		[Authorize]
		[HttpGet("Enrolled/{email}")]
		public async Task<List<Enroll>>GetEnrolledList(string email)
		{
			return await _repository.GetAllEnrolls(email);
		}

		[Authorize]
		[HttpGet("EnrolledAdmin/{id}")]
		public async Task<List<Enroll>>GetEnrolledAdmin(int id)
		{
			return await _repository.GetAllEnrollsAdmin(id);
		}

		[HttpPost("CheckEnroll")]
		public bool CheckAlreadyEnroll([FromBody] Enroll enroll)
		{
			return _repository.Check(enroll);
		}

		[Authorize]
		[HttpPost("Enroll")]
		public async Task<IActionResult> CreateEnrolled([FromBody] Enroll enroll)
		{
			await _repository.CreateEnroll(enroll);
			return Ok(enroll);

		}

		[Authorize]
		[HttpPost]
		public async Task<IActionResult> CreateUpcoming([FromBody] Upcoming company)
		{
			await _repository.Create(company);
			return Ok(company);
		}

		//[HttpPut("{id}")]
		//public async Task<IActionResult> UpdateUpcoming(int id, [FromBody] Upcoming company)
		//{
		//	var IsUpdated = await _repository.Update(id,company);

		//	if(IsUpdated == false)
		//	{
		//		return NotFound();
		//	}
		//	return Ok(company);
		//}

		[Authorize]
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteUpcomig(int id)
		{
			var IsDeleted = await _repository.Delete(id);
			if (IsDeleted == false)
			{
				return BadRequest();
			}
			return NoContent();
			 
		}
		
	}
}
