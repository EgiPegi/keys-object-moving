import React, { useEffect, useState } from "react";

const useKeyPress = ({ key, keyUp, keyDown }) => {
  const [IsPressed, setIsPressed] = useState(false);

  const lepas = (e) => {
    const { key : press } = e;
    if (press === key) keyUp();

    return setIsPressed(false)
  };

  const pencet = (e) => {
    const { key : press } = e;
    if (press === key) keyDown();

    return setIsPressed(true)
  };

  useEffect(() => {
    window.addEventListener("keyup", lepas);
    window.addEventListener("keydown", pencet);
    return () => {
      window.removeEventListener("keyup", lepas);
      window.removeEventListener("keydown", pencet);
    };
  }, []);
  return IsPressed;
};

export default useKeyPress;
