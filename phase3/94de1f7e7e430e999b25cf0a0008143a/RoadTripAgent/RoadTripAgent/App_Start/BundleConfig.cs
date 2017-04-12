﻿using System.Web;
using System.Web.Optimization;

namespace RoadTripAgent
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery-ui.js"));
            bundles.Add(new ScriptBundle("~/bundles/charts").Include(
                        "~/Scripts/echarts-all-3.js",
                        "~/Scripts/dataTool.min.js",
                        "~/Scripts/china.js",
                        "~/Scripts/world.js",
                        "~/Scripts/api?v=2.0&ak=ZUONbpqGBsYGXNIYHicvbAbM",
                        "~/Scripts/bmap.min.js"
                        ));
            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*")); 

            bundles.Add(new StyleBundle("~/Content/datepicker").Include(
                        "~/Content/bootstrap.css",
                        "~/Content/jquery-ui.css",
                        "~/Content/map-canvas.css"
                        )); 
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
