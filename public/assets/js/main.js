(function(){

  /* Cache DOM Elements */
  const nomBtns = $('.set-nom');

  function eatFood(event) {
    //Disable the button
    $(this).attr("disabled", "disabled");

    const id = this.dataset.id;

    const request = { id: id, column: 'is_eaten', value: true };

    // Send the PUT request.
    $.ajax(`/api/food/${id}`, {
      type: "PUT",
      data: request
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }

  nomBtns.on('click', eatFood);


  function createFood(description) {

    const request = { column: 'description', value: description };
    // Send the POST request.
    $.ajax(`/api/food/`, {
      type: "POST",
      data: request
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }


})();
