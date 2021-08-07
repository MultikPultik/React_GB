import './message.css';

export function Message(props) {
  return (
    <div className="App-content">
      {props.messageList.map((message, id) => (
        <div key={id} className="Wrap-msg">
          <div className="Header-msg">{message.name}</div>
          <div className="Content-msg">{message.msg}</div>
        </div>
      ))}
    </div>
  );
}
