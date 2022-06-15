import './card.css'

function Card({ size, text }) {
  return (
    <div className='card'>{text}</div>
  )
}

export default Card