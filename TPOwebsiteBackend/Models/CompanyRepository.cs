using Microsoft.EntityFrameworkCore;

namespace TPOwebsite.Models
{
	public class CompanyRepository : ICompanyRepository
	{
		private readonly AppDbContext _context;
		public CompanyRepository(AppDbContext context)
		{
			_context = context;	
		}

		public async Task<List<Company>> GetAll()
		{
			return await _context.Companies.ToListAsync();
		}

		public async Task<Company> GetById(int id)
		{
			return  await _context.Companies.FindAsync(id);

		}

		public async Task<bool> Create(Company c)
		{
			_context.Companies.Add(c);
			await _context.SaveChangesAsync();
			return true;
		}

		public async Task<bool> Update(int id,Company c)
		{
			var company = await _context.Companies.FindAsync(id);
			if (company == null)
			{
				return false;
			}
			company.name= c.name;
			company.company_Address = c.company_Address;
			company.num_Employee = c.num_Employee;
			company.start_Date= c.start_Date;
			company.description=c.description;

			await _context.SaveChangesAsync();
			return true;
		} 

		public async Task<bool> Delete(int id)
		{
			var company = await _context.Companies.FindAsync(id);

			if (company == null)
			{
				return false;
			}
			_context.Companies.Remove(company);
			await _context.SaveChangesAsync();
			return true;
		} 
		
	}
}
