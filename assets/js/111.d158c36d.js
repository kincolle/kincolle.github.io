(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{730:function(n,e,t){"use strict";t.r(e);var a=t(0),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[n._v("#")]),n._v(" Introduction")]),n._v(" "),t("p",[n._v("@Autowired is added into spring since Spring2.5. It can set bean into member variable, function or contructor with this annotation without xml file. The @Autowired works according to bean type, so, if you want to it works with bean name you need to use @Qualifier.")]),n._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[n._v("#")]),n._v(" Example")]),n._v(" "),t("p",[n._v("xml file:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.0.xsd\n          http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.0.xsd">\n    <context:component-scan base-package="kincolle"/>\n    <bean id="cdPlayer" class="kincolle.CDPlayer"/>\n</beans>\n')])])]),t("p",[n._v("An interface")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("public interface CompactDisc {\n    void play();\n}\n")])])]),t("p",[n._v("Use @Component to define a bean.")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('@Component\npublic class SgtPeppers implements CompactDisc{\n    @Override\n    public void play() {\n        System.out.println("SgtPeppers playing....");\n    }\n}\n')])])]),t("p",[n._v("Let's see 3 types of using @Autowired:")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("function")]),n._v(" "),t("p",[n._v("public class CDPlayer {\nCompactDisc cd;"),t("br"),n._v("\n@Autowired\npublic void setCompactDisc(CompactDisc cd){\nthis.cd = cd;\n}\npublic void say(){\ncd.play();\n}\n}")])]),n._v(" "),t("li",[t("p",[n._v("member variable")]),n._v(" "),t("p",[n._v("public class CDPlayer{\n@Autowired\nCompactDisc cd;\npublic void say(){\ncd.play();\n}\n}")])]),n._v(" "),t("li",[t("p",[n._v("constructor")]),n._v(" "),t("p",[n._v("public class CDPlayer {\nCompactDisc cd;"),t("br"),n._v("\n@Autowired\npublic CDPlayer(CompactDisc cd){\nthis.cd = cd;\n}\npublic void say(){\ncd.play();\n}\n}")])])]),n._v(" "),t("p",[n._v("Test class")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('public class Test {\n    public static void main(String[] args) {\n        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("AutowiredBean.xml");\n        CDPlayer player = (CDPlayer) context.getBean("cdPlayer");\n        player.say();\n    }\n}\n')])])]),t("p",[n._v("The result is")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("SgtPeppers playing…\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);