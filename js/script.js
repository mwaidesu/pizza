function Pizza(size,crust,toppings, total, orderNumber) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
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
})