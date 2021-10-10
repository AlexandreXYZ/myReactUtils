import { useState } from 'react';
import './style.css';

interface props{
	width?: string,
	height?: string,
	onClick: Function,
}

const ButtonChange = ( {width, height, onClick}: props ) => {
  const [move, setMove] = useState('0');
	const HandleClick = () => {
		setMove(move === '1/1' ? '0' : '1/1');
		onClick()
	}
  return(
		<>
		<div className={`w-${width??12} h-${height??6} pr-${height} delay-1000 rounded-full bg-gray-300 m-24`} onClick={HandleClick}>
				<div className={`w-${height??6} h-${height??6} rounded-full bg-gray-400 transform mx-${move} duration-300 top-0 `} onClick={HandleClick}/>
		</div>
		</>
  )
}
export default ButtonChange;