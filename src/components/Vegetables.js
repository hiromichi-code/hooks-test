const Vegetables = () => {
  const list = {
    listStyle: 'none',
    margin: '0',
    padding: '0'
  }
  const bd = {
    border: '1px solid black',
    margin: '0 520px 0 520px'
  }
  return (
    <div style={bd}>
      <ul style={list}>
        <li>とまと</li>
        <li>かぼちゃ</li>
        <li>大根</li>
        <li>スイカ</li>
        <li>さつまいも</li>
      </ul>
    </div>
  );
};

export default Vegetables;
