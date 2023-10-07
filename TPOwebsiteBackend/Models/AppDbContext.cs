using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace TPOwebsite.Models
{
	public class AppDbContext : IdentityDbContext<IdentityUser>
	{
		public AppDbContext(DbContextOptions options): base(options)
		{

		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);
		}

		public DbSet<Company> Companies { get; set; }
		public DbSet<Login> Logins { get; set; }
		public DbSet<Register> Registers { get; set; }
		public DbSet<Student> Students { get; set; }
		
		public DbSet<Upcoming> Upcomings { get; set; }
		public DbSet<JobDesc> jobDescs { get; set; }

		public DbSet<CompanyComment> CompanyComments { get; set; }

		public DbSet<Enroll> Enrolls { get; set; }

		
	}
}
