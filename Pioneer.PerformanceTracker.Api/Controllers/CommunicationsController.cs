using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Pioneer.PerformanceTracker.Api.Models;

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
                var communications = _db.CommunicationInfos.ToList();
                return Ok(communications);
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
