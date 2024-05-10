import React from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const PipoCard = ({ name, address, stars, addPipo, deletePipo, id}) => {





    return (
        <>
        <div className='row d-flex justify-content-center my-5'>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className='contenedor-icono d-flex justify-content-end'>
                <FaCheck  onClick={() => addPipo(id)} className='mt-3 me-2 fs-4' />
                <MdDelete onClick={() => deletePipo(id)} className='mt-3 me-2 fs-4' />
              </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{address}.</p>
                            <p className="card-text"><small className="text-body-secondary">{stars}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default PipoCard