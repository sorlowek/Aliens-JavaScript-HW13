// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tbody.attr("class", "table table-striped");

data.forEach(function(Sighting) {
    console.log(Sighting);
    var row = tbody.append("tr");
    Object.entries(Sighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });


var submit= d3.select("#filter-btn");

submit.on("click", function() {
  
// Prevent the page from refreshing
d3.event.preventDefault();

d3.selectAll("td").remove();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);

var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    filteredData.forEach(function(sighting) {
        console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});