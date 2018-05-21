var html = require('choo/html')

var Header = require('../components/header')
var header = new Header()

var TITLE = 'Readrc - Online content digests for picky readers'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var subscribe = (state.query.subscribe == 'success') ? html`<span class="mr1">Subscribed!</span>` : html`<form class="dib mr1" action="https://jumprock.co/mail/readrc" method="post">
      <input type="text" name="trapit" value="" style="display:none">
      <input type="text" name="email" placeholder="Email Address" />
      <input type="hidden" name="after" value="https://readrc.club/?subscribe=success">
      <input type="submit" value="→ Subscribe" />
    </form>`

  return html`
    <body class="ff-sans">
      ${header.render()}
      <section class="z1 py2 px1 sm-px2 md-px4">
        <div class="x xjb xab xw c12 bt1-black">
          <div class="c12 md-c4">
            <a href="https://github.com/s3ththompson/readrc"><h1 class="fs2-4 c-purple mb1">Readrc</h1></a>
          </div>
          <div class="c12 md-c4">
            <p class="mb0">Online content digests for picky readers.</p>
          </div>
          <div class="c12 md-c4">
            ${subscribe}
            <span class="c-blue">→ <a href="https://github.com/s3ththompson/readrc">GitHub</a></span>
          </div>
        </div>
      </section>
      <section class="z1 py1 px1 sm-px2 md-px4 x xjb xw c12">
        <div class="c12 md-c4">
          <div class="bt1-black pt0-5 md-mr1">
            <h1 class="ttu mb2">Scrape</h1>
            <p class="fs1-2 c-purple">Take back control of your news feed algorithm.</p>
            <p>Define the sources that you want to follow, customize filters to sort articles and content, and add plugins to automatically tag content or translate foreign-language news articles. You own the algorithm.</p>
          </div>
        </div>
        <div class="c12 md-c4">
          <div class="bt1-black pt0-5 md-mr1">
            <h1 class="ttu mb2">Layout</h1>
            <p class="fs1-2 c-purple">Design a distraction-free layout.</p>
            <p>Create a beautiful digital magazine by applying custom themes to scraped content. Replace ads, popups, scroll-hijaking, and bloated online websites with a clean layout for reading. Or print out a PDF to read offline.</p>
          </div>
        </div>
        <div class="c12 md-c4">
          <div class="bt1-black pt0-5">
            <h1 class="ttu mb2">Share</h1>
            <p class="fs1-2 c-purple">Share what you read with others.</p>
            <p>Host your digests and the algorithms that generate them on the P2P web with <a href="https://datproject.org/" target="_blank" rel="noopener noreferrer">Dat</a> and <a href="https://beakerbrowser.com/" target="_blank" rel="noopener noreferrer">Beaker Browser</a>. Incorporate other people's readrc algorithms into your own to read the same things they do.</p>
          </div>
        </div>
      </section>
      <section class="z1 py1 px1 sm-px2 md-px4 x xjb xw c12">
        <div class="c12 sm-s2 md-c8">
          <div class="bt1-black pt0-5 sm-mr1">
            <h1 class="ttu mb3">Roadmap</h1>
            <div class="x xjb xw mb1">
              <div class="c12 lg-s2">
                <div class="todo-item">
                  <input type="checkbox" checked>
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>API design</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox" checked>
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>scaffold readrc object</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox" checked>
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>migrate to streams</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox" checked>
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>add RSS support</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox" checked>
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>implement first custom scraper</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox" checked>
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>test end-to-end pipeline</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox" checked>
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>add disk caching</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox">
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>decide default sources</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox">
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>finalize post object, readrc config</label>
                  </div>
                </div>
              </div>
              <div class="c12 lg-s2">
                <div class="todo-item">
                  <input type="checkbox">
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>implement filter system, run in series</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox">
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>design default layout</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox">
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>implement panel, c.f. <a href="https://panel.enoki.site/">panel.enoki.site</a></label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox">
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>implement dat hosting</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox">
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>add default filters</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox">
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>add tests</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox">
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>add docs</label>
                  </div>
                </div>
                <div class="todo-item">
                  <input type="checkbox">
                  <div class="state">
                    <svg class="svg svg-icon" viewBox="0 0 20 20">
                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                    <label>robust examples</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="c12 sm-s2 md-c4">
          <div class="bt1-black pt0-5">
            <h1 class="ttu mb3">Colophon</h1>
            <p>Join the discussion on GitHub issues.</p>
            <p>Built with: <a href="https://choo.io/" target="_blank" rel="noopener noreferrer">Choo</a>, <a href="https://github.com/stackcss/sheetify" target="_blank" rel="noopener noreferrer">Sheetify</a>, <a href="https://github.com/choojs/bankai" target="_blank" rel="noopener noreferrer">Bankai</a>, <a href="https://github.com/choojs/nanocomponent" target="_blank" rel="noopener noreferrer">Nanocomponent</a>, <a href="http://gr8.style/" target="_blank" rel="noopener noreferrer">gr8</a>, <a href="https://datproject.org/" target="_blank" rel="noopener noreferrer">Dat</a>, <a href="https://beakerbrowser.com/" target="_blank" rel="noopener noreferrer">Beaker Browser</a>, <a href="https://github.com/cheeriojs/cheerio" target="_blank" rel="noopener noreferrer">Cheerio</a>, and <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express</a></p>
            <p>Shout out to <a href="http://geoffreylitt.com/" target="_blank" rel="noopener noreferrer">Geoffrey Litt</a>, <a href="https://jon-kyle.com/" target="_blank" rel="noopener noreferrer">Jon-Kyle Mohr</a> (<a href="https://enoki.site/" target="_blank" rel="noopener noreferrer">Enoki</a>), <a href="https://jongacnik.com/" target="_blank" rel="noopener noreferrer">Jon Gacnik</a>, and <a href="https://peer-to-peer-web.com/" target="_blank" rel="noopener noreferrer">P2P Web</a>.</p>
            <p><a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> 2018 <a href="https://twitter.com/s3ththompson" target="_blank" rel="noopener noreferrer">Seth Thompson</a> </p>
          </div>
        </div>
      </section>
    </body>
  `
}
