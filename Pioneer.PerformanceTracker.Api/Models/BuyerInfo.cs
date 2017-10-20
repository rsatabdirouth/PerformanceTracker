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

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime Date { get; set; }

        [Required(ErrorMessage ="Please Select the required Product")]
        [ForeignKey("Product")]
        public int ProductLookingFor { get; set; }

       [Required(ErrorMessage ="Buyer Company is required")]
        public string BuyerCompany { get; set; } 
        public string ContactPerson { get; set; } 
        [ForeignKey("BuyerDesignation")]
        public int ContactPersonDesignation { get; set; }
        [Required(ErrorMessage ="Please insert a valid Phone Number")]
        [StringLength(11)]
        public string ContactNumber { get; set; }
       [StringLength(11)]
        public string AlternativeNumber { get; set; } = "";

        [Required(ErrorMessage = "Please enter your email address")]
        [DataType(DataType.EmailAddress)]
        [MaxLength(50)]
        [RegularExpression(@"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}", ErrorMessage = "Please enter correct email")]
        public string Email { get; set; }

        [Required(ErrorMessage ="Required Extn")]
        public string Extension { get; set; } 

        [Required(ErrorMessage = "SourceWebLink is required")]
        public string SourceWebLink { get; set; } 

        [Required(ErrorMessage ="Please Select the website ")]
        [ForeignKey("Website")]
        public int BuyerWebsiteName { get; set; }

        [ForeignKey("Source")]
        [Required(ErrorMessage ="PLease Select the source")]
        public int BuyerSource { get; set; }
        
       [Required (ErrorMessage ="Please Specify the buyer is interested or not")]
        public bool IsBuyerInterested { get; set; }

        [Required(ErrorMessage ="Please Select the buyer Priority")]
        [ForeignKey("Priority")]
        public int BuyerPriority { get; set; }

       // public bool IsBuyerSubmitted { get; set; }


        //navigation
        public virtual Product Product { get; set; }
        public virtual BuyerDesignation BuyerDesignation { get; set; }
        public virtual Website Website { get; set; }
       
        public virtual BuyerSource Source { get; set; }
        public virtual BuyerPriority Priority { get; set; }
    }
}