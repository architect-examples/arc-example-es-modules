const body = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Architect ES Modules</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }
  </style>
</head>
<body>
  <h1>Architect</h1>
  <div id="js-message"></div>
  <!-- ES MODULE 👇 -->
  <script type="module" src="/js/hello.mjs" crossorigin></script>
</body>
</html>
`
exports.handler = async function http (request) {
  try {
    return {
      type: 'text/html; charset=utf8',
      body
    }
  } catch (e) {
    console.error(e)
    return {
      status: 500,
      type: 'application/json; charset=utf8',
      body: JSON.stringify({
        name: e.name,
        message: e.message,
        stack: e.stack
      }, null, 2)
    }
  }
}
