L.mapbox.accessToken = 'pk.eyJ1IjoidXJiYW5pbnN0aXR1dGUiLCJhIjoiTEJUbmNDcyJ9.mbuZTy4hI_PWXw3C3UFbDQ';
var map = L.mapbox.map("map", 'urbaninstitute.iji12b2j', {
        zoomControl: true,
        fadeAnimation: false,
        maxZoom: 10,
        minZoom: 4
    })
    .setView([39.174360, -93.113837], 5);
map.attributionControl
    .addAttribution('<a href="http://www.urban.org/">&copy; Urban Institute</a>');

L.mapbox.tileLayer('urbaninstitute.6v96sml4').addTo(map);
var gridLayer = L.mapbox.gridLayer('urbaninstitute.6v96sml4').addTo(map);
var gridControl = L.mapbox.gridControl(gridLayer, {
        follow: true
    })
    .addTo(map);
//L.mapbox.tileLayer('urbaninstitute.h5b1kc2b').addTo(map);
map.gridControl.options.follow = true;

var colors = ["#b0d5f1", "#82c4e9", "#1696d2", "#00578b", "#00152A"];
var legend_breaks = [0.02, 0.04, 0.06, 0.08];
function legend() {
    var margin = {
        top: 5,
        right: 10,
        bottom: 2,
        left: 10
    };
    
    var width = 180 - margin.left - margin.right;
    var height = 50 - margin.top - margin.bottom;

    var svg = d3.select("#legend").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", 50 + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var lp_w = 0,
        ls_w = 30,
        ls_h = 18;

    var legend = svg.selectAll("g.legend")
        .data(colors)
        .enter().append("g")
        .attr("class", "legend");

    legend.append("text")
        .data(legend_breaks)
        .attr("x", function (d, i) {
            return (i * ls_w) + lp_w + ls_w - 9;
        })
        .attr("y", 15)
        .text(function (d, i) {
            return d3.format("%")(d);
        });

    legend.append("rect")
        .data(colors)
        .attr("x", function (d, i) {
            return (i * ls_w) + lp_w;
        })
        .attr("y", 20)
        .attr("width", ls_w)
        .attr("height", ls_h)
        .attr("z-index", 10)
        .attr("opacity", 0.6)
        .style("fill", function (d, i) {
            return colors[i];
        });
}

legend();