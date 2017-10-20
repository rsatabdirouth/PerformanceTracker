using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pioneer.PerformanceTracker.Api.Models
{
    public class CommunicationInfo
    {
        [Key]
        public int CommunicationID { get; set; }
        [ForeignKey("buyer")]
        public int BuyerID { get; set; }
        [Required(ErrorMessage = "FirstDateOfInteraction is Required")]
        [DataType(DataType.DateTime)]
        public DateTime? FirstDateOfInteraction { get; set; }
       [Required(ErrorMessage ="please insert your name")]
        public string communicatedBy { get; set; }
        [Required(ErrorMessage ="Please Choose the medium of communication")]
        [ForeignKey("medium")]
        public int CommunicationVia { get; set; }
        [Required(ErrorMessage ="Please input Your valuable feedback")]
        [StringLength(100)]
        public string Feedback { get; set; }

        [Required(ErrorMessage ="is Interested or Not")]
        public bool Isintersted { get; set; }
        public string NextStep { get; set; }
        [ForeignKey("communicatedto")]
        public int TransferredTo { get; set; }
        public DateTime? NextFollowUpDate { get; set; }

        [ForeignKey("Status")]
        [Required(ErrorMessage ="Please insert the Sales status")]
        public int SalesStatus { get; set; }

        [Required(ErrorMessage ="Is the Buyer Converted Or Not")]
        public bool IsConverted { get; set; }

      //  public bool IsFollowupSubmitted { get; set; }
        //navigationProperty
        public virtual BuyerInfo buyer { get; set; }
        public virtual TransferredTo communicatedto { get; set; }
        public virtual CommunicationMedium medium { get; set; }
        public virtual SalesStatus Status { get; set; }
    }
}