import React from 'react'

const LeaveComment = ({id, text, onChange, onSubmit}) => {


	return (
		<div>
			<form onSubmit={onSubmit}>
			<div className="mb-3 my-1 mx-4">
				<label htmlFor="exampleFormControlTextarea1" className="form-label m-1">Leave / Edit Comment</label>
				<textarea className="form-control border border-1 border-black" value={text} id={id} rows="3" onChange={onChange}></textarea>
			</div>
			<button type="submit" className="btn btn-outline-info mx-4 mb-3" >Send</button>
			</form>
		</div>
	)
}

export default LeaveComment