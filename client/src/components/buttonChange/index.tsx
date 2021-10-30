import style from './style.module.scss';

interface props {
	onClick: Function
}

const ButtonChange = ( { onClick }: props ) => {
	
  return(
		<div className={style.container}>
			<input type="checkbox" className={style.checkbox} onClick={() => onClick()} />
		</div>
  )
}
export default ButtonChange;