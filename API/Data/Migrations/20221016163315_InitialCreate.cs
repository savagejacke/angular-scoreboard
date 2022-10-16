using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NinthResults",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Player1Name = table.Column<string>(type: "TEXT", nullable: false),
                    Player1Army = table.Column<string>(type: "TEXT", nullable: false),
                    Player1Score = table.Column<int>(type: "INTEGER", nullable: false),
                    Player2Name = table.Column<string>(type: "TEXT", nullable: false),
                    Player2Army = table.Column<string>(type: "TEXT", nullable: false),
                    Player2Score = table.Column<int>(type: "INTEGER", nullable: false),
                    NumberOfRounds = table.Column<int>(type: "INTEGER", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NinthResults", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NinthResults");
        }
    }
}
