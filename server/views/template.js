export default ({ body }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Server Side Rendering</title>
      </head>
      <body>
        <div id="app">${body}</div>
        <script src="bundle.js" defer></script>
      </body>      
    </html>
  `
}
