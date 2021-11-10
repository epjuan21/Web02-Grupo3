import React from 'react'
import GestionTransporteCover from '../assets/img/covers/GestionTransporteCover.png'
import Delivery from '../assets/img/gestiontransporte/Delivery.png'

export const GestionTransporte = () => {
    return (
        <>
            <div>
                {/* <!-- Hero --> */}

                <div className="container py-5">
                    <div
                        className="row flex-lg-row-reverse align-items-center d-sm-flex justify-content-sm-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img
                                src={GestionTransporteCover}
                                className="d-block mx-lg-auto img-fluid"
                                alt="Bootstrap Themes"
                                width="700"
                                height="500"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-lg-6 d-sm-flex justify-content-sm-center">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Gestión de Transporte</h1>
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                </div>

                {/* Titulo */}

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Software para gestión de transporte</h1>
                            <p>
                                Aplicación web para el control de peso vehicular en las estaciones
                                de pesaje del territorio nacional ajustados a la normatividad
                                vigente.
                            </p>
                        </div>
                    </div>
                    <hr className="featurette-divider mb-5" />
                </div>

                <div className="container">
                    <div className="row">

                        {/* Productos */}

                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
                            <div className="card_container">
                                <div className="card_image">
                                    <img src={ Delivery } alt="Gestoin Transporte" />
                                </div>
                                <div className="card_title">
                                    Product Name
                                </div>
                                <div className="card_text">
                                    <p>Product Description</p>
                                </div>
                                <div className="card_footer">
                                    <div className="card_price">Produc Price</div>
                                    <div>
                                        <button className="btn btn-primary btn-sm">Agregar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
