import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <h1>${entry.getIn(["data", "title"], null)}</h1>

        ${this.props.widgetFor("intro")}
        ${this.props.widgetFor("image")}
        ${this.props.widgetFor("process")}
        ${this.props.widgetFor("offerings")}
        ${this.props.widgetFor("fees")}
        
      </main>
    `;
  }
});

export default Page;