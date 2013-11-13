using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EldarScript.Controllers
{
    public class AcessoController : Controller
    {
        #region Register
        public ActionResult Register()
        {
            return View();
        }
        #endregion Register

        #region Help
        public ActionResult Help()
        {
            return View();
        }
        #endregion Help

        #region Login
        public ActionResult Login()
        {
            return View();
        }
        #endregion Login

        #region PainelScript
        public ActionResult PainelScript()
        {
            return View();
        }
        #endregion PainelScript

        #region PainelCharacter
        public ActionResult PainelCharacter()
        {
            return View();
        }
        #endregion PainelCharacter

        #region PainelGold
        public ActionResult PainelGold()
        {
            return View();
        }
        #endregion PainelGold
    }
}
