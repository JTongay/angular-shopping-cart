describe('Shopping Cart App FTW', function () {

  const title = element.all(by.tagName('h1')).get(0);
  const image = element.all(by.tagName('img')).get(0);
  const itemName = element(by.repeater('item in view.items').row(0).column('item.name'))
  const itemPrice = element(by.repeater('item in view.items').row(0).column('item.price'))
  const itemCaffeineScale = element(by.repeater('item in view.items').row(0).column('item.caffeineScale'))
  const itemIngredients = element(by.repeater('item in view.items').row(0).column('item.ingredients'))
  const itemRating = element(by.repeater('item in view.items').row(0).column('item.rating'))
  const itemStock = element(by.repeater('item in view.items').row(0).column('item.inStock'))
  const itemCategories = element(by.repeater('category in item.categories').row(0));
  const filterByCategory = element(by.repeater('category in view.categories').row(0));
  const filterByCategory2 = element(by.repeater('category in view.categories').row(1));

  beforeEach(function(){
    browser.get('http://localhost:8000')
  })

 it('should pass the test', function () {
   expect(true).toBe(true);
 })

 it('should show the title of the app', function(){
   expect(title.getText()).toBe('Welcome to the MEAN shopping cart!')
 })

 it('should show the image of each item', function(){
   expect(image.getAttribute('src')).toBe("http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$");
 })

 it('should show the name of each item', function(){
   expect(itemName.getText()).toContain("Bayard stew");
 })

 it('should show the correctly formatted price of each item', function(){
   expect(itemPrice.getText()).toBe("Price: $15.40");
 })

 it('should show the caffeine scale', function(){
   expect(itemCaffeineScale.getText()).toBe("Caffeine Scale: 244");
 })

 it('should show all of the ingredients', function(){
   expect(itemIngredients.getText()).toBe("Ingredients: concentrated gluten, jewelry, dill, beetle nut, toast");
 })

 it('should show the rating', function(){
   expect(itemRating.getText()).toBe("Rating: 1");
 })

 it('should say if item is in stock or not', function(){
   expect(itemStock.getText()).toBe("In Stock? Yes");
 })

 it('should display all of the categories', function(){
   expect(itemCategories.getText()).toContain("dark");
 })

 it('should show the categories you can filter by', function(){
   expect(filterByCategory.getText()).toContain('dark')
   expect(filterByCategory2.getText()).toContain('cold')

 })


})
