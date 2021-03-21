import React from 'react'
import { Link } from 'react-router-dom'

const Service = (props) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="service_primary_2" data-aos="fade-up" data-aos-delay="300">
                <div className={props.warnaIkon + " item_icon "}>
                    <i className={props.ikon}></i>
                </div>
                <h3 className="item_title">{props.nama}</h3>
                <p>
                    {props.deksripsi}
                </p>
                <Link to="/tamu/laboratorium/sarana-dan-prasarana">Saran dan Prasarana <i className="fal fa-long-arrow-right ml-1"></i></Link>
            </div>
        </div>
    )
}

export default Service
