
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.OData.Builder;
using System.Web.Http.OData.Extensions;
using Pioneer.PerformanceTracker.Api.Models;

namespace Pioneer.PerformanceTracker.Api
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)

        {   //o data registration


          
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<BuyerInfo>("BuyerInfoes");
            builder.EntitySet<BuyerDesignation>("BuyerDesignations");
            builder.EntitySet<BuyerPriority>("BuyerPriorities");
            builder.EntitySet<Product>("Products");
            builder.EntitySet<BuyerSource>("BuyerSources");
            builder.EntitySet<Website>("Websites");
            config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());

            // { either option1}

            //var json = config.Formatters.JsonFormatter;
            //json.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;
            //config.Formatters.Remove(config.Formatters.XmlFormatter);


            //{or option2}
            config.Formatters.JsonFormatter
                                   .SerializerSettings
                                   .ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new
                                  MediaTypeHeaderValue("text/html"));




            //Enable Cors
            config.EnableCors();
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
