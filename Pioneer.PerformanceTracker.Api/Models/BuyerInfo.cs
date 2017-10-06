using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pioneer.PerformanceTracker.Api.Models
{
    public class BuyerInfo
    {

        [Key]
        public int BuyerId { get; set; }
        public DateTime Date { get; set; }
        [ForeignKey("product")]
        public int ProductLookingFor { get; set; }
        public string BuyerCompany { get; set; } = "";
        public string ContactPerson { get; set; } = "";
        [ForeignKey("designation")]
        public int ContactPersonDesignation { get; set; }
        public string ContactNumber { get; set; }
        public string AlternativeNumber { get; set; } = "";
        public string Email { get; set; } = "";
        public string Extension { get; set; } = "";
        public string SourceWebLink { get; set; } = "";
        [ForeignKey("website")]
        public int BuyerWebsiteName { get; set; }
        [ForeignKey("source")]
        public int BuyerSource { get; set; }
        [ForeignKey("Status")]
        public int BuyerStatus { get; set; }
        [ForeignKey("priority")]
        public int BuyerPriority { get; set; }




        //navigation
        public virtual Product product { get; set; }
        public virtual BuyerDesignation designation { get; set; }
        public virtual Website website { get; set; }
        public virtual BuyerStatus Status { get; set; }
        public virtual BuyerSource source { get; set; }
        public virtual BuyerPriority priority { get; set; }
    }
}