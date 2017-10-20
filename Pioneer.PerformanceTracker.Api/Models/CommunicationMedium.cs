using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Pioneer.PerformanceTracker.Api.Models
{
    public class CommunicationMedium
    {
        [Key]
        public int ID { get; set; }
        [Required(ErrorMessage ="Insert the medium")]
        public string Medium { get; set; }
    }
}