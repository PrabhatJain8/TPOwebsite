using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TPOwebsite.Migrations
{
    public partial class PleaseAddTablesmore : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "jobDescs",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    package = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    role = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    selectionProcess = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    skillsReq = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    moreDetails = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_jobDescs", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Upcomings",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    companyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    startDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    endDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    jobDescid = table.Column<int>(type: "int", nullable: false),
                    eligibility = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    isDeleted = table.Column<bool>(type: "bit", nullable: false),
                    isActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Upcomings", x => x.id);
                    table.ForeignKey(
                        name: "FK_Upcomings_jobDescs_jobDescid",
                        column: x => x.jobDescid,
                        principalTable: "jobDescs",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Upcomings_jobDescid",
                table: "Upcomings",
                column: "jobDescid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Upcomings");

            migrationBuilder.DropTable(
                name: "jobDescs");
        }
    }
}
