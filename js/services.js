app.service('Bag', function() {

  this.cart = [];
  this.addToCart = function(arr){
    this.cart = arr;
  },
  this.getCart = function(){
    return this.cart;
  }


  this.grandTotal = 0;

  this.getTotal = function(arr){

    if (arr) {
      this.grandTotal = 0;
      var total = this.grandTotal
      arr.forEach(function(item){
        total += item.price * item.quantity
      })
      this.grandTotal = total;
    }
  }

  this.showTotal = function(){
    return this.grandTotal;
  }

  //I still don't understand how services and factories work. I spent 2 hours trying to figure out whats going wrong.
  //The documentation only gives examples of factories, which I tried, but could only get the service syntax to work.

})
