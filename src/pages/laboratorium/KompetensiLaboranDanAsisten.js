import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function KompetensiLaboranDanAsisten() {
    return (
        <React.Fragment>
            <Breadcrumb halaman="Kompetensi Laboran dan Asisten Laboratorium" deskripsi=""></Breadcrumb>
            <section id="service_section" className="service_section sec_ptb_120 clearfix">
					<div className="container">

						<div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
							<h2 className="title_text mb-0">Kompetensi Laboran dan Asisten</h2>
						</div>

						<div className="row mb-80">
							<div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Dimensi Kompetensi</th>
                                        <th scope="col">Kompetensi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>Kompetensi Kepribadian</td>
                                            <td>
                                                <ul>
                                                    <li>Menampilkan diri sebagai pribadi yang baik, disiplin dan berakhlak mulia</li>
                                                    <li>Menunjukkan komitmen tugas</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td>Kompetensi Sosial</td>
                                            <td>
                                                <ul>
                                                    <li>Bekerja sama dalam pelaksanaan tugas</li>
                                                    <li>Berkomunikasi secara lisan dan tulisan</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td>Kompetensi Administratif</td>
                                            <td>
                                                <ul>
                                                    <li>Menginventarisasi hardware praktikum</li>
                                                    <li>Mencatat kegiatan praktikum</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>4</th>
                                            <td>Kompetensi Profesional</td>
                                            <td>
                                                <ul>
                                                    <li>Merawat Ruang Laboratorium</li>
                                                    <li>Mengelola hardware dan software Laboratorium</li>
                                                    <li>Melayani kegiatan praktikum</li>
                                                    <li>Menjaga kesehatan dan keselamatan kerja di laboratorium</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default KompetensiLaboranDanAsisten
