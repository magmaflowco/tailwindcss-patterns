# 80+ geometric background patterns for TailwindCSS

## About
This package allows you to quickly add repeating background patterns to your TailwindCSS projects. We've collected and designed 80+ geometric patterns that can be applied as utility classes in TailwindCSS.

**[Live Demo](https://patterns.magmaflow.co)**

## Creators
*This package is brought to you by MagmaFlow, we offer unlimited TailwindCSS development for a fixed monthly fee to startups, agencies and freelancers. Find out more [here](https://magmaflow.co).*

## Installation
Install the plugin from npm:
``` bash
npm i tailwindcss-patterns
```

## Setup
Then add the plugin to your tailwind.config.js file:
```javascript
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-patterns'),
    // ...
  ],
}
```

## Usage
There are two main classes you can use:

### Pattern
Add a background pattern using the following schema `pattern-{type}-{color}/{opacity}`.

You can find a list of patterns [here](#pattern-types).

For example:
```html
<div class="pattern-hive-amber-500/100"...
```

### Scale
You can scale a background pattern, in line with its aspect ratio using the following schema `pattern-{type}-scale-{percent}`.

For example:
```html
<div class="pattern-hive-scale-50"...
```

Scaling options are the same as TailwindCSS's scale options (they can be found [here](https://tailwindcss.com/docs/scale).)

You may want to use a custom scaling multiplier. You can do that using the following schema `pattern-{type}-scale-[multiplier]`.

For example:
```html
<div class="pattern-hive-scale-[2.5]"...
```

### Putting it all together

You can combine these classes with a generic background class to create the full effect.
```html
<div class="bg-amber-300 pattern-hive-amber-700/50 pattern-hive-scale-[0.5]"></div>
```

### Pattern types

- `jigsaw` - [Live Demo](https://patterns.magmaflow.co/#jigsaw)
- `ripples` - [Live Demo](https://patterns.magmaflow.co/#ripples)
- `topography` - [Live Demo](https://patterns.magmaflow.co/#topography)
- `texture` - [Live Demo](https://patterns.magmaflow.co/#texture)
- `hub` - [Live Demo](https://patterns.magmaflow.co/#hub)
- `architect` - [Live Demo](https://patterns.magmaflow.co/#architect)
- `voxel` - [Live Demo](https://patterns.magmaflow.co/#voxel)
- `crosses` - [Live Demo](https://patterns.magmaflow.co/#crosses)
- `graph` - [Live Demo](https://patterns.magmaflow.co/#graph)
- `squares` - [Live Demo](https://patterns.magmaflow.co/#squares)
- `falling-triangles` - [Live Demo](https://patterns.magmaflow.co/#falling-triangles)
- `pies` - [Live Demo](https://patterns.magmaflow.co/#pies)
- `hexagons` - [Live Demo](https://patterns.magmaflow.co/#hexagons)
- `zig-zag` - [Live Demo](https://patterns.magmaflow.co/#zig-zag)
- `zig-zag-2` - [Live Demo](https://patterns.magmaflow.co/#zig-zag-2)
- `autumn` - [Live Demo](https://patterns.magmaflow.co/#autumn)
- `temple` - [Live Demo](https://patterns.magmaflow.co/#temple)
- `death-star` - [Live Demo](https://patterns.magmaflow.co/#death-star)
- `overlapping-hexagons` - [Live Demo](https://patterns.magmaflow.co/#overlapping-hexagons)
- `stars` - [Live Demo](https://patterns.magmaflow.co/#stars)
- `bamboo` - [Live Demo](https://patterns.magmaflow.co/#bamboo)
- `floor` - [Live Demo](https://patterns.magmaflow.co/#floor)
- `cork-screw` - [Live Demo](https://patterns.magmaflow.co/#cork-screw)
- `kiwi` - [Live Demo](https://patterns.magmaflow.co/#kiwi)
- `lips` - [Live Demo](https://patterns.magmaflow.co/#lips)
- `checkered` - [Live Demo](https://patterns.magmaflow.co/#checkered)
- `x-equals` - [Live Demo](https://patterns.magmaflow.co/#x-equals)
- `bevel-circle` - [Live Demo](https://patterns.magmaflow.co/#bevel-circle)
- `brick-wall` - [Live Demo](https://patterns.magmaflow.co/#brick-wall)
- `fancy-rectangles` - [Live Demo](https://patterns.magmaflow.co/#fancy-rectangles)
- `heavy-rain` - [Live Demo](https://patterns.magmaflow.co/#heavy-rain)
- `overlapping-circles` - [Live Demo](https://patterns.magmaflow.co/#overlapping-circles)
- `plus` - [Live Demo](https://patterns.magmaflow.co/#plus)
- `plus-connected` - [Live Demo](https://patterns.magmaflow.co/#plus-connected)
- `volcano-lamp` - [Live Demo](https://patterns.magmaflow.co/#volcano-lamp)
- `wiggle` - [Live Demo](https://patterns.magmaflow.co/#wiggle)
- `bubbles` - [Live Demo](https://patterns.magmaflow.co/#bubbles)
- `cage` - [Live Demo](https://patterns.magmaflow.co/#cage)
- `connections` - [Live Demo](https://patterns.magmaflow.co/#connections)
- `current` - [Live Demo](https://patterns.magmaflow.co/#current)
- `diagonal-stripes` - [Live Demo](https://patterns.magmaflow.co/#diagonal-stripes)
- `flipped-diamonds` - [Live Demo](https://patterns.magmaflow.co/#flipped-diamonds)
- `houndstooth` - [Live Demo](https://patterns.magmaflow.co/#houndstooth)
- `leaf` - [Live Demo](https://patterns.magmaflow.co/#leaf)
- `lines-in-motion` - [Live Demo](https://patterns.magmaflow.co/#lines-in-motion)
- `moroccan` - [Live Demo](https://patterns.magmaflow.co/#moroccan)
- `morphing-diamonds` - [Live Demo](https://patterns.magmaflow.co/#morphing-diamonds)
- `rails` - [Live Demo](https://patterns.magmaflow.co/#rails)
- `rain` - [Live Demo](https://patterns.magmaflow.co/#rain)
- `squares-in-squares` - [Live Demo](https://patterns.magmaflow.co/#squares-in-squares)
- `stripes` - [Live Demo](https://patterns.magmaflow.co/#stripes)
- `tic-tac-toe` - [Live Demo](https://patterns.magmaflow.co/#tic-tac-toe)
- `aztec` - [Live Demo](https://patterns.magmaflow.co/#aztec)
- `bank-note` - [Live Demo](https://patterns.magmaflow.co/#bank-note)
- `boxes` - [Live Demo](https://patterns.magmaflow.co/#boxes)
- `circles-and-squares` - [Live Demo](https://patterns.magmaflow.co/#circles-and-squares)
- `circuit-board` - [Live Demo](https://patterns.magmaflow.co/#circuit-board)
- `curtain` - [Live Demo](https://patterns.magmaflow.co/#curtain)
- `clouds` - [Live Demo](https://patterns.magmaflow.co/#clouds)
- `eyes` - [Live Demo](https://patterns.magmaflow.co/#eyes)
- `tiles` - [Live Demo](https://patterns.magmaflow.co/#tiles)
- `groovy` - [Live Demo](https://patterns.magmaflow.co/#groovy)
- `intersecting-circles` - [Live Demo](https://patterns.magmaflow.co/#intersecting-circles)
- `melt` - [Live Demo](https://patterns.magmaflow.co/#melt)
- `overlapping-diamonds` - [Live Demo](https://patterns.magmaflow.co/#overlapping-diamonds)
- `wood` - [Live Demo](https://patterns.magmaflow.co/#wood)
- `polka` - [Live Demo](https://patterns.magmaflow.co/#polka)
- `signal` - [Live Demo](https://patterns.magmaflow.co/#signal)
- `slanted` - [Live Demo](https://patterns.magmaflow.co/#slanted)
- `lines-diagonal-right` - [Live Demo](https://patterns.magmaflow.co/#lines-diagonal-right)
- `lines-diagonal-left` - [Live Demo](https://patterns.magmaflow.co/#lines-diagonal-left)
- `lines-horizontal` - [Live Demo](https://patterns.magmaflow.co/#lines-horizontal)
- `lines-vertical` - [Live Demo](https://patterns.magmaflow.co/#lines-vertical)
- `sprinkles` - [Live Demo](https://patterns.magmaflow.co/#sprinkles)
- `waves` - [Live Demo](https://patterns.magmaflow.co/#waves)
- `hive` - [Live Demo](https://patterns.magmaflow.co/#hive)
- `squiggles` - [Live Demo](https://patterns.magmaflow.co/#squiggles)
- `triangles` - [Live Demo](https://patterns.magmaflow.co/#triangles)
- `grid` - [Live Demo](https://patterns.magmaflow.co/#grid)
- `zebra` - [Live Demo](https://patterns.magmaflow.co/#zebra)

## Credits
This package couldn't have been put together without patterns from:
- [Hero Patterns](https://heropatterns.com/)
- [Pattern Monster](https://pattern.monster/)
- [MadeByCrevans](https://madebycrevans.com/)
