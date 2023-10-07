namespace TPOwebsite.Models
{
	public interface IUpcomingRepository
	{

		Task<List<Upcoming>> GetAll();
		Task<Upcoming> GetById(int id);
		Task<bool> Create(Upcoming company);
		Task<bool> Update(int id, Upcoming company);
		Task<bool> Delete(int id);
		Task<JobDesc> GetDescById(int id);

		Task<bool> CreateEnroll(Enroll enroll);

		Task<List<Enroll>> GetAllEnrolls(string email);

		Task<List<Enroll>> GetAllEnrollsAdmin(int id);
		bool Check(Enroll enroll);
	}
}
