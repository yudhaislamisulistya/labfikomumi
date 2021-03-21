import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { url } from '../const';


function Header() {
    const location = useLocation();
    return (
            <header id="header_section" className={(location.pathname !== "/") ? "text-white header_section sticky_header d-flex align-items-center clearfix" : "header_section sticky_header d-flex align-items-center clearfix"}>
                <div className="container w-1520">
                    <div className="row align-items-center">
                    <div className="col-lg-2 col-md-12">
                        <div className="brand_logo">
                            <Link to="/" className="brand_link">
                                <img src={url.image + "logo/logo_2.png"} alt="logo_not_found" style={{height: '80px'}}/>
                                <img src={url.image + "logo/logo_2.png"} alt="logo_not_found" style={{height: '80px'}}/>
                            </Link>
                            <button type="button" className="menu_btn">
                                <i className="fal fa-bars"></i>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-12">
                        <nav className="main_menu ul_li_center clearfix">
                            <ul className="clearfix">
                                <li className="menu_item_has_child">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="menu_item_has_child">
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
                                <li className="menu_item_has_child">
                                    <Link to="/tamu/tentang-kami">Tentang Kami</Link>
                                </li>
                                <li className="menu_item_has_child">
                                    <Link to="/tamu/kontak">Kontak</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

