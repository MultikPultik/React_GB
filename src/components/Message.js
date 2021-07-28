import './message.css';

export function Message(props) {
  return (
    <p className='msg-text'>{props.text}</p>
  )
}