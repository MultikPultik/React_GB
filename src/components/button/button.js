export function Button(props) {
  return (
    <button className="Btn-msg" onClick={props.sendMessage}>
      Отправить
    </button>
  );
}
