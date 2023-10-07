using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;

namespace TPOwebsite.Models
{
	public class EmailService : IEmailService
	{
		private readonly EmailSettings _mailSettings;
		public EmailService(IOptions<EmailSettings> mailSettings)
		{
			_mailSettings = mailSettings.Value;
		}
		
		public async Task SendEmailAsync(EmailInfo emailInfo)
		{
			var email = new MimeMessage();
			email.Sender = MailboxAddress.Parse(_mailSettings.EMail);
			email.To.Add(MailboxAddress.Parse(emailInfo.EmailTo));
			email.Subject = emailInfo.Subject;
			var builder = new BodyBuilder();
			builder.HtmlBody = emailInfo.Body;
			email.Body = builder.ToMessageBody();
			using var smtp = new SmtpClient();
			smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
			smtp.Authenticate(_mailSettings.EMail, _mailSettings.Password);
			await smtp.SendAsync(email);
			smtp.Disconnect(true);
		}


	}
}
