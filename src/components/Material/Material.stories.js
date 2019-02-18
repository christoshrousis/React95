import React from "react";
import { storiesOf } from "@storybook/react";

import Material from "./Material";

storiesOf("Material", module)
  .addDecorator(story => (
    <div
      style={{
        padding: "5rem",
        background: "teal"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => <Material>reuse that artur pls</Material>)
  .add("hollow", () => <Material hollow>reuse that artur pls</Material>);
