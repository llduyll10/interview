(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22256c"],{cdd9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"listSearch"}},[a("div",[a("h1",[t._v("Liked Data")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-4"},[a("div",{staticClass:"tableFixedHeader"},[a("table",{staticClass:"table table-hover table-dark"},[t._m(0),a("tbody",[t.listDataLike.length?t._l(t.listDataLike,(function(e,s){return a("tr",{key:s},[a("td",{attrs:{width:"10%"}},[t._v(t._s(s+1))]),a("td",{attrs:{width:"20%"}},[t._v(t._s(e.title))]),a("td",{attrs:{width:"30%"}},[a("p",{staticClass:"text"},[t._v(t._s(e.description))])]),a("td",{attrs:{width:"20%"}},[t._v(t._s(t.$date(e.date_created)))]),a("td",{attrs:{width:"20%"}},[a("div",[a("button",{staticClass:"btn btn-danger",on:{click:function(a){return t.unlikeData(e)}}},[t._v(" Unlike ")])])])])})):a("tr",[t._m(1)])],2)])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"10%"}},[t._v("No.")]),a("th",{attrs:{width:"20%",scope:"col"}},[t._v("Title")]),a("th",{attrs:{width:"30%",scope:"col"}},[t._v("Description")]),a("th",{attrs:{width:"20%",scope:"col"}},[t._v("Date Created")]),a("th",{attrs:{width:"20%",scope:"col"}},[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"text-center",attrs:{colspan:"5"}},[a("p",[t._v("No data")])])}],r={name:"LikeItem",computed:{listDataLike:function(){return this.$store.getters.listDataLike}},methods:{unlikeData:function(t){this.$store.dispatch("unlikeData",t)}}},n=r,c=a("2877"),l=Object(c["a"])(n,s,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d22256c.e23780da.js.map