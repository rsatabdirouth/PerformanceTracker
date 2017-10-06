using Pioneer.PerformanceTracker.Api.Models;
using Pioneer.PerformanceTracker.Api.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Pioneer.PerformanceTracker.Api.Controllers
{
    [EnableCors("*","*","*")]
    public class BuyersController : ApiController
    {

       
    [HttpGet]
        public IHttpActionResult GetBuyers()
        {
            try
            {
                
                SalesContext _db = new SalesContext();
                var product = _db.Products.ToList();
                var website = _db.Websites.ToList();
                var Buyer = _db.BuyerInfos.ToList();
                var buyerdesignation = _db.BuyerDesignations.ToList();
                var status = _db.BuyerStatus.ToList();
                var source = _db.BuyerSources.ToList();
                var Communicationmedium = _db.CommunicationMediums.ToList();
                var communicationinformation = _db.CommunicationInfos.ToList();
                var TransferTo = _db.TransferredTo.ToList();
                var Priority = _db.BuyerPriorities.ToList();
                var SalesData = new SalesData()
                {
                    BuyerInfo = Buyer,
                    product = product,
                    web = website,
                    Designation = buyerdesignation,
                    Status = status,
                    Source = source,
                    CommunicationMedium = Communicationmedium,
                    communicationChain = communicationinformation,
                    TransferredTo = TransferTo,
                    Priority = Priority,

                };
                
              //  t.buyerSource = 0;
              //  t.BuyerSourcess = 0;
                return Ok(SalesData);
            }
            
            catch (Exception exception)
            {
                return InternalServerError(exception);
            }

        }


       
        }
    }

