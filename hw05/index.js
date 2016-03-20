var states = {"Alabama": 53, "Alaska": 16, "Arizona": 75, "Arkansas" : 32, "California": 475, "Colorado": 66, "Connecticut": 55, "Delaware": 21, "Florida": 214, "Georgia": 102, "Hawaii": 25, "Idaho": 23,
"Illinois": 156, "Indiana": 83, "Iowa": 44, "Kansas": 33, "Kentucky": 55, "Louisiana": 51, "Maine": 25, "Maryland": 95, "Massachusetts": 91, "Michigan": 130, "Minnesota": 77, "Mississippi": 36,
"Missouri": 71, "Montana": 21, "Nebraska": 25, "Nevada": 35, "New Hampshire": 24, "New Jersey": 126, "New Mexico": 34, "New York": 257, "North Carolina": 107, "North Dakota": 18, "Ohio": 143, "Oklahoma": 38,
"Oregon": 61, "Pennsylvania": 189, "Rhode Island": 24, "South Carolina": 53, "South Dakota": 20, "Tennessee": 67, "Texas": 222, "Utah": 33, "Vermont": 16, "Virginia": 95, "Washington": 101, "West Virginia": 29,
"Wisconsin": 86, "Wyoming": 14};

var allocated = ["Texas", "Florida", "Ohio", "Illinois", "Georgia", "Michigan", "Virginia", "Virginia", "North Carolina", "Massachusetts", "Alabama", " Tennessee", "South Carolina", "Louisiana", "Missouri", "Minnesota", "Colorado", "Iowa", "Arkansas",
"Nevada", "Oklahoma", "Nebraska", "Kansas", "Maine", "New Hampshire"];

var delegates = d3.values(states);
var stateNames = d3.keys(states);

var foo = d3.scale.linear()
  .domain([0,d3.max(delegates)])
    .range([0,700]);

d3.select(".chart")
  .selectAll("div")
    .data(stateNames)
  .enter().append("div")
    .style("width", function(d) {
          return foo(states[d]) + "px";})
    .text(function(d) { return d + ": " +  states[d]; })
    .style("background-color", function(d) {
          if (allocated.indexOf(d) === -1) {
            return "lightgray";
          } else {
            return "lightblue";
          }
    });
