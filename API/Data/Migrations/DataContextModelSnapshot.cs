// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.4");

            modelBuilder.Entity("API.Models.NinthResult", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("NumberOfRounds")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Player1Army")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Player1Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Player1Score")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Player2Army")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Player2Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Player2Score")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("NinthResults", (string)null);
                });
#pragma warning restore 612, 618
        }
    }
}
