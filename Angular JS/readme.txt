Angular js tutorial For Beginers
+++++++++++++++++++++++++++++++++++++


Get the different dependancies for the AJS from the following website  https://cdnjs.com/libraries/angular.js/1.5.6


"When using the tutorial files use the wamp server since file type protocol doesnt allow cross site ajax request "

Angular js is used for SPA - single page app which consist of single page website.And it is a MVC framework.

It is nothing but javascript custom functions so you can do any modification using the angular js with the simple javascript file

and it can be included like using the CDN or locally.

and after we include the ajs file we get access to the angular object which can be used in the code.

ng-model - storing the value in the var and expression used to get the value is the {{}}

Most importantly is the ng-app which tells's the angular js where to start the code processing from.


Angular js has something called the directives which are var starting from the ng-* and for example the ng-model will work on the input tags and text areas.


we can use the ng-bind which is used along with the ng-model which binds the text from the ng-model to the html tag as seen it in the example test_1

ng-model /ng-bind only works with the certain html tags which are 

input 
textarea
select
default htmls which takes input from the user


Normalization in the Angular JS is like this 
=============================================


we can use the ng_ or ng: or ng- or data-ng or x-ng something like that they all are same but validated differently.

	The difference is simple - there is absolutely no difference between the two except that certain HTML5 validators will throw an error on a property like ng-app, but they don't throw an error for anything prefixed with data-, like data-ng-app



Expression in the AJS 
=======================
which are nothing but the {{}}

we can use multiple bindings in the same expression as like {{avg/length}}

1.     ng-init   ----> allows you to store var inside the html which can be used anywhere in the code but we can use the controllers 		in the AJS for the same purpose.
		this is same as initializing a variable in the js.
		and this can be used for initializing values for a text field
2.  ng-repeat  ----> for looping

3. ng-controller  ----> is for the AJS controller 

4. ng-include    --->  include another html file to your file


MVC ARCHITECTURE IN THE ANGULAR JS
==================================

Model  <------- Controller -----> View


in AJS mainly works on the controllers

Model  - how the application to the data
View - whatever visible to the user
Controller : The coding which would act between the model and view



FILTERS IN ANGULAR JS
==========================

filters are used to transform the data in certain forms like uppercase and lowercase etc.
filters can also be used like chain format like  filter1 | filter2 | filter3 etc...

some filters have arguments in it something like number:2 this will transform the number to a two decimal number if the data is the number



ROUTING IN THE ANGULAR JS
===========================


ng-view is for the routing of the urls on the client side.ng-view is compelsory to use the ngRoute
template for the adding raw html
templateUrl is for adding new html from the outerside


when using both AJS only loads the template not the templateUrl 
angular automatically add ng-scope class to the ng-view div

$routeScope is a global var which can be accessed from anywhere and it can be used in the conditional resolve in the config function


$http SERVICE
================

	To retreive data from remote servers.and $http can be used to make a get request to get the file.and take the responce from that and pass to the var inside the html.for more information refer the $http webservice doc provided by the AJS


PASSING THE DATA BETWEEN DIFFERENT SCOPES
==========================================

ng-repeat will create its own local scope in the code.To pass one value of the data to another scope we can use the var as message.property message.something

RANGE BASED LOOPS IN AJS
========================
when we use the range based loops in the ng-repeat you have to specify to 'track by $index' if it contains dupes or undefined values and in other cases we can use the normal ng-repeat when passing the arry which has some values.


AJS $watch 
==============
there is something called digestive watch in the AJS which runs everytime and check whether a new var is registered or not and update any new var
$watch and $digest and $apply functions are automatically called in the AJS when a var is defined in the AJS

we can also do this manually
vanila js is another name for the plane javascript.

$digest ---> $digest() can be called manully for checking whether a var changes this is usefull in the button clicks defined in the plane js


SERVICES IN AJS
================

when using the $http with the controller for getting the data from the outside source we may have to write lots of http requests,so to avoid that we can use the services which can be used to store the data get from outside and use it again.only one instance of the service is created and it is referenced everywhere.
services in the AJS are singleton 

that is when the function from the service is called from the conrollers for the first time the refernce is passed to conrtoller and when we call the controller again (second time ) we get the same value as it will not called the service again for the second time it uses the refernce from the first call.


FACTORIES IN THE AJS
=======================

factories uses the object method for defining  new functions and new varibles and this object is returned for accessing from the outer scope.It is same as the service that it is singelton and it returns the reference of the object in the second call


PROVIDERS IN THE AJS
=====================

providers are the head of the service and factory.that means they all come under the provider,so anything that can be done with the service and factory can be done with the provider as well.

when we create a provider then it will be available in the app.config function and it is like routeProvider

you can access any provider from the config function.so any private function defined in the provider can also be accessed from the config function.
inside the provider we can also use the this operator just like the service in the AJS.

SERVICES VS FACTORIES VS PROVIDERS
==================================
providers are more flexible than the service and the factory


ng-show
=========
when to show something that means show the message using the condition


LOCAL STORAGE
===================
Storing the data in the local storage .To store the data in the local storage you have to convert every data to string format and store it .It can be done using the inbuild function like JSON.parse()

using the localStorage we can use it store the data so that when the browser reloads the content remains there.

CUSTOM FILTERS IN AJS
========================

creating a custom filter using the ajs

CUSTOM DIRECTIVES IN AJS
==========================


you have to use the camel casing in the js file when defining the directives

so for example directive-name  to DirectiveName and in the js you have to return the template.

Directive Definition Object - which is the property that is returned for the custom directive
we can also use the templateUrl.
we can also create the directives as seperate html tag as well like 
<directive-name> </directive-name> which will include the content inside the tag
we can also access the directive using the normal comment and also the class property.
we can use the restrictive property that will restrict the output

scope is also another property and link also
link property works with the DOM of the page it controlls how your view is modified
you need to define it as a function  and it accepts 3 arguments such as scope ,element (element which directive is applied) and attrs which contain all the details of the class or any attribute


IMPORTANT when multiple elements have same controllers then it changes every elements.That means it all have the same scope so we have to isolate the each scope from each other.

Shared and Isolated scopes in AJS
this can be done by by breaking inividual directives to its own scopes
the scope aproperty is used for that which fill have false and true values.when true value directives will prototypically inherit for each controller.
prototypically inherit  > simply it is a chain type of inherit for example we can define new prpoerty in the controller which can be accessed from the custom directives

scope property can be of an object which can have different property.
which are 
@- text getter or text bind ---> this one doesnot change the controller property only change the directive property
= - two way bind  --> this one change the controller property also and we do not have to use the {{}}
& - one way bind --> no need to use the {{}} this one also passes the reference of the variable


ANIMATIONS IN AJS
====================
this can be done using the angular-animate.js.And use the animate class to the element and use that to access the animation of the different elements.


COOKIES IN THE AJS
==================
Cookies are used to store the some data in the browser.which can be used by the library angular-cookies.js.cookies are not allowed in the file protocol so you have to start your own local server or enable some of the flags in the chrome