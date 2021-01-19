const AnimalList = () => {
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
        <li>ライオン</li>
        <li>ゾウ</li>
        <li>ペンギン</li>
        <li>ラクダ</li>
        <li>トラ</li>
      </ul>
    </div>
  );
};

export default AnimalList;
