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
