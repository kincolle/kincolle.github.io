(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{739:function(e,t,n){"use strict";n.r(t);var i=n(0),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("If we have 2 classed, they have no relationship of DI but they have an order of init, then we need to use DependsOn of spring. For example, when the Read Bean inits it will read config and the Write Bean inits it will write config, so Read Bean must inits after Write Bean inits.")]),e._v(" "),n("p",[e._v("Here we have a MockFileclass with a stataic field used for storing file:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public class MockFile {\n    private static String filecontent;\n\n    public static String getFilecontent() {\n        return filecontent;\n    }\n    public static void setFilecontent(String filecontent) {\n        MockFile.filecontent = filecontent;\n    }\n}\n")])])]),n("p",[e._v("Create ReadWork.java:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public class ReadWork {\n    public ReadWork() {\n        System.out.print("ReadWork constructor inits:");\n        System.out.println(MockFile.getFilecontent());\n    }\n}\n')])])]),n("p",[e._v("Create WriteWork.java:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public WriteWork() throws InterruptedException {\n    System.out.println("WriteWork constructor inits and write: property:better");\n    Thread.sleep(3000);\n    MockFile.setFilecontent("property:better");\n}\n')])])]),n("p",[e._v("In beans.xml")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<bean id="writeWork" class="com.kincolle.depends.WriteWork" />\n<bean id="readWork" class="com.kincolle.depends.ReadWork"  />\n')])])]),n("p",[e._v("Do inits")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public static void main(String[] args) throws Exception {\n    new ClassPathXmlApplicationContext("beans.xml");\n}\n')])])]),n("p",[e._v("Run the program and the result will be:")]),e._v(" "),n("p",[e._v("First:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("WriteWork constructor inits and write: property:better\n")])])]),n("p",[e._v("After 3 seconds:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("ReadWork constructor inits:property:better")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);