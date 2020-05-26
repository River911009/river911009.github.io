var app=angular.module('resume',[])
.run(['$rootScope',function($rootScope){
  $rootScope.language='zh_TWg';//navigator.language;
}])
.controller('data-parser',function($rootScope,$scope,$http){
  var temp='./source/database_';
  switch($rootScope.language){
    case 'zh_TW':
      temp+='zh_TW.json';break;
    default:
      temp+='en.json';break;
  }
  $http.get(temp).then(function(response){
    $scope.header=response.data.header;
    $scope.contact=response.data.contact;
    $scope.skill=response.data.skill;
    $scope.experience=response.data.experience;
    $scope.education=response.data.education;
    $scope.award=response.data.award;
    $scope.certification=response.data.certification;
    /* remove 'Impact English College' to fit in one page */
    $scope.education.content.splice(1,1);
  });
});
