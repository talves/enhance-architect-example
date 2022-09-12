export default function MyHeader({ html }) {
  return html`
      <header>
        <nav>
          <a href=/><span class="font-mono font-light inline-flex items-center pr-3 pl-3 border-solid border1 border-lilac radius1">Home</span></a>
          <a href=/about><span class="font-mono font-light inline-flex items-center pr-3 pl-3 border-solid border1 border-lilac radius1">About</span></a>
        </nav>
      </header>
    `;
}
