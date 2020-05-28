export default ({ children }) => (
  <ul>
    {children}
    <style jsx>{`
      ul {
        margin: 1px;
      }
    `}</style>
  </ul>
);
