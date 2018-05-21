var gr8 = require('gr8')

var opts = {
  utils: [],
  spacing: [0.5, 0, 1, 2, 3, 4],
  breakpointSelector: 'class'
}

var colors = {
  black: '#000',
  white: '#fff',
  gray: '#808080',
  blue: '#767cb8',
  purple: '#504c67',
  gold: '#b79a69'
}

var borderWeights = [1]

var borders = {}

for (var weight of borderWeights) {
  for (var color in colors) {
    borders[weight + '-' + color] = `${weight}px solid ${colors[color]}`
  }
}

opts.utils.push({
  prop: [
    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left'
  ],
  vals: borders
})

opts.utils.push({
  prop: { bgc: 'background-color' },
  join: '-',
  vals: colors
})

opts.utils.push({
  prop: 'color',
  join: '-',
  vals: colors
})

opts.utils.push({
  prop: 'font-family',
  join: '-',
  vals: {
    sans: `-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif`
  }
})

opts.utils.push({
  prop: {
    mx: 'max-width',
    my: 'max-height'
  },
  unit: '%',
  vals: [100]
})

opts.utils.push({
  prop: 'text-decoration',
  vals: {
    'u-hover': 'underline',
    'o-hover': 'overline',
    'lt-hover': 'line-through',
    'n-hover': 'none'
  },
  tail: ':hover'
})

module.exports = gr8(opts)
