using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EldarScript.Controllers
{
    public class IndexController : Controller
    {

        #region Index
        public ActionResult Index()
        {
            return View();
        }
        #endregion Index

        #region Character
        public ActionResult Characters()
        {
            return View();
        }
        #endregion Character

        #region Scripts
        public ActionResult Scripts()
        {
            return View();
        }
        #endregion Scripts

        #region TibiaGold
        public ActionResult TibiaGold()
        {
            return View();
        }
        #endregion TibiaGold

        #region Tutorials
        public ActionResult Tutorials()
        {
            return View();
        }
        #endregion Tutorials

        #region World Trade
        public ActionResult WorldTrade()
        {
            return View();
        }
        #endregion World Trade
    }
}
