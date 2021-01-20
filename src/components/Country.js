const Country = () => {
  const list = {
    listStyle: "none",
    margin: "0",
    padding: "0",
  };
  const bd = {
    border: "1px solid black",
    margin: "0 520px 0 520px",
  };
  return (
    <div style={bd}>
      <ul style={list}>
        <li>日本</li>
        <li>アメリカ</li>
        <li>中国</li>
        <li>イギリス</li>
        <li>インド</li>
      </ul>
    </div>
  );
};

export default Country;
