import { Component, createContext } from "solid-js";
import { createStore } from "solid-js/store";
import "../index.css";
import "../props/sizing/width/index.css";
import "../props/sizing/height/index.css";
import "../props/background/colors/index.css";
import "../props/text/colors/index.css";
import "../props/text/fontSize/index.css";
import "../props/text/fontWeight/index.css";
import "../props/borders/borderRadius/index.css";
import "../props/spacing/margin/index.css";
import "../props/spacing/padding/index.css";
import "../props/spacing/spaceBetween/index.css";
import "../props/layout/display/index.css";
import "../props/layout/position/index.css";

export const SimpleContext = createContext();

export const SimpleProvider: Component = (props) => {
  const [state, setState] = createStore<{
    portal: null | HTMLDivElement;
  }>({
    portal: null,
  });

  return (
    <SimpleContext.Provider value={[state, setState]}>
      <div>
        <div ref={(el) => setState("portal", el)} id="simple-ui-portal" />
        {props.children}
      </div>
    </SimpleContext.Provider>
  );
};
