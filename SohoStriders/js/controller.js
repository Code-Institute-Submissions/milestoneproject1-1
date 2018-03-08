var training = [{day: "Monday", 
				 activityId: 0,
				 session: "Hyde and Seek",
				 location: "Hyde Park",
				 time: "1900",
				 image: "sniper-ghillie-suit-camo.jpg",
				 cost: 5,
				 description: "Meet at Hyde Park Corner 7:30pm for Hyde and seek. Oh and if it is your first time, you're hiding. When you're found, run away!! Guaranteed to get you running faster than you have ever run before.",
				},

				{day: "Tuesday",
				 activityId: 1,
				 session: "Down hill racing",
				 location: "Hyde Park",
				 time: "1930",
				 image: "downhillrunning.jpg",
				 cost: 6,
				 description: "Meet at Parliament hill at 6:30pm. Hills are hard. really hard. So why struggle up when you can run down? Research has shown that runnning down hill increases your speed and coordination. Fun speedy session.",
				},

				 {day: "Wednesday",
				 activityId: 2,
				 session: "Race the tube",
				 location: "TBD",
				 time: "1930",
				 image: "racetube.jpg",
				 cost: 10,
				 description: "Every week we will choose a few pair of tube stops to race against. Agility, nerve and lightning speed required for this session. Keep your eye on the whatsapp group for details of where to meet.",
				},

				{day: "Thursday",
				 activityId: 3,
				 session: "Capture the flag",
				 location: "Hyde Park",
				 time: "2000",
				 image: "captureflag.png",
				 cost: 2,
				 description: "Two teams, the So's and the Ho's, at opposite ends of the park. Teams have to attack the other's base to capture the flag. Tag a member of the other team? They freeze. Free a member of your own team by tagging them.",
				},

				{day: "Friday",
				 activityId: 4,
				 session: "John Snow Mile",
				 location: "John Snow Pub",
				 time: "1930",
				 image: "pint.jpg",
				 cost: 20,
				 description: "4 pints, 1 mile, please drink responsibly.",
				}];


//function to add and remove the acitivty from the schedule when the button is clicked
function toggleActivity(selectedActivities,activityId){
	//create result variable for resultant array
	var result ;
	//Add index of clicked day to variable 
	var indexOfActivity = selectedActivities.indexOf(activityId);
	// If it is not -1 (can be found) then remove it
	if (indexOfActivity > -1) {
		//Don't operate on function arguments
		var copy = selectedActivities.slice()
		copy.splice(activityId, 1)
		result = copy;
	} else {
		//Otherwise if it is -1 and can be found then add it to the selectedActivities array
		result = selectedActivities.concat([activityId]); 
	}
	//return the array
	return result;
};

//Function to print out array of training day objects from the array
function scheduleCreator(selectedActivities,training){
	var filteredTraining = training.filter(function(day){
		return isActivitySelected(day.activityId, selectedActivities)
	});
	return filteredTraining;
};

//function to determine if the activity day is in the schedule array or not
function isActivitySelected(activityId, selectedActivities){
	return selectedActivities.indexOf(activityId) > -1
};


angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To The Soho Striders!";
    })
    .controller('TrainingController', function($scope, store) {

    	$scope.training = training;
    	$scope.visible = true;
    	$scope.schedule = [];

    	//one function a click handler that takes in ID, checks array for existence of ID, if there remove, if not add
    	$scope.onActivityClick = function(day){
    		// make the scope.schedule the result array from the toggle function
    		$scope.schedule = toggleActivity($scope.schedule, day.activityId)
    	}  
    	//Test if the activity is in the array and decide which button to show
    	$scope.isActivitySelected = function(activityId){

    		return isActivitySelected(activityId, $scope.schedule);

    		}
    	//Add schedule to local storage
    	$scope.continue = function() {
    		$scope.schedule = scheduleCreator($scope.schedule, training);
    		store.set ('obj', $scope.schedule);
    		console.log($scope.schedule)
    	};
    })
    .controller('RacingController', function($scope){

    })
    .controller('ScheduleController', function($scope, store){
    	$scope.schedule = store.get('obj');


    })






