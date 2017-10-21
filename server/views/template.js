export default ({ body }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Server Side Rendering</title>
      </head>
      <body>
        <div id="root">${body}</div>
        <script src="bundle.js"></script>
      </body>      
    </html>
  `
}
