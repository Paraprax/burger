//note: all functions enclosed in one surrounding function which doesn't call until after the DOM is fully loaded to prevent errors:
$(function() {

    //jQuery functions for event-handling:
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
});