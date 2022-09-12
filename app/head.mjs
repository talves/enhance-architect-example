export default function Head(req = {}) {
  const { path } = req;
  console.log(path)
  const title = `My app — ${path === '/' ? 'home' : path.replace('/','')}`;
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        <link rel="stylesheet" href="/_static/styles.css">
        <link rel="icon" href="/_static/favicon.svg">
      </head>
    `;
}
