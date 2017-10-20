using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Pioneer.PerformanceTracker.Api.Models
{
    public class Product
    {
        [Key]
        public int ID { get; set; }
       [Required(ErrorMessage ="Please insert the product name")] public string ProductName { get; set; }
    }
}