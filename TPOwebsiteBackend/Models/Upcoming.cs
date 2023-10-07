namespace TPOwebsite.Models
{
	public class Upcoming
	{
		public int id { get; set; }
		public string companyName { get; set; }
		public string startDate { get; set; }
		public string endDate { get; set; }
		public JobDesc jobDesc { get; set; }
		public string eligibility { get; set; }
		public bool isDeleted { get; set; }

		public bool isActive { get; set; }
	}
}
