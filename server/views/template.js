export default ({ body }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Server Side Rendering</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      <body>
        <div id="root">${body}</div>
      </body>      
    </html>
  `
}
