import B from 'bowser'

export default ({ app: { head, context } }, inject) => {
  let _userAgent = '<%= options.userAgent %>'
  
  if (typeof context.req !== 'undefined') {
    _userAgent = context.req.headers['user-agent']
  } else if (typeof navigator !== 'undefined') {
    _userAgent = navigator.userAgent
  }

  const browser = B.getParser(_userAgent)

  <% if(options.autoDetect) { %>
    const attrName = '<%= options.autoDetect.attributeName %>' || 'data-browser'
    const valPrefix = '<%= options.autoDetect.valuePrefix %>'
    const osName = browser.parsedResult.os.name.replace(/\s+/g, '-').toLowerCase()
    const browserName = browser.parsedResult.browser.name.replace(/\s+/g, '-').toLowerCase()
    const platformType = browser.parsedResult.platform.type

    if(!process.static) {
      head.htmlAttrs[attrName] = `${valPrefix}${osName} ${valPrefix}${browserName} ${valPrefix}${platformType}`
    } else {
      if(process.client){
        document.documentElement.setAttribute(attrName, `${valPrefix}${osName} ${valPrefix}${browserName} ${valPrefix}${platformType}`)
      }
    }
  <% } %>

  inject('<%= options.name %>', browser)
}
