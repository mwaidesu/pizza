
$(document).ready(function() {
   
  function Pizza(size, toppings, crust, total, orderNumber) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
      this.orderNumber = orderNumber;
    }

$('.order').click(function() {
  var pizzaSize = $(".size option:selected").val();
  var pizzaToppings = $(".toppings option:selected").val();
  var pizzaCrust = $(".crust option:selected").val();
  var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
  var order = 1;
  var grandTotal = 0;
  
  $("#size").html($(".size option:selected").text() + " - " + pizzaSize);
  $("#toppings").html($(".toppings option:selected").text() + " - " + pizzaToppings);
  $("#crust").html($(".crust option:selected").text() + " - " + pizzaCrust);
  $("#total").html(total);



  $('.add-btn').click(function() {
    var pizzaSize = $(".size option:selected").val();
    var pizzaToppings = $(".toppings option:selected").val();
    var pizzaCrust = $(".crust option:selected").val();
    var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
    order++;
    grandTotal += total;


    var newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust, total, order);

    var newRow = '<tr><th scope="row">' + newPizza.orderNumber + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

    $("#pizza").append(newRow);
  });

  
});


});
