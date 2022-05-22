import './style.css';

export default function ButtonText({ text, clickMe, color }) {
  return (
    <button className={color} onClick={clickMe}>{text}</button>
  )
}