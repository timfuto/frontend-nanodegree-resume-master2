/*
This is empty on purpose! Your code to build the resume will go here.
 */

/* ID HEADER RELATED ITEMS*/
/*
var myName = "Timija Futo"
var formattedName = HTMLheaderName.replace("%data%", myName);
$("#header").prepend(formattedName); 

var role = "Visual Communication Designer"
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);
*/

/* ID HEADER RELATED ITEMS*/

/*
var formattedMobile = HTMLmobile.replace("%data%", "+49 (0) 1578 817 3121");
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", "timija.futo@gmail.com");
$("#topContacts").append(formattedEmail);
*/

var bio = {
	"name" : "Timija Futo",
	"role" : "Visual Communication Designer",
	"pic" : "images/timi.jpg",
	"welcomMessage" : "Hello World!",
	"location" : "Berlin, DE",
	"skills" : ["fast-learner", "Grafik-Design"],
	"contacts" : [
		{
		"mobile" : "+49 (0) 1578 817 31 21",
		"email" : "timija.futo@gmail.com",
		"github" : "timfuto",
		"twitter" : "@tim_futo",
		"location" : "Berlin"
		}
	]
}


var work = {
	"jobs" : [
		{
			"employer" : "Bildbad Berlin",
			"location" : "Berlin, DE",
			"title" : "Internship for Animation and Illustration",
			"description" : "something1",
			"years" : 0.5,
			"dates" : "Jul 2009 - Feb 2010"
		},
		{
			"employer" : "Captrain Deutschland GmbH",
			"location" : "Berlin, DE",
			"title" : "graphic designer",
			"description" : "something1",
			"years" : 2.2,
			"dates" : "Nov 2011 - Jan 2014"
			
		},
		{
			"employer" : "Technische Hochschule Brandenburg",
			"location" : "Brandenburg an der Havel, DE",
			"title" : "Student in Research Project",
			"description" : "something1",
			"years" : 0.8,
			"dates" : "Mar 2017 - Jan 2018"
			
		}
	]
}

var education = {
	"schools" : [
		{
			"name" : "Ferdinand-von-Steinbeiß Schule",
			"location" : "Ulm, DE",
			"degree" : "Apprenticeship as Grafik-Designer",
			"dates" : "Sep 2003 - Jul 2006",
			"major" : ["Grafik Design", "Foto-Design", "Typography & Layout"]
		},
		{
			"name" : "Berliner Technische Kunsthochschule",
			"location" : "Berlin, DE",
			"degree" : "Bachelor",
			"dates" : "Okt 2007 - Feb 2011",
			"major" : ["Visual Communication", "Visual & Motion-Design"]
		},
		{
			"name" : "Technische Hochschule Brandenburg",
			"location" : "Brandenburg an der Havel, DE",
			"degree" : "not finished",
			"dates" : "Nov 2011 - Feb 2015",
			"major" : ["Digital Media"]
		},
		{
			"name" : "Technische Hochschule Brandenburg",
			"location" : "Brandenburg an der Havel, DE",
			"degree" : "Master",
			"dates" : " Mar 2017 - Sep 2018",
			"major" : ["Digital Media"]
		}
	]
}

var online = {
	"courses" : [
		{
			"title" : "Quantitative Methods - California Institute of the Arts",
			"dates" : "January 2017",
			"school" : "coursera.org",
			"url" : "https://www.coursera.org/account/accomplishments/records/SX6HCV5C43TH" 
		},
		{
			"title" : "Client Needs and Software Requirements - University of Alberta",
			"dates" : "January 2017",
			"school" : "coursera.org",
			"url" : "https://www.coursera.org/account/accomplishments/records/SUMCV6WUGUCV" 
		},
		{
			"title" : "Fundamentals of Graphic Design - University of Amsterdam",
			"dates" : "March 2017",
			"school" : "coursera.org",
			"url" : "https://www.coursera.org/account/accomplishments/records/ARJZP8M3J6FX" 
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://classroom.udacity.com/courses/ud304"
		},
		{
			"title" : "Java Script Basics",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://classroom.udacity.com/courses/ud304"
		}
	]
}

var projects = {
	"project" : [
		{
			"client" : "make-up studio Magdalena Steinke",
			"title" : "Visual Communication Designer for make-up studio Magdalena Steinke",
			"dates" : "2015-2016",
			"location" : "Berlin",
			"description" : "Corporate Identity Design",
			"images" : ["images/ms-steinke.png","images/ms_cardsmockup.png"],
			"url" : "http://www.magdalena-steinke.de/"
		},
		{
			"client" : "Conspirators",
			"title" : "Visual Communication Designer for Conspirators",
			"dates" : "Summer 2016",
			"location" : "Berlin",
			"images" : ["images/logo-consp.png", "images/consp-cards.png"],
			"description" : "Identity Conceptualisation, Corporate Identity Design",
			"url" : "https://www.behance.net/gallery/37415343/CONSPIRATORS-CONCEPT-IDENTITY-DESIGN"
		},
		{
			"title" : "Symbols - Free Project",
			"dates" : "Okt 2017",
			"location" : "Berlin",
			"images" : ["images/symbols.png"],
			"description" : "Symbol Design, Grafic Design",
			"url" : "https://www.behance.net/gallery/71095903/Symbols"
		}	
	]
}

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedNameRole = formattedName + formattedRole;
$("#header").prepend(formattedNameRole); 
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
$("#header").append(formattedPic);
/*
for(con in bio.contacts){

$("#topContacts").append(HTMLcontactGeneric);
var formattedMobile = HTMLmobile.append("%data%", bio.contacts[con].mobile);
$(".flex-item").append(formattedMobile);

}
*/
/*
$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});

function locationizer(work_obj) {
    var locationsArray = [];
    
    for (var jobs in work.jobs) {
        var newLocations = work_obj.jobs[jobs].location;
        locationsArray.push(newLocations);
    }
    
    return locationsArray;
}

console.log(locationizer(work));

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

*/


work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();


projects.display = function() {
	for(proj in projects.project) {
		$("#projects").append(HTMLprojectStart);
	
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedURL = HTMLonlineURL.replace("%data%", projects.project[proj].url);
		$(".project-entry:last").append(formattedURL);
			
		if(projects.project[proj].images.length > 0) {
			for (img in projects.project[proj].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.project[proj].images[img]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

education.display = function() {
	for(edu in education.schools) {
		$("#education").append(HTMLschoolStart);
	
		var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
		$(".education-entry:last").append(formattedMajor);

	}
}

education.display();

online.display = function() {
	
	for(course in online.courses) {
		
		$("#classes").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%", online.courses[course].title);
		$(".classes-entry:last").append(formattedTitle);
		var formattedDates = HTMLonlineDates.replace("%data%", online.courses[course].dates);
		$(".classes-entry:last").append(formattedDates);
		var formattedSchool = HTMLonlineSchool.replace("%data%", online.courses[course].school);
		$(".classes-entry:last").append(formattedSchool);
		var formattedURL = HTMLonlineURL.replace("%data%", online.courses[course].url);
		$(".classes-entry:last").append(formattedURL);
	}
}

online.display();



//$("#mapDiv").append(googleMap);

/*
for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}

for(proj in projects.project) {
	$("#projects").append(HTMLprojectStart);
	
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
	$(".project-entry:last").append(formattedDescription);
	var formattedURL = HTMLonlineURL.replace("%data%", projects.project[proj].url);
	$(".project-entry:last").append(formattedURL);

	var formattedImage = HTMLprojectImage.replace("%data%", projects.project[proj].image);
	$(".project-entry:last").append(formattedImage);	
}

for(edu in education.schools) {
	$("#education").append(HTMLschoolStart);
	
	var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
	$(".education-entry:last").append(formattedName);

	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
	$(".education-entry:last").append(formattedDegree);
	
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
	$(".education-entry:last").append(formattedDates);

	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
	$(".education-entry:last").append(formattedLocation);
		
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
	$(".education-entry:last").append(formattedMajor);

}

$("#education").append(HTMLonlineClasses);
for(course in education.courses) {
		
	var formattedTitle = HTMLonlineTitle.replace("%data%", education.courses[course].title);
	$(".education-entry:last").append(formattedTitle);

	var formattedDates = HTMLonlineDates.replace("%data%", education.courses[course].dates);
	$(".education-entry:last").append(formattedDates);

	var formattedSchool = HTMLonlineSchool.replace("%data%", education.courses[course].school);
	$(".education-entry:last").append(formattedSchool);

	var formattedURL = HTMLonlineURL.replace("%data%", education.courses[course].url);
	$(".education-entry:last").append(formattedURL);
}

*/
