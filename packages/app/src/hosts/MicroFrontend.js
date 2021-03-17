import React, { useEffect } from "react";

function MicroFrontend({ name, host, history }) {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    function renderMicroFrontend() {
      const containerId = `${name}-container`;
      const renderApp = window[`render${name}`];
      renderApp(containerId, history);
    }

    if (document.getElementById(scriptId)) {
      return renderMicroFrontend();
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.head.appendChild(script);
      });

    return () => {
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  });

  return <main id={`${name}-container`} />;
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
