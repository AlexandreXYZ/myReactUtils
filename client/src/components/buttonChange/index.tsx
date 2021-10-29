import style from './style.module.scss';

const ButtonChange = (  ) => {
  return(
		<>
		<div className={style.container}>
			<input type="checkbox" id="checkbox" className={style.checkbox} />
		</div>
		</>
  )
}
export default ButtonChange;