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
    public class SourcesController : ApiController
    {

        public static int Id = 1;
        public SourcesController() { }



        [HttpGet]
        public IHttpActionResult GetSources() {

            try
            {
                SalesContext _db = new SalesContext();
                var sources = _db.BuyerSources.ToList();
                return Ok(sources);


            }
            catch (Exception ex) { return InternalServerError(ex); }
        }

        [HttpGet]
        public IHttpActionResult GetSourcesById(int id)
        {
            try
            {
                SalesContext _db = new SalesContext();
                var source = _db.BuyerSources.FirstOrDefault(x=>x.ID == id);
                return Ok(source);


            }
            catch (Exception ex) { return InternalServerError(ex); }

        }
        [HttpPost]
        public IHttpActionResult SaveSources(BuyerSource model)
        {
            try
            {
                SalesContext _db = new SalesContext();
                if (model.ID>0) {
                  
                    var existsources = _db.BuyerSources.FirstOrDefault(x => x.ID == model.ID);
                    existsources.ID = model.ID;
                    existsources.Source = model.Source;
                    //_db.SaveChanges();
                    //return Ok(existsources);


                }
                else {
                    model.ID = Id++;
                   
                    _db.BuyerSources.Add(model);

                    _db.SaveChanges();





                }
                return Ok(model);
               


            }
            catch (Exception ex) { return InternalServerError(ex); }

        }


    }
}
