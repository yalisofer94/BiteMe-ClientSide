$(document).ready(function () {
    getAllRestaurants();
    console.log("Hello");
    //operationsListeners();
});


function getAllRestaurants() {
    $.ajax({
        url: 'http://localhost:3000/api/restaurant',
        type: 'GET',
        success: function(restaurants) {
            recreateRestTable(restaurants);
        }
    });
}

function appendTableRow(id, name, address,style,price,rate)
{
    let tableRow = "<tr><td>$id</td><td>$name</td><td>$address</td><td>$style</td><td>$price</td><td>$rate</td></tr>";
    tableRow = tableRow.replace("$id",id);
    tableRow = tableRow.replace("$name",name);
    tableRow = tableRow.replace("$address",address);        
    tableRow = tableRow.replace("$style",style);             
    tableRow = tableRow.replace("$price",price);             
    tableRow = tableRow.replace("$rate",rate);             
    $("#RestTable tbody").append(tableRow);
}

function recreateRestTable(restaurants) {
    $("#RestTable tbody").empty().remove();
    const restaurantsLen = restaurants.length;
    console.log(restaurantsLen);
    if (restaurantsLen) {
        $('table').append('<tbody></tbody>');
        for (let i = 0; i < restaurantsLen; i++) {
            appendTableRow(restaurants[i].id, restaurants[i].name, restaurants[i].address, restaurants[i].style,restaurants[i].price,restaurants[i].rate)
        }
    } 
}

function recreateUsersTable(restaurants) {
    $("table").empty().remove();
    $("#users-list").empty();
    $("#users-list").append(
        '<h2>Users list</h2>'
    );
    rests.map(item => {

        $("#users-list").append(

            '<br>' +
            '<div class="new-user" style="color:' + item.color + ';' + 'margin-left:30px">' +
            '<img src="' + item.avatar + '" style="display:block;position:absolute; margin-top:30px">' +
            '<div class="user-details" style="margin-left:80px;">' +
            '<p>' +
            'First Name: ' + item.first_name + '<br>' +
            'Last Name: ' + item.last_name + '<br>' +
            'Geneder: ' + item.gender + '<br>' +
            'Email: ' + item.email + '<br>' +
            'Color: ' + item.color + '<br>' +
            'Job: ' + item.job + '<br>' +
            '<p> </div>' +
            '</div>'
        );
    })

}

function operationsListeners() {
    $("#show-button").click(() => {
        getAllRestaurants();
    });

}