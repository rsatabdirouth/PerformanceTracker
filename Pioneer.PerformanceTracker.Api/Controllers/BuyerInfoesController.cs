using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.OData;
using System.Web.Http.OData.Routing;
using Pioneer.PerformanceTracker.Api.Models;

namespace Pioneer.PerformanceTracker.Api.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using Pioneer.PerformanceTracker.Api.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<BuyerInfo>("BuyerInfoes");
    builder.EntitySet<BuyerDesignation>("BuyerDesignations"); 
    builder.EntitySet<BuyerPriority>("BuyerPriorities"); 
    builder.EntitySet<Product>("Products"); 
    builder.EntitySet<BuyerSource>("BuyerSources"); 
    builder.EntitySet<Website>("Websites"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class BuyerInfoesController : ODataController
    {
        private SalesContext db = new SalesContext();

        // GET: odata/BuyerInfoes
        [EnableQuery]
        public IQueryable<BuyerInfo> GetBuyerInfoes()
        {
            return db.BuyerInfos;
        }

        // GET: odata/BuyerInfoes(5)
        [EnableQuery]
        public SingleResult<BuyerInfo> GetBuyerInfo([FromODataUri] int key)
        {
            return SingleResult.Create(db.BuyerInfos.Where(buyerInfo => buyerInfo.BuyerId == key));
        }

        // PUT: odata/BuyerInfoes(5)
        public IHttpActionResult Put([FromODataUri] int key, Delta<BuyerInfo> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            BuyerInfo buyerInfo = db.BuyerInfos.Find(key);
            if (buyerInfo == null)
            {
                return NotFound();
            }

            patch.Put(buyerInfo);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BuyerInfoExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(buyerInfo);
        }

        // POST: odata/BuyerInfoes
        public IHttpActionResult Post(BuyerInfo buyerInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.BuyerInfos.Add(buyerInfo);
            db.SaveChanges();

            return Created(buyerInfo);
        }

        // PATCH: odata/BuyerInfoes(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<BuyerInfo> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            BuyerInfo buyerInfo = db.BuyerInfos.Find(key);
            if (buyerInfo == null)
            {
                return NotFound();
            }

            patch.Patch(buyerInfo);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BuyerInfoExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(buyerInfo);
        }

        // DELETE: odata/BuyerInfoes(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            BuyerInfo buyerInfo = db.BuyerInfos.Find(key);
            if (buyerInfo == null)
            {
                return NotFound();
            }

            db.BuyerInfos.Remove(buyerInfo);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/BuyerInfoes(5)/BuyerDesignation
        [EnableQuery]
        public SingleResult<BuyerDesignation> GetBuyerDesignation([FromODataUri] int key)
        {
            return SingleResult.Create(db.BuyerInfos.Where(m => m.BuyerId == key).Select(m => m.BuyerDesignation));
        }

        // GET: odata/BuyerInfoes(5)/Priority
        [EnableQuery]
        public SingleResult<BuyerPriority> GetPriority([FromODataUri] int key)
        {
            return SingleResult.Create(db.BuyerInfos.Where(m => m.BuyerId == key).Select(m => m.Priority));
        }

        // GET: odata/BuyerInfoes(5)/Product
        [EnableQuery]
        public SingleResult<Product> GetProduct([FromODataUri] int key)
        {
            return SingleResult.Create(db.BuyerInfos.Where(m => m.BuyerId == key).Select(m => m.Product));
        }

        // GET: odata/BuyerInfoes(5)/Source
        [EnableQuery]
        public SingleResult<BuyerSource> GetSource([FromODataUri] int key)
        {
            return SingleResult.Create(db.BuyerInfos.Where(m => m.BuyerId == key).Select(m => m.Source));
        }

        // GET: odata/BuyerInfoes(5)/Website
        [EnableQuery]
        public SingleResult<Website> GetWebsite([FromODataUri] int key)
        {
            return SingleResult.Create(db.BuyerInfos.Where(m => m.BuyerId == key).Select(m => m.Website));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BuyerInfoExists(int key)
        {
            return db.BuyerInfos.Count(e => e.BuyerId == key) > 0;
        }
    }
}
