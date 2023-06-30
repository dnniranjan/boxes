const Box = (props) => {
  const { content, contClass } = props;
  return (
    <div className={contClass}>
      <p>{content}</p>
    </div>
  );
};

const element = (
  <div class="main">
    <h1 className="head">Boxes</h1>
    <div class="sub">
      <Box content="small" contClass="smallbox" />
      <Box content="medium" contClass="mediumbox" />
      <Box content="large" contClass="largebox" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
