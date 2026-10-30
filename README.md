# playhtmlBitsy
playhtml Bitsy is a tiny script  that adds local presence based multiplayer to any Bitsy game using [playhtml](https://github.com/spencerc99/playhtml).

The code rewrites bitsy's primary loop to keep track of player locations in a playHTML presence. `drawRoom` is then rewritten to also draw these player locations.

## How to use

Open your exported bitsy game and scroll to the bottom of the file (at the time of writing, it looks like this):

```html
</script>

</head>


<!-- DOCUMENT BODY -->
<body onload='startExportedGame()'>
  <!-- GAME CANVAS -->
  <canvas id='game'></canvas>
</body>


</html>
```

then edit it to look like this:

```html
</script>

<!-- playhtmlBitsy CODE -->
<script  type="module" src="https://str0nkyk0ng.github.io/PlayBitsyHTML/playhtml.js"></script>
<!-- playhtmlBitsy CODE -->


</head>


<!-- DOCUMENT BODY -->
<body onload='startExportedGame()'>
  <!-- GAME CANVAS -->
  <canvas id='game'></canvas>
</body>


</html>
```
