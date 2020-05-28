export default ({ width, src, radius }) => (
  <div>
    <img width={width} src={src} />
    <style jsx>{`
      img {
        // border-radius: 8px;
        max-width: 100%;
        margin: 15px 0;
      }
    `}</style>
  </div>
);
