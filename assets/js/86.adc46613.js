(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{693:function(e,t,n){"use strict";n.r(t);var a=n(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"_1-something-about-thread"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-something-about-thread"}},[e._v("#")]),e._v(" 1 Something About Thread")]),e._v(" "),n("p",[e._v("Before I introduce thread, I'd like to introduce its mother process. At earlier time, Process is the fundamental executin unit. At the modern thread design, process is the docker of thread. Different Processed share no main memory but different threads of one process shared main memory."),n("br"),e._v("\nThe following picture will show yout the life time of thread.")]),e._v(" "),n("p",[e._v("Status of thread is defined in the enum")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public enum State{\n\tNEW,\n\tRUNNABLE,\n\tBLOCKED,\n\tWAITING,\n\tTIMED_WAITING,\n\tTERMINATED;\n}\n")])])]),n("p",[e._v("NEW status means created thread which still not run even one time. Until stat() is invoked, thread starts. If a thread meets synchronized block when running, then this thread will go into BLOCKED status and stop running until get the lock to unlock. Both WAITING and TIMED_WAITING means waiting status. The difference is that WAITING means wait in no limited time and TIMED_WAITING means wait in limited time. You may wonder what threads wait for. Generally speaking, WAITING threads wait for some special event like notify(). When threads finish execution, its status will be TERMINATED.")]),e._v(" "),n("blockquote",[n("p",[e._v("From NEW status starting means never get back to NEW and is the same to RUNNABLE.")])]),e._v(" "),n("h1",{attrs:{id:"_2-thread-basic-using"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-thread-basic-using"}},[e._v("#")]),e._v(" 2 Thread Basic Using")]),e._v(" "),n("p",[e._v("To learn to use concurrency, you need to learn its API first. In this section I will show you about it.")]),e._v(" "),n("h2",{attrs:{id:"_2-1-create-thread"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-create-thread"}},[e._v("#")]),e._v(" 2.1 Create Thread")]),e._v(" "),n("p",[e._v("It's east to create one thread. Just use 'new' to create one thread and use start() to run it.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("Thread thread1 = new Thread();\nthread1.start();\n")])])]),n("p",[e._v("What it will do affer start() is the point. In Thread class, there is a run() function and start() will create one new thread and do the run()."),n("br"),e._v("\nHere is an attention: the following code can be compiled and runned, but it just does run() of the current thread and not create one new thread.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("Thread thread1 = new Thread();\nthread1.run();\n")])])]),n("p",[e._v("So, there is a big difference between start() and run()."),n("br"),e._v("\nIn the default situation, run() of Thread class does nothing. So, we need to Override the run() function."),n("br")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('Thread thread1 = new Thread(){\n\t@Override\n\tpublic static run(){\n\t\tsystem.out.println("Hello, this is thread1");\n\t}\n};\nthread1.start();\n')])])]),n("p",[e._v('The codes above use an anonymous class and overaride run() which us "system.out.println("Hello, this is thread1");". As we know in java there is only a single "extend", which means is a rare resources. So, we can use an interface called "Runnable" to do it. In Runnable, there is only one function "run()".')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public interface Runnable{\n\tpublic abstract void run();\n}\n")])])]),n("p",[e._v("Besides, in Thread class there is a important construction function.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public Thread(Runnable target);\n")])])]),n("p",[e._v("It will pass a Runnable instance and when start() is invoked the new thread will do Runnable.run(). In the source code is like the following")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public Thread(Runnable target) {\n    init(null, target, "Thread-" + nextThreadNum(), 0);\n}\n')])])]),n("p",[e._v("The following will show you one case of uee Runnable")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public class NewThreadUsingRannable implements Runnable{\n\tpublic static void main(String[] args) {\n        Thread t1 = new Thread(new NewThreadUsingRannable());\n        t1.start();\t\n  \t}\n\t@Override\n\tpublic void run(){\n\t\tSystem.out.println("This is using Runnable interface");\n\t}\n}\n')])])]),n("h2",{attrs:{id:"_2-2-stop-thread"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-stop-thread"}},[e._v("#")]),e._v(" 2.2 Stop Thread")]),e._v(" "),n("p",[e._v("You can use stop() to stop one thread. But in multi-thread situation I sugeest not to use it. The reason is since it will stop one thread immediately, concurrency may happen. For example, there are 2 datas:")]),e._v(" "),n("blockquote",[n("p",[e._v("data1: Id=1, Name=tokyo;"),n("br"),e._v("\ndata2: Id=2, Name=kyoto;")])]),e._v(" "),n("p",[e._v("If will write data1 to the database and it stop when finished with Id but not with Name. That means we get only half of data1 in the database. Then write data2 into database, the result may be:")]),e._v(" "),n("blockquote",[n("p",[e._v("data1: Id=1, Name=kyoto;"),n("br"),e._v("\ndata2: Id=2, Name=null;")])]),e._v(" "),n("p",[e._v("The following picture will show you why")]),e._v(" "),n("h2",{attrs:{id:"_2-3-interrupt-thread"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-interrupt-thread"}},[e._v("#")]),e._v(" 2.3 Interrupt Thread")]),e._v(" "),n("p",[e._v('As I said in 2.3, stop() function has some problems, so there is another function called interrupt. Interrupt will notice a thread that "You show quit". What the will the thread do depends on the thread it self. About  interrupt, there are 3  functions')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public void Thread.interrupt()  // interrupt a thread\npublic boolean Thread.isInterrupted()  // judge whether a thread is interrupted\npublic static boolean Thread.interrupted()  // judge whether a thread is interrupted and clear  all interrupt status\n")])])]),n("p",[e._v("Thread.interrupt() is a function of a instance which will interrupt one thread (means set interrupted flag). Thread.isInterrupted() is a function of a instance too and it will judge whether the thread is interrupted. So, what will the following codes do?")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public static void main(String[] args) throws InterruptedException {\n    Thread thread1 = new Thread(){\n        @Override\n        public void run(){\n            while (true){\n                Thread.yield();\n            }\n        }\n    };\n    thread1.start();\n    Thread.sleep(2000);\n    thread1.interrupt();\n}\n")])])]),n("p",[e._v("Here, apparently thread1 is interrupted but there is no logic codes in interruption of thread1. So, thread1 is interrupted and will do nothing."),n("br"),e._v("\nIf you hope thread1 will quit when interrupt, the do like the following code.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public static void main(String[] args) throws InterruptedException {\n    Thread thread1 = new Thread(){\n        @Override\n        public void run(){\n            while (true){\n                if(Thread.currentThread().isInterrupted()){\n                    System.out.println("it is interrupted");\n                    break;\n                }\n                Thread.yield();\n            }\n        }\n    };\n    thread1.start();\n    Thread.sleep(2000);\n    thread1.interrupt();\n}\n')])])]),n("h2",{attrs:{id:"_2-5-wait-and-notify"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-wait-and-notify"}},[e._v("#")]),e._v(" 2.5 wait and notify")]),e._v(" "),n("p",[e._v("For cooperation of threads, JDK provides 2 important interface wait() and notify(). These 2 functions are not in Thread class but in Obeject class. That means any object cab use them."),n("br"),e._v("\nThe signature is like the following:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public final void wait() throws InterrruptedException\npublic final native void notify()\n")])])]),n("p",[e._v("When a instance invokes wait(), the current thread will wait on this instance. What does that means? For example, thread A invokes obj.wait(), then thread A will stop operating and tuen status into WAIT. So, when will this end? Until another thread invokes obj.wait(). So, this obj instance is a way to communicate between threads."),n("br"),e._v("\nSo, how does wait() and notify() work? The following picture will show you this.\n"),n("img",{attrs:{src:"Concurrency-Java-Parallel-Program-Basic-Knowledge/1.png",alt:""}}),e._v("\nIf a thread use object.wait(), then it will go into wait queue of the object instance. In this wait queue, numbers of threads may in it, because numbers of threads are wait for one object. When object.notify() is invoked, it will choose one randomly to notify. Here, the choosing is not fair."),n("br"),e._v("\nBesides notify(), there is another method named notifyall() in object instance. The difference is that it will nofity all threads."),n("br"),e._v("\nOne point needed to be emphasized is that object.wait() can not be invoked at any time. It must be in synchronized block, no matter wait() or nofity(), it needs a monitor of a object. Here is a example of it:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public class WaitAndNofity {\n    final static Object object = new Object();\n    public static class T1 extends Thread{\n        public void run(){\n            synchronized (object){\n                System.out.println(System.currentTimeMillis()+":T1 start.");\n                try {\n                    System.out.println(System.currentTimeMillis()+"T1 wait for object.");\n                    object.wait();\n                }catch (InterruptedException e){\n                    e.printStackTrace();\n                }\n                System.out.println(System.currentTimeMillis()+"T1 end.");\n            }\n        }\n    }\n    public static class T2 extends Thread{\n        public void run(){\n            synchronized (object){\n                System.out.println(System.currentTimeMillis() +"T2 start.");\n                object.notify();\n                System.out.println(System.currentTimeMillis()+"T2 end.");\n                try {\n                    Thread.sleep(2000);\n                }catch (InterruptedException e){\n                    e.printStackTrace();\n                }\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Thread t1 = new T1();\n        Thread t2 = new T2();\n        t1.start();\n        t2.start();\n    }\n}\n')])])]),n("p",[e._v("Then, run the code and the result will be:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("1521272046986:T1 start.\n1521272046986T1 wait for object.\n1521272046986T2 start.\n1521272046986T2 end.\n1521272048987T1 end.\n")])])]),n("h2",{attrs:{id:"_2-6-join-and-yield"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-join-and-yield"}},[e._v("#")]),e._v(" 2.6 join and yield")]),e._v(" "),n("p",[e._v("At the most situation, input of one thread may depends on other threads. At this time, you can use join().Here are 2 join functinos:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public final void join() throws InterruptedException\npublic final synchronized void join(long millis) throws InterruptedException    \n")])])]),n("p",[e._v("THe first one means wait forever until the targer thread has finished. The second one provides a waiting time, and if over it then go on. Here is a join() intance:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public class JoinMain {\n    public volatile static int i = 0;\n    public static class addThread extends Thread{\n        @Override\n        public void run() {\n            for(i=0;i<10000000;i++);\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        addThread addThread = new addThread();\n        addThread.start();\n        addThread.join();\n        System.out.println(i);\n    }\n}\n")])])]),n("p",[e._v('In the main function, if there is no join(), the i may less than 10000000. Since there is a join(), so the "System.out.println(i);" must wait for the addThread. That is the reason the outcome will be 10000000.'),n("br"),e._v("\nAbout join, I want to say that in fact it invokes wait() on the current object.Here is a part of the source code in JDK:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("while(isAlinve()){\n\twait(0)\n}\n")])])]),n("p",[e._v("We can see that it let the invoking thread wait on current object. When the current thread finished, waited thread will invoke nofityall() to notify all waited thread to go on.")]),e._v(" "),n("h2",{attrs:{id:"_2-7-volatile-and-jmm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-volatile-and-jmm"}},[e._v("#")]),e._v(" 2.7 volatile and JMM")]),e._v(" "),n("p",[e._v("I have described JMM bebore and all JMM is about atomic thing. volatile is for that. So if you want to know something about vaolatile, just see my article about JMM.")])])}),[],!1,null,null,null);t.default=i.exports}}]);