export default function HelloWorld({ html, state }) {
  const { attrs } = state;
  const { name = "Hello World" } = attrs;
  return html` <h1>${name}</h1> `;
}
