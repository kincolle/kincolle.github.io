(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{705:function(e,t,a){"use strict";a.r(t);var n=a(0),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_1-reason-of-using-threadpool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-reason-of-using-threadpool"}},[e._v("#")]),e._v(" 1. Reason Of Using ThreadPool")]),e._v(" "),a("p",[e._v("Persuming finish a service needs a runtime that it has: (1)T1:time of creating thread; (2)T2: time of doing task; (3)T3: time of destroying thread. If T1+T3>>>>>T2, then using ThreadPool will enhance performance of service.\nSo, what is the ThreadPool? The ThreadPool is like a pool of threads, when you want to use a thread then get one from the pool and return the thread back into pool when you finished your task. By this way, there is no runtime of creating thread and destroying thread. That is why it can enhance performance.")]),e._v(" "),a("h2",{attrs:{id:"_2-threadpool-in-java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-threadpool-in-java"}},[e._v("#")]),e._v(" 2. ThreadPool in Java")]),e._v(" "),a("p",[e._v("In java, it provides Executor to implement ThreadPool. Here is a structure of it.\n"),a("img",{attrs:{src:"Concurrency-Java-ThreadPool/1.png",alt:""}})]),e._v(" "),a("p",[e._v("Interface: Executor, CompletionService, ExecutorService, ScheduledExecutorService"),a("br"),e._v("\nAbstract Class：AbstractExecutorService"),a("br"),e._v("\nClass：ExecutorCompletionService, ThreadPoolExecutor, ScheduledThreadPoolExecutor"),a("br"),e._v("\nFrom the picture we can see that the most important thing is the ThreadPoolExecutor.")]),e._v(" "),a("h5",{attrs:{id:"threadpoolexecutor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#threadpoolexecutor"}},[e._v("#")]),e._v(" ThreadPoolExecutor")]),e._v(" "),a("p",[e._v("Here is the constructor:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public class ThreadPoolExecutor extends AbstractExecutorService {\n.....\npublic ThreadPoolExecutor(int corePoolSize,int maximumPoolSize,long keepAliveTime,TimeUnit unit,\n        BlockingQueue<Runnable> workQueue);\n\npublic ThreadPoolExecutor(int corePoolSize,int maximumPoolSize,long keepAliveTime,TimeUnit unit,\n        BlockingQueue<Runnable> workQueue,ThreadFactory threadFactory);\n\npublic ThreadPoolExecutor(int corePoolSize,int maximumPoolSize,long keepAliveTime,TimeUnit unit,\n        BlockingQueue<Runnable> workQueue,RejectedExecutionHandler handler);\n\npublic ThreadPoolExecutor(int corePoolSize,int maximumPoolSize,long keepAliveTime,TimeUnit unit,\n    BlockingQueue<Runnable> workQueue,ThreadFactory threadFactory,RejectedExecutionHandler handler);\n.....\n}\n")])])]),a("p",[e._v("corePoolSize: size of core pool, when pool is created there is no thread. When there are tasks coming then create threads to do tasks. When number of threads equal to corePoolSize, the latter will be put in to queue. That means the corePoolSize is the max size of parallel tasks. If invoke prestartAllCoreThreads(), then the ThreadPool will create all core threads in advance."),a("br")]),e._v(" "),a("p",[e._v("maximumPoolSize: Max size of ThreadPool, it means how many threads can be created. The MaximumPoolSize must >= corePoolSize."),a("br")]),e._v(" "),a("p",[e._v("keepAliveTime: Means how much time thread can be existing without any task. In default, only when number of threads in ThreadPool is larger than corePoolSize, the keepAliveTime will work. In other words, when number of threads in ThreadPool is larger than corePoolSize, and one thread without tasks has been existing for more than keepAliveTime, then shutdown."),a("br")]),e._v(" "),a("p",[e._v("Unit: Unit of keepAliveTime. There are 7 types:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("TimeUnit.DAYS;              \nTimeUnit.HOURS;         \nTimeUnit.MINUTES;       \nTimeUnit.SECONDS;      \nTimeUnit.MILLISECONDS;   \nTimeUnit.MICROSECONDS;    \nTimeUnit.NANOSECONDS;       \n")])])]),a("p",[e._v("workQueue: It is a blocking queue, used for stored tasks that waiting to be executed. When number of threads in ThreadPool is larger than corePoolSize, threads will be put into block queue to wait. Through workQueue the ThreadPool implements this function.There are 3 types:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ArrayBlockingQueue;\nLinkedBlockingQueue;\nSynchronousQueue;\n")])])]),a("p",[e._v("threadFactory: It is used for creating threads."),a("br")]),e._v(" "),a("p",[e._v("handler: It is the strategy when refuse to execute tasks."),a("br")]),e._v(" "),a("h5",{attrs:{id:"abstractexecutorservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstractexecutorservice"}},[e._v("#")]),e._v(" AbstractExecutorService")]),e._v(" "),a("p",[e._v("We can see that ThreadPoolExecutor extends AbstractExecutorService, here is the implementation of AbstractExecutorService:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public abstract class AbstractExecutorService implements ExecutorService {\n \n    protected <T> RunnableFuture<T> newTaskFor(Runnable runnable, T value) { };\n    protected <T> RunnableFuture<T> newTaskFor(Callable<T> callable) { };\n    public Future<?> submit(Runnable task) {};\n    public <T> Future<T> submit(Runnable task, T result) { };\n    public <T> Future<T> submit(Callable<T> task) { };\n    private <T> T doInvokeAny(Collection<? extends Callable<T>> tasks,\n                            boolean timed, long nanos)\n        throws InterruptedException, ExecutionException, TimeoutException {\n    };\n    public <T> T invokeAny(Collection<? extends Callable<T>> tasks)\n        throws InterruptedException, ExecutionException {\n    };\n    public <T> T invokeAny(Collection<? extends Callable<T>> tasks,\n                           long timeout, TimeUnit unit)\n        throws InterruptedException, ExecutionException, TimeoutException {\n    };\n    public <T> List<Future<T>> invokeAll(Collection<? extends Callable<T>> tasks)\n        throws InterruptedException {\n    };\n    public <T> List<Future<T>> invokeAll(Collection<? extends Callable<T>> tasks,\n                                         long timeout, TimeUnit unit)\n        throws InterruptedException {\n    };\n} \n")])])]),a("h5",{attrs:{id:"executorservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executorservice"}},[e._v("#")]),e._v(" ExecutorService")]),e._v(" "),a("p",[e._v("AbstractExecutorService is an abstract class, it implements ExecutorService interface. So let's see the implementation of xecutorService interface:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public interface ExecutorService extends Executor {\n \n    void shutdown();\n    boolean isShutdown();\n    boolean isTerminated();\n    boolean awaitTermination(long timeout, TimeUnit unit)\n        throws InterruptedException;\n    <T> Future<T> submit(Callable<T> task);\n    <T> Future<T> submit(Runnable task, T result);\n    Future<?> submit(Runnable task);\n    <T> List<Future<T>> invokeAll(Collection<? extends Callable<T>> tasks)\n        throws InterruptedException;\n    <T> List<Future<T>> invokeAll(Collection<? extends Callable<T>> tasks,\n                                  long timeout, TimeUnit unit)\n        throws InterruptedException;\n \n    <T> T invokeAny(Collection<? extends Callable<T>> tasks)\n        throws InterruptedException, ExecutionException;\n    <T> T invokeAny(Collection<? extends Callable<T>> tasks,\n                    long timeout, TimeUnit unit)\n        throws InterruptedException, ExecutionException, TimeoutException;\n}\n")])])]),a("h5",{attrs:{id:"executor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executor"}},[e._v("#")]),e._v(" Executor")]),e._v(" "),a("p",[e._v("ExecutorService extends Executor interface, so let's see implementation of Executor:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public interface Executor {\n    void execute(Runnable command);\n}\n")])])]),a("h5",{attrs:{id:"constructure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructure"}},[e._v("#")]),e._v(" Constructure")]),e._v(" "),a("p",[e._v("I think you have understand the relationship of ThreadPoolExecutor, AbstractExecutorService, ExecutorService and Executor.")]),e._v(" "),a("p",[e._v('Executor is a top interface and only a function "execute(Runnable)" is in there. The return of the "execute(Runnable)"  is void and its parameter is a Runnable class, which means you will pass a task into it. Then, ExecutorService extends Executor interface and define some functions like: submit, invokeAll, invokeAny and shutDown. AbstractExecutorService implementes ExecutorService interface, it implements all functions of ExecutorService. Then, ThreadPoolExecutor extends AbstractExecutorService.'),a("br")]),e._v(" "),a("p",[e._v("In ThreadPoolExecutor, there are some important functions:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("execute()\nsubmit()\nshutdown()\nshutdownNow()\n")])])]),a("p",[e._v("The execute() is defined in Executor and implemented in ThreadPoolExecutor. This function is a core function of ThreadPoolExecutor. Through it you can pass a task to let a thread do it. "),a("br"),e._v('\nsubmit() is defined in ExecutorService and implemented in AbstractExecutorService. It is like "execute()" that it can pass a task too. But the difference is "submit()" can get a return.'),a("br"),e._v("\nThe shutdown() and shutdownNow() are yused for closing threads.")]),e._v(" "),a("h2",{attrs:{id:"_3-learning-threadpool-in-detail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-learning-threadpool-in-detail"}},[e._v("#")]),e._v(" 3. Learning ThreadPool in Detail")]),e._v(" "),a("h3",{attrs:{id:"_3-1-runstate-of-threadpool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-runstate-of-threadpool"}},[e._v("#")]),e._v(" 3.1 runState Of ThreadPool")]),e._v(" "),a("p",[e._v("In ThreadPoolExecutor there is a volatile variable and some static final variables represent status of threads:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("volatile int runState;\nstatic final int RUNNING    = 0;\nstatic final int SHUTDOWN   = 1;\nstatic final int STOP       = 2;\nstatic final int TERMINATED = 3;\n")])])]),a("p",[e._v("The runState is state of the current ThreadPool, it uses volatile to assure the visibiliry. Here is the static final variables:")]),e._v(" "),a("ul",[a("li",[e._v("When ThreadPool is created, it is in RUNNING state")]),e._v(" "),a("li",[e._v("When invoke shutdown(), it is in SHUTDOWN state. At this time the ThreadPool can not get any new task and will wait on all task having finished.")]),e._v(" "),a("li",[e._v("When invoke shutdownNow(), it is in STOP state. At this time the ThreadPool can not get any new task and will try to stop the tasks which is being executed.")]),e._v(" "),a("li",[e._v("When the state is SHUTDOWN or STOP, and all working threads has been destroyed, after clear block queue, the state will be TERMINATED.")])]),e._v(" "),a("h3",{attrs:{id:"_3-2-task-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-task-execution"}},[e._v("#")]),e._v(" 3.2 Task Execution")]),e._v(" "),a("p",[e._v("Let's some important variables in ThreadPoolExecutor class")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("private final BlockingQueue<Runnable> workQueue;\nprivate final ReentrantLock mainLock = new ReentrantLock();                                                        \nprivate final HashSet<Worker> workers = new HashSet<Worker>();\nprivate volatile long  keepAliveTime;    \nprivate volatile boolean allowCoreThreadTimeOut;  \nprivate volatile int   corePoolSize;  \nprivate volatile int   maximumPoolSize;\nprivate volatile int   poolSize;       \nprivate volatile RejectedExecutionHandler handler; \nprivate volatile ThreadFactory threadFactory;   \nprivate int largestPoolSize;  \nprivate long completedTaskCount;\n")])])]),a("p",[e._v("I have introduced corePoolSize, maximumPoolSize, poolSize, workQueue, handler, keepAliveTime and ThreadFactory.")]),e._v(" "),a("h3",{attrs:{id:"_3-3-initial-threadpool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-initial-threadpool"}},[e._v("#")]),e._v(" 3.3 Initial ThreadPool")]),e._v(" "),a("p",[e._v("In default, when ThreadPool is created, there is no threads in it until tasks has been put into it. If you want to create threads after creating ThreadPoll immediately, there are 2 functions:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public boolean prestartCoreThread() {\n    return addIfUnderCorePoolSize(null); \n}\n \npublic int prestartAllCoreThreads() {\n    int n = 0;\n    while (addIfUnderCorePoolSize(null))\n        ++n;\n    return n;\n}\n")])])]),a("h3",{attrs:{id:"_3-4-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-queue"}},[e._v("#")]),e._v(" 3.4 Queue")]),e._v(" "),a("p",[e._v("I have mentioned queue from time to time, that is workQueue, and it is used for storing tasks that are waiting for being executed. There are 3 types of it:")]),e._v(" "),a("ul",[a("li",[e._v("ArrayBlockingQueue: It is based on a first in first out array, this queue must define a size.")]),e._v(" "),a("li",[e._v("LinkedBlockingQueue: It is based on a first in first out LinkedList, if you do not define a size, then the size will be Integer.MAX_VALUE.")]),e._v(" "),a("li",[e._v("synchronousQueue: This is a special queue that it won't store tasks but create a new thread to do tasks.")])]),e._v(" "),a("h3",{attrs:{id:"_3-5-task-rejected-strategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-task-rejected-strategy"}},[e._v("#")]),e._v(" 3.5 Task Rejected Strategy")]),e._v(" "),a("p",[e._v("When the queue is full and the number of threads is maximumPoolSize, then the latter tasks will be refused. Here are the 4 strategies:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ThreadPoolExecutor.AbortPolicy: Give up this task and throw RejectedExecutionException\nThreadPoolExecutor.DiscardPolicy: Give up this task and do not throw Exception\nThreadPoolExecutor.DiscardOldestPolicy:Give up the task at the frontest queue and do tasks execution again\nThreadPoolExecutor.CallerRunsPolicy: Let the invoking thread do this task\n")])])]),a("h3",{attrs:{id:"_3-6-shutdown-of-threadpool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-shutdown-of-threadpool"}},[e._v("#")]),e._v(" 3.6 Shutdown of ThreadPool")]),e._v(" "),a("p",[e._v("For shotdown ThreadPool, ThreadPoolExecutor provides 2 functions: shutdown()和shutdownNow(). I have already introduced them.")]),e._v(" "),a("h3",{attrs:{id:"_3-7-volume-of-threadpool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-volume-of-threadpool"}},[e._v("#")]),e._v(" 3.7 Volume Of ThreadPool")]),e._v(" "),a("p",[e._v("For changing volume Of ThreadPool, ThreadPoolExecutor provides 2 functions: setCorePoolSize() and setMaximumPoolSize():")]),e._v(" "),a("ul",[a("li",[e._v("setCorePoolSize：Set size of CorePool")]),e._v(" "),a("li",[e._v("setMaximumPoolSize：Set size of the max mumber of threads")])]),e._v(" "),a("h3",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[e._v("#")]),e._v(" Demo")]),e._v(" "),a("p",[e._v("Here first is a fundamental demo:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('public class ThreadPoolDemo {\n    public static class MyTask implements Runnable{\n        @Override\n        public void run() {\n            System.out.println(System.currentTimeMillis()+":Thread ID:"+Thread.currentThread().getId());\n            try{\n                Thread.sleep(1000);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        MyTask task = new MyTask();\n        ExecutorService es = Executors.newFixedThreadPool(5);\n        for(int i =0;i<10;i++){\n            es.submit(task);\n        }\n    }\n}\n')])])])])}),[],!1,null,null,null);t.default=o.exports}}]);