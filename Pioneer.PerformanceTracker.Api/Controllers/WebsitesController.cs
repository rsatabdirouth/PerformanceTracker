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
    public class WebsitesController : ApiController
    {
        public WebsitesController()
        { }
        public static int Id = 1;
        [HttpGet]
        public IHttpActionResult GetWebsites()
        {
            try
            {
                SalesContext _db = new SalesContext();
                var websites = _db.Websites.ToList();
                return Ok(websites);


            }
            catch (Exception ex) { return InternalServerError(ex); }


        }
        [HttpGet]
        public IHttpActionResult GetWebsiteById(int id)
        {
            try
            {
                SalesContext _db = new SalesContext();
                var web = _db.Websites.FirstOrDefault(x => x.ID == id);
                return Ok(web);
            }
            catch (Exception exception) { return InternalServerError(exception); }
        }

        [HttpPost]
        public IHttpActionResult SaveWebsites(Website model)
        {
            try
            {
                if (model.ID > 0)
                {
                    SalesContext _db = new SalesContext();
                    var existweb = _db.Websites.FirstOrDefault(x => x.ID == model.ID);
                    existweb.WebsiteName = model.WebsiteName;


                }
                else
                {
                    SalesContext _db = new SalesContext();
                    model.ID = Id++;
                    _db.Websites.Add(model);
                    _db.SaveChanges();

                }
                return Ok(model);
            }
            catch (Exception exception) { return InternalServerError(exception); }


        }

    }
}
