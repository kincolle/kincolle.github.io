(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{561:function(e,n,t){e.exports=t.p+"assets/img/1.9c455714.png"},689:function(e,n,t){"use strict";t.r(n);var a=t(0),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_1-introduction-of-concurrent-hashmap-in-jdk-1-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-introduction-of-concurrent-hashmap-in-jdk-1-7"}},[e._v("#")]),e._v(" 1. Introduction Of Concurrent HashMap In JDK 1.7")]),e._v(" "),a("p",[e._v("ConcurrentHashMap is almost like HashMap and it supports concurrent operations, so it is more complex. A whole ConcurrentHashMap is comprised of Segments, that means ConcurrentHashMap is a Segment array and it extends ReentrantLock to do lock. So if every Segment is thread safe, then the whole ConcurrentHashMap is thread safe.")]),e._v(" "),a("p",[a("img",{attrs:{src:t(561),alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("concurrencyLevel")]),e._v("：The default value is 16. Which means in ConcurrentHashMap there are 16 Segments. theoretically, it can support at most 16 threads works at the same time if different thread works on different Segment. This value can be set when initial, but can not be expanded after initial."),a("br"),e._v("\nIn Segment, it is like HashMap but it will support thread safe.")]),e._v(" "),a("h2",{attrs:{id:"_2-initial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-initial"}},[e._v("#")]),e._v(" 2. Initial")]),e._v(" "),a("p",[e._v("initialCapacity: initial volume, it is initial value of a whole ConcurrentHashMap and will be divided qually into each Segment."),a("br"),a("br"),e._v("\nloadFactor: I hava said that Segment can not be expanded after initial, so it is used in every inner Segment.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public ConcurrentHashMap(int initialCapacity,\n                         float loadFactor, int concurrencyLevel) {\n    if (!(loadFactor > 0) || initialCapacity < 0 || concurrencyLevel <= 0)\n        throw new IllegalArgumentException();\n    if (concurrencyLevel > MAX_SEGMENTS)\n        concurrencyLevel = MAX_SEGMENTS;\n    // Find power-of-two sizes best matching arguments\n    int sshift = 0;\n    int ssize = 1;\n    // the concurrencyLevel is ssize，and it needs to be kept as the nth power of 2\n    while (ssize < concurrencyLevel) {\n        ++sshift;\n        ssize <<= 1;\n    }\n    // In default，concurrencyLevel is 16，sshift is 4\n    // After computing, segmentShift is 28，segmentMask is 15\n    this.segmentShift = 32 - sshift;\n    this.segmentMask = ssize - 1;\n\n    if (initialCapacity > MAXIMUM_CAPACITY)\n        initialCapacity = MAXIMUM_CAPACITY;\n\n    // initialCapacity will set the size of the whole map when initial\n    // Computing size of every segment can get according to initialCapacity \n    // if initialCapacity is 64，then every Segment will have size of 4\n    int c = initialCapacity / ssize;\n    if (c * ssize < initialCapacity)\n        ++c;\n    // default MIN_SEGMENT_TABLE_CAPACITY is, then it will not rehash when the first element comes and will do rehash when the second one comes \n    int cap = MIN_SEGMENT_TABLE_CAPACITY; \n    while (cap < c)\n        cap <<= 1;\n\n    // create Segment array\n    // and create the first element segment[0]\n    Segment<K,V> s0 =\n        new Segment<K,V>(loadFactor, (int)(cap * loadFactor),\n                         (HashEntry<K,V>[])new HashEntry[cap]);\n    Segment<K,V>[] ss = (Segment<K,V>[])new Segment[ssize];\n    // put the segment[0] into the array\n    UNSAFE.putOrderedObject(ss, SBASE, s0); // ordered write of segments[0]\n    this.segments = ss;\n}\n")])])]),a("p",[e._v('When the finishing completed, we get a Segment array. We use "new ConcurrentHashMap()" to do it, after the finishing:')]),e._v(" "),a("ul",[a("li",[e._v("length of Segment array is 16 and can not be changed.")]),e._v(" "),a("li",[e._v("Default size of Segment[i] is 2 and loadFactor is 0.75, so we have 2*0.75=1.5. That is why it will not rehash when the first element comes and will do rehash when the second one comes")]),e._v(" "),a("li",[e._v("Here we inited segment[0], and others are null")]),e._v(" "),a("li",[e._v("segmentShift is 32 - 4 = 28, segmentMask is 16 - 1 = 15")])]),e._v(" "),a("h2",{attrs:{id:"_3-put"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-put"}},[e._v("#")]),e._v(" 3. Put")]),e._v(" "),a("p",[e._v("Here let's see how put works:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public V put(K key, V value) {\n    Segment<K,V> s;\n    if (value == null)\n        throw new NullPointerException();\n    // 1. computing hash value of key\n    int hash = hash(key);\n    // 2. find position j in Segment array according to hash value\n    //    hash is 32 bit, move right segmentShift(28) bit, then left 4 bit,\n    \n    int j = (hash >>> segmentShift) & segmentMask;\n    // all are null except segment[0] after initial\n    // ensureSegment(j) 对 segment[j] 进行初始化\n    if ((s = (Segment<K,V>)UNSAFE.getObject          // nonvolatile; recheck\n         (segments, (j << SSHIFT) + SBASE)) == null) //  in ensureSegment\n        s = ensureSegment(j);\n    // 3. put new value into s\n    return s.put(key, hash, value, false);\n}\n")])])]),a("p",[e._v("The first layout is simple. Just find the Segment according to hash value then do put operation in the Segment."),a("br"),e._v("\nIn the Segment, it is comprised of array and linked likst.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("final V put(K key, int hash, V value, boolean onlyIfAbsent) {\n    // Before write into this segment, it needs lock firts\n    HashEntry<K,V> node = tryLock() ? null :\n        scanAndLockForPut(key, hash, value);\n    V oldValue;\n    try {\n        // this is a array in the segment\n        HashEntry<K,V>[] tab = table;\n        // use hash code to find the index in the array\n        int index = (tab.length - 1) & hash;\n        // first is the head of linked list\n        HashEntry<K,V> first = entryAt(tab, index);\n\n        for (HashEntry<K,V> e = first;;) {\n            if (e != null) {\n                K k;\n                if ((k = e.key) == key ||\n                    (e.hash == hash && key.equals(k))) {\n                    oldValue = e.value;\n                    if (!onlyIfAbsent) {\n                        // cover ole value\n                        e.value = value;\n                        ++modCount;\n                    }\n                    break;\n                }\n                // go on by the linked list\n                e = e.next;\n            }\n            else {\n                // if node is not null, then set it as the head of linked list; if it is null, do initial and set it as the head of linked list\n                if (node != null)\n                    node.setNext(first);\n                else\n                    node = new HashEntry<K,V>(hash, key, value, first);\n\n                int c = count + 1;\n                // if it is over the threshold, then do rehash\n                if (c > threshold && tab.length < MAXIMUM_CAPACITY)\n                    rehash(node); \n                else\n                    // if it is not over the threshold, then put node at the position of index in the tab array\n                    setEntryAt(tab, index, node);\n                ++modCount;\n                count = c;\n                oldValue = null;\n                break;\n            }\n        }\n    } finally {\n        // do unlock\n        unlock();\n    }\n    return oldValue;\n}\n")])])]),a("p",[e._v("Because of lock, it is thread safe.")]),e._v(" "),a("h2",{attrs:{id:"_4-ensuresegment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-ensuresegment"}},[e._v("#")]),e._v(" 4. ensureSegment")]),e._v(" "),a("p",[e._v("When ConcurrentHashMap do initial, it will create a segment[0]. For other segments, it will do initial when new elements come.")]),a("hr"),e._v("\nHere we need to think about concurrency, that may more than one threads to initial the same segment[k]. Only one can success."),a("p"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("private Segment<K,V> ensureSegment(int k) {\n    final Segment<K,V>[] ss = this.segments;\n    long u = (k << SSHIFT) + SBASE; // raw offset\n    Segment<K,V> seg;\n    if ((seg = (Segment<K,V>)UNSAFE.getObjectVolatile(ss, u)) == null) {\n        \n        Segment<K,V> proto = ss[0];\n        int cap = proto.table.length;\n        float lf = proto.loadFactor;\n        int threshold = (int)(cap * lf);\n\n        // initial the array in the segment[k]\n        HashEntry<K,V>[] tab = (HashEntry<K,V>[])new HashEntry[cap];\n        if ((seg = (Segment<K,V>)UNSAFE.getObjectVolatile(ss, u))\n            == null) { // check again that whether it is inited by other threads\n\n            Segment<K,V> s = new Segment<K,V>(lf, threshold, tab);\n            // Use while loopm and CAS, to make sure the current thread will success, then quit\n            while ((seg = (Segment<K,V>)UNSAFE.getObjectVolatile(ss, u))\n                   == null) {\n                if (UNSAFE.compareAndSwapObject(ss, u, null, seg = s))\n                    break;\n            }\n        }\n    }\n    return seg;\n}\n")])])]),a("p",[e._v("We can see that ensureSegment(int k) use CAS to control concurrency problems.")]),e._v(" "),a("h2",{attrs:{id:"_5-scanandlockforput"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-scanandlockforput"}},[e._v("#")]),e._v(" 5. scanAndLockForPut")]),e._v(" "),a("p",[e._v('When we want to put element into one segment, it will invoke "node = tryLock() ? null : scanAndLockForPut(key, hash, value)", that is to say it will do tryLock() to get lock of the current segment. If fail then go into scanAndLockForPut to get lock:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("private HashEntry<K,V> scanAndLockForPut(K key, int hash, V value) {\n    HashEntry<K,V> first = entryForHash(this, hash);\n    HashEntry<K,V> e = first;\n    HashEntry<K,V> node = null;\n    int retries = -1; // negative while locating node\n\n    // Get lock in the loop\n    while (!tryLock()) {\n        HashEntry<K,V> f; // to recheck first below\n        if (retries < 0) {\n            if (e == null) {\n                if (node == null) // speculatively create node\n                    \n                    node = new HashEntry<K,V>(hash, key, value, null);\n                retries = 0;\n            }\n            else if (key.equals(e.key))\n                retries = 0;\n            else\n                // go on with the linked list\n                e = e.next;\n        }\n\n        else if (++retries > MAX_SCAN_RETRIES) {\n            lock();\n            break;\n        }\n        else if ((retries & 1) == 0 &&\n                \n                 (f = entryForHash(this, hash)) != first) {\n            e = first = f; // re-traverse if entry changed\n            retries = -1;\n        }\n    }\n    return node;\n}\n")])])]),a("p",[e._v("There a 2 exits: one is tryLock() suceeds and quit the loop; another is over MAX_SCAN_RETRIES then do lock() and it will block the thread until get lock.")]),e._v(" "),a("h2",{attrs:{id:"_6-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-get"}},[e._v("#")]),e._v(" 6. Get")]),e._v(" "),a("p",[e._v("Get is easy:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("compute hash code and find the index in Segment array")])]),e._v(" "),a("li",[a("p",[e._v("fing position in the array in the segment")])]),e._v(" "),a("li",[a("p",[e._v("find entry in the linked list")]),e._v(" "),a("p",[e._v("public V get(Object key) {\nSegment<K,V> s; // manually integrate access methods to reduce overhead\nHashEntry<K,V>[] tab;\n// 1. hash value\nint h = hash(key);\nlong u = (((h >>> segmentShift) & segmentMask) << SSHIFT) + SBASE;\n// 2. get segment according to hash value\nif ((s = (Segment<K,V>)UNSAFE.getObjectVolatile(segments, u)) != null &&\n(tab = s.table) != null) {")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("     for (HashEntry<K,V> e = (HashEntry<K,V>) UNSAFE.getObjectVolatile\n              (tab, ((long)(((tab.length - 1) & h)) << TSHIFT) + TBASE);\n          e != null; e = e.next) {\n         K k;\n         if ((k = e.key) == key || (e.hash == h && key.equals(k)))\n             return e.value;\n     }\n }\n return null;\n")])])]),a("p",[e._v("}")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);