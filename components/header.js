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
`

var logo = css`
  :host {
    transform: rotate(-2deg);
    -webkit-transform: rotate(-2deg);
    -ms-transform: rotate(-2deg);
  }
`

var article = css`
  :host {
    transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    left: 20%;
    top: 60%;
  }
`

var list = css`
  :host {
    transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    left: 60%;
    top: 0;
  }
`

var icon = css`
  :host {
    transform: rotate(-8deg);
    -webkit-transform: rotate(-8deg);
    -ms-transform: rotate(-8deg);
    left: 0;
    top: -40%;
  }
`

class Header extends Nanocomponent {
  constructor () {
    super()
    this.forceX = 0;
    this.forceY = 0;
    this.magnet = 2000;

    this.handleMouseMove = this.move.bind(this)
    this.handleTouchMove = this.move.bind(this)
  }

  createElement () {
    return html`<header class="bgc-blue vh100 z0 x xjc xac psr oh">
        <div id="logo" class="vw100 md-vw50 ${paper} ${logo}">
          <img class="mxw100" src="assets/img/logo.svg">
        </div>
        <div id="article" class="psa vw100 md-vw50 ${paper} ${article}">
          <embed class="mxw100" src="assets/img/article.svg">
        </div>
        <div id="list" class="psa vw100 md-vw50 ${paper} ${list}">
          <img class="mxw100" src="assets/img/list.svg">
        </div>
        <div id="icon" class="psa vw100 md-vw50 ${paper} ${icon}">
          <img class="mxw100" src="assets/img/icon.svg">
        </div>
      </header>`
  }

  load (header) {
    header.addEventListener("mousemove", this.handleMouseMove)
    header.addEventListener("touchmove", this.handleTouchMove);
    ['logo', 'article', 'list', 'icon'].map((id) => {
      var el = document.getElementById(id)
      var rect = el.getBoundingClientRect()
      el.dataset.homeX = rect.x
      el.dataset.homeY = rect.y
    })
  }

  move (e) {
    var mouseX = e.pageX
    var mouseY = e.pageY;
    ['logo', 'article', 'list', 'icon'].map((id) => {
      var magnet = (id !== 'logo') ? this.magnet : this.magnet / 20
      var el = document.getElementById(id)
      var rect = el.getBoundingClientRect()
      var elX = rect.x
      var elY = rect.y
      var distanceX = mouseX - elX
      var distanceY = mouseY - elY
      var distance = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY))
      var powerX = elX - (distanceX / distance) * magnet / distance
      var powerY = elY - (distanceY / distance) * magnet / distance
      this.forceX = (this.forceX + (el.dataset.homeX - elX) / 2) / 2.1
      this.forceY = (this.forceY + (el.dataset.homeY - elY) / 2) / 2.1
      var x = powerX + this.forceX - el.dataset.homeX
      var y = powerY + this.forceY - el.dataset.homeY
      el.style.transform = `translate(${x}px, ${y}px) ${rotations[id]}`
      el.style.webkitTransform = `translate(${x}px, ${y}px) ${rotations[id]}`
      el.style.msTransform = `translate(${x}px, ${y}px) ${rotations[id]}`
    })
  }

  update () {
    return false
  }
}

module.exports = Header
