var app=angular.module("myapp",[]);
app.controller("myctrl", ["$scope","$http",function($scope,$http)
{
	/*var person1={name:"abc",email:"abc@gmail.com",mobile:"69151424"};
	var person2={name:"def",email:"def@gmail.com",mobile:"69151425"};
	var person3={name:"ghi",email:"ghi@gmail.com",mobile:"69151426"};

	var contactlist=[person1,person2,person3];*/
	var refresh=function()
	{
	$http.get("./contactlist").success(function(response)
	{
		$scope.contactlist=response;
		$scope.contact="";
	});
}
refresh();
	$scope.addcontact=function()
	{
		$http.post("/contactlist/",$scope.contact).success(function(response)
		{
			console.log(response);
			refresh();
		})
	}
	$scope.getcontactbyid=function(id)
	{
		$http.get("/contactlist/" +id).success(function(response)
		{
			$scope.contact=response;
		})
	}
	$scope.updatecontact=function(){
		$http.put("/contactlist/" + $scope.contact._id,$scope.contact)
		        .success(function(response)
		        {
		        	refresh();
		        })
	}
	$scope.removecontact=function(id)
	{
		$http.delete("/contactlist/"  +id).success(function(response)
		{
			refresh();
			
		})
	}

}]);