angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){

  $scope.getQuotes = function() {
    $scope.quotes = dataService.getQuotes();
  }

  $scope.getQuotes();

  $scope.deleteMe = function(textToRemove){
  dataService.removeQuotes(textToRemove);
}

  $scope.addQuote = function(){
    var newQuote = {
      text:$scope.newQuoteText,
      author:$scope.newQuoteAuthor
    }

    if(dataService.addQuotes(newQuote))
    {
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor= '';
    }
  }

});
