using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Pioneer.PerformanceTracker.Api.Models
{
    public class TransferredTo
    {
        [Key]
        public int ID { get; set; }
      [Required(ErrorMessage ="Please insert FollowUplevel")]
        public string FollowupBy { get; set; }
    }
}