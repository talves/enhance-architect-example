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
        <style scope="global">
            body {
                height: 100vh;
                background-color: #C1FFFB;
                background-image: linear-gradient(180deg, #74F1FF 71.87%, #C1FFFB 100%);
                background-attachment: fixed;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                --navy: #003451;
                --lilac: #AD6EF9;
            }

            main {
                min-width: 17rem;
                max-width: 52rem;
                height: 100%;
            }

            .welcome {
                max-width: 26rem;
            }

            .color-light {
                color: var(--light);
            }

            .color-lilac {
                color: var(--lilac);
            }

            .border-lilac {
                border-color: var(--lilac);
            }

            .bg-navy {
                background-color: var(--navy);
            }

            .bg-lilac {
                background-color: var(--lilac);
            }

            .link-btn {
                height: 4rem;
            }

            .discord-logo {
                width: 1.75rem;
            }

            .radius5 {
                border-radius: 5px;
            }


            @media only screen and (min-width:48em) {
                :host>main {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-template-rows: repeat(5, 1fr);
                }

                :host>main {
                width: 50rem;
                grid-column: 1 / 6;
                }
            }
        </style>
      </head>
    `;
}
