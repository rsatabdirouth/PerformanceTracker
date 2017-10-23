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
    public class PrioritiesController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetPriorities() {
            try
            {
                SalesContext _db = new SalesContext();
                var priorities = _db.BuyerPriorities.ToList();
                return Ok(priorities);

            }
            catch (Exception ex)
            {
                return Ok(ex);

            }
        }




    }
}
