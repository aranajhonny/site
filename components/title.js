export default ({ children }) => (
  <>
    <p><a href="#">{children}</a></p>
    <style jsx>{`
      p {
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        text-align:center;
        margin-bottom: 10px;
      }
      a {
        color: #0366d6;
        text-decoration: none;
      }
      a:hover {
        background-color: #0366d6;
        color: #fff;
      }
    `}</style>
  </>
);