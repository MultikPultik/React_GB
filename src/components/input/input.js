export function Input(props) {
  return (
    <input
      className="Input-msg"
      placeholder="Введите сообщение"
      value={props.value}
      onChange={(ev) => props.setValue(ev.target.value)}
    />
  );
}
