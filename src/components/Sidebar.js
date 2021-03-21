import React from 'react'
import { Link } from 'react-router-dom'
import { url } from '../const'

function Sidebar() {
    return (
        <div className="sidebar-menu-wrapper">
            <div id="mobile_menu" className="mobile_menu">

                <div className="brand_logo mb-50 clearfix">
                    <Link to="/" className="brand_link">
                        <img src={url.image + "logo/logo_2.png"} alt="logo_not_found" style={{height: '80px'}}/>
                    </Link>
                    <span className="close_btn"><i className="fal fa-times"></i></span>
                </div>

                <div className="mobile_menu_dropdown menu_list ul_li_block mp_balancing mb-50 clearfix">
                    <ul className="clearfix">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/tamu/visi-dan-misi">Visi & Misi</Link>
                        </li>

                        <li className="menu_item_has_child">
                            <a to="#">Praktikum</a>
                            <ul className="submenu">
                                <li><Link to="/tamu/praktikum/prosedur">Prosedur</Link></li>
                                <li><Link to="/tamu/praktikum/kegiatan-asistensi">Kegiatan Asistensi</Link></li>
                                <li><Link to="/tamu/praktikum/model-pembelajaran">Model Pembelejaran</Link></li>
                            </ul>
                        </li>

                        <li className="menu_item_has_child">
                            <a to="#">Laboratorium</a>
                            <ul className="submenu">
                                <li><Link to="/tamu/laboratorium/penanggung-jawab">Penanggung Jawab</Link></li>
                                <li><Link to="/tamu/laboratorium/asisten">Asisten</Link></li>
                                <li><Link to="/tamu/laboratorium/kegiatan">Kegiatan Laboratorium</Link></li>
                                <li><Link to="/tamu/laboratorium/kompetensi-laboran-dan-asisten">Kompetensi Laboran dan Asisten</Link></li>
                                <li><Link to="/tamu/laboratorium/sarana-dan-prasarana">Saran dan Prasarana</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/tamu/tentang-kami">Tentang Kami</Link>
                        </li>
                        <li>
                            <Link to="/tamu/kontak">Kontak</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    )
}

export default Sidebar
