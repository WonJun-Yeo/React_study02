import './App.css';

function AppJSX() {
  const name = 'wonjun.yeo';
  const list = ['우유', '딸기', '바나나'];
  return (
      <>
        <h1>Hello {name}</h1>
        <ul>
          {
            list.map(item => (
                <li>{item}</li>
            ))
          }
        </ul>
      </>
  );
}

export default AppJSX;
