import { useState } from 'react';
import './style.css';

const ButtonChange = () => {
  const [move, setMove] = useState('0');
	const HandleClick = () => (setMove(move === '1/1' ? '0' : '1/1'))
	
  return(
  <>
		<div  className={`w-12 h-6 pr-6 rounded-full bg-gray-300 m-24`} onClick={HandleClick}>
				<div className={`w-6 h-1/1 block rounded-full bg-gray-400 transform mx-${move} duration-300 top-0 `} onClick={HandleClick}/>
		</div>
	</>
  )
}
export default ButtonChange;