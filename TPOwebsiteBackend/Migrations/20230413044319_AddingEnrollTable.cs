using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TPOwebsite.Migrations
{
    public partial class AddingEnrollTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Enrolls",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    compId = table.Column<int>(type: "int", nullable: false),
                    compName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    studentName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cgpa = table.Column<float>(type: "real", nullable: false),
                    backlog = table.Column<int>(type: "int", nullable: false),
                    percentage = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Enrolls", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Enrolls");
        }
    }
}
