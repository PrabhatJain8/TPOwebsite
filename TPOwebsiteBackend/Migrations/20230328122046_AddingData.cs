using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TPOwebsite.Migrations
{
    public partial class AddingData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    package = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    mode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    min_CGPA = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    min_Percentage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    backlog_Allowed = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Companies");
        }
    }
}
