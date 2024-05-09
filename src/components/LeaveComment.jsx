import React from 'react'

const LeaveComment = ({id, text, onChange}) => {


	return (
		<div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">Dejar Comentario</label>
				<textarea className="form-control" value={text} id={id} rows="3" onChange={onChange}></textarea>
			</div>
		</div>
	)
}

export default LeaveComment