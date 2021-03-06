﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Pioneer.PerformanceTracker.Api.Models
{
    public class BuyerPriority
    {
        [Key]
        public int ID { get; set; }
        [Required(ErrorMessage = "Insert the level")]
        public string Level { get; set; }
    }
}