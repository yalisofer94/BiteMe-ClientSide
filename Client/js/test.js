
$(document).ready(function () {
    searchListener();
    console.log("You are at the begining");
  });
  
  
  function searchListener() {
    $("#searchBtn").click(() => {
        const id = $("#place").val();
        // const userObj = {
        //     id
        // }
        console.log(id);
        getRestaurants(id);
        //updateUserById(id, cleanUpdateData(userObj));
  
    });

    function getRestaurants(str) {
        $.ajax({
            url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${str}&inputtype=textquery&fields=formatted_address,name,rating,geometry&key=AIzaSyBkxP0uOzCNjtByiZD1KccRs7GFfKy_7ss`,
            type: 'GET',
            success: function(restaurants) {
                console.log(restaurants);
            }
        });
    }
}
