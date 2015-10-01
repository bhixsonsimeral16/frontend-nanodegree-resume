/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Brian Hixson-Simeral");

 var name = "Brian Hixson-Simeral";
 var role = "Web Developer";

 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 //$("#header").prepend(formattedRole);
 //$("#header").prepend(formattedName);

 var skills = 
 ["tutoring", "leadership", "JS", "Java"]

 var bio = {

 	"name" : name,
 	"age" : 22,
 	"role" : role,
 	"skills" : skills
 };

 //$("#main").prepend(bio.name);

 var work = {

 }

 work.city = "Prescott";
 work.name = "Safeway";

 var education = {

 }

 education["Institution"] = "Cornell";
 education["Class"] = "CSC315"

 $("#main").prepend(work.name);
 $("#main").prepend(education["Class"]);