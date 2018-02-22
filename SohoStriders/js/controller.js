var schedule = [{day: "Monday", 
				session: "Hyde and Seek",
				 location: "Hyde Park",
				 time: "1900",
				 cost: "£5",
				 description: "Meet at Hyde Park Corner 7:30pm for Hyde and seek. Oh and if it is your first time, you're hiding. When you're found, run away!! Guaranteed to get you running faster than you have ever run before."},

				{day: "Tuesday",
				 session: "Down hill racing",
				 location: "Hyde Park",
				 time: "1930",
				 cost: "£6"},

				 {day: "Wednesday",
				 session: "Race the tube",
				 location: "TBD",
				 time: "1930",
				 cost: "£10"},

				{day: "Thursday",
				 session: "Down hill racing",
				 location: "Hyde Park",
				 time: "1930",
				 cost: "£6"},

				{day: "Friday",
				 session: "Down hill racing",
				 location: "Hyde Park",
				 time: "1930",
				 cost: "£6"}]






angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To The Soho Striders!";
    })
    .controller('TrainingController', function($scope){


    	$scope.schedule = schedule



		// $scope.Trainingday = function(day, session, location, time, bring, cost) {
  //   		this.weekDay = day;
  //   		this.session = session;
  //   		this.where = location;
  //   		this.time = time;
  //   		this.cost = cost;
  //   	}
  //   	var monday = {day: "Monday", session: "Hyde and Seek", location: "Hyde Park", time: "1900", cost: "£5"};
    	
  //   	console.log(monday)
    });