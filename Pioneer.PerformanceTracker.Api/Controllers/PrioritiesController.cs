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
    public class PrioritiesController : ApiController
    {
        [HttpGet,EnableQuery()]
        public IHttpActionResult GetPriorities() {
            try
            {
                SalesContext _db = new SalesContext();
                var priorities = _db.BuyerPriorities.AsQueryable();
                return Ok(priorities);

            }
            catch (Exception ex)
            {
                return Ok(ex);

            }
        }




    }
}
