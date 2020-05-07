(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{688:function(t,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_1-introduction-of-sync"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-introduction-of-sync"}},[t._v("#")]),t._v(" 1 Introduction Of Sync")]),t._v(" "),n("p",[t._v("Future is a class which added in Java5. It is uesd for synchronized computing. The isDone is used for checking whether it completes and the get is user for blocking thread until computing completes or you can use cancel to stop computing.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("public class BasicFuture {\n    public static void main(String[] args) throws ExecutionException, InterruptedException {\n        ExecutorService es = Executors.newFixedThreadPool(10);\n        Future<Integer> f = es.submit(() -> {\n            // Do sync and return result\n            return 1;\n        });\n        f.get();\n    }\n}\n")])])]),n("p",[t._v("Even though the Future can do sync task, but it is hard to get the result because you only can get the result by blocking or polling. So, is there a better to get the result we want? The anwser is CompletableFuture.")]),t._v(" "),n("h2",{attrs:{id:"_2-introduction-of-completablefuture"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-introduction-of-completablefuture"}},[t._v("#")]),t._v(" 2 Introduction Of CompletableFuture")]),t._v(" "),n("h5",{attrs:{id:"sync"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sync"}},[t._v("#")]),t._v(" Sync")]),t._v(" "),n("p",[t._v("Fisrt, CompletableFuture implements Future interface, so you can use it as use Future. Second, CompletableFuture does not need to use thread pool to do sycn like the following:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('public static void test1() throws Exception{\n    CompletableFuture<String> completableFuture=new CompletableFuture();\n    new Thread(new Runnable() {\n        @Override\n        public void run() {\n            System.out.println("task doing...");\n            try {\n                Thread.sleep(3000);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            //tell completableFuture the task has been done\n            completableFuture.complete("result");\n        }\n    }).start();\n    //Get result and it may block if does not finish the computing\n    String result=completableFuture.get();\n    System.out.println("result:"+result);\n}\n')])])]),n("h5",{attrs:{id:"factory-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#factory-method"}},[t._v("#")]),t._v(" Factory Method")]),t._v(" "),n("h6",{attrs:{id:"_1-supplyasync"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-supplyasync"}},[t._v("#")]),t._v(" 1. supplyAsync")]),t._v(" "),n("p",[t._v("We can write code to build CompletableFuture and get the result. Then, we also can use supplyAsync to get it:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('public static void test2() throws Exception {\n    CompletableFuture<String> completableFuture=CompletableFuture.supplyAsync(()->{\n        System.out.println("task doing...");\n        try {\n            Thread.sleep(3000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        return "result";\n    });\n    System.out.println("result:"+completableFuture.get());\n}\n')])])]),n("h6",{attrs:{id:"_2-allof-and-anyof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-allof-and-anyof"}},[t._v("#")]),t._v(" 2. allOf and anyOf")]),t._v(" "),n("p",[t._v("The allOf function receive a CompletableFuture array and return a CompletableFuture"),n("Void",[t._v(" instance when all CompletableFuture instance finish its task. The anyOf means return a CompletableFuture"),n("Void",[t._v(" instance when any of all CompletableFuture instance finish its task.")])],1)],1),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('public static void test3() throws Exception {\n    CompletableFuture<String> completableFuture1=CompletableFuture.supplyAsync(()->{\n        System.out.println("task1 doing...");\n        try {\n            Thread.sleep(3000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        return "result1";\n    });\n\n    CompletableFuture<String> completableFuture2=CompletableFuture.supplyAsync(()->{\n        System.out.println("task2 doing...");\n        try {\n            Thread.sleep(3000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        return "result2";\n    });\n\n    CompletableFuture<Object> anyResult=CompletableFuture.anyOf(completableFuture1,completableFuture2);\n\n    System.out.println("result of the fisrt finished task:"+anyResult.get());\n\n    CompletableFuture<Void> allResult=CompletableFuture.allOf(completableFuture1,completableFuture2);\n\n    //wait until all task finished\n    allResult.join();\n    System.out.println("all task finished");\n\n}\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);