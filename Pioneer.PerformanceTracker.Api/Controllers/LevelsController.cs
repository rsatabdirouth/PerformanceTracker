using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Pioneer.PerformanceTracker.Api.Models;
using System.Web.Http.OData;

namespace Pioneer.PerformanceTracker.Api.Controllers
{
    [EnableCors("*","*","*")]
    public class LevelsController : ApiController
    {
        SalesContext _db = new SalesContext();
        public LevelsController()
        { }
        public static int Id = 1;
        [HttpGet,EnableQuery()]
        public IHttpActionResult GetLevels()
        {
            try
            {
                var levels = _db.TransferredTo.AsQueryable();
                return Ok(levels);

            }
            catch (Exception ex)
            {
               return InternalServerError(ex);
            }


        }
        [HttpGet]
        public IHttpActionResult GetLevelById(int id)
        {
            try
            {
                var level = _db.TransferredTo.FirstOrDefault(x => x.ID == id);
                return Ok(level);
            }
            catch (Exception ex)
            {
              return  InternalServerError(ex);
            }
        }
        [HttpPost]
        public IHttpActionResult SaveLevels(TransferredTo model)
        {
            try
            {
                if (model.ID>0)
                {
                    var existlevel = _db.TransferredTo.FirstOrDefault(x=>x.ID==model.ID);
                    existlevel.FollowupBy = model.FollowupBy;
                    _db.SaveChanges();
                    return Ok(existlevel);
                }
                else
                {
                    _db.TransferredTo.Add(model);
                    _db.SaveChanges();

                }
                return Ok(model);
            }
            catch (Exception ex)
            {
              return  InternalServerError(ex);
            }
        }
    }
}
