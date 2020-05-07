(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{521:function(t,n,e){t.exports=e.p+"assets/img/shell1.80f0144a.png"},522:function(t,n,e){t.exports=e.p+"assets/img/shell2.5baffd4d.png"},523:function(t,n,e){t.exports=e.p+"assets/img/shell3.51a07502.png"},648:function(t,n,e){"use strict";e.r(n);var a=e(0),i=Object(a.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("It will split a data set that need to be sorted into several  parts and sort every part by using insert sort. Do there again until all the data has been sorted. The following picture will show you the detail:")]),t._v(" "),a("p",[a("img",{attrs:{src:e(521),alt:""}}),t._v(" "),a("img",{attrs:{src:e(522),alt:""}}),t._v(" "),a("img",{attrs:{src:e(523),alt:""}})]),t._v(" "),a("p",[t._v("It is faster than insert sort.")]),t._v(" "),a("h2",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),a("p",[t._v("Here is the example code:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('public class ShellSort {\n    public static void main(String[] args) {\n        int a[] = {5,1,3,7,2,4,9,6,10,8};\n        ShellSort  obj=new ShellSort();\n        System.out.println("Initial value ：");\n        obj.print(a);\n        obj.shellSort(a);\n        System.out.println("\\nAfter sort：");\n        obj.print(a);\n\n    }\n    private void shellSort(int[] a) {\n        int dk = a.length/2;\n        while( dk >= 1  ){\n            ShellInsertSort(a, dk);\n            dk = dk/2;\n        }\n    }\n    private void ShellInsertSort(int[] a, int dk) {\n        for(int i=dk;i<a.length;i++){\n            if(a[i]<a[i-dk]){\n                int j;\n                int x=a[i];//x is the value wait to be inserted\n                a[i]=a[i-dk];\n                for(j=i-dk;  j>=0 && x<a[j];j=j-dk){\n                    a[j+dk]=a[j];\n                }\n                a[j+dk]=x;//insert\n            }\n        }\n    }\n    public void print(int a[]){\n        for(int i=0;i<a.length;i++){\n            System.out.print(a[i]+" ");\n        }\n    }\n}\n')])])]),a("p",[t._v("The result will be:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Initial value ：\n3 1 5 7 2 4 9 6 10 8 \nAfter sort：\n1 2 3 4 5 6 7 8 9 10 ")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);