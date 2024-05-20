/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from "react";
import 'bootstrap/dist/js/bootstrap.bundle'
import { Context } from "../store/AppContext";
import PipoCard from "../components/PipoCard";
import NoPipoList from "../components/NoPipoList";
import Footer from "../components/footer";

const PiposList = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getPipos();

    }, []);




    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <div className="flex-column flex-grow-1 w-75 mx-auto py-5 align-items-center justify-content-center">
                    <h1 className="mb-1 text-center">Welcome Admin!</h1>
                    <h3 className="mb-3 text-center">Check the available pipos</h3>
                    <table className="table table-bordered border-info border-1 my-4 ">
                        <tbody>
                        {store.pipos.filter(pipo => !pipo.active).map((pipo) => (
                            <tr key={pipo.id}>
                                <td className="p-0 m-0">
                            <PipoCard
                                key={pipo.id}
                                id={pipo.id}
                                name={pipo.pipo_name}
                                address={pipo.address}
                                addPipo={actions.activatePipo}
                                deletePipo={actions.deletePipo}
                            />
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                        {store.pipos.filter(pipo => !pipo.active).length === 0 && <NoPipoList />}
                </div>
                < Footer />
            </div>
        </>
    );
}

export default PiposList