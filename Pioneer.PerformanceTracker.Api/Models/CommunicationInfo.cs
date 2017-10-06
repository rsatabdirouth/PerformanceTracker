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
        public DateTime? FirstDateOfInteraction { get; set; }
        public string communicatedBy { get; set; }
        [ForeignKey("medium")]
        public int CommunicationVia { get; set; }
        public string Feedback { get; set; }
        public bool Isintersted { get; set; }
        public string NextStep { get; set; }
        [ForeignKey("communicatedto")]
        public int TransferredTo { get; set; }
        public DateTime? NextFollowUpDate { get; set; }
        public bool IsConverted { get; set; }


        //navigationProperty
        public virtual BuyerInfo buyer { get; set; }
        public virtual TransferredTo communicatedto { get; set; }
        public virtual CommunicationMedium medium { get; set; }
    }
}