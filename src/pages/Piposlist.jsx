/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PiposList = () => {

    const [users, setUsers] = useState(null)
    const [user, setUser] = useState(null)
    const [showModal, setShowModal] = useState(false);
    const params = useParams()

    useEffect(() => {
        getUsers('/users')
    }, [])

    useEffect(() => {
        console.log(params)
        if (params.pipo) {
            getUserById('/users', params.pipo)
        }
    }, [params])

    const getUsers = (url) => {
        fetch(`http://jsonplaceholder.typicode.com${url}`)
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    const getUserById = (url, id) => {
        fetch(`http://jsonplaceholder.typicode.com${url}/${id}`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setShowModal(true);
            })
    }

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                <h1>ALLMIGHTY PIPOS LIST</h1>
            </div>

            {users && users.length > 0 ? (
                <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                    <div className="list-group">
                        {users.map((user) => (

                            <Link key={user.id} to={`/piposlist/${user.id}`} className="list-group-item list-group-item-action d-flex gap-3 py-3"
                                data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={openModal}>
                                <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-0">Card Pipo {user.id}</h6>
                                        <p className="mb-0 opacity-75">{user.email}</p>
                                    </div>
                                    <small className="opacity-50 text-nowrap">+</small>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <div>No users found</div>
            )}

            {
                !!user &&
                (
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {/* Modal body content */}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            }
        </>
    );
}

export default PiposList