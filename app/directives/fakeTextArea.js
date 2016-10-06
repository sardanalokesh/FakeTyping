angular.module("fakeTyping")
	.directive("fakeTextArea", function() {
		return {
			restrict: "E",
			template: "<textarea class='fake-text-area' ng-keydown='onKeyDown($event)' ng-model='inputText'></textarea>",
			controller: function($scope) {
				$scope.sampleInput = "Dong kabhi wrong nahi hota";
				$scope.inputText = "";
			},
			link: function(scope, element, attributes, controllers, transclude) {
				scope.onKeyDown = function(event) {
					event.preventDefault();
					var index = scope.inputText.length;
					scope.inputText += scope.sampleInput[index%scope.sampleInput.length];
				};

			}

		};
	
	});