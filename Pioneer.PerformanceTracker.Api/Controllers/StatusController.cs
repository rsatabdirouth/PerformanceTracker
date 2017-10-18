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
    [EnableCors("*", "*", "*")]

 

    public class StatusController : ApiController
    {
        public StatusController()
        { }
        public static int Id = 1;
        SalesContext _db = new SalesContext();

        [HttpGet]
        public IHttpActionResult GetStatuses()
        {
            try
            {
                var Statuses = _db.SalesStatus.ToList();
                return Ok(Statuses);

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }
        [HttpGet]
        public IHttpActionResult GetStatusById(int Id)
        {
            try
            {
                var Status = _db.SalesStatus.FirstOrDefault(x => x.ID == Id);
                return Ok(Status);
              

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }



      


        [HttpPost]
        public IHttpActionResult SaveStatuses(SalesStatus model)
        {
            try
            {
                if (model.ID > 0)
                {
                    var existstatus = _db.SalesStatus.FirstOrDefault(x=>x.ID == model.ID);
                    existstatus.Status = model.Status;
                    _db.SaveChanges();
                    return Ok(existstatus);
                }
                else
                {
                    model.ID = Id++;
                    _db.SalesStatus.Add(model);
                    _db.SaveChanges();
                    return Ok(model);
                }

               

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }
    }
}
