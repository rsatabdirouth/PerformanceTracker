using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Pioneer.PerformanceTracker.Api.Models;
using Pioneer.PerformanceTracker.Api.ViewModels;

namespace Pioneer.PerformanceTracker.Api.Controllers
{
    [EnableCors("*","*","*")]
    public class CommunicationsController : ApiController
    {
        public CommunicationsController()
        { }
        public static int Id = 1;
        SalesContext _db = new SalesContext();

        [HttpGet]
        public IHttpActionResult GetCommunications()
        {
            try
            {
                var buyer = _db.BuyerInfos.ToList();
                var communications = _db.CommunicationInfos.ToList();
                var status = _db.SalesStatus.ToList();
                var transferredto = _db.TransferredTo.ToList();
                var medium = _db.CommunicationMediums.ToList();
               

                
                var SalesData = new SalesData()
                {
                    BuyerInfo = buyer,
                    Status = status,
                    CommunicationMedium = medium,
                    communicationChain = communications,
                    TransferredTo = transferredto,
                   

                };
                return Ok(SalesData);
            }
            catch (Exception ex)
            { return InternalServerError(ex); }
        }
        [HttpGet]
        public IHttpActionResult GetCommunicationById(int id)
        {
            try
            {
                var communication = _db.CommunicationInfos.FirstOrDefault(x=>x.CommunicationID == id);
                return Ok(communication);


            }
            catch (Exception ex)
            { return InternalServerError(ex); }
        }

      

        [HttpPost]
        public IHttpActionResult SaveCommunications(CommunicationInfo model)
        {
            try
            {
                if (model.CommunicationID>0)
                {
                    var existcommunication = _db.CommunicationInfos.FirstOrDefault(x => x.CommunicationID == model.CommunicationID);
                    existcommunication.BuyerID = model.BuyerID;
                    existcommunication.communicatedBy = model.communicatedBy;
                    existcommunication.TransferredTo = model.TransferredTo;
                    existcommunication.IsConverted = model.IsConverted;
                    existcommunication.Isintersted = model.Isintersted;
                    existcommunication.CommunicationVia = model.CommunicationVia;
                    existcommunication.Feedback = model.Feedback;
                    existcommunication.FirstDateOfInteraction = model.FirstDateOfInteraction;
                    existcommunication.NextFollowUpDate = model.NextFollowUpDate;
                    existcommunication.NextStep = model.NextStep;
                    existcommunication.SalesStatus = model.SalesStatus;
                  

                    _db.SaveChanges();
                    return Ok(existcommunication);

                }
                else {
                    model.CommunicationID = Id++;
                    _db.CommunicationInfos.Add(model);
                    _db.SaveChanges();


                }
                return Ok(model);

            }
            catch (Exception ex)
            { return InternalServerError(ex); }
        }
    }
}
