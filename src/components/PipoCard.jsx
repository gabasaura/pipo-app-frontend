import React from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const PipoCard = ({ name, address, stars, addPipo, deletePipo, id }) => {





    return (
        <>
        <tr className='border border-1 border-info p-2'>
            <div className='row d-flex justify-content-center'>
                <div className="w-75">
                    <div className="row g-0">

                        <div className="col-11">
                            <div className="card-body ">
                                <h5 className="card-title">Name: {name}</h5>
                                <p className="card-text">Address: {address}.</p>
                                <p className="card-text"><small className="text-body-secondary">{stars}</small></p>
                            </div>
                        </div>
                        <div className='contenedor-icono d-flex justify-content-center col-1'>
                            <FaCheck onClick={() => addPipo(id)} className='btn btn-outline-info p-4 mx-1' />
                            <MdDelete onClick={() => deletePipo(id)} className='btn btn-outline-info p-4 mx-1' />
                        </div>

                    </div>
                </div>
            </div>
            </tr>
        </>
    )
}

export default PipoCard