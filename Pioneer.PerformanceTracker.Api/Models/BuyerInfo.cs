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
        [ForeignKey("Product")]
        public int ProductLookingFor { get; set; }
        public string BuyerCompany { get; set; } = "";
        public string ContactPerson { get; set; } = "";
        [ForeignKey("BuyerDesignation")]
        public int ContactPersonDesignation { get; set; }
        public string ContactNumber { get; set; }
        public string AlternativeNumber { get; set; } = "";
        public string Email { get; set; } = "";
        public string Extension { get; set; } = "";
        public string SourceWebLink { get; set; } = "";
        [ForeignKey("Website")]
        public int BuyerWebsiteName { get; set; }
        [ForeignKey("Source")]
        public int BuyerSource { get; set; }
        [ForeignKey("Status")]
        public int BuyerStatus { get; set; }
        [ForeignKey("Priority")]
        public int BuyerPriority { get; set; }




        //navigation
        public virtual Product Product { get; set; }
        public virtual BuyerDesignation BuyerDesignation { get; set; }
        public virtual Website Website { get; set; }
        public virtual BuyerStatus Status { get; set; }
        public virtual BuyerSource Source { get; set; }
        public virtual BuyerPriority Priority { get; set; }
    }
}