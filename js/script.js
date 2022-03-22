
$(document).ready(function () {

  $("table").hide();
  /*   $(".additional-buttons").hide();
    $(".additional-info").hide();
    $(".btn.yes").hide();
    $(".btn.no").hide(); */
  //$(".additional-info h4").hide();


  $('.order').click(function (event) {

    event.preventDefault();
    var pizzaSize = $(".size option:selected").val();

    ///get more than one pizza topping and add the value
    var pizzaToppings = document.querySelectorAll('.toppings :checked');
    var pizzaToppings = [...pizzaToppings].map(option => option.value);

    var pizzaToppings = pizzaToppings.map(str => {
      return Number(str);
    });

    pizzaToppings = pizzaToppings.reduce((partialSum, a) => partialSum + a, 0);
    console.log(pizzaToppings);



    var pizzaCrust = $(".crust option:selected").val();
    var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
    var order = 1;
    var grandTotal = 0;

    $("table").show();
    $("#size").html($(".size option:selected").text() + " - " + pizzaSize);
    console.log($("#size").html($(".size option:selected").text() + " - " + pizzaSize));
    $("#toppings").html($(".toppings option:selected").text() + " - " + pizzaToppings);
    $("#crust").html($(".crust option:selected").text() + " - " + pizzaCrust);
    $("#total").html(total);

    function Pizza(size, toppings, crust, total, orderNumber) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
      this.orderNumber = orderNumber;
    }

    $('.add-btn').click(function () {
      var pizzaSize = $(".size option:selected").val();

      ///get more than one pizza topping and add the value
      var pizzaToppings = document.querySelectorAll('.toppings :checked');
      var pizzaToppings = [...pizzaToppings].map(option => option.value);

      var pizzaToppings = pizzaToppings.map(str => {
        return Number(str);
      });

      pizzaToppings = pizzaToppings.reduce((partialSum, a) => partialSum + a, 0);
      console.log(pizzaToppings);

      var pizzaCrust = $(".crust option:selected").val();
      var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
      order++;
      grandTotal += total;


      var newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust, total, order);

      var newRow = '<tr><th scope="row">' + newPizza.orderNumber + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

      $("#pizza").append(newRow);
    });

    $(".btn.check-out").click(function () {
      $(".btn.add-btn").hide();
      $(".btn.check-out").hide();
      $(".info").show();

      grandTotal = grandTotal + total;
      $(".info h3 span").html("Ksh. " + grandTotal);

      if (grandTotal > 1) {
        var answer = prompt("Would you like to have your pizza delivered for an extra Ksh.200? Type yes if so, no if you're okay.");
        if (answer == "yes" || "Yes" || "YES" || "yEs" || "yES") {
          var location = prompt("Enter your location: ");
         if(location != null){
          alert("Our rider will be dispatched shortly with your pizza to " + location + ". Your total amount  is  Ksh." + (grandTotal + 200));
          $(".info h3 span").html("Our rider will be dispatched shortly with your pizza to " + location + ". Your total amount  is  Ksh." + (grandTotal + 200));
         }
        }
        else{
          $(".info h3 span").html("Ksh. " + grandTotal);
        }
      }

      /* var answer = prompt("Would you like to have your pizza delivered for an extra Ksh.200? Type yes if so, no if you're okay.");
      if (answer == "yes" || "Yes" || "YES" || "yEs" || "yES") {
        var location = prompt("Enter your location: ");
        alert("Our rider will be dispatched shortly with your pizza to " + location + ". Your total amount  is  Ksh." + (grandTotal + 200));
        $(".info h3 span").html("Our rider will be dispatched shortly with your pizza to " + location + ". Your total amount  is  Ksh." + (grandTotal + 200));
      }
      else {
        $(".info h3 span").html("Your total is Ksh.  " + grandTotal)
      } */
    })
  })
})