namespace Pioneer.PerformanceTracker.Api.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Pioneer.PerformanceTracker.Api.Models;
    using System.Collections.Generic;

    internal sealed class Configuration : DbMigrationsConfiguration<Pioneer.PerformanceTracker.Api.Models.SalesContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(Pioneer.PerformanceTracker.Api.Models.SalesContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            //  var  ID = 1;
           // context.BuyerSources.Add(new BuyerSource() { ID = 1, Source = "msn" });
          context.Products.AddOrUpdate(new Product() { ID = 1, ProductName = "Mortgage" });
          context.BuyerPriorities.Add(new BuyerPriority() { ID = 1, Level = "Normal" });
          context.BuyerSources.Add(new BuyerSource() { ID=1,Source="google"});
          context.BuyerStatus.Add(new BuyerStatus() { ID=1,Status="interested"});
          context.CommunicationMediums.Add(new CommunicationMedium() { ID=1,Medium="Email"});
          context.TransferredTo.Add(new TransferredTo() { ID=1,FollowupBy="Prajim1"});
          context.BuyerDesignations.Add(new BuyerDesignation() { ID=1,designation="CEO"});
          context.Websites.Add(new Website() { ID=1,WebsiteName="www.Pioneerweb.co.uk"});
          context.BuyerInfos.Add(new BuyerInfo() {

              BuyerId =1,
              BuyerSource =1,
              BuyerCompany ="LeadBay",
              ContactPerson ="test",
               ContactPersonDesignation =1,
              ContactNumber="11111111111",
              AlternativeNumber ="00000000000",
              Email ="tset@test.com",
              BuyerWebsiteName =1,
              Date =DateTime.Now,
              Extension ="123",
              ProductLookingFor =1,
              SourceWebLink ="123",
              BuyerPriority=1,
              BuyerStatus=1
          });



            context.CommunicationInfos.Add(new CommunicationInfo() {
                BuyerID = 1,
                CommunicationID = 1,
                FirstDateOfInteraction = new DateTime(2017,09,20),
                CommunicationVia =1,
                communicatedBy="Projim",
                TransferredTo=1,
                Feedback="CallBack",
                NextStep="callback self after 2 days",
                NextFollowUpDate = new DateTime(2017,09,22),
                Isintersted=true,
                IsConverted=false

            });
        }
    }
}
