import { TabPanel } from "../tab-panel";

export const Demo = () => {
  return (
    <TabPanel id="demo-tab-panel">
      <>
        <ul role="tablist">
          <li role="presentation">
            <a role="tab" href="/htmz/tabs/dog.html#tabs-demo-panel">
              Dog
            </a>
          </li>
          <li role="presentation">
            <a role="tab" href="/htmz/tabs/cat.html#tabs-demo-panel">
              Cat
            </a>
          </li>
          <li role="presentation">
            <a role="tab" href="/htmz/tabs/horse.html#tabs-demo-panel">
              Horse
            </a>
          </li>
        </ul>

        <TabPanel id="tabs-demo-panel" />
      </>
    </TabPanel>
  );
};
