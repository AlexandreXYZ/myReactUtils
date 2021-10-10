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
		onClick();
	}
  return(
		<>
		<div id="ButtonChange" className={`w-${width??12} h-${height??6} pr-${height} delay-1000 rounded-full bg-gray-300 m-24`} onClick={HandleClick}>
				<label className={`w-${height??6} h-${height??6} block rounded-full bg-gray-400 transform mx-${move} duration-300 top-0 `} htmlFor="ButtonChange"/>
		</div>
		</>
  )
}
export default ButtonChange;