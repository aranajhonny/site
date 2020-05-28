export default ({ children }) => (
  <h1>
    <a href="#"># {children}</a>
    <style jsx>{`
      h1 {
        font-size: 16px;
        font-weight: 700;
        font-weight: bold;
      }
      a {
        color: #333;
        text-decoration: none;
      }
    `}</style>
  </h1>
);
