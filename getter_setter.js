//get temperatures

const TemperatureTracker = {
    temperatures: [],
    get average() {
      const sumWithInitial = TemperatureTracker.temperatures.reduce(
           (accumulator, currentValue) => accumulator + currentValue, 0);
       return sumWithInitial / TemperatureTracker.temperatures.length;
    },
    get max(){
        const maxTemperature = Math.max(...TemperatureTracker.temperatures);
        return maxTemperature;
    },
    
     get min(){
        const minTemperature = Math.min(...TemperatureTracker.temperatures);
        return minTemperature;
    },

    addTemperature(temperature){
        TemperatureTracker.temperatures.push(temperature)
    },
};

   TemperatureTracker.addTemperature(25);
   TemperatureTracker.addTemperature(30);
   TemperatureTracker.addTemperature(20);
   TemperatureTracker.addTemperature(35);

   console.log("An average temperature:", TemperatureTracker.average);
   console.log("The highest temperature:", TemperatureTracker.max);
   console.log("The lowest temperature:", TemperatureTracker.min);

   //SET AND SHOPPING LIST

   const shoppingList = [];
     
   const shoppingApp = {
       set list(item) {
           shoppingList.push(item);
       },
       set removeItem(item) {
           const index = shoppingList.indexOf(item);
           if (index !== -1) {
               shoppingList.splice(index, 1);
           }
       },
       get count() {
           return shoppingList.length;
       },
       get items() {
           return shoppingList.join(", ");
       },
   };

   shoppingApp.list = "Apples";
   shoppingApp.list = "Bread";
   shoppingApp.list = "Milk";
   console.log("[Shopping list at the beginning]");
   console.log("Products:", shoppingApp.items);
   console.log("Number of products:", shoppingApp.count);

   shoppingApp.removeItem = "Bread";

   console.log("[Shopping list after removing]");
   console.log("Products:", shoppingApp.items);
   console.log("Number of products:", shoppingApp.count);