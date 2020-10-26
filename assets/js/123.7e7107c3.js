(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{750:function(a,e,n){"use strict";n.r(e);var s=n(0),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"p-name-space"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p-name-space"}},[a._v("#")]),a._v(" P Name Space")]),a._v(" "),n("p",[a._v("The P Name Space is used for replacing "),n("property",[a._v(" element.")])],1),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v('<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:p="http://www.springframework.org/schema/p"\n    xsi:schemaLocation="http://www.springframework.org/schema/beans\n        http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n    \x3c!-- stardard XML format --\x3e\n    <bean name="john-classic" class="com.knicolle.Person">\n        <property name="name" value="John Doe"/>\n        <property name="spouse" ref="jane"/>\n    </bean>\n\n    \x3c!-- p name space format --\x3e\n    <bean name="john-modern"\n        class="com.knicolle.Person"\n        p:name="John Doe"\n        p:spouse-ref="jane"/>\n\n</beans>\n')])])]),n("h2",{attrs:{id:"c-name-space"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#c-name-space"}},[a._v("#")]),a._v(" C Name Space")]),a._v(" "),n("p",[a._v("The P Name Space is used for replacing "),n("constructor-arg",[a._v(" element.")])],1),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v('<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:c="http://www.springframework.org/schema/c"\n    xsi:schemaLocation="http://www.springframework.org/schema/beans\n        http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n    <bean id="bar" class="x.y.Bar"/>\n    <bean id="baz" class="x.y.Baz"/>\n\n    \x3c!-- stardard XML format --\x3e\n    <bean id="foo" class="x.y.Foo">\n        <constructor-arg name="bar" ref="bar"/>\n        <constructor-arg name="baz" ref="baz"/>\n        <constructor-arg name="email" value="foo@bar.com"/>\n    </bean>\n\n    \x3c!-- c name space format --\x3e\n    <bean id="foo" class="x.y.Foo" c:bar-ref="bar" c:baz-ref="baz" c:email="foo@bar.com"/>\n\n\t\x3c!-- param index of c name space format --\x3e\n    <bean id="foo" class="x.y.Foo" c:_0-ref="bar" c:_1-ref="baz" c:_2="foo@bar.com"/>\n\n</beans>')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);