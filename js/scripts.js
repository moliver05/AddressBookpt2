//business logic
ffunction Place(placeName, landmarks, restaurants, peopleVisited) {
  this.placeName = placeName;
  this.landmarks = landmarks;
  this.restaurants = restaurants;
  this.peopleVisited = peopleVisited;
}

Place.prototype.bongo = function() {
  return "Location: " + this.placeName;
}

// user interface logic
$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#new-place").val();
    var inputtedLandmarks = $("input#new-landmark").val();
    var inputtedRestaurants = $("input#new-restaurant").val();
    var inputtedPeople = $("input#new-people-visited").val();


    var newPlace = new Place(inputtedPlaceName, inputtedLandmarks, inputtedRestaurants, inputtedPeople);

    $("ul#allPlaces").append("<li><span class='onePlace'>" + newPlace.bongo() + "</span></li>");

    $(".onePlace").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName);
      $(".new-place").text(newPlace.landmarks);
      $(".last-name").text(newPlace.lastName);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
