(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{719:function(e,n,a){"use strict";a.r(n);var t=a(0),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("About code of Mapper is in the package org.apache.ibatis.binding. MapperRegistry class is for Registing mapper interface and proxy instances.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('public class MapperRegistry {\n  //the config object\n  private Configuration config;\n  //A HashMap Key is a mapper object, and Value is a MapperProxyFactory object\n  //This MapperProxyFactory is the factory which build Mapper proxy object\n  private final Map<Class<?>, MapperProxyFactory<?>> knownMappers = new HashMap<Class<?>, MapperProxyFactory<?>>();\n  public MapperRegistry(Configuration config) {\n    this.config = config;\n  }\n  //get proxy object\n  @SuppressWarnings("unchecked")\n  public <T> T getMapper(Class<T> type, SqlSession sqlSession) {\n    //through type of Mapper instance to get from Map\n    final MapperProxyFactory<T> mapperProxyFactory = (MapperProxyFactory<T>) knownMappers.get(type);\n    if (mapperProxyFactory == null)\n      throw new BindingException("Type " + type + " is not known to the MapperRegistry.");\n    try {\n      return mapperProxyFactory.newInstance(sqlSession);\n    } catch (Exception e) {\n      throw new BindingException("Error getting mapper instance. Cause: " + e, e);\n    }\n  }\n\n  public <T> boolean hasMapper(Class<T> type) {\n    return knownMappers.containsKey(type);\n  }\n  //regist Mapper interface\n  public <T> void addMapper(Class<T> type) {\n    if (type.isInterface()) {\n      if (hasMapper(type)) {\n        throw new BindingException("Type " + type + " is already known to the MapperRegistry.");\n      }\n      boolean loadCompleted = false;\n      try {\n        knownMappers.put(type, new MapperProxyFactory<T>(type));\n        // It\'s important that the type is added before the parser is run\n        // otherwise the binding may automatically be attempted by the\n        // mapper parser. If the type is already known, it won\'t try.\n        MapperAnnotationBuilder parser = new MapperAnnotationBuilder(config, type);\n        parser.parse();\n        loadCompleted = true;\n      } finally {\n        if (!loadCompleted) {\n          knownMappers.remove(type);\n        }\n      }\n    }\n  }\n  public Collection<Class<?>> getMappers() {\n    return Collections.unmodifiableCollection(knownMappers.keySet());\n  }\n    ResolverUtil<Class<?>> resolverUtil = new ResolverUtil<Class<?>>();\n    resolverUtil.find(new ResolverUtil.IsA(superType), packageName);\n    Set<Class<? extends Class<?>>> mapperSet = resolverUtil.getClasses();\n    for (Class<?> mapperClass : mapperSet) {\n      addMapper(mapperClass);\n    }\n  }\n \n  //Scan all interface by this package name\n  public void addMappers(String packageName) {\n    addMappers(packageName, Object.class);\n  }\n\n}\n')])])]),a("p",[e._v("The getMapper method will invove newInstance method of the MapperProxyFactory class. From the source code we know before invoke getMapper(), the MapperProxyFactory will be inited. Let's the source code:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('public class MapperProxyFactory<T> {\n  //The object of real Mapper interface\n  private final Class<T> mapperInterface;\n  //Cache of this interface, key is Method object, value is the real method\n  private Map<Method, MapperMethod> methodCache = new ConcurrentHashMap<Method, MapperMethod>();\n  public MapperProxyFactory(Class<T> mapperInterface) {\n    this.mapperInterface = mapperInterface;\n  }\n  public Class<T> getMapperInterface() {\n    return mapperInterface;\n  }\n  public Map<Method, MapperMethod> getMethodCache() {\n    return methodCache;\n  }\n  @SuppressWarnings("unchecked")\n  protected T newInstance(MapperProxy<T> mapperProxy) {\n    //Build a proxy \n    return (T) Proxy.newProxyInstance(mapperInterface.getClassLoader(), new Class[] { mapperInterface }, mapperProxy);\n  }\n  //Put into a sqlSession and build a proxy of Mapper\n  public T newInstance(SqlSession sqlSession) {\n    //Here build MapperProxy object, it implements InvocationHandler\n    final MapperProxy<T> mapperProxy = new MapperProxy<T>(sqlSession, mapperInterface, methodCache);\n    return newInstance(mapperProxy);\n  }\n}\n')])])]),a("p",[e._v("Let's see the MapperProxy")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public class MapperProxy<T> implements InvocationHandler, Serializable {\n  private static final long serialVersionUID = -6424540398559729838L;\n  //SqlSession\n  private final SqlSession sqlSession;\n  //Type of interface\n  private final Class<T> mapperInterface;\n  //Cache of interface\n  private final Map<Method, MapperMethod> methodCache;\n  //Construction\n  public MapperProxy(SqlSession sqlSession, Class<T> mapperInterface, Map<Method, MapperMethod> methodCache) {\n    this.sqlSession = sqlSession;\n    this.mapperInterface = mapperInterface;\n    this.methodCache = methodCache;\n  }\n  //Proxy method\n  public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {\n    //Check whether if it is base method like toString(), hashCode() and so on\n    if (Object.class.equals(method.getDeclaringClass())) {\n      return method.invoke(this, args);\n    }\n    //Do cache in here\n    final MapperMethod mapperMethod = cachedMapperMethod(method);\n    //invoke mapperMethod.execute, here is the real invocation\n    return mapperMethod.execute(sqlSession, args);\n  }\n  //Cache\n  private MapperMethod cachedMapperMethod(Method method) {\n    MapperMethod mapperMethod = methodCache.get(method);\n    if (mapperMethod == null) {\n      mapperMethod = new MapperMethod(mapperInterface, method, sqlSession.getConfiguration());\n      methodCache.put(method, mapperMethod);\n    }\n    return mapperMethod;\n  }\n}\n")])])]),a("p",[e._v("From the source code we know, we get MapperMethod  object from cache, if it does not exists, then build and put it into cache. Finally, invoke execute of MapperMethod.")])])}),[],!1,null,null,null);n.default=r.exports}}]);