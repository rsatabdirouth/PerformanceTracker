using Pioneer.PerformanceTracker.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pioneer.PerformanceTracker.Api.ViewModels
{
    public class SalesData
    {
        public ICollection<BuyerInfo> BuyerInfo { get; set; }
        public ICollection<BuyerDesignation> Designation { get; set; }
        public ICollection<BuyerPriority> Priority { get; set; }
        public ICollection<BuyerSource> Source { get; set; }
        public ICollection<BuyerStatus> Status { get; set; }
        public ICollection<CommunicationInfo> communicationChain { get; set; }
        public ICollection<CommunicationMedium> CommunicationMedium { get; set; }
        public ICollection<Product> product { get; set; }
        public ICollection<TransferredTo> TransferredTo { get; set; }
        public ICollection<Website> web { get; set; }
    }
}