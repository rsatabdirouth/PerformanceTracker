using Pioneer.PerformanceTracker.Api.Models;
using Pioneer.PerformanceTracker.Api.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.OData;

namespace Pioneer.PerformanceTracker.Api.Controllers
{
    [EnableCors("*", "*", "*")]

    
    public class BuyersController : ApiController
    {
        public BuyersController()
        { }
        public static int Id = 1;
        SalesContext _db = new SalesContext();
//get list of all buyers
        [HttpGet, EnableQuery()]
       public IHttpActionResult GetBuyers()
        {
            try
            {
                
                SalesContext _db = new SalesContext();
                var buyers = _db.BuyerInfos.AsQueryable();
                //
                //var product = _db.Products.ToList();
                //var website = _db.Websites.ToList();

                //var buyerdesignation = _db.BuyerDesignations.ToList();
                //var status = _db.SalesStatus.ToList();
                //var source = _db.BuyerSources.ToList();
                //var Communicationmedium = _db.CommunicationMediums.ToList();
                //var communicationinformation = _db.CommunicationInfos.ToList();
                //var TransferTo = _db.TransferredTo.ToList();
                //var Priority = _db.BuyerPriorities.ToList();
                //var SalesData = new SalesData()
                //{

                //    product = product,
                //    web = website,
                //    Designation = buyerdesignation,
                //    Status = status,
                //    Source = source,
                //    CommunicationMedium = Communicationmedium,
                //    communicationChain = communicationinformation,
                //    TransferredTo = TransferTo,
                //    Priority = Priority,

                //};

                return Ok(buyers);
            }
            
            catch (Exception exception)
            {
                return InternalServerError(exception);
            }

        }
        //get buyers by id * get a single buyer
        [HttpGet]
        public IHttpActionResult GetBuyerById(int id)
        {
            try
            {
                var buyer = _db.BuyerInfos.FirstOrDefault(x => x.BuyerId == id);
                return Ok(buyer);

            }
            catch (Exception exception)
            {
                return InternalServerError(exception);

            }
        }
             
            [HttpPost]
        public IHttpActionResult SaveBuyers(BuyerInfo buyer)
        {
            //if(!ModelState.IsValid)
            //{
            //    return Ok();
            //}
            try
            {
              
                    if (buyer.BuyerId>0)
                {
                    var existBuyer = _db.BuyerInfos.FirstOrDefault(x => x.BuyerId == buyer.BuyerId);
                    existBuyer.AlternativeNumber = buyer.AlternativeNumber;
                    existBuyer.BuyerCompany = buyer.BuyerCompany;
                    existBuyer.ContactPersonDesignation = buyer.ContactPersonDesignation;
                    existBuyer.BuyerPriority = buyer.BuyerPriority;
                    existBuyer.BuyerSource = buyer.BuyerSource;
                    existBuyer.IsBuyerInterested = buyer.IsBuyerInterested;
                    existBuyer.BuyerWebsiteName = buyer.BuyerWebsiteName;
                    existBuyer.ContactNumber = buyer.ContactNumber;
                    existBuyer.ContactPerson = buyer.ContactPerson;
                  
                    existBuyer.Date = buyer.Date;
                    existBuyer.Email = buyer.Email;
                    existBuyer.Extension = buyer.Extension;
                    existBuyer.SourceWebLink = buyer.SourceWebLink;
                    existBuyer.Website = buyer.Website;
                    existBuyer.ProductLookingFor = buyer.ProductLookingFor;
                    _db.SaveChanges();
                  //  existBuyer.IsBuyerSubmitted = true;
                    return Ok (existBuyer);
                }
                else
                {
                    buyer.BuyerId= Id++;
                    buyer.Date = DateTime.Now;
                    _db.BuyerInfos.Add(buyer);
                    _db.SaveChanges();
                  //  buyer.IsBuyerSubmitted = true;
                   
                }
                return Ok(buyer);

            }
            catch (Exception exception)
            {
                return InternalServerError(exception);
            }

        }


        //[HttpGet]
        //public IHttpActionResult GetBuyer(SalesData model)
        //{

        //    // var data = 

        //    var data = (from l in _db.BuyerInfos
        //                join m in _db.BuyerPriorities  on l.BuyerPriority equals m.ID 
        //                join n in _db.BuyerSources on l.BuyerSource equals n.ID
        //                join o in _db.Products on l.ProductLookingFor equals o.ID
                               
        //                where (l.BuyerId > 0)                 
        //                select new {
                           
                           
        //                    m.Level,
        //                    n.Source,
        //                    o.ProductName,


        //                }).ToList();
           
         
        //    try
        //    {
        //        //if (id > 0)
        //        //{

        //        //}
        //        //if (source != null)
        //        //{

        //        //}
        //        return Ok();
        //    }
        //    catch (Exception exception)
        //    {
        //        return InternalServerError(exception);

        //    }
        //}



    }
}


   

