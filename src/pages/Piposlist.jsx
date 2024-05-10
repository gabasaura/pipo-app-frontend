/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from "react";
import 'bootstrap/dist/js/bootstrap.bundle'
import { Context } from "../store/AppContext";
import PipoCard from "../components/PipoCard";
import NoPipoList from "../components/NoPipoList";

const PiposList = () => {
    
    const {store, actions } = useContext(Context)
    
    useEffect(() => {
		actions.getPipos();
        
	}, []);




    return (
        <>

         {store.pipos.filter(pipo => !pipo.active).map((pipo) => (
            <PipoCard 
            key={pipo.id}
            id={pipo.id}
            name={pipo.pipo_name}
            address={pipo.address}
            addPipo={actions.activatePipo}
            deletePipo={actions.deletePipo}
            />
         ))}

        </>
    );
}

export default PiposList