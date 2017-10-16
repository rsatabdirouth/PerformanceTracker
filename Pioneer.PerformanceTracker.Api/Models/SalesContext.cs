using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using Pioneer.PerformanceTracker.Api.Models;


namespace Pioneer.PerformanceTracker.Api.Models
{
    public class SalesContext:DbContext
    {
        public SalesContext() : base("name=DbConnectionString")
        {

        }
        public DbSet<BuyerDesignation> BuyerDesignations { get; set; }
        public DbSet<BuyerInfo> BuyerInfos { get; set; }
        public DbSet<BuyerPriority> BuyerPriorities { get; set; }
        public DbSet<BuyerSource> BuyerSources { get; set; }
        

        public DbSet<SalesStatus> SalesStatus { get; set; }
        public DbSet<CommunicationInfo> CommunicationInfos { get; set; }
        public DbSet<CommunicationMedium> CommunicationMediums { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<TransferredTo> TransferredTo { get; set; }
        public DbSet<Website> Websites { get; set; }

    }




}