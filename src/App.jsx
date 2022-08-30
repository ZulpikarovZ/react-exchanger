import { Selector } from './components/Selector';

function App() {

  return (
    <div className="App">
      <Selector title={'Отдаёте'} id={1}/>
      <Selector title={'Получаете'} id={2} />
    </div>
  );
}

export default App;
