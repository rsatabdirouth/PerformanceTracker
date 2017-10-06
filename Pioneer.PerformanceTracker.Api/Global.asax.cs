using Pioneer.PerformanceTracker.Api.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace Pioneer.PerformanceTracker.Api
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<SalesContext>());
            GlobalConfiguration.Configure(WebApiConfig.Register);

          
        }
    }
}
