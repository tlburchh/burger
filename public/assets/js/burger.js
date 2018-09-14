$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var burgerName = $(this).data('burger_name');
      var devoured = $(this).data("devoured");
      var burgerEatState  = {
          id: id,
          name: burgerName,
          devoured: true
      };

      
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerEatState,
      }).then(
        function() {
          console.log("changed devoured to ", devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  console.log(burgerEatState);
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bn").val().trim(),
        devoured: false
      };
  
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
  