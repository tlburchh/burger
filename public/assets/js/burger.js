$(document).ready(function() {
    $(".change-eat").on("click", function(event) {
        console.log("check");
      var id = $(this).data("id");
      var newDevoured = $(this).data("devoured");
      var burgerEatState  = {
          devoured: newDevoured
      };

      console.log(burgerEatState);
      
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerEatState,
      }).then(
        function() {
          console.log("changed devoured to ", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#bn").val().trim(),
        devoured: false,
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  