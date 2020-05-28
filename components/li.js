export default ({ children }) => (
  <li>
    {children}
    <style jsx>{`
      li {
        list-style-position: outside;
        list-style-type: none;
        margin: 1px;
      }
    `}</style>
  </li>
);
