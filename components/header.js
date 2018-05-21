var Nanocomponent = require('nanocomponent')
var html = require('choo/html')
var css = require('sheetify')

var rotations = {
  logo: 'rotate(-2deg)',
  article: 'rotate(20deg)',
  list: 'rotate(-5deg)',
  icon: 'rotate(-8deg)'
}

var paper = css`
  :host {
    filter: drop-shadow(0 0 0.3rem darkgray);
    will-change: transform;
  }

  :host img, :host embed {
    will-change: transform;
  }

  :host img:hover, :host embed:hover {
    animation-play-state: paused;
  }
`

var logo = css`
  :host {
    transform: rotate(-2deg);
    -webkit-transform: rotate(-2deg);
    -ms-transform: rotate(-2deg);
  }

  :host img {
    animation: rotating 500s linear reverse;
  }
`

var article = css`
  :host {
    transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    left: 0;
    top: 60%;
  }

  :host embed {
    animation: rotating 1000s linear reverse;
  }
`

var list = css`
  :host {
    transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    left: 74%;
    top: 0;
  }

  :host img {
    animation: rotating 1500s linear;
  }
`

var icon = css`
  :host {
    transform: rotate(-8deg);
    -webkit-transform: rotate(-8deg);
    -ms-transform: rotate(-8deg);
    left: 0;
    top: -30%;
  }

  :host img {
    animation: rotating 2000s linear;
  }
`

class Header extends Nanocomponent {
  constructor () {
    super()
  }

  createElement () {
    return html`<header class="bgc-blue vh100 z0 x xjc xac psr oh">
        <div id="logo" class="vw100 md-vw50 ${paper} ${logo}">
          <img class="mxw100" src="assets/img/logo.svg">
        </div>
        <div id="article" class="psa vw100 sm-vw50 ${paper} ${article}">
          <embed class="mxw100" src="assets/img/article.svg">
        </div>
        <div id="list" class="psa vw100 sm-vw50 ${paper} ${list}">
          <img class="mxw100" src="assets/img/list.svg">
        </div>
        <div id="icon" class="psa vw100 sm-vw50 ${paper} ${icon}">
          <img class="mxw100" src="assets/img/icon.svg">
        </div>
      </header>`
  }

  update () {
    return false
  }
}

module.exports = Header
