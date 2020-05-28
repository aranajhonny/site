export default ({ children }) => (
  <article className="post">
    {children}
    <style jsx>{`
      .post {
        max-width: 800px;
        margin: 0 auto;
        padding: 60px 40px 100px 40px;
      }
    `}</style>
  </article>
);
