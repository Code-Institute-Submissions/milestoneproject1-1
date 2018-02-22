var schedule = [{day: "Monday", 
				 session: "Hyde and Seek",
				 location: "Hyde Park",
				 time: "1900",
				 image: "sniper-ghillie-suit-camo.jpg",
				 cost: "£5",
				 description: "Meet at Hyde Park Corner 7:30pm for Hyde and seek. Oh and if it is your first time, you're hiding. When you're found, run away!! Guaranteed to get you running faster than you have ever run before.",
				},

				{day: "Tuesday",
				 session: "Down hill racing",
				 location: "Hyde Park",
				 time: "1930",
				 image: "downhillrunning.jpg",
				 cost: "£6",
				 description: "Meet at Parliament hill at 6:30pm. Hills are hard. really hard. So why struggle up when you can run down? Research has shown that runnning down hill increases your speed and coordination. Fun speedy session.",
				},

				 {day: "Wednesday",
				 session: "Race the tube",
				 location: "TBD",
				 time: "1930",
				 image: "racetube.jpg",
				 cost: "£10",
				 description: "Every week we will choose a few pair of tube stops to race against. Agility, nerve and lightning speed required for this session. Keep your eye on the whatsapp group for details of where to meet.",
				},

				{day: "Thursday",
				 session: "Capture the flag",
				 location: "Hyde Park",
				 time: "2000",
				 image: "captureflag.png",
				 cost: "£2",
				 description: "Two teams, the So's and the Ho's, at opposite ends of the park. Teams have to attack the other's base to capture the flag. Tag a member of the other team? They freeze. Free a member of your own team by tagging them.",
				},

				{day: "Friday",
				 session: "John Snow Mile",
				 location: "John Snow Pub",
				 time: "1930",
				 image: "pint.jpg",
				 cost: "£20",
				 description: "4 pints, 1 mile, please drink responsibly.",
				}];






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