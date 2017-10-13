using Pioneer.PerformanceTracker.Api.Models;
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
    public class MediumsController : ApiController
    {
        public static int Id = 1;
        SalesContext _db = new SalesContext();
        public MediumsController()
        {
        }

        [HttpGet]
        public IHttpActionResult GetMediums()
        {
            try
            {
                var communicationmedium = _db.CommunicationMediums.ToList();
                
                return Ok(communicationmedium);
            }
            catch (Exception exception)
            {
                return InternalServerError(exception);
            }


        }
      [HttpGet]
        public IHttpActionResult GetMediumsById(int Id)
        {
            try
            {
                var medium = _db.CommunicationMediums.FirstOrDefault(x => x.ID == Id);
                return Ok(medium);

            }
            catch (Exception exception)
            {
                return InternalServerError(exception);
            }

        }

        [HttpPost]
        public IHttpActionResult SaveMediums(CommunicationMedium model)
        {
            try
            {
                if (model.ID > 0)
                {
                    var existMedium = _db.CommunicationMediums.FirstOrDefault(x => x.ID == model.ID);
                    existMedium.Medium = model.Medium;
                    _db.SaveChanges();
                    return Ok(existMedium);
                }
                else
                {
                    model.ID = Id++;
                    _db.CommunicationMediums.Add(model);
                    _db.SaveChanges();

                }

                     return Ok(model);
            }
            catch (Exception ex) {
                return InternalServerError(ex);
            }

        }
    }
}
