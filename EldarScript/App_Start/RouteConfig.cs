using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace EldarScript
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Index", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
               name: "Others",
               url: "{controller}/{action}/{id}",
               defaults: new { controller = "Others", action = "Others", id = UrlParameter.Optional }
           );

            routes.MapRoute(
              name: "Scripts",
              url: "{controller}/{action}/{id}",
              defaults: new { controller = "Scripts", action = "Scripts", id = UrlParameter.Optional }
          );

            routes.MapRoute(
              name: "Tutorials",
              url: "{controller}/{action}/{id}",
              defaults: new { controller = "Tutorials", action = "Tutorials", id = UrlParameter.Optional }
          );

            routes.MapRoute(
             name: "Acesso",
             url: "{controller}/{action}/{id}",
             defaults: new { controller = "Acesso", action = "Acesso", id = UrlParameter.Optional }
         );

        }
    }
}