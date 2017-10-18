using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Pioneer.PerformanceTracker.Api.Models;

namespace Pioneer.PerformanceTracker.Api.Controllers
{[EnableCors("*","*","*")]
    public class DesignationsController : ApiController
    { 
              public static int Id = 1;
        public DesignationsController() { }

        [HttpGet]
        public IHttpActionResult GetDesignations()
        { try
            {
                SalesContext _db = new SalesContext();
                var Designations = _db.BuyerDesignations.ToList();
                return Ok(Designations);
            }


            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpGet]
        public IHttpActionResult GetDesignationById(int id)
        {
            try
            {
                SalesContext _db = new SalesContext();
                var Designation = _db.BuyerDesignations.FirstOrDefault(x => x.ID == id);
                return Ok(Designation);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
          
        }

        [HttpPost]
        public IHttpActionResult SaveDesignations(BuyerDesignation model)
        {
            try {
                if (model.ID>0)
                {
                    SalesContext _db = new SalesContext();
                    var existDesignation = _db.BuyerDesignations.FirstOrDefault(x=>x.ID==model.ID);
                    existDesignation.designation = model.designation;
                    _db.SaveChanges();
                    return Ok(existDesignation);
                }
                else
                {
                    SalesContext _db = new SalesContext();
                    model.ID = Id++;
                    _db.BuyerDesignations.Add(model);
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
