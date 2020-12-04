const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/anton/html-and-css-practice/Minsk.rb/Gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/anton/html-and-css-practice/Minsk.rb/Gatsby/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/anton/html-and-css-practice/Minsk.rb/Gatsby/src/pages/index.js"))),
  "component---src-pages-individual-event-js": hot(preferDefault(require("/home/anton/html-and-css-practice/Minsk.rb/Gatsby/src/pages/individual_event.js")))
}

