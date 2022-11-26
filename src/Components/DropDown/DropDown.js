import { useState } from "react";
import ColorChanger from "../ColorChanger/ColorChanger";
import styles from "./DropDown.module.css";

function DropDown() {
  const [color, setColor] = useState("lime");
  const options = [
    {
      label: "Lime",

      value: "lime",
    },

    {
      label: "Lavender",

      value: "lavender",
    },

    {
      label: "Crimson",

      value: "crimson",
    },

    {
      label: "Darkblue",

      value: "darkblue",
    },

    {
      label: "Teal",

      value: "teal",
    },

    {
      label: "Rebecca Purple",

      value: "rebeccapurple",
    },

    {
      label: "Ghost White",

      value: "ghostwhite",
    },

    {
      label: "Aqua Marine",

      value: "aquamarine",
    },

    {
      label: "Alice Blue",

      value: "aliceblue",
    },
  ];
  return (
    <div>
      <select
        style={{ background: color }}
        className={styles.select}
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </select>
      <ColorChanger bg={color} />
    </div>
  );
}

export default DropDown;
