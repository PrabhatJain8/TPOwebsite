using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TPOwebsite.Migrations
{
    public partial class UpdateCompanyColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "backlog_Allowed",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "location",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "min_CGPA",
                table: "Companies");

            migrationBuilder.RenameColumn(
                name: "package",
                table: "Companies",
                newName: "start_Date");

            migrationBuilder.RenameColumn(
                name: "mode",
                table: "Companies",
                newName: "num_Employee");

            migrationBuilder.RenameColumn(
                name: "min_Percentage",
                table: "Companies",
                newName: "company_Address");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "start_Date",
                table: "Companies",
                newName: "package");

            migrationBuilder.RenameColumn(
                name: "num_Employee",
                table: "Companies",
                newName: "mode");

            migrationBuilder.RenameColumn(
                name: "company_Address",
                table: "Companies",
                newName: "min_Percentage");

            migrationBuilder.AddColumn<string>(
                name: "backlog_Allowed",
                table: "Companies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "location",
                table: "Companies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "min_CGPA",
                table: "Companies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
