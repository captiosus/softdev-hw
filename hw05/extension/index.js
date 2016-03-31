var demoStates = {
  "Alabama": 53,
  "Alaska": 16,
  "Arizona": 75,
  "Arkansas": 32,
  "California": 475,
  "Colorado": 66,
  "Connecticut": 55,
  "Delaware": 21,
  "Florida": 214,
  "Georgia": 102,
  "Hawaii": 25,
  "Idaho": 23,
  "Illinois": 156,
  "Indiana": 83,
  "Iowa": 44,
  "Kansas": 33,
  "Kentucky": 55,
  "Louisiana": 51,
  "Maine": 25,
  "Maryland": 95,
  "Massachusetts": 91,
  "Michigan": 130,
  "Minnesota": 77,
  "Mississippi": 36,
  "Missouri": 71,
  "Montana": 21,
  "Nebraska": 25,
  "Nevada": 35,
  "New Hampshire": 24,
  "New Jersey": 126,
  "New Mexico": 34,
  "New York": 257,
  "North Carolina": 107,
  "North Dakota": 18,
  "Ohio": 143,
  "Oklahoma": 38,
  "Oregon": 61,
  "Pennsylvania": 189,
  "Rhode Island": 24,
  "South Carolina": 53,
  "South Dakota": 20,
  "Tennessee": 67,
  "Texas": 222,
  "Utah": 33,
  "Vermont": 16,
  "Virginia": 95,
  "Washington": 101,
  "West Virginia": 29,
  "Wisconsin": 86,
  "Wyoming": 14
};

var demoAllotted = ["Texas", "Florida", "Ohio", "Illinois", "Georgia", "Michigan", "Virginia", "Virginia", "North Carolina", "Massachusetts", "Alabama", " Tennessee", "South Carolina", "Louisiana", "Missouri", "Minnesota", "Colorado", "Iowa", "Arkansas",
  "Nevada", "Oklahoma", "Nebraska", "Kansas", "Maine", "New Hampshire"
];

var repAllotted = ["Iowa", "New Hampshire", "South Carolina", "Nevada", "Alabama", "Alaska", "Arkansas", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Kentucky", "Louisiana", "Maine", "Hawaii", "Idaho", "Michigan", "Mississippi", "Wyoming",
  "Florida", "Illinois", "Missouri", "North Carolina", "Ohio"
];

var repStates = {
  "Alabama": 50,
  "Alaska": 28,
  "Arizona": 58,
  "Arkansas": 40,
  "California": 172,
  "Colorado": 37,
  "Connecticut": 28,
  "Delaware": 16,
  "Florida": 99,
  "Georgia": 76,
  "Hawaii": 19,
  "Idaho": 32,
  "Illinois": 69,
  "Indiana": 57,
  "Iowa": 30,
  "Kansas": 40,
  "Kentucky": 46,
  "Louisiana": 46,
  "Maine": 23,
  "Maryland": 38,
  "Massachusetts": 42,
  "Michigan": 59,
  "Minnesota": 38,
  "Mississippi": 40,
  "Missouri": 52,
  "Montana": 27,
  "Nebraska": 36,
  "Nevada": 30,
  "New Hampshire": 23,
  "New Jersey": 51,
  "New Mexico": 24,
  "New York": 95,
  "North Carolina": 72,
  "North Dakota": 28,
  "Ohio": 66,
  "Oklahoma": 43,
  "Oregon": 28,
  "Pennsylvania": 71,
  "Rhode Island": 19,
  "South Carolina": 50,
  "South Dakota": 29,
  "Tennessee": 58,
  "Texas": 155,
  "Utah": 40,
  "Vermont": 16,
  "Virginia": 49,
  "Washington": 44,
  "West Virginia": 34,
  "Wisconsin": 42,
  "Wyoming": 29
};

var demDelegates = d3.values(demoStates);
var repDelegates = d3.values(repStates);
var stateNames = d3.keys(demoStates);

var demoTotal = 4050;
var demoAllottedCount = 2007;
var demoUnallotted = demoTotal - demoAllottedCount;
var repTotal = 2472;
var repAllottedCount = 1412;
var repUnallotted = repTotal - repAllottedCount;

var demoScale = d3.scale.linear()
  .domain([0, d3.max(demDelegates)])
  .range([0, 700]);

var repScale = d3.scale.linear()
  .domain([0, d3.max(repDelegates)])
  .range([0, 700]);

d3.select(".chart")
  .selectAll("div")
  .data(stateNames)
  .enter().append("div")
  .style("width", function(d) {
    return demoScale(demoStates[d]) + "px";
  })
  .text(function(d) {
    return d + ": " + demoStates[d];
  })
  .style("background-color", function(d) {
    if (demoAllotted.indexOf(d) === -1) {
      return "lightgray";
    } else {
      return "lightblue";
    }
  });

var repTransition = function() {
  d3.select(".chart")
    .selectAll("div").transition()
    .duration(3000)
    .style("width", function(d) {
      return repScale(repStates[d]) + "px";
    })
    .text(function(d) {
      return d + ": " + repStates[d];
    })
    .style("background-color", function(d) {
      if (repAllotted.indexOf(d) === -1) {
        return "lightgray";
      } else {
        return "lightblue";
      }
    });
  d3.select("#party-name").text("Republican Delegates");
  d3.select("#delegate-total").text("Total Delegates: " + repTotal);
  d3.select("#delegate-allotted").text("Delegates Allotted: " + repAllottedCount);
  d3.select("#delegate-unallotted").text("Delegates Unallotted: " + repUnallotted);
  document.getElementsByClassName("chart")[0].addEventListener("click", demoTransition);
  document.getElementsByClassName("chart")[0].removeEventListener("click", repTransition);
};
var demoTransition = function() {
  d3.select(".chart")
    .selectAll("div").transition()
    .duration(3000)
    .style("width", function(d) {
      return demoScale(demoStates[d]) + "px";
    })
    .text(function(d) {
      return d + ": " + demoStates[d];
    })
    .style("background-color", function(d) {
      if (demoAllotted.indexOf(d) === -1) {
        return "lightgray";
      } else {
        return "lightblue";
      }
    });
  d3.select("#party-name").text("Democratic Delegates");
  d3.select("#delegate-total").text("Total Delegates: " + demoTotal);
  d3.select("#delegate-allotted").text("Delegates Allotted: " + demoAllottedCount);
  d3.select("#delegate-unallotted").text("Delegates Unallotted: " + demoUnallotted);
  document.getElementsByClassName("chart")[0].addEventListener("click", repTransition);
  document.getElementsByClassName("chart")[0].removeEventListener("click", demoTransition);
};
document.getElementsByClassName("chart")[0].addEventListener("click", repTransition);
