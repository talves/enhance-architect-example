export default function MyMessage({ html, state = {} }) {
  const { store = {} } = state;
  const { message = "", url= "" } = store;

  return html`<p>${message} <span class="font-mono font-light inline-flex items-center pr-3 pl-3 border-solid border1 border-lilac radius1">${url}</span><p>`;
}
