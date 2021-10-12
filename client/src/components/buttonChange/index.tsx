import { useState } from 'react';
import './style.css';

interface props{
	width?: string | number,
	height?: string | number,
	gaps?: string | number,
	onClick: Function,
}

const ButtonChange = ( {width = 12, height = 6, gaps = 1, onClick}: props ) => {
  const [move, setMove] = useState('0');
	const HandleClick = () => {
		setMove(move === '1/1' ? '0' : '1/1');
		onClick();
	}
  return(
		<>
		<div id="ButtonChange" className="" onClick={HandleClick}>
				<label className="" htmlFor="ButtonChange"/>
		</div>
		</>
  )
}
export default ButtonChange;