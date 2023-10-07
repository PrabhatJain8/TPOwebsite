namespace TPOwebsite.Models
{
	public class ChangePassword
	{
		public string email { get; set; }
		public string oldPass { get; set; }
		public string newPass { get; set; }
		public string cnewPass { get; set; }
		public bool isForgot { get; set; }
	}
}
