﻿(function (f) { var e = {}; f.fn.socialButtons = function (a) { a = f.extend({ wrapper: '<div class="socialbuttons clearfix" />' }, a); if (!a.twitter && !a.plusone && !a.facebook) return this; a.twitter && !e.twitter && (e.twitter = f.getScript("//platform.twitter.com/widgets.js")); a.plusone && !e.plusone && (e.plusone = f.getScript("//apis.google.com/js/plusone.js")); if (!window.FB && a.facebook && !e.facebook) f("body").append('<div id="fb-root"></div>'), function (a, b, d) { var g = a.getElementsByTagName(b)[0]; if (!a.getElementById(d)) a = a.createElement(b), a.id = d, a.src = "//connect.facebook.net/en_US/all.js#xfbml=1", g.parentNode.insertBefore(a, g) }(document, "script", "facebook-jssdk"), e.facebook = true; return this.each(function () { var c = f(this).data("permalink"), b = f(a.wrapper).appendTo(this); a.twitter && b.append('<div><a href="http://twitter.com/share" class="twitter-share-button" data-url="' + c + '" data-count="none">Tweet</a></div>'); a.plusone && b.append('<div><div class="g-plusone" data-size="medium" data-annotation="none" data-href="' + c + '"></div></div>'); a.facebook && b.append('<div><div class="fb-like" data-href="' + c + '" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false"></div></div>') }) }; f.fn.matchHeight = function (a) { var c = 0, b = []; this.each(function () { var c = a ? f(this).find(a + ":first") : f(this); b.push(c); c.css("min-height", "") }); this.each(function () { c = Math.max(c, f(this).outerHeight()) }); return this.each(function (a) { var g = f(this), a = b[a], g = a.height() + (c - g.outerHeight()); a.css("min-height", g + "px") }) }; f.fn.matchWidth = function (a) { return this.each(function () { var c = f(this), b = c.children(a), d = 0; b.width(function (a, e) { return a < b.length - 1 ? (d += e, e) : c.width() - d }) }) }; f.fn.smoothScroller = function (a) { a = f.extend({ duration: 1E3, transition: "easeOutExpo" }, a); return this.each(function () { f(this).bind("click", function () { var c = this.hash, b = f(this.hash).offset().top, d = window.location.href.replace(window.location.hash, ""), g = f.browser.opera ? "html:not(:animated)" : "html:not(:animated),body:not(:animated)"; if (d + c == this) return f(g).animate({ scrollTop: b }, a.duration, a.transition, function () { window.location.hash = c.replace("#", "") }), false }) }) } })(jQuery); (function (f) {
    f.easing.jswing = f.easing.swing; f.extend(f.easing, {
        def: "easeOutQuad", swing: function (e, a, c, b, d) { return f.easing[f.easing.def](e, a, c, b, d) }, easeInQuad: function (e, a, c, b, d) { return b * (a /= d) * a + c }, easeOutQuad: function (e, a, c, b, d) { return -b * (a /= d) * (a - 2) + c }, easeInOutQuad: function (e, a, c, b, d) { return (a /= d / 2) < 1 ? b / 2 * a * a + c : -b / 2 * (--a * (a - 2) - 1) + c }, easeInCubic: function (e, a, c, b, d) { return b * (a /= d) * a * a + c }, easeOutCubic: function (e, a, c, b, d) { return b * ((a = a / d - 1) * a * a + 1) + c }, easeInOutCubic: function (e, a, c, b, d) { return (a /= d / 2) < 1 ? b / 2 * a * a * a + c : b / 2 * ((a -= 2) * a * a + 2) + c }, easeInQuart: function (e, a, c, b, d) { return b * (a /= d) * a * a * a + c }, easeOutQuart: function (e, a, c, b, d) { return -b * ((a = a / d - 1) * a * a * a - 1) + c }, easeInOutQuart: function (e, a, c, b, d) { return (a /= d / 2) < 1 ? b / 2 * a * a * a * a + c : -b / 2 * ((a -= 2) * a * a * a - 2) + c }, easeInQuint: function (e, a, c, b, d) { return b * (a /= d) * a * a * a * a + c }, easeOutQuint: function (e, a, c, b, d) { return b * ((a = a / d - 1) * a * a * a * a + 1) + c }, easeInOutQuint: function (e, a, c, b, d) { return (a /= d / 2) < 1 ? b / 2 * a * a * a * a * a + c : b / 2 * ((a -= 2) * a * a * a * a + 2) + c }, easeInSine: function (e, a, c, b, d) { return -b * Math.cos(a / d * (Math.PI / 2)) + b + c }, easeOutSine: function (e, a, c, b, d) { return b * Math.sin(a / d * (Math.PI / 2)) + c }, easeInOutSine: function (e, a, c, b, d) { return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c }, easeInExpo: function (e, a, c, b, d) { return a == 0 ? c : b * Math.pow(2, 10 * (a / d - 1)) + c }, easeOutExpo: function (e, a, c, b, d) { return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c }, easeInOutExpo: function (e, a, c, b, d) { return a == 0 ? c : a == d ? c + b : (a /= d / 2) < 1 ? b / 2 * Math.pow(2, 10 * (a - 1)) + c : b / 2 * (-Math.pow(2, -10 * --a) + 2) + c }, easeInCirc: function (e, a, c, b, d) { return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c }, easeOutCirc: function (e, a, c, b, d) { return b * Math.sqrt(1 - (a = a / d - 1) * a) + c }, easeInOutCirc: function (e, a, c, b, d) { return (a /= d / 2) < 1 ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + c : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c }, easeInElastic: function (e, a, c, b, d) { var e = 1.70158, g = 0, f = b; if (a == 0) return c; if ((a /= d) == 1) return c + b; g || (g = d * 0.3); f < Math.abs(b) ? (f = b, e = g / 4) : e = g / (2 * Math.PI) * Math.asin(b / f); return -(f * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / g)) + c }, easeOutElastic: function (e, a, c, b, d) { var e = 1.70158, g = 0, f = b; if (a == 0) return c; if ((a /= d) == 1) return c + b; g || (g = d * 0.3); f < Math.abs(b) ? (f = b, e = g / 4) : e = g / (2 * Math.PI) * Math.asin(b / f); return f * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / g) + b + c }, easeInOutElastic: function (e, a, c, b, d) { var e = 1.70158, g = 0, f = b; if (a == 0) return c; if ((a /= d / 2) == 2) return c + b; g || (g = d * 0.3 * 1.5); f < Math.abs(b) ? (f = b, e = g / 4) : e = g / (2 * Math.PI) * Math.asin(b / f); return a < 1 ? -0.5 * f * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / g) + c : f * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / g) * 0.5 + b + c }, easeInBack: function (e, a, c, b, d, g) { g == void 0 && (g = 1.70158); return b * (a /= d) * a * ((g + 1) * a - g) + c }, easeOutBack: function (e, a, c, b, d, g) { g == void 0 && (g = 1.70158); return b * ((a = a / d - 1) * a * ((g + 1) * a + g) + 1) + c }, easeInOutBack: function (e, a, c, b, d, g) { g == void 0 && (g = 1.70158); return (a /= d / 2) < 1 ? b / 2 * a * a * (((g *= 1.525) + 1) * a - g) + c : b / 2 * ((a -= 2) * a * (((g *= 1.525) + 1) * a + g) + 2) + c }, easeInBounce: function (e, a, c, b, d) { return b - f.easing.easeOutBounce(e, d - a, 0, b, d) + c }, easeOutBounce: function (e, a, c, b, d) {
            return (a /= d) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) +
                c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
        }, easeInOutBounce: function (e, a, c, b, d) { return a < d / 2 ? f.easing.easeInBounce(e, a * 2, 0, b, d) * 0.5 + c : f.easing.easeOutBounce(e, a * 2 - d, 0, b, d) * 0.5 + b * 0.5 + c }
    })
})(jQuery); (function (f) { function e(a) { var b = {}, c = /^jQuery\d+$/; f.each(a.attributes, function (a, d) { if (d.specified && !c.test(d.name)) b[d.name] = d.value }); return b } function a() { var a = f(this); a.val() === a.attr("placeholder") && a.hasClass("placeholder") && (a.data("placeholder-password") ? a.hide().next().show().focus() : a.val("").removeClass("placeholder")) } function c() { var b, c = f(this); if (c.val() === "" || c.val() === c.attr("placeholder")) { if (c.is(":password")) { if (!c.data("placeholder-textinput")) { try { b = c.clone().attr({ type: "text" }) } catch (d) { b = f("<input>").attr(f.extend(e(c[0]), { type: "text" })) } b.removeAttr("name").data("placeholder-password", true).bind("focus.placeholder", a); c.data("placeholder-textinput", b).before(b) } c = c.hide().prev().show() } c.addClass("placeholder").val(c.attr("placeholder")) } else c.removeClass("placeholder") } var b = "placeholder" in document.createElement("input"), d = "placeholder" in document.createElement("textarea"); f.fn.placeholder = b && d ? function () { return this } : function () { return this.filter((b ? "textarea" : ":input") + "[placeholder]").bind("focus.placeholder", a).bind("blur.placeholder", c).trigger("blur.placeholder").end() }; f(function () { f("form").bind("submit.placeholder", function () { var b = f(".placeholder", this).each(a); setTimeout(function () { b.each(c) }, 10) }) }); f(window).bind("unload.placeholder", function () { f(".placeholder").val("") }) })(jQuery);
(function (d) { var a = function () { }; d.extend(a.prototype, { name: "accordionMenu", options: { mode: "default", display: null, collapseall: !1, toggler: "span.level1.parent", content: "ul.level2" }, initialize: function (a, b) { var b = d.extend({}, this.options, b), c = a.find(b.toggler); c.each(function (h) { var a = d(this), c = a.next(b.content).wrap("<div>").parent(); c.data("height", c.height()); a.hasClass("active") || h == b.display ? c.show() : c.hide().css("height", 0); a.bind("click", function () { f(h) }) }); var f = function (a) { var a = d(c.get(a)), e = d([]); a.hasClass("active") && (e = a, a = d([])); b.collapseall && (e = c.filter(".active")); switch (b.mode) { case "slide": a.next().stop().show().animate({ height: a.next().data("height") }); e.next().stop().animate({ height: 0 }, function () { e.next().hide() }); break; default: a.next().show().css("height", a.next().data("height")), e.next().hide().css("height", 0) } a.addClass("active").parent().addClass("active"); e.removeClass("active").parent().removeClass("active") } } }); d.fn[a.prototype.name] = function () { var g = arguments, b = g[0] ? g[0] : null; return this.each(function () { var c = d(this); if (a.prototype[b] && c.data(a.prototype.name) && b != "initialize") c.data(a.prototype.name)[b].apply(c.data(a.prototype.name), Array.prototype.slice.call(g, 1)); else if (!b || d.isPlainObject(b)) { var f = new a; a.prototype.initialize && f.initialize.apply(f, d.merge([c], g)); c.data(a.prototype.name, f) } else d.error("Method " + b + " does not exist on jQuery." + a.name) }) } })(jQuery);
(function (b) { var e = function () { }; b.extend(e.prototype, { name: "dropdownMenu", options: { mode: "default", itemSelector: "li", firstLevelSelector: "li.level1", dropdownSelector: "ul", duration: 600, remainTime: 800, remainClass: "remain", matchHeight: !0, transition: "easeOutExpo", withopacity: !0, centerDropdown: !1, reverseAnimation: !1, fixWidth: !1, fancy: null }, initialize: function (e, j) { this.options = b.extend({}, this.options, j); var a = this, g = null, q = !1; this.menu = e; this.dropdowns = []; this.options.withopacity = b.browser.msie && parseFloat(b.browser.version) < 9 ? !1 : this.options.withopacity; if (this.options.fixWidth) { var s = 5; this.menu.children().each(function () { s += b(this).width() }); this.menu.css("width", s) } this.options.matchHeight && this.matchHeight(); this.menu.find(this.options.firstLevelSelector).each(function (p) { var k = b(this), f = k.find(a.options.dropdownSelector).css({ overflow: "hidden" }); if (f.length) { f.css("overflow", "hidden"); var d = b("<div>").data("dpwidth", parseFloat(f.width())).data("dpheight", parseFloat(f.height())).css({ overflow: "hidden" }).append("<div></div>"), e = d.find("div:first").css({ "min-width": d.data("dpwidth"), "min-height": d.data("dpheight") }); f.children().appendTo(e); d.appendTo(f); a.options.centerDropdown && f.css("margin-left", (parseFloat(f.css("width")) / 2 - k.width() / 2) * -1); a.dropdowns.push({ dropdown: f, div: d, innerdiv: e }) } k.bind({ mouseenter: function () { q = !0; a.menu.trigger("menu:enter", [k, p]); if (g) { if (g.index == p) return; g.item.removeClass(a.options.remainClass); g.div.hide() } if (f.length) { k.addClass(a.options.remainClass); d.stop().show(); var c = d.data("dpwidth"), b = d.data("dpheight"); switch (a.options.mode) { case "showhide": c = { width: c, height: b }; d.css(c); break; case "diagonal": var h = { width: 0, height: 0 }, c = { width: c, height: b }; if (a.options.withopacity) h.opacity = 0, c.opacity = 1; d.css(h).animate(c, a.options.duration, a.options.transition); break; case "height": h = { width: c, height: 0 }; c = { height: b }; if (a.options.withopacity) h.opacity = 0, c.opacity = 1; d.css(h).animate(c, a.options.duration, a.options.transition); break; case "width": h = { width: 0, height: b }; c = { width: c }; if (a.options.withopacity) h.opacity = 0, c.opacity = 1; d.css(h).animate(c, a.options.duration, a.options.transition); break; case "slide": f.css({ width: c, height: b }); d.css({ width: c, height: b, "margin-top": b * -1 }).animate({ "margin-top": 0 }, a.options.duration, a.options.transition); break; default: h = { width: c, height: b }; c = {}; if (a.options.withopacity) h.opacity = 0, c.opacity = 1; d.css(h).animate(c, a.options.duration, a.options.transition) } g = { item: k, div: d, index: p } } else g = active = null }, mouseleave: function (c) { if (c.srcElement && b(c.srcElement).hasClass("module")) return !1; q = !1; f.length ? window.setTimeout(function () { if (!(q || d.css("display") == "none")) { a.menu.trigger("menu:leave", [k, p]); var b = function () { k.removeClass(a.options.remainClass); g = null; d.hide() }; if (a.options.reverseAnimation) switch (a.options.mode) { case "showhide": b(); break; case "diagonal": var c = { width: 0, height: 0 }; if (a.options.withopacity) c.opacity = 0; d.stop().animate(c, a.options.duration, a.options.transition, function () { b() }); break; case "height": c = { height: 0 }; if (a.options.withopacity) c.opacity = 0; d.stop().animate(c, a.options.duration, a.options.transition, function () { b() }); break; case "width": c = { width: 0 }; if (a.options.withopacity) c.opacity = 0; d.stop().animate(c, a.options.duration, a.options.transition, function () { b() }); break; case "slide": d.stop().animate({ "margin-top": parseFloat(d.data("dpheight")) * -1 }, a.options.duration, a.options.transition, function () { b() }); break; default: c = {}; if (a.options.withopacity) c.opacity = 0; d.stop().animate(c, a.options.duration, a.options.transition, function () { b() }) } else b() } }, a.options.remainTime) : a.menu.trigger("menu:leave") } }) }); if (this.options.fancy) { var i = b.extend({ mode: "move", transition: "easeOutExpo", duration: 500, onEnter: null, onLeave: null }, this.options.fancy), l = this.menu.append('<div class="fancy bg1"><div class="fancy-1"><div class="fancy-2"><div class="fancy-3"></div></div></div></div>').find(".fancy:first").hide(), n = this.menu.find(".active:first"), m = null, r = function (a, b) { if (!b || !(m && a.get(0) == m.get(0))) l.stop().show().css("visibility", "visible"), i.mode == "move" ? !n.length && !b ? l.hide() : l.animate({ left: a.position().left + "px", width: a.width() + "px" }, i.duration, i.transition) : b ? l.css({ opacity: n ? 0 : 1, left: a.position().left + "px", width: a.width() + "px" }).animate({ opacity: 1 }, i.duration) : l.animate({ opacity: 0 }, i.duration), m = b ? a : null }; this.menu.bind({ "menu:enter": function (a, b, f) { r(b, !0); if (i.onEnter) i.onEnter(b, f, l) }, "menu:leave": function (a, b, f) { r(n, !1); if (i.onLeave) i.onLeave(b, f, l) }, "menu:fixfancy": function () { m && l.stop().show().css({ left: m.position().left + "px", width: m.width() + "px" }) } }); n.length && i.mode == "move" && r(n, !0) } }, matchHeight: function () { this.menu.find("li.level1.parent").each(function () { var e = 0; b(this).find("ul.level2").each(function () { e = Math.max(b(this).height(), e) }).css("min-height", e) }) } }); b.fn[e.prototype.name] = function () { var o = arguments, j = o[0] ? o[0] : null; return this.each(function () { var a = b(this); if (e.prototype[j] && a.data(e.prototype.name) && j != "initialize") a.data(e.prototype.name)[j].apply(a.data(e.prototype.name), Array.prototype.slice.call(o, 1)); else if (!j || b.isPlainObject(j)) { var g = new e; e.prototype.initialize && g.initialize.apply(g, b.merge([a], o)); a.data(e.prototype.name, g) } else b.error("Method " + j + " does not exist on jQuery." + e.name) }) } })(jQuery);
(function ($) { $(document).bind('ready', function () { var config = $('body').data('config') || {}; $('.menu-sidebar').accordionMenu({ mode: 'slide' }); $('#menu').dropdownMenu({ mode: 'slide', dropdownSelector: 'div.dropdown' }); $('a[href="#page"]').smoothScroller({ duration: 500 }); $('.grid-block').matchWidth('.grid-h'); $('article[data-permalink]').socialButtons(config); var matchHeight = function () { $('#top-a .grid-h').matchHeight('.deepest'); $('#top-b .grid-h').matchHeight('.deepest'); $('#bottom-a .grid-h').matchHeight('.deepest'); $('#bottom-b .grid-h').matchHeight('.deepest'); $('#bottom-c .grid-h').matchHeight('.deepest'); $('#innertop .grid-h').matchHeight('.deepest'); $('#innerbottom .grid-h').matchHeight('.deepest'); $('#maininner, #sidebar-a, #sidebar-b').matchHeight(); }; matchHeight(); $(window).bind("load", matchHeight); }); })(jQuery);