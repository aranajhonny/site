export default ({ children }) => (
  <h1>
    <a href="#"># {children}</a>
    <style jsx>
      {`
        h1 {
          font-size: 18px;
          font-weight: 700;
        }
        a {
          color: #333;
          text-decoration: none;
        }
      `}
    </style>
  </h1>
);
