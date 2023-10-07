namespace TPOwebsite.Models
{
	public interface ICompanyRepository
	{
		Task<List<Company>> GetAll();
		Task<Company> GetById(int id);
		Task<bool> Create(Company company);
		Task<bool> Update(int id, Company company);
		Task<bool> Delete(int id);
	}
}
