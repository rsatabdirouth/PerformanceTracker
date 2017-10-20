using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Pioneer.PerformanceTracker.Api.Models
{
    public class Website
    {
        [Key]
        public int ID { get; set; }
       [Required(ErrorMessage ="Please insert the websiteName")]
        public string WebsiteName { get; set; }
    }
}