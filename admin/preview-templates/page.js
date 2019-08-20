import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <div class="fill-box fill-box-gg">
          <h1 class="hero-text">${this.props.widgetFor("intro")}</h1>
        </div>
          ${this.props.widgetFor("image")}
          ${this.props.widgetFor("process")}
          ${this.props.widgetFor("offerings")}
          ${this.props.widgetFor("fees")}
        
      </main>
    `;
  }
});

export default Page;
