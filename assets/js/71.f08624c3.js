(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{672:function(t,e,a){"use strict";a.r(e);var l=a(0),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("if we have data like the following:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("alias")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("kincolle")]),t._v(" "),a("td",[t._v("abc def ghi")])])])]),t._v(" "),a("p",[t._v("and we want to get a table like the following:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("alias")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("kincolle")]),t._v(" "),a("td",[t._v("abc")])]),t._v(" "),a("tr",[a("td",[t._v("kincolle")]),t._v(" "),a("td",[t._v("def")])]),t._v(" "),a("tr",[a("td",[t._v("kincolle")]),t._v(" "),a("td",[t._v("ghi")])])])]),t._v(" "),a("p",[t._v('The way to do it is using "Lateral view" and "explode()". Here is the example:')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("hive> select name, single_alias from test lateral view explode(split(alias, ' ')) test_alias as single_alias;\n")])])]),a("p",[t._v("The explode() is used for let array data into a single row data, like explode([1, 2, 3]) will be")]),t._v(" "),a("ul",[a("li",[t._v("1")]),t._v(" "),a("li",[t._v("2")]),t._v(" "),a("li",[t._v("3")])])])}),[],!1,null,null,null);e.default=i.exports}}]);