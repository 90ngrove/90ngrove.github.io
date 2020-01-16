// from data.js
var listData = data;

// YOUR CODE HERE!
// hook into the button
d3.selectAll("#filter-btn").on("click", Click);

// create the function to build the table
function buildTable(data) {
  let tbody = d3.select("tbody");
  tbody.html("");

  data.forEach(row => {
    let tr = tbody.append("tr");

    Object.values(row).forEach(cell => {
      let cl = tr.append("td");
      cl.text(cell);
    })
  });
}

// add function to handle click
function Click() {
  var date = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value");
  var state = d3.select("#state").property("value");
  var country = d3.select("#country").property("value");
  var shape = d3.select("#shape").property("value");
  let dataFilter = listData;

  if (date) {
    dataFilter = dataFilter.filter( element => element.datetime === date);
  }
  if (city) {
    dataFilter = dataFilter.filter( element => element.city === city);
  }
  if (state) {
    dataFilter = dataFilter.filter( element => element.state === state);
  }
  if (country) {
    dataFilter = dataFilter.filter( element => element.country === country);
  }
  if (shape) {
    dataFilter = dataFilter.filter( element => element.shape === shape);
  }

    buildTable(dataFilter);
}


// call the build table funciton with the non-filtered data
buildTable(listData);