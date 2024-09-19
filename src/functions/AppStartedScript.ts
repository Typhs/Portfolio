type ConsolableColor =
  | "cyan"
  | "orange"
  | "white"
  | "hotpink"
  | "lime"
  | "crimson"
  | "gold"
  | "tomato";

declare global {
  interface Console {
    productionLog: Function;
  }
  interface Window {
    clearLocalStorage: Function;
  }
  function xlog(value: any, color?: ConsolableColor): void;
  function clearLocalStorage(): void;
}

export default function () {
  // ========= console.log manipulation =========
  const oldLog = console.log;
  console.productionLog = (value: string, color: string = "orange") => {
    // console.productionLog is a console.log that works even in production
    // it's also colorful :)
    oldLog(`%c${value}`, `background: #232327; color: ${color}`);
  };
  if (process.env.NODE_ENV != "development") {
    console.log = () => {}; //remove regular console.log if in production
  }
  window.xlog = function (value, color = "lime") {
    try {
      if (typeof value == "object") {
        value = JSON.stringify(value, null, 4);
      }
      console.log("%c" + value, `color: ${color}`);
    } catch (err) {
      console.log(value);
    }
  };
  // ========= on before window close =========
  window.onbeforeunload = () => {};
  // ========= on before window close =========

  // ========= MICROSOFT CLARITY =========
  if (process.env.NODE_ENV != "development") {
    (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "o5h89udm3k");
  }
  // ========= MICROSOFT CLARITY =========
}
