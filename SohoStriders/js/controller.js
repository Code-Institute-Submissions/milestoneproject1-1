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


// const restSchedule = [{day: "Monday", 
// 					 activityId: 0,
// 					 session: "Rest",
// 					 cost: 0,
// 					},
// 					{day: "Tuesday",
// 					 activityId: 1,
// 					 session: "Rest",
// 					 cost: 0,				
// 					},
// 					 {day: "Wednesday",
// 					 activityId: 2,
// 					 session: "Rest",
// 					 cost: 0,
// 					},
// 					{day: "Thursday",
// 					 activityId: 3,
// 					 session: "Rest",
// 					 cost: 0,				 
// 					},
// 					{day: "Friday",
// 					 activityId: 4,
// 					 session: "Rest",
// 					 cost: 0,
// 					 }];

var cost = 0


function toggleActivity(selectedActivities,activityId){
	var result ;
	var indexOfActivity = selectedActivities.indexOf(activityId);
	if (indexOfActivity > -1) {
		//Don't operate on function arguments
		var copy = selectedActivities.slice()
		copy.splice(activityId, 1)
		result = copy;
	} else {
		result = selectedActivities.concat([activityId]); 
	}
	return result;
};






function scheduleCreator(selectedActivities,training){
	var filteredTraining = training.filter(function(day){
		return isActivitySelected(day.activityId, selectedActivities)
		// return selectedActivities.indexOf(day.activityId) > -1;
	})
	return filteredTraining;
}

function isActivitySelected(activityId, selectedActivities){
	return selectedActivities.indexOf(activityId) > -1
}





angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To The Soho Striders!";
    })
    .controller('TrainingController', function($scope, store) {

    	$scope.training = training;
    	$scope.cost = cost
    	$scope.visible = true;
    	$scope.schedule = [];

    	//one function a click handler that takes in ID, checks array for existence of ID, if there remove, if not add
    	$scope.onActivityClick = function(day){
    		// console.log($scope.schedule, day)
    		$scope.schedule = toggleActivity($scope.schedule, day.activityId)
    		// console.log($scope.schedule, day)
    	}  

    	$scope.isActivitySelected = function(activityId){

    		return isActivitySelected(activityId, $scope.schedule);

    		}


    	//separation of concerns - component that wants to display just needs list of ids
    	//make fucntion that does taht logic
    	// $scope.addToSchedule = function(idPassedIn) {

    	// 	//Add clicked session to schedule, replacing rest day object
    	// 	schedule.splice(idPassedIn,1,training[idPassedIn]);
    	// 	//switch button to no for specific training day
    	// 	this.visible = !this.visible;
    	// };

    	// $scope.removeFromSchedule = function(idPassedIn){
    	// 	//Replace clicked training day in schedule with rest day object
    	// 	schedule.splice(idPassedIn, 1,restSchedule[idPassedIn]);
    	// 	//switch button to yes for specific training day
    	// 	this.visible = !this.visible;
    	// };
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





