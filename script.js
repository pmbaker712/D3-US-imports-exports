//const url='https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

csv = "Year,BalTotal,BalGoods,BalServ,ExTotal,ExGoods,ExServ,ImTotal,ImGoods,ImServ"
+"1960,3508,4892,-1384,25940,19650,6290,22432,14758,7674"
+"1961,4195,5571,-1376,26403,20108,6295,22208,14537,7671" 
+"1962,3370,4521,-1151,27722,20781,6941,24352,16260,8092"

d3.csv("gands.csv", function(data) {
	
        console.log(data);
});
            
/*   

"C:/Users/dell/Desktop/simple-d3-barchart/dist/gands.csv"

    const w = 1200;
    const h = 400;
    const xpad = 50;
    const ypad = 25;

    var xmax = d3.max(data, (d) => d.Year);
    var xmin = d3.min(data, (d) => d.Year);
    var ymax = d3.max(data, (d) => d.BalTotal);
    var ymin = d3.min(data, (d) => d.BalTotal);
    
    var xScale = d3.scaleLinear()
      .domain([xmin, xmax])
      .range([xpad, w - xpad]);
    
    var yScale = d3.scaleLinear()
      .domain([0, ymax])
      .range([h - ypad, ypad]);

    var svg = d3.select("div")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    d3.select("body")
      .append("div")
      .attr("id", "tooltip");  
    
    svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i*4 + xpad)
       .attr("y", (d, i) => h - ypad - d.BalTotal/(ymax/(h - 2*ypad)))
       .attr("width", 4)
       .attr("height", (d, i) => d.BalTotal/(ymax/(h - 2*ypad)))
       .attr("class", "bar")
       .attr("data-date", (d) => d.Year)
       .attr("data-gdp", (d) => d.BalTotal)
  
       .on("mouseover", function(d) {
          d3.select('#tooltip')
            .attr("data-date", d.Year)
            .attr("data-gdp", d.BalTotal)
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("font-family", "arial")
            .style("background-color", "#ffffaa")
            .text(d.Year + ", $" + d.BalTotal + " Billion")
       })
       .on("mouseout", function() {
          d3.select("#tooltip")
            .style("opacity", 0)
       })
       .on("mousemove", function() {
          d3.select("#tooltip")
            .style("left", (d3.event.pageX+10) + "px")
            .style("top", (d3.event.pageY+10) + "px")
       });
    
    var xAxis = d3.axisBottom(xScale)
                  .tickFormat(d3.format("d"));
    
    var yAxis = d3.axisLeft(yScale);
    
    svg.append("g")
       .attr("transform", "translate(0," + (h - ypad) + ")")
       .attr("id","x-axis")
       .call(xAxis);
    
    svg.append("g")
       .attr("transform", "translate(" + xpad + ",0)")
       .attr("id","y-axis")
       .call(yAxis);
  
    svg.append("g")
       .attr("transform", "translate(75,200)")
       .append("text")
       .style("font-family", "arial")
       .attr("text-anchor", "middle")
       .attr("transform", "rotate(-90)")
       .text("GDP in Billion $");

}); */