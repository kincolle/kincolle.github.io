(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{519:function(t,n,e){t.exports=e.p+"assets/img/1.a3283b86.png"},651:function(t,n,e){"use strict";e.r(n);var i=e(0),r=Object(i.a)({},(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"introduction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),i("p",[t._v("I copy an introduction of it from "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Merge_sort",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),i("OutboundLink")],1)]),t._v(" "),i("blockquote",[i("p",[t._v("n computer science, merge sort (also commonly spelled mergesort) is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output. Mergesort is a divide and conquer algorithm that was invented by John von Neumann in 1945. A detailed description and analysis of bottom-up mergesort appeared in a report by Goldstine and von Neumann as early as 1948.")])]),t._v(" "),i("p",[t._v("The following picture will show you how it works:")]),t._v(" "),i("p",[i("img",{attrs:{src:e(519),alt:""}})]),t._v(" "),i("h2",{attrs:{id:"code"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),i("p",[t._v("Here is an example code:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v('public class MergeSortTest {\n    public static void main(String[] args) {\n        int[] data = new int[] { 5, 3, 6, 2, 1, 9, 4, 8, 7 };\n        print(data);\n        mergeSort(data);\n        System.out.println("After sort:");\n        print(data);\n    }\n\n    public static void mergeSort(int[] data) {\n        sort(data, 0, data.length - 1);\n    }\n\n    public static void sort(int[] data, int left, int right) {\n        if (left >= right)\n            return;\n        int center = (left + right) / 2;\n        sort(data, left, center);\n        sort(data, center + 1, right);\n        merge(data, left, center, right);\n        print(data);\n    }\n\n    public static void merge(int[] data, int left, int center, int right) {\n        int[] tmpArr = new int[data.length];\n        int mid = center + 1;\n        int third = left;\n        int tmp = left;\n        while (left <= center && mid <= right) {\n            if (data[left] <= data[mid]) {\n                tmpArr[third++] = data[left++];\n            } else {\n                tmpArr[third++] = data[mid++];\n            }\n        }\n        while (mid <= right) {\n            tmpArr[third++] = data[mid++];\n        }\n        while (left <= center) {\n            tmpArr[third++] = data[left++];\n        }\n        while (tmp <= right) {\n            data[tmp] = tmpArr[tmp++];\n        }\n    }\n\n    public static void print(int[] data) {\n        for (int i = 0; i < data.length; i++) {\n            System.out.print(data[i] + "\\t");\n        }\n        System.out.println();\n    }\n}\n')])])]),i("p",[t._v("The result will be:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("5\t3\t6\t2\t1\t9\t4\t8\t7\t\n3\t5\t6\t2\t1\t9\t4\t8\t7\t\n3\t5\t6\t2\t1\t9\t4\t8\t7\t\n3\t5\t6\t1\t2\t9\t4\t8\t7\t\n1\t2\t3\t5\t6\t9\t4\t8\t7\t\n1\t2\t3\t5\t6\t4\t9\t8\t7\t\n1\t2\t3\t5\t6\t4\t9\t7\t8\t\n1\t2\t3\t5\t6\t4\t7\t8\t9\t\n1\t2\t3\t4\t5\t6\t7\t8\t9\t\nAfter sort:\n1\t2\t3\t4\t5\t6\t7\t8\t9")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);