function HelloWorld() {
  const props = {
    text: "Terimakasih hello world"
  }
  return (
    <div>
      <HeaderHelloWorld />
      <ContentHelloWorld />
      {/* <FooterHelloWorld text="Ini footer hello world" /> */}
      <FooterHelloWorld {...props} />
    </div>
  );
}

function HeaderHelloWorld() {
  // pakai javascript di dalam JSX
  const text = "Hello World";
  return (
    // <div>
    //   <h1>Hello World</h1>
    // </div>
    <h1 style={{
      color: "blue",
      textAlign: "center",
      fontSize: "2rem",
      fontFamily: "Arial, sans-serif",
    }}>{text.toUpperCase()}</h1>
  );
}

function ContentHelloWorld() {
  // pakai javascript di dalam JSX
  let text = "Ini adalah konten dari Hello World setelah dipecah";
  let style = {
    color: "green",
    textAlign: "center",
    fontSize: "1.5rem",
    fontFamily: "Arial, sans-serif",
  };
  return (
    // <div>
    //   <p>Ini adalah konten dari Hello World setelah dipecah</p>
    // </div>
    <p style={style}>{text.toLowerCase()}</p>
  );
}

function FooterHelloWorld({ text = "Ups, lupa kasih footer" }) {
  // pakai javascript di dalam JSX
  return (
    <h1 style={{
      color: "blue",
      textAlign: "center",
      fontSize: "2rem",
      fontFamily: "Arial, sans-serif",
    }}>{text.toUpperCase()}</h1>
  );
}

export default HelloWorld;