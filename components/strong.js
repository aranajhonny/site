export default ({ children }) => (
  <strong>
    {children}
    <style jsx>{`
      strong:before {
        content: "<";
        opacity: 0.5;
      }
      strong:after {
        content: " /> ";
        opacity: 0.5;
      }
    `}</style>
  </strong>
);
