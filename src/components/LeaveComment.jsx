import React from 'react'

const LeaveComment = ({id, text, onChange, onSubmit}) => {


	return (
		<div>
			<form onSubmit={onSubmit}>
			<div className="mb-3">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">Dejar Comentario</label>
				<textarea className="form-control" value={text} id={id} rows="3" onChange={onChange}></textarea>
			</div>
			<button type="submit" className="btn btn-outline-info" >Submit</button>
			</form>
		</div>
	)
}

export default LeaveComment