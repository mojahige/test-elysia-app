import { Root } from "src/components/root";
import { TabPanel } from "./tab-panel";

export const Page = () => {
  return (
    <Root
      title="🦊 Hello ElysiaJS | htmz"
      bodyContents={
        <>
          <base target="htmz" />

          <main>
            <h1>htmz</h1>

            <blockquote>
              <p>
                htmz is a minimalist HTML microframework that gives you the
                power to create modular web user interfaces with the familiar
                simplicity of plain HTML.
              </p>
            </blockquote>
            <cite>
              <a
                href="https://leanrada.com/htmz/"
                target="_blank"
                rel="noreferrer"
              >
                https://leanrada.com/htmz/
              </a>
            </cite>

            <hr />

            <section>
              <h2>Demos</h2>

              <div role="tablist">
                <a role="tab" href="/htmz/tabs.html#demo-tab-panel">
                  Tabs
                </a>
              </div>

              <TabPanel id="demo-tab-panel" />
            </section>
          </main>

          {/* biome-ignore lint/a11y/useIframeTitle: unnecessary attribute for htmz */}
          <iframe
            hidden
            name="htmz"
            onload="setTimeout(()=>document.querySelector(this.contentWindow.location.hash||null)?.replaceWith(...this.contentDocument.body.childNodes))"
          />
        </>
      }
    />
  );
};
