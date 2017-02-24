											MVC ARCHITECTURE IN .NET 
									======================================


	.NET is the parent framework and the ASP.NET (web framework) is created from that.And MVC is derived from that.
there are two forms in the asp.net the webforms which uses the olf asp.net and the mvc which is the new one.The main difference given below

in the old forms it uses the aspx.cs and in the new one it uses the aspx

Asp.Net Web Forms	
Asp.Net MVC


Asp.Net Web Form follow a traditional event driven development model.	Asp.Net MVC is a lightweight and follow MVC (Model, View, Controller) pattern based development model.

Asp.Net Web Form has server controls.	Asp.Net MVC has html helpers.

Asp.Net Web Form supports view state for state management at client side.	Asp.Net MVC does not support view state.

Asp.Net Web Form has file-based URLs means file name exist in the URLs must have its physically existence.	Asp.Net MVC has route-based URLs means URLs are divided into controllers and actions and moreover it is based on controller not on physical file.

Asp.Net Web Form follows Web Forms Syntax	Asp.Net MVC follow customizable syntax (Razor as default)
In Asp.Net Web Form, Web Forms(ASPX) i.e. views are tightly coupled to Code behind(ASPX.CS) i.e. logic.	In Asp.Net MVC, Views and logic are kept separately.

Asp.Net Web Form has Master Pages for consistent look and feels.	Asp.Net MVC has Layouts for consistent look and feels.

Asp.Net Web Form has User Controls for code re-usability.	Asp.Net MVC has Partial Views for code re-usability.

Asp.Net Web Form has built-in data controls and best for rapid development with powerful data access.	Asp.Net MVC is lightweight, provide full control over markup and support many features that allow fast & agile development. Hence it is best for developing interactive web application with latest web standards.

Asp.Net Web Form is not Open Source.	Asp.Net Web MVC is an Open Source.	


MVC STANDS FOR MODEL VIEW CONTROLLER
------------------------------------

CSHTML are known as razer views and the syntax always start with as @ sign.whenever you create a controller the view is automatically created in the view folder.

In the visual studio selects the mvc web application and load empty template and create a new controller in the controller folder and controller_nameController ----> in this the Controller is manadatory and so do not delete it.

and crearte the view for the controller as a default the controller will contain route for the index page and if you want to go to another page then you have to use the controller name without the Controller prefix  in the url and follwed by the Action name

the views must be in the conntroller name folder or in the shared folder.

if your action name and the view name are the same then you don't have to return the view name in the controller.



What is routing?
=====================

routing simplifies the mvc url.
it is for defining the routes for the end user more simpler that is seperating the technical name from the more simpler terms.

It can be configured in the App_start folder and inside the Routeconfig.cs
in this the it will have all the collection of the userfriendly urls which maps them to the controller and methods.

in here there will be routes.Maproute and it will take three args which are name  - key for the route and the url - which the user types and the default which specifies the which controller to invoke and which action.

and the name cannot have duplicates means it must be unique. and the url ="" is the default home page.
And there will be a route collection for the index page and it will be default and dont remove it just write the custom routes above it.

And also we can restrict user from going to a specific route by using the Ignore.route   this can be used to prevent the user from accessing the unwanted config urls.

in the mvc there is no start page that is in the first hit it never comes to the page for setting the start page you have to set the route = "" in the route config.

Simplifing the urls we can increase the SEO of the website.




Actionresult in the controller have multiple types for example like 
viewresult()  return the view
PartialViewresult() returns the partial view
json result   return the json 
empty result has no helper method so to return the empty result use like this return new EmptyResult()

refer this link for further details https://msdn.microsoft.com/en-us/library/system.web.mvc.actionresult(v=vs.118).aspx

we can also pass the values as parameters in the action result and use that if we do that we have to strictly pass that through the url or as a query string or it will throw the error 
and these parameters are optional.	

to specify a optional parameter use the ? for the int and for the string type you dont have to use the ? because in c# string is reference type and so just type it as it is.

we can also add parameters in the route bundle using the  {} ,{} and define those in the action in the controller.
we can add constraints in the route map like putting comma after the default argument and use the regular expression for defing the constraint for the parameter .When using the regular expression we can @ sign or we may have to use the doble backslash since backslash character is an escape characcter.



PASSING THE DATA TO THE VIEW
==============================

Passing it as a return value in the controller 
and another method is called the using the ViewData method which is common to all the controllers.
and it is a dictionary and for example like below
viewData["key"] = value  this can be accessed from the view
or use the ViewBag.Movie = movie;

in the view we can write any C# codes using the @ sign and {} and also add comments as @* write the comments   *@