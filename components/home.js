import Link from "next/link";

export default () => (
  <div className="home">
    <div className="logo">
      <Link href="/">
        <a>
          <Code>About</Code>
        </a>
      </Link>
    </div>
    <style jsx>{`
      .home {
        padding: 25px 0px;
      }
      .logo {
        padding-bottom: 50px;
      }
      a {
        text-decoration: none;
      }
      @media (max-width: 500px) {
        .main {
          padding: 25px 15px;
        }
        .logo {
          padding-bottom: 20px;
        }
      }
    `}</style>
  </div>
);
const Code = ({ children }) => (
  <strong>
    {children}
    <style jsx>{`
      strong {
        font-size: 16px;
        color: #0366d6;
        text-decoration: none;
      }
      strong:hover {
        background: #0366d6;
        color: #fff;
        text-decoration: none;
      }
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
