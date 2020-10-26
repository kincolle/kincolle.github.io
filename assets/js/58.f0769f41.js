(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{631:function(e,t,n){e.exports=n.p+"assets/img/1.acd7b16c.png"},761:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"introduction-of-requestmapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-of-requestmapping"}},[e._v("#")]),e._v(" Introduction of @RequestMapping")]),e._v(" "),a("p",[e._v("The @RequestMapping  is one of the most popular annotations. It will mapping HTTP request to the right function of the right controller. In srpingMVC, the RequestDispatcher is responsible for routing HTTP request to the right function. So, when setting springMVC we need to set the mapping.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(631),alt:""}})]),e._v(" "),a("p",[e._v("For setting the mapping we use the @RequestMapping annotation. The @RequestMapping can be used on a class or a function.")]),e._v(" "),a("p",[e._v("In the springMVC there are 6 types of params:")]),e._v(" "),a("ul",[a("li",[e._v("value: the request URL")]),e._v(" "),a("li",[e._v("method: method type of request like GET, POST, PUT, DELETE and so on.")]),e._v(" "),a("li",[e._v("consumes: define the Content-Type of request like application/json, text/html and so on")]),e._v(" "),a("li",[e._v("produces: define the type of return when the request contains the Accept")]),e._v(" "),a("li",[e._v("params: fucntion will be invoked only when the contition of params is satisfied")]),e._v(" "),a("li",[e._v("headers:  fucntion will be invoked only when the header of request is satisfied")])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("h4",{attrs:{id:"value-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value-method"}},[e._v("#")]),e._v(" value  && method")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('@Controller  \n@RequestMapping("/appointments")  \npublic class AppointmentsController {  \n  \n    private AppointmentBook appointmentBook;  \n      \n    @Autowired  \n    public AppointmentsController(AppointmentBook appointmentBook) {  \n        this.appointmentBook = appointmentBook;  \n    }  \n  \n    @RequestMapping(method = RequestMethod.GET)  \n    public Map<String, Appointment> get() {  \n        return appointmentBook.getAppointmentsForToday();  \n    }  \n  \n    @RequestMapping(value="/{day}", method = RequestMethod.GET)  \n    public Map<String, Appointment> getForDay(@PathVariable @DateTimeFormat(iso=ISO.DATE) Date day, Model model) {  \n        return appointmentBook.getAppointmentsForDay(day);  \n    }  \n  \n    @RequestMapping(value="/new", method = RequestMethod.GET)  \n    public AppointmentForm getNewForm() {  \n        return new AppointmentForm();  \n    }  \n  \n    @RequestMapping(method = RequestMethod.POST)  \n    public String add(@Valid AppointmentForm appointment, BindingResult result) {  \n        if (result.hasErrors()) {  \n            return "appointments/new";  \n        }  \n        appointmentBook.addAppointment(appointment);  \n        return "redirect:/appointments";  \n    }  \n}\n')])])]),a("p",[e._v("URI of value has 3 types:")]),e._v(" "),a("ul",[a("li",[e._v("normal value")]),e._v(" "),a("li",[e._v("URI Template Patterns with Path Variables")]),e._v(" "),a("li",[e._v("URI Template Patterns with Regular Expressions")])]),e._v(" "),a("h5",{attrs:{id:"example-b"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-b"}},[e._v("#")]),e._v(" example B)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('@RequestMapping(value="/owners/{ownerId}", method=RequestMethod.GET)  \npublic String findOwner(@PathVariable String ownerId, Model model) {  \n  Owner owner = ownerService.findOwner(ownerId);    \n  model.addAttribute("owner", owner);    \n  return "displayOwner";   \n}\n')])])]),a("h5",{attrs:{id:"example-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-c"}},[e._v("#")]),e._v(" example C)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('@RequestMapping("/spring-web/{symbolicName:[a-z-]+}-{version:\\d\\.\\d\\.\\d}.{extension:\\.[a-z]}")  \n  public void handle(@PathVariable String version, @PathVariable String extension) {      \n    // ...  \n  }  \n}\n')])])]),a("h4",{attrs:{id:"consumes-produces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consumes-produces"}},[e._v("#")]),e._v(" consumes && produces")]),e._v(" "),a("h5",{attrs:{id:"cousumes-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cousumes-example"}},[e._v("#")]),e._v(" cousumes example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('@Controller  \n@RequestMapping(value = "/pets", method = RequestMethod.POST, consumes="application/json")  \npublic void addPet(@RequestBody Pet pet, Model model) {      \n    // implementation omitted  \n} \n')])])]),a("p",[e._v('Only when the request Content-Type is "application/json" then the function will be invoked.')]),e._v(" "),a("h5",{attrs:{id:"produces-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#produces-example"}},[e._v("#")]),e._v(" produces example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('@Controller  \n@RequestMapping(value = "/pets/{petId}", method = RequestMethod.GET, produces="application/json")  \n@ResponseBody  \npublic Pet getPet(@PathVariable String petId, Model model) {      \n    // implementation omitted  \n}\n')])])]),a("p",[e._v('Only when the Accept of the request has "application/json" then the function will be invoked and the type of return will be "application/json".')]),e._v(" "),a("h4",{attrs:{id:"params-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#params-headers"}},[e._v("#")]),e._v(" params && headers")]),e._v(" "),a("h5",{attrs:{id:"params-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#params-example"}},[e._v("#")]),e._v(" params example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('@Controller  \n@RequestMapping("/owners/{ownerId}")  \npublic class RelativePathUriTemplateController {  \n  \n  @RequestMapping(value = "/pets/{petId}", method = RequestMethod.GET, params="myParam=myValue")  \n  public void findPet(@PathVariable String ownerId, @PathVariable String petId, Model model) {      \n    // implementation omitted  \n  }  \n}\n')])])]),a("p",[e._v('Only a request with a "myParam" and its value is "myValue" will be invoked.')]),e._v(" "),a("h5",{attrs:{id:"headers-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers-example"}},[e._v("#")]),e._v(" headers example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('@Controller  \n@RequestMapping("/owners/{ownerId}")  \npublic class RelativePathUriTemplateController {  \n  \n@RequestMapping(value = "/pets", method = RequestMethod.GET, headers="Referer=http://www.ifeng.com/")  \n  public void findPet(@PathVariable String ownerId, @PathVariable String petId, Model model) {      \n    // implementation omitted  \n  }  \n}\n')])])]),a("p",[e._v('Only when the header of the request contains "Refer" whose value is "http://www.ifeng.com/" then the function will be invoked.')])])}),[],!1,null,null,null);t.default=s.exports}}]);