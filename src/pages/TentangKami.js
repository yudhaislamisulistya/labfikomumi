import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

function TentangKami() {
    return (
        <React.Fragment>
                <Breadcrumb halaman="Tentang Kami"></Breadcrumb>
                <section id="service_section" className="service_section sec_ptb_120 clearfix">
					<div className="container">

						<div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
							<h2 className="title_text mb-0">Identitas Laboratorium</h2>
						</div>

						<div className="row mb-80">
							<div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
                                <p>
                                    Laboratorium Komputer Terpadu Program Studi Teknik Informatika dan Sistem Informasi Universitas Muslim Indonesia:
                                </p>
                                <ol type="1">
                                    <li>Laboratorium Rekayasa Perangkat Lunak</li>
                                    <li>Laboratorium Jaringan Komputer</li>
                                    <li>Laboratorium Informatika Industri</li>
                                    <li>Laboratorium Komputasi Dasar</li>
                                    <li>Laboratorium Riset 1</li>
                                    <li>Laboratorium Multimedia</li>
                                    <li>Laboratorium Riset 2</li>
                                    <li>Laboratorium Studio Informatika</li>
                                </ol>
							</div>
                        </div>
					</div>
				</section>

                <div className="container" data-aos="fade-up" data-aos-delay="300">
					<hr className="m-0"/>
				</div>
        </React.Fragment>
    )
}

export default TentangKami
