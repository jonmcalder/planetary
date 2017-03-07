HTMLWidgets.widget({

  name: 'planetary',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(opts) {

        el.innerHTML = "";

        var canvas = document.createElement("canvas");

        canvas.width = width;
        canvas.height = height;
        el.appendChild(canvas);

        var world_data = JSON.parse(opts.world_data);

        var planet = planetaryjs.planet();

        planet.loadPlugin(planetaryjs.plugins.earth({
          topojson: { world: world_data },
          oceans:   { fill:   '#000080' },
          land:     { fill:   '#339966' },
          borders:  { stroke: '#008000' }
        }));
        planet.loadPlugin(autorotate(opts.rotate));
        // The `pings` plugin draws animated pings on the globe.
        planet.loadPlugin(planetaryjs.plugins.pings());
        planet.loadPlugin(planetaryjs.plugins.zoom({
          scaleExtent: [100, 300]
        }));
        planet.loadPlugin(planetaryjs.plugins.drag({
          // Dragging the globe should pause the
          // automatic rotation until we release the mouse.
          onDragStart: function() {
            this.plugins.autorotate.pause();
          },
          onDragEnd: function() {
            this.plugins.autorotate.resume();
          }
        }));
        // Set up the globe's initial scale, offset, and rotation.
        planet.projection.scale(250).translate([250, 250]).rotate([0, -10, 0]);

        // Every few hundred milliseconds, we'll draw another random ping.
        var colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];
        setInterval(function() {
          var lat = Math.random() * 170 - 85;
          var lng = Math.random() * 360 - 180;
          var color = colors[Math.floor(Math.random() * colors.length)];
        planet.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 10 });
        }, 150);

        planet.draw(canvas);

        // This plugin will automatically rotate the globe around its vertical
        // axis a configured number of degrees every second.
        function autorotate(degPerSec) {
          // Planetary.js plugins are functions that take a `planet` instance
          // as an argument...
          return function(planet) {
            var lastTick = null;
            var paused = false;
            planet.plugins.autorotate = {
              pause:  function() { paused = true;  },
              resume: function() { paused = false; }
            };
            // ...and configure hooks into certain pieces of its lifecycle.
            planet.onDraw(function() {
              if (paused || !lastTick) {
                lastTick = new Date();
              } else {
                var now = new Date();
                var delta = now - lastTick;
                // This plugin uses the built-in projection (provided by D3)
                // to rotate the globe each time we draw it.
                var rotation = planet.projection.rotate();
                rotation[0] += degPerSec * delta / 1000;
                if (rotation[0] >= 180) rotation[0] -= 360;
                planet.projection.rotate(rotation);
                lastTick = now;
              }
            });
          };
        }

      },

      resize: function(width, height) {

        // To-do: implement resize method

      }

    };
  }
});
