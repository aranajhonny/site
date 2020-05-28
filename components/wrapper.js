//import 'preact/devtools'
export default ({ children }) => (
  <div className="wrapper">
    {children}
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700");
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Inconsolata", monospace;
        color: #000;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        line-height: 1.2em;
      }
      html,
      body {
        height: 100%;
        line-height: 0px;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre {
        margin-bottom: 20px;
        margin-top: 30px;
      }
    `}</style>
    <style jsx>{`
      .wrapper {
        max-width: 800px;
        margin: 0 auto;
        padding: 60px 30px 100px 30px;
      }
    `}</style>
  </div>
);
