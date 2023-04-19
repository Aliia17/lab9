{/* <svg width ="500" height = "500" id = "canvas">
    
</svg> */}



//  function pieChart () {
//     var svg = d3.select("svg"),
//     width = svg.attr("width"),
//     height = svg.attr("height"),
//     radius = Math.min(width, height) / 2.5;

//     var g = svg.append ("g")
//     .attr("transform", "translate(" + width /2 + "," + height /2 +")");

//     var color = d3.scaleOrdinal (['red', 'pink', 'yellow', 'purple', 'blue', ' brown', ' grey']);
//     var pie = d3.pie().value(function(d) 
//     {console.log (parseInt(d.Age/10))
//     return parseInt(d.Age/10);
// });

// var path = d3.arc().outerRadius(radius - 10).innerRadius(20);
// var label = d3.arc().outerRadius(radius).innerRadius(radius-80);

// d3.csv("titanic.csv").then(
//     function (data) {
//         console.log (parseInt(data [0].Age /10))
//         var gdata = d3.group(data, d => parseInt (d.Age / 10))
//         dataAll = []
//         for (let [key, value] of gdata) {
//             dataAll.push({name:key * 10 + "-" + (key +1) *10, Age: value.length})
//         }
//         console.log(dataAll)
//         arc = g.selectAll('.arc')
//         .data (pie (dataAll))
//         .enter ().append('g')
//         .attr ('class', 'arc');
//     arc.append('path')
//         .attr('d', path)
//         .attr('fill', function(d) {console.log ("log:" +d.data.name);return color (d.data.name);})
//     arc.append('text').attr('transform', function(d) {
//         return "translate(" + label.centroid(d) + ")";
//     })
//     .text(function (d) { return d.data.name;})
//     }
// )
//}


function drawGraph (){
    const xSize = 500;
    const ySize = 500;
    const margin = 40;
    const xMax = xSize - margin*2;
    const yMax = ySize - margin*2;

    const numPoints = 100;
    const data = [];
    for (let i = 0; i < numPoints; i++) {
        data.push([Math.random() *xMax, Math.random () * yMax]);
    }

    const svg = d3.select("#leftPane")
    .append("svg")
    .attr("height", 500)
    .attr("width", 500)
    .append("g")
    .attr("transform", "translate(" + margin + "," + margin + ")");

    const x = d3.scaleLinear()
    .domain([0, 500])
    .range([0, xMax]);
// X axis
    svg.append("g")
    .attr("transform", "translate(0," + yMax + ")")
    .call(d3.axisBottom(x));
// Y axis
    const y = d3.scaleLinear()
    .domain([0, 500])
    .range([yMax, 0]);

    svg.append("g")
    .call(d3.axisLeft(y));

    // Dots

    svg.append("g")
    .selectAll("dot")
    .data(data).enter()
    .append("circle")
    .attr("cx", function (d) {return d [0]})
    .attr("cy", function (d) {return d[1]})
    .attr("r", 3)
    .style("fill", "Blue");

}

    d3.selectAll("circle").on("click", function (d) {
        d3.select(this)
        .style("fill", "Blue")
    });

    values = [50, 100, 200, 300]
    const svgRight = d3.select ("#rightPane").append("svg")
    .attr ("height", 300)
    .attr("width", 300)
    .append("g")

    right = svgRight
    .selectAll("dot")
    .data(values).enter()
    .append("g")
    right.append("rect")

