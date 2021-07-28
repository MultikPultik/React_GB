import './App.css';
import {Message} from './components/Message';

export function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        Мой первый проект на React
        <h3>Hello, {props.obj.name}</h3>
        <Message text={props.obj.text} />
      </header>
    </div>
  );
}

