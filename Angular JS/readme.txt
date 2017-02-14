Angular js tutorial For Beginers
+++++++++++++++++++++++++++++++++++++

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

	To retreive data from remote servers.
















