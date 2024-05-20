import React from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const PipoCard = ({ name, address, stars, addPipo, deletePipo, id }) => {





    return (
        <>
        <div className='d-flex align-items-center justify-content-center'>
          <div className="w-75">
            <div className="row g-0">
              <div className="col-8 col-md-10">
                <div className="card-body pt-3">
                  <h5 className="card-title">Pipo Name: {name}</h5>
                  <p className="card-text">Pipo Address: {address}</p>
                  <p className="card-text"><small className="text-body-secondary">{stars}</small></p>
                </div>
              </div>
              <div className='contenedor-icono d-flex justify-content-center col-4 col-md-2 pt-3'>
                <FaCheck onClick={() => addPipo(id)} className='icono-pipocard btn btn-outline-info mx-1' />
                <MdDelete onClick={() => deletePipo(id)} className='icono-pipocard btn btn-outline-info mx-1' />
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default PipoCard