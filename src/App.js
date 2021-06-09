import logo from "./logo.svg";
import "./App.css";
import useKeyPress from "./@core/useKeyPress";
import { useEffect, useState } from "react";

function App() {
  const [isLogoMoved, setisLogoMoved] = useState(false);
  const [Koordinat, setKoordinat] = useState({ x: 0, y: 0 });
  const [Moved, setMoved] = useState("");

  const root = document.documentElement;

  useEffect(() => {
    console.log(Moved);
    root?.style.setProperty(
      "--from",
      Moved === "kanan" ? "0deg" : Moved === "kiri" ? "360deg" : "0"
    );
    root?.style.setProperty(
      "--to",
      Moved === "kanan" ? "360deg" : Moved === "kiri" ? "0deg" : "0"
    );
  }, [Moved]);

  const kanan = () => {
    setKoordinat({ ...Koordinat, x: Koordinat.x++ });
    setMoved("kanan");
    setisLogoMoved(true);
  };

  const kiri = () => {
    setKoordinat({ ...Koordinat, x: Koordinat.x-- });
    setMoved("kiri");
    setisLogoMoved(true);
  };

  const atas = () => {
    setKoordinat({ ...Koordinat, y: Koordinat.y++ });
    root?.style.setProperty("--anim", "gerak  infinite 0.25s linear");
    // setMoved("kanan");
    setisLogoMoved(true);
  };

  const bawah = () => {
    setKoordinat({ ...Koordinat, y: Koordinat.y-- });
    root?.style.setProperty("--anim", "gerak  infinite 0.25s linear");
    // setMoved("kiri");
    setisLogoMoved(true);
  };

  //kanan
  useKeyPress({
    key: "d",
    keyUp: () => {
      setisLogoMoved(false);
      setMoved("");
      root?.style.setProperty("--anim", "App-logo-spin  infinite 1s linear");
    },
    keyDown: kanan,
  });
  //krir
  useKeyPress({
    key: "a",
    keyUp: () => {
      setisLogoMoved(false);
      setMoved("");
      root?.style.setProperty("--anim", "App-logo-spin  infinite 1s linear");
    },
    keyDown: kiri,
  });
  //atas
  useKeyPress({
    key: "w",
    keyUp: () => {
      setisLogoMoved(false);
      setMoved("");
      root?.style.setProperty("--anim", "App-logo-spin  infinite 1s linear");
    },
    keyDown: atas,
  });
  //bawah
  useKeyPress({
    key: "s",
    keyUp: () => {
      setisLogoMoved(false);
      setMoved("");
      root?.style.setProperty("--anim", "App-logo-spin  infinite 1s linear");
    },
    keyDown: bawah,
  });

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: "absolute", top: 0 }}>
          Koordinatnya adalah <br />
          X: {Koordinat.x}/ Y: {Koordinat.y}
        </div>
        {isLogoMoved ? (
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{
              marginLeft: `${Koordinat.x * 50}px`,
              marginBottom: `${Koordinat.y * 50}px`,
            }}
          />
        ) : (
          <img
            src={logo}
            className="App-logo-stop"
            alt="logo"
            style={{
              marginLeft: `${Koordinat.x * 50}px`,
              marginBottom: `${Koordinat.y * 50}px`,
            }}
          />
        )}
      </header>
    </div>
  );
}

export default App;
