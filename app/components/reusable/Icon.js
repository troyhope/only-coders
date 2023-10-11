"use client";

import { IconContext } from "react-icons";

function Icon({ icon: IconComponent, color, size }) {
  return (
    <IconContext.Provider value={{ color, size }}>
      <IconComponent />
    </IconContext.Provider>
  );
}

export default Icon;
