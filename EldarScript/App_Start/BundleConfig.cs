using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace EldarScript.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/Bundle/Scripts").Include(
                "~/Content/Scripts/jquery-1.7.1.js",
                "~/Content/Scripts/jquery.colorbox-min.js",
                "~/Content/Scripts/bootstrap.js",
                "~/Content/Scripts/bootbox.js",
                "~/Content/Scripts/less-1.3.3.min.js")
            );

            bundles.Add(new StyleBundle("~/Bundle/CSS").Include(
               "~/Content/CSS/colorbox.css",
               "~/Content/CSS/bootstrap.min.css")
           );

            BundleTable.EnableOptimizations = true;
        }
    }
}