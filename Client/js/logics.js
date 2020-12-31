
$(document).ready(function () {
  getAllRestaurants();
  console.log("Hello");
  searchListener();
});

function getAllRestaurants() {
  $.ajax({
    url: 'http://localhost:3000/api/restaurant',
    type: 'GET',
    success: function (restaurants) {
      recreateRestTable(restaurants);
      recreateChoosingOptions(restaurants);
    }
  });
}

function recreateChoosingOptions(restaurants) {
    $("#FormOptions #optionsRadio").empty();
    const restaurantsLen = restaurants.length;
    if (restaurantsLen) {
        $('table').append('<tbody></tbody>');
        for (let i = 0; i < restaurantsLen; i++) {
          appendRadioButton(restaurants[i].id, restaurants[i].name, restaurants[i].address, restaurants[i].price, restaurants[i].rate, restaurants[i].open)
        }
    }
}

function appendRadioButton() {

}

function appendTableRow(id, name, address, price, rate, open) {
  let tableRow = "<tr><td>$id</td><td>$name</td><td>$address</td><td>$price</td><td>$rate</td><td>$open</td><td></td></tr>";
  tableRow = tableRow.replace("$id", id);
  tableRow = tableRow.replace("$name", name);
  tableRow = tableRow.replace("$address", address);
  tableRow = tableRow.replace("$price", price);
  tableRow = tableRow.replace("$rate", rate);
  if(open) {
    tableRow = tableRow.replace("$open", "open");
  } else {
    tableRow = tableRow.replace("$open", "close");
  }
  $("#RestTable tbody").append(tableRow);
}

function recreateRestTable(restaurants) {
  $("#RestTable tbody").empty().remove();
  const restaurantsLen = restaurants.length;
  console.log(restaurantsLen);
  if (restaurantsLen) {
    $('table').append('<tbody></tbody>');
    for (let i = 0; i < restaurantsLen; i++) {
      appendTableRow(restaurants[i].id, restaurants[i].name, restaurants[i].address, restaurants[i].price, restaurants[i].rate, restaurants[i].open)
    }
  }
}

function searchListener() {
  $("#searchBtn").click(() => {
    const restName = $("#place").val();
    console.log(`you are in the search listener func ${restName}`);
    $.ajax({
      url: `http://localhost:3000/api/restaurantAPI?restName=${restName}`,
      type: 'GET',
      success: function (rests) {
        console.log("Hello");
        console.log(rests.candidates[0].price_level);
        pushMapData(rests);
      }
    })
  });

  function pushMapData(restaurants) {
    $.post(`http://localhost:3000/api/restaurant`, {
      name: restaurants.candidates[0].name,
      address: restaurants.candidates[0].formatted_address,
      price: restaurants.candidates[0].price_level,
      rate: restaurants.candidates[0].rating,
      open: restaurants.candidates[0].opening_hours.open_now
    });
    location.reload();
  }
}

let map;

function createMap() {
  let options = {
    center: { lat: 32.0853, lng: 34.7818 },
    zoom: 13
  };

  map = new google.maps.Map(document.getElementById('map'), options);

  let input = document.getElementById('place');
  console.log(input);
  let searchBox = new google.maps.places.SearchBox(input);

  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];

  searchBox.addListener('places_changed', function () {
    let places = searchBox.getPlaces();

    if (places.length == 0)
      return;

    markers.forEach(function (input) { input.setMap(null); });
    markers = [];

    let bounds = new google.maps.LatLngBounds();
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