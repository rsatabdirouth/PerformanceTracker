using Pioneer.PerformanceTracker.Api.Models;
using Pioneer.PerformanceTracker.Api.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Pioneer.PerformanceTracker.Api.Controllers
{
    [EnableCors("*", "*", "*")]
    
    public class ProductsController : ApiController
    {
        public static int Id = 1;
        public ProductsController() { }

        [HttpGet]
        public IHttpActionResult GetProducts()
        {
            try
            {
                SalesContext _db = new SalesContext();
                var products = _db.Products.ToList();
               

                return Ok(products);
            }
            catch (Exception exception)
            {
                return InternalServerError(exception);
            }



        }
        [HttpGet]
        public IHttpActionResult GetProductsById(int Id)
        {

            try
            {
                SalesContext _db = new SalesContext();
                var product = _db.Products.FirstOrDefault(x => x.ID == Id);
              
                return Ok(product);
            }
            catch (Exception exception)
            {
                return InternalServerError(exception);
            }



        }

        [HttpPost]
        public IHttpActionResult SaveProducts(Product model)
        {
            try {
                SalesContext _db = new SalesContext();
                if (model.ID>0) {
                    var existProduct = _db.Products.FirstOrDefault(x => x.ID == model.ID);
                    existProduct.ProductName = model.ProductName;

                    _db.SaveChanges();
                    return Ok(existProduct);
                    
                }
                else
                {
                    model.ID = Id++;
                    _db.Products.Add(model);

                    _db.SaveChanges();

                }
                return Ok(model);


            }
            catch (Exception exception)
            {
                return InternalServerError(exception);
            }
          


        }


    }
}
