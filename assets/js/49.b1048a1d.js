(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{530:function(e,t,o){e.exports=o.p+"assets/img/1.a95cb38e.jpg"},664:function(e,t,o){"use strict";o.r(t);var n=o(0),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"_1-proxy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-proxy"}},[e._v("#")]),e._v(" 1 Proxy")]),e._v(" "),n("p",[e._v("A proxy, in its most general form, is a class functioning as an interface to something else. The proxy could interface to anything: a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate. In short, a proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. Use of the proxy can simply be forwarding to the real object, or can provide additional logic. In the proxy, extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked. For the client, usage of a proxy object is similar to using the real object, because both implement the same interface.")]),e._v(" "),n("p",[e._v("Here is the java code example")]),e._v(" "),n("p",[n("img",{attrs:{src:o(530),alt:""}})]),e._v(" "),n("p",[e._v("interface Sourceable")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public interface Sourceable {\n    public void method();\n}\n")])])]),n("p",[e._v("class Source")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public class Source implements Sourceable {\n    @Override\n    public void method() {\n        System.out.println("This is the original method.");\n    }\n}\n')])])]),n("p",[e._v("class Proxy")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public class Proxy implements Sourceable {\n\n    private Source source;\n    public Proxy(){\n        super();\n        this.source = new Source();\n    }\n    @Override\n    public void method() {\n        before();\n        source.method();\n        atfer();\n    }\n    private void atfer() {\n        System.out.println("after proxy!");\n    }\n    private void before() {\n        System.out.println("before proxy!");\n    }\n}\n')])])]),n("p",[e._v("Then do the test")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public class ProxyTest {\n    public static void main(String[] args) {\n        Sourceable source = new Proxy();\n        source.method();\n    }\n}\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);