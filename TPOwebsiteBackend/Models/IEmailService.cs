namespace TPOwebsite.Models
{
	public interface IEmailService
	{
		Task SendEmailAsync(EmailInfo emailInfo);
	}
}
