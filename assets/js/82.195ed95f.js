(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{679:function(e,t,n){"use strict";n.r(t);var i=n(0),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_1-list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-list"}},[e._v("#")]),e._v(" 1 List")]),e._v(" "),n("p",[e._v("List is an ordered collection and it allow duplicate elements. The user of this interface has precise control over where in the list each element is inserted. The user can access elements by their integer index (position in the list), and search for elements in the list."),n("br"),e._v("\nIn List interface, there a four implementations: ArrayList, Vector, Stack and LinkedList."),n("br"),e._v("\nThere are some functions in the List interface.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Function")]),e._v(" "),n("th",{staticStyle:{"text-align":"center"}},[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("boolean add(E e)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("add element, if success it will reture true")])]),e._v(" "),n("tr",[n("td",[e._v("boolean addAll(Collection<? extends E> c)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("add one list into the current list, if success it will reture true")])]),e._v(" "),n("tr",[n("td",[e._v("boolean remove(Object o)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("delete one element, if success it will reture true")])]),e._v(" "),n("tr",[n("td",[e._v("E remove(int index)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("delete one element at the index of the element, will ruturn the element previously at the specified position")])]),e._v(" "),n("tr",[n("td",[e._v("boolean contains(Object o)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("return true if contain o")])]),e._v(" "),n("tr",[n("td",[e._v("public E set(int index, E element)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("replace the element at the input index")])]),e._v(" "),n("tr",[n("td",[e._v("public boolean isEmpty()")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("return true if the list is empty")])]),e._v(" "),n("tr",[n("td",[e._v("public int indexOf(Object o)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.")])]),e._v(" "),n("tr",[n("td",[e._v("public int lastIndexOf(Object o)")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.")])]),e._v(" "),n("tr",[n("td",[e._v("public List"),n("E",[e._v(" subList(int fromIndex, int toIndex)")])],1),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("get a sublist with index that from fromIndex to toIndex")])]),e._v(" "),n("tr",[n("td",[e._v("public Object[] toArray()")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("Returns an array containing all of the elements in this list in proper sequence")])]),e._v(" "),n("tr",[n("td",[e._v("public void clear()")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("RRemoves all of the elements from this list.")])])])]),e._v(" "),n("h2",{attrs:{id:"_2-1-arraylist"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-arraylist"}},[e._v("#")]),e._v(" 2.1 ArrayList")]),e._v(" "),n("h3",{attrs:{id:"_2-1-1-introduction-of-arraylist"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-introduction-of-arraylist"}},[e._v("#")]),e._v(" 2.1.1 Introduction of ArrayList")]),e._v(" "),n("p",[e._v('ArrayList is implemented by using array and the capacity of array can be change dinamically. When the used capacity of one define ArrayList is over 50%, it will use System.arraycopy() to copy to one new Array for creating capacity. Also, you can change the capacity before it is over 50% by using ensureCapacity. So, if you want to use it, you\'d better forecast the space. The default space is 10. By the way, it\'s not thread safe. So, when the situation is multi-thread, you\'d better use "Collections.synchronizedList(List l)" or use "CopyOnWriteArrayList" class.')]),e._v(" "),n("h3",{attrs:{id:"_2-1-2-implemetation-of-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-implemetation-of-interface"}},[e._v("#")]),e._v(" 2.1.2 Implemetation of Interface")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public class ArrayList<E> extends AbstractList<E>\n    implements List<E>, RandomAccess, Cloneable, java.io.Serializable\n{\n}\n")])])]),n("p",[e._v("ArrayList extends AbstractList and implement List. It's a list of array and it has functions like add, remove, set, iterator and so on."),n("br"),e._v("\nArrayList implement RandomAccess interface, so it can use random invocation. In ArrayList, we can use index to get object quikcly and that's random invocation."),n("br"),e._v("\nArrayList implement Cloneable interface. which means it override clone(), so it can use clone."),n("br"),e._v("\nArrayList implement java.io.Serializable interface, so it can be serialized and can translate data by using serialization.")]),e._v(" "),n("h3",{attrs:{id:"_2-1-3-array-of-arraylist"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-array-of-arraylist"}},[e._v("#")]),e._v(" 2.1.3 Array of ArrayList")]),e._v(" "),n("p",[e._v("Here is the source code:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("/**\n* The array buffer into which the elements of the ArrayList are stored.\n* The capacity of the ArrayList is the length of this array buffer.\n*/\nprivate transient Object[] elementData;\n")])])]),n("p",[e._v("We can see that ArrayList uses array to store data.")]),e._v(" "),n("h3",{attrs:{id:"_2-1-4-construction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-construction"}},[e._v("#")]),e._v(" 2.1.4 Construction")]),e._v(" "),n("p",[e._v("Here is the source code:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('/**\n * Constructs an empty list with an initial capacity of ten.\n */\npublic ArrayList() {\n    this(10);\n}\n/**\n * Constructs an empty list with the specified initial capacity.\n *\n * @param  initialCapacity  the initial capacity of the list\n * @throws IllegalArgumentException if the specified initial capacity\n *         is negative\n */\npublic ArrayList(int initialCapacity) {\n    super();\n    if (initialCapacity < 0)\n        throw new IllegalArgumentException("Illegal Capacity: "+\n                                           initialCapacity);\n    this.elementData = new Object[initialCapacity];\n}\n\n/**\n * Constructs a list containing the elements of the specified\n * collection, in the order they are returned by the collection\'s\n * iterator.\n *\n * @param c the collection whose elements are to be placed into this list\n * @throws NullPointerException if the specified collection is null\n */\npublic ArrayList(Collection<? extends E> c) {\n    elementData = c.toArray();\n    size = elementData.length;\n    // c.toArray might (incorrectly) not return Object[] (see 6260652)\n    if (elementData.getClass() != Object[].class)\n        elementData = Arrays.copyOf(elementData, size, Object[].class);\n}\n')])])]),n("p",[e._v("ArrayList has three kinds of contructions:")]),e._v(" "),n("ul",[n("li",[e._v("public ArrayList() can create a new ArrayList with capacity of 10.")]),e._v(" "),n("li",[e._v("public ArrayList(int initialCapacity) can create a new ArrayList with capacity of the initialCapacity.")]),e._v(" "),n("li",[e._v("public ArrayList(Collection<? extends E> c) can create a new ArrayList which contains the input collection.")])]),e._v(" "),n("h3",{attrs:{id:"_2-1-5-storage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-5-storage"}},[e._v("#")]),e._v(" 2.1.5 Storage")]),e._v(" "),n("p",[e._v("In ArrayList there are some kinds of function that adding elements. I will show you in the latter.")]),e._v(" "),n("h5",{attrs:{id:"set-int-index-e-element"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set-int-index-e-element"}},[e._v("#")]),e._v(" set(int index, E element)")]),e._v(" "),n("p",[e._v("This function will invoca rangeCheck(index) firstly to check whether index is out of the range of the array and throw excaption if it's true. Then, get the location of the index and write the new element into it, and return the old element."),n("br"),e._v("\nHere is the source code:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("/**\n * Replaces the element at the specified position in this list with\n * the specified element.\n *\n * @param index index of the element to replace\n * @param element element to be stored at the specified position\n * @return the element previously at the specified position\n * @throws IndexOutOfBoundsException {@inheritDoc}\n */\npublic E set(int index, E element) {\n    rangeCheck(index);\n\n    E oldValue = elementData(index);\n    elementData[index] = element;\n    return oldValue;\n}\n/**\n  * Checks if the given index is in range.  If not, throws an appropriate\n  * runtime exception.  This method does *not* check if the index is\n  * negative: It is always used immediately prior to an array access,\n  * which throws an ArrayIndexOutOfBoundsException if index is negative.\n  */\n  private void rangeCheck(int index) {\n    if (index >= size)\n    throw new IndexOutOfBoundsException(outOfBoundsMsg(index));\n  }\n")])])]),n("h5",{attrs:{id:"add-e-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add-e-e"}},[e._v("#")]),e._v(" add(E e)")]),e._v(" "),n("p",[e._v("This function will add new element into the tail of a arraylist, when the capacity is not enough it will use grow() to increase the capacity. Here is the source code:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("/**\n * Appends the specified element to the end of this list.\n *\n * @param e element to be appended to this list\n * @return <tt>true</tt> (as specified by {@link Collection#add})\n */\npublic boolean add(E e) {\n    ensureCapacityInternal(size + 1);  // Increments modCount!!\n    elementData[size++] = e;\n    return true;\n}\nprivate void ensureCapacityInternal(int minCapacity) {\n    modCount++;\n    // overflow-conscious code\n    if (minCapacity - elementData.length > 0)\n        grow(minCapacity);\n}\nprivate void grow(int minCapacity) {\n    // overflow-conscious code\n    int oldCapacity = elementData.length;\n    int newCapacity = oldCapacity + (oldCapacity >> 1);\n    if (newCapacity - minCapacity < 0)\n        newCapacity = minCapacity;\n    if (newCapacity - MAX_ARRAY_SIZE > 0)\n        newCapacity = hugeCapacity(minCapacity);\n    // minCapacity is usually close to size, so this is a win:\n    elementData = Arrays.copyOf(elementData, newCapacity);\n}\n")])])]),n("h5",{attrs:{id:"add-int-index-e-element"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add-int-index-e-element"}},[e._v("#")]),e._v(" add(int index, E element)")]),e._v(" "),n("p",[e._v("This function will insert a element at the index position. The source code is here:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("/**\n * Inserts the specified element at the specified position in this\n * list. Shifts the element currently at that position (if any) and\n * any subsequent elements to the right (adds one to their indices).\n *\n * @param index index at which the specified element is to be inserted\n * @param element element to be inserted\n * @throws IndexOutOfBoundsException {@inheritDoc}\n */\npublic void add(int index, E element) {\n    rangeCheckForAdd(index);\n\n    ensureCapacityInternal(size + 1);  // Increments modCount!!\n    System.arraycopy(elementData, index, elementData, index + 1,\n                     size - index);\n    elementData[index] = element;\n    size++;\n}\n")])])]),n("h5",{attrs:{id:"addall-collection-extends-e-c-addall-int-index-collection-extends-e-c"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#addall-collection-extends-e-c-addall-int-index-collection-extends-e-c"}},[e._v("#")]),e._v(" addAll(Collection<? extends E> c) & addAll(int index, Collection<? extends E> c)")]),e._v(" "),n("p",[e._v("This function will insert a whole collection into tail of a arraylist or at the index position. Here is the source code:")]),e._v(" "),n("p",[e._v("/**\n* Appends all of the elements in the specified collection to the end of\n* this list, in the order that they are returned by the\n* specified collection's Iterator.  The behavior of this operation is\n* undefined if the specified collection is modified while the operation\n* is in progress.  (This implies that the behavior of this call is\n* undefined if the specified collection is this list, and this\n* list is nonempty.)\n*\n* @param c collection containing elements to be added to this list\n* @return "),n("tt",[e._v("true")]),e._v(" if this list changed as a result of the call\n* @throws NullPointerException if the specified collection is null\n*/\npublic boolean addAll(Collection<? extends E> c) {\nObject[] a = c.toArray();\nint numNew = a.length;\nensureCapacityInternal(size + numNew);  // Increments modCount\nSystem.arraycopy(a, 0, elementData, size, numNew);\nsize += numNew;\nreturn numNew != 0;\n}")],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("/**\n * Inserts all of the elements in the specified collection into this\n * list, starting at the specified position.  Shifts the element\n * currently at that position (if any) and any subsequent elements to\n * the right (increases their indices).  The new elements will appear\n * in the list in the order that they are returned by the\n * specified collection's iterator.\n *\n * @param index index at which to insert the first element from the\n *              specified collection\n * @param c collection containing elements to be added to this list\n * @return <tt>true</tt> if this list changed as a result of the call\n * @throws IndexOutOfBoundsException {@inheritDoc}\n * @throws NullPointerException if the specified collection is null\n */\npublic boolean addAll(int index, Collection<? extends E> c) {\n    rangeCheckForAdd(index);\n\n    Object[] a = c.toArray();\n    int numNew = a.length;\n    ensureCapacityInternal(size + numNew);  // Increments modCount\n\n    int numMoved = size - index;\n    if (numMoved > 0)\n        System.arraycopy(elementData, index, elementData, index + numNew,\n                         numMoved);\n\n    System.arraycopy(a, 0, elementData, index, numNew);\n    size += numNew;\n    return numNew != 0;\n}\n")])])]),n("h3",{attrs:{id:"_2-1-6-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-6-get"}},[e._v("#")]),e._v(" 2.1.6 Get")]),e._v(" "),n("p",[e._v("This function can use random access because of using array. When invoke get(), it will check the range of index and will return a element if it's not out of the range. Here is the source code:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("/**\n* Returns the element at the specified position in this list.\n*\n* @param  index index of the element to return\n* @return the element at the specified position in this list\n* @throws IndexOutOfBoundsException {@inheritDoc}\n*/\npublic E get(int index) {\n    rangeCheck(index);\n\treturn (E) elementData[index];\n}\nprivate void rangeCheck(int index) {\n    if (index >= size)\n    throw new IndexOutOfBoundsException(outOfBoundsMsg(index));\n}  \n")])])]),n("h3",{attrs:{id:"_2-1-7-remove"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-7-remove"}},[e._v("#")]),e._v(" 2.1.7 Remove")]),e._v(" "),n("p",[e._v("You can remove a element by using an index or an object. When you remove one element successfully, the elements after the removed element will go left by one index. Here is the source code:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("/**\n * Removes the element at the specified position in this list.\n * Shifts any subsequent elements to the left (subtracts one from their\n * indices).\n *\n * @param index the index of the element to be removed\n * @return the element that was removed from the list\n * @throws IndexOutOfBoundsException {@inheritDoc}\n */\npublic E remove(int index) {\n    rangeCheck(index);\n\n    modCount++;\n    E oldValue = elementData(index);\n\n    int numMoved = size - index - 1;\n    if (numMoved > 0)\n        System.arraycopy(elementData, index+1, elementData, index,\n                         numMoved);\n    elementData[--size] = null; // Let gc do its work\n\n    return oldValue;\n}\n/**\n * Removes the first occurrence of the specified element from this list,\n * if it is present.  If the list does not contain the element, it is\n * unchanged.  More formally, removes the element with the lowest index\n * <tt>i</tt> such that\n * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>\n * (if such an element exists).  Returns <tt>true</tt> if this list\n * contained the specified element (or equivalently, if this list\n * changed as a result of the call).\n *\n * @param o element to be removed from this list, if present\n * @return <tt>true</tt> if this list contained the specified element\n */\npublic boolean remove(Object o) {\n    if (o == null) {\n        for (int index = 0; index < size; index++)\n            if (elementData[index] == null) {\n                fastRemove(index);\n                return true;\n            }\n    } else {\n        for (int index = 0; index < size; index++)\n            if (o.equals(elementData[index])) {\n                fastRemove(index);\n                return true;\n            }\n    }\n    return false;\n}\n")])])]),n("h3",{attrs:{id:"_2-1-8-change-the-capacity-of-array"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-8-change-the-capacity-of-array"}},[e._v("#")]),e._v(" 2.1.8 Change the Capacity of Array")]),e._v(" "),n("p",[e._v('When I describe storage of ArrayList I have said that when add new element it will check the capacity of the array, and it will increase the capacity if over the capacity. There are two functions can increase the capacity: (1) developer can use "ensureCapacity(int minCapacity)" to increase the capacity (2) if the capacity is not enough when adding the "private void ensureCapacityInternal(int minCapacity)" will be invoked. Here is the source code:')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public void ensureCapacity(int minCapacity) {\n    if (minCapacity > 0)\n        ensureCapacityInternal(minCapacity);\n}\n\nprivate void ensureCapacityInternal(int minCapacity) {\n    modCount++;\n    // overflow-conscious code\n    if (minCapacity - elementData.length > 0)\n        grow(minCapacity);\n}\n/**\n * Increases the capacity to ensure that it can hold at least the\n * number of elements specified by the minimum capacity argument.\n *\n * @param minCapacity the desired minimum capacity\n */\nprivate void grow(int minCapacity) {\n    // overflow-conscious code\n    int oldCapacity = elementData.length;\n    int newCapacity = oldCapacity + (oldCapacity >> 1);\n    if (newCapacity - minCapacity < 0)\n        newCapacity = minCapacity;\n    if (newCapacity - MAX_ARRAY_SIZE > 0)\n        newCapacity = hugeCapacity(minCapacity);\n    // minCapacity is usually close to size, so this is a win:\n    elementData = Arrays.copyOf(elementData, newCapacity);\n}\n")])])]),n("p",[e._v('From the source code we can see that when increase the capacity old arraylist will be copied into one new arraylist. The capacity of the new arraylist is always 1.5 times of the old one according to the source code "int newCapacity = oldCapacity + (oldCapacity >> 1);". The price of this execution is high, so we\'d better avoid it.')]),e._v(" "),n("h3",{attrs:{id:"_2-1-9-fail-fast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-9-fail-fast"}},[e._v("#")]),e._v(" 2.1.9 Fail-Fast")]),e._v(" "),n("p",[e._v("ArrayList also use Fail-Fast function by using modCount. The detail description of Fail-Fast is introduced in HashMap Chapter.")])])}),[],!1,null,null,null);t.default=a.exports}}]);