(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{670:function(n,e,t){"use strict";t.r(e);var a=t(0),o=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"invocationhandler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invocationhandler"}},[n._v("#")]),n._v(" InvocationHandler")]),n._v(" "),t("p",[n._v("Here is the introduction in Oracle:")]),n._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[n._v("InvocationHandler is the interface implemented by the invocation handler of a proxy instance.Each proxy instance has an associated invocation handler. When a method is invoked on a proxy instance, the method invocation is encoded and dispatched to the invoke method of its invocation handler.")])]),n._v(" "),t("p",[n._v("Here is an example:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('import java.lang.reflect.*;\n\npublic class Main {\n    static void customer(ProxyInterface pi){\n        pi.say();\n    }\n    public static void main(String[] args){\n        RealObject real = new RealObject();\n        ProxyInterface proxy = (ProxyInterface)Proxy.newProxyInstance(ProxyInterface.class.getClassLoader(),new Class[]{ProxyInterface.class}, new ProxyObject(real));\n        customer(proxy);\n    }\n}\n\n\ninterface ProxyInterface{\n    void say();\n}\n\nclass RealObject implements ProxyInterface{\n    public void say(){\n        System.out.println("i\'m talking");\n    }\n}\n\n//implement InvocationHandler \nclass ProxyObject implements InvocationHandler{\n    private Object proxied = null;\n    public ProxyObject(){\n        \n    }\n    public ProxyObject(Object proxied){\n        this.proxied  = proxied;\n    }\n    public Object invoke(Object arg0, Method arg1, Object[] arg2) throws Throwable {\n        System.out.println("hello");\n        return arg1.invoke(proxied, arg2);\n    };\n}\n')])])]),t("p",[n._v("Here we can see the proxy class implements an InvocationHandler interface. We can use newProxyInstance to get a instance then use it as a param.")])])}),[],!1,null,null,null);e.default=o.exports}}]);