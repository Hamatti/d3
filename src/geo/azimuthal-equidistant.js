import "../core/identity";
import "azimuthal";
import "geo";
import "projection";

var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(
  function(coslambdacosphi) { var c = Math.acos(coslambdacosphi); return c && c / Math.sin(c); },
  d3_identity
);

(d3.geo.azimuthalEquidistant = function() {
  return d3_geo_projection(d3_geo_azimuthalEquidistant);
}).raw = d3_geo_azimuthalEquidistant;
