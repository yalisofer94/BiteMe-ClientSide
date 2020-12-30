//const { type } = require("os");



$(document).ready(function () {
  getAllRestaurants();
  console.log("Hello");
  searchListener();
  //operationsListeners();
});

function getAllRestaurants() {
  $.ajax({
    url: 'http://localhost:3000/api/restaurant',
    type: 'GET',
    success: function (restaurants) {
      recreateRestTable(restaurants);
    }
  });
}

function appendTableRow(id, name, address, style, price, rate) {
  let tableRow = "<tr><td>$id</td><td>$name</td><td>$address</td><td>$style</td><td>$price</td><td>$rate</td></tr>";
  tableRow = tableRow.replace("$id", id);
  tableRow = tableRow.replace("$name", name);
  tableRow = tableRow.replace("$address", address);
  tableRow = tableRow.replace("$style", style);
  tableRow = tableRow.replace("$price", price);
  tableRow = tableRow.replace("$rate", rate);
  $("#RestTable tbody").append(tableRow);
}

function recreateRestTable(restaurants) {
  $("#RestTable tbody").empty().remove();
  const restaurantsLen = restaurants.length;
  console.log(restaurantsLen);
  if (restaurantsLen) {
    $('table').append('<tbody></tbody>');
    for (let i = 0; i < restaurantsLen; i++) {
      appendTableRow(restaurants[i].id, restaurants[i].name, restaurants[i].address, restaurants[i].style, restaurants[i].price, restaurants[i].rate)
    }
  }
}

function searchListener() {
  $("#searchBtn").click(() => {
    const restName = $("#place").val();
    console.log(restName);
    $.ajax({
      url: `http://localhost:3000/api/restaurantAPI?restName=${restName}`,
      type: 'GET',
      success: function (rests) {
        console.log(rests);
        showMapData(rests);
      }
    })
  });

  function showMapData(restaurants) {
    console.log("wiwiwiwiw");
    $("#checkMe").append(restaurants.lng);
    $("#checkMe").append(restaurants.lat);

    console.log("You have more then one option");
  }
}

var map;

function createMap() {
  var options = {
    center: { lat: 32.0853, lng: 34.7818 },
    zoom: 10
  };

  map = new google.maps.Map(document.getElementById('map'), options);

  var input = document.getElementById('place');
  var searchBox = new google.maps.places.SearchBox(input);

  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });

  // var markers = [];
  const marker = new google.maps.Marker({
    // The below line is equivalent to writing:
    // position: new google.maps.LatLng(-34.397, 150.644)
    position: { lat: rests.location.lat, lng: rests.location.lng },
    map: map,
  });

  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length == 0)
      return;

    markers.forEach(function (m) { m.setMap(null); });
    markers = [];

    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (p) {
      if (!p.geometry)
        return;

     

      markers.push(new google.maps.Marker({
        map: map,
        title: p.name,
        position: p.geometry.location
      }));

      if (p.geometry.viewport)
        bounds.union(p.geometry.viewport);
      else
        bounds.extend(p.geometry.location);
    });

    map.fitBounds(bounds);
  });
}  