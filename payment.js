paypal.Buttons({

createOrder: function(data, actions) {

return actions.order.create({
purchase_units: [{
amount: {
value: '200'
}
}]
});

},

onApprove: function(data, actions) {

return actions.order.capture().then(function(details) {

alert('Payment Successful by ' + details.payer.name.given_name);

});

}

}).render('#paypal-button-container');