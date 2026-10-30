# playhtmlBitsy

playhtmlBitsy is a tiny script  that adds local, presence-based-multiplayer to any Bitsy game. It uses [playhtml](https://github.com/spencerc99/playhtml) to facilitate connections.

The code rewrites Bitsy's primary loop to add the local player's location to a [playHTML presence](https://playhtml.fun/docs/data/presence/). Bitsy's `drawRoom` function is then rewritten to draw sprites from these locations.

## How to use

Open your exported bitsy game and scroll to the bottom of the file:

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

<script  type="module" src="https://str0nkyk0ng.github.io/PlayHTMLBitsy/playhtmlbitsy.js"></script>

</head>


<!-- DOCUMENT BODY -->
<body onload='startExportedGame()'>
  <!-- GAME CANVAS -->
  <canvas id='game'></canvas>
</body>


</html>
```
