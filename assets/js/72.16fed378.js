(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{673:function(t,e,a){"use strict";a.r(e);var r=a(0),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("UDTF, that is short for User-Defined Table-Generating Functions, can be created by extending the GenericUDTF abstract class and then implementing the initialize, process, and possibly close methods. The initialize method is used to define the argument types to expect. The UDTF must then return an object inspector corresponding to the row objects that the UDTF will generate. After calling  initialize(), using the process() method to give rows. While in process(), the UDTF can produce and forward rows to other operators by calling forward(). Lastly, Hive will call the close() method when all the rows have passed to the UDTF.")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("The content in studentScore.txt is like the following")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}})])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("80")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("70")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("50")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("60")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("95")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("80")])])])]),t._v(" "),a("h5",{attrs:{id:"_1-upload-studentscore-txt-to-hdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-upload-studentscore-txt-to-hdfs"}},[t._v("#")]),t._v(" (1) Upload studentScore.txt to HDFS")]),t._v(" "),a("p",[t._v("bin/hadoop fs -put /home/wangzhun/tmp/studentScore.txt wz")]),t._v(" "),a("h5",{attrs:{id:"_2-create-table-and-input-content-of-studentscore-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-table-and-input-content-of-studentscore-txt"}},[t._v("#")]),t._v(" (2) Create table and input content of studentScore.txt")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("create table studentScore(name string,score int) ROW FORMAT DELIMITED Fields TERMINATED BY '\\t';\n\nload data inpath '/user/root/wz/studentScore.txt' overwrite into table studentScore;\n")])])]),a("h5",{attrs:{id:"_3-write-udtf-program"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-write-udtf-program"}},[t._v("#")]),t._v(" (3) Write UDTF program")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('package com.wz.udf;  \nimport java.util.ArrayList;  \nimport org.apache.hadoop.hive.ql.udf.generic.GenericUDTF;  \nimport org.apache.hadoop.hive.ql.exec.UDFArgumentException;  \nimport org.apache.hadoop.hive.ql.exec.UDFArgumentLengthException;  \nimport org.apache.hadoop.hive.ql.metadata.HiveException;  \nimport org.apache.hadoop.hive.serde2.objectinspector.ObjectInspector;  \nimport org.apache.hadoop.hive.serde2.objectinspector.ObjectInspectorFactory;  \nimport org.apache.hadoop.hive.serde2.objectinspector.StructObjectInspector;  \nimport org.apache.hadoop.hive.serde2.objectinspector.primitive.PrimitiveObjectInspectorFactory;  \n  \npublic class staticScore extends GenericUDTF{  \n  Integer nTotalScore = Integer.valueOf(0);       //score  \n  Object forwardObj[] = new Object[1];  \n  String strStudent;       //student name  \n  @Override  \n  public void close() throws HiveException {    \n        //output score of the last student  \n    forwardObj[0]=(strStudent+":"+String.valueOf(nTotalScore));  \n    forward(forwardObj);  \n    }  \n  \n    \n  @Override  \n  public StructObjectInspector initialize(ObjectInspector[] args)throws UDFArgumentException {  \n          strStudent="";  \n      ArrayList<String> fieldNames = new ArrayList<String>();  \n          ArrayList<ObjectInspector> fieldOIs = new ArrayList<ObjectInspector>();  \n          fieldNames.add("col1");  \n          fieldOIs.add(PrimitiveObjectInspectorFactory.javaStringObjectInspector);  \n          return ObjectInspectorFactory.getStandardStructObjectInspector(fieldNames,fieldOIs);  \n       }  \n  \n  \n  @Override  \n  public void process(Object[] args) throws HiveException {  \n    if(!strStudent.isEmpty() && !strStudent.equals(args[0].toString()))  \n    {  \n       String[] newRes = new String[1];  \n       newRes[0]=(strStudent+":"+String.valueOf(nTotalScore));  \n       forward(newRes);  \n       nTotalScore=0;  \n    }     \n    strStudent=args[0].toString();  \n    nTotalScore+=Integer.parseInt(args[1].toString());  \n       }  \n   }  \n')])])]),a("h5",{attrs:{id:"_4-package-jar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-package-jar"}},[t._v("#")]),t._v(" (4) Package jar")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("javac -classpath /home/wangzhun/hadoop/hadoop-0.20.2/hadoop-0.20.2-core.jar:/home/wangzhun/hive/hive-0.8.1/lib/hive-exec-0.8.1.jar staticScore.java\n\njar -cvf staticScore.jar com/wz/udf/staticScore.class\n")])])]),a("h5",{attrs:{id:"_5-upload-the-jar-into-hive-and-do-computing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-upload-the-jar-into-hive-and-do-computing"}},[t._v("#")]),t._v(" (5) upload the jar into hive and do computing")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("add jar /home/wangzhun/hive/hive-0.8.1/lib/staticScore.jar;\n\ncreate temporary function statics as 'com.wz.udf.staticScore';\n")])])]),a("p",[t._v("Then the result will be:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("hive> select statics(studentScore.name,studentScore.score) as col1 from studentScore;  \n\nA:290  \nB:325     ")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);