using Microsoft.EntityFrameworkCore;
using System.Globalization;
using System;

namespace TPOwebsite.Models
{
	public class UpcomingRepository : IUpcomingRepository
	{

		private readonly AppDbContext _context;
		public UpcomingRepository(AppDbContext context)
		{
			_context = context;
		}

		public async Task<List<Upcoming>> GetAll()
		{
			string date2 = DateTime.Now.ToString("yyyy-MM-dd");
			//bool ok = ;
			var list =  _context.Upcomings.AsEnumerable().Where(x => DateTime.Parse(date2, CultureInfo.InvariantCulture) > DateTime.Parse(x.endDate, CultureInfo.InvariantCulture)).ToList();
			foreach(var upcoming in list)
			{
				upcoming.isActive = false;
				_context.Upcomings.Update(upcoming);
			}
			await _context.SaveChangesAsync();
			return await _context.Upcomings.ToListAsync();
		}

		public async Task<Upcoming> GetById(int id)
		{
			return await _context.Upcomings.FindAsync(id);


		}

		public async Task<JobDesc> GetDescById(int id)
		{
			return await _context.jobDescs.FindAsync(id);
		}

		public async Task<bool> Create(Upcoming company)
		{
			_context.Upcomings.Add(company);
			_context.jobDescs.Add(company.jobDesc);
			await _context.SaveChangesAsync();
			return true;
		}

		public async Task<bool> Update(int id, Upcoming company)
		{
			var com = await _context.Upcomings.FindAsync(id);
			if (com == null)
			{
				return false;
			}
			company.companyName = com.companyName;
			company.startDate = com.startDate;
			company.endDate = com.endDate;
			company.jobDesc = com.jobDesc;
			company.eligibility = com.eligibility;
			company.isDeleted = com.isDeleted;

			await _context.SaveChangesAsync();
			return true;

		}

		public async Task<bool> Delete(int id)
		{
			var company = await _context.Upcomings.FindAsync(id);

			if (company == null)
			{
				return false;
			}
			company.isDeleted = true;
			await _context.SaveChangesAsync();
			return true;

		}

		public bool Check(Enroll enroll)
		{
			var isAny = _context.Enrolls.FirstOrDefault(user => user.email == enroll.email && user.compId == enroll.compId);

			if (isAny == null)
			{
				return false;
			}
			return true;
		}

		public async Task<bool> CreateEnroll(Enroll enroll)
		{
			await _context.Enrolls.AddAsync(enroll);
			
			await _context.SaveChangesAsync();
			return true;
		}

		public async Task<List<Enroll>> GetAllEnrolls(string email)
		{
			
			
			return await _context.Enrolls.Where(x=>x.email== email).ToListAsync();
		}

		public async Task<List<Enroll>> GetAllEnrollsAdmin(int id)
		{

			return await _context.Enrolls.Where(x => x.compId == id).ToListAsync();
		}



	}
}
