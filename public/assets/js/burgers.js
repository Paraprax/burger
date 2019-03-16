//note: all functions enclosed in this surrounding function which doesn't fire until after the DOM is fully loaded to prevent errors:
$(function() {
    
    //jQuery functions for event-handling:

    //function to change a burger's status to 'devoured'
    $(".change-ate").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newAteState = {
            devoured: newDevour
        };

        //sends the PUT request:
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newAteState
        }).then(
            function() {
                console.log("changed devour-status to ", newDevour);
                //reloads the page to update the burger menu:
                location.reload();
            }
        );
    });

    //function to submit new burgers to the menu from the "Add A Burger" form:
    $(".add-burger-form").on("submit", function(event) {
        //preventDefault called first, to prevent empty forms being submitted as new burgers!
        event.preventDefault();

        //creates a new burger object with the user-submitted name, set to uneaten by default:
        var newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: false
        };

        //sends the POST request containing our newBurger object:
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Whipped up a new burger!")
                //reloads the page to update the burger menu with the new data:
                location.reload();
            }
        );
    }); //<- end of final event-handling function
        
}); //<- End of over-arching function.