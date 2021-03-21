    import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { url } from '../../const'

    function KegiatanAsisten() {
        return (
            <React.Fragment>
                <Breadcrumb halaman="Kegiatan Asistensi Praktikum" deskripsi=""></Breadcrumb>
                <section id="service_section" className="service_section sec_ptb_120 clearfix">
                    <div className="container">
                        <div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
                            <h2 className="title_text mb-0">Kegiatan Asistensi</h2>
                        </div>

                        <div className="row mb-20">
                            <div className="col-md-8 m-auto">
                                <p className="mb-10 text-justify" data-aos="fade-up" data-aos-delay="300">
                                    Kegiatan Asistensi Praktikum merupakan kegiatan yang dilakukan untuk mempersiapkan praktikan sebelum dan sesudah kegiatan praktikum dan pengambilan nilai baik melalui asisten ataupun dosen pengampu Laboratorium.
                                </p>
                                <p className="mb-10 text-justify" data-aos="fade-up" data-aos-delay="300">
                                    Syarat yang diberlakukan adalah praktikan wajib menghubungi asisten laboratorium satu hari sebelum kegiatan asistensi dilaksanakan, membawa tugas dan modul praktikum.
                                </p>
                            </div>
                            <div className="col-md-8 m-auto" data-aos="fade-up" data-aos-delay="300">
                                <span>
                                    <img src={url.image + "kegiatan-asistensi-praktikum.jpg"} alt="image_not_found" width="100%" className="rounded"/>
                                </span>
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
    export default KegiatanAsisten
