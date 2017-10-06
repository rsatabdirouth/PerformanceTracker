using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Pioneer.PerformanceTracker.Api.Models
{
    public class BuyerSource
    {
        [Key]
        public int ID { get; set; }
        public string Source { get; set; }
    }
}