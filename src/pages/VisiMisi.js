import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

function VisiMisi() {
    return (
        <React.Fragment>
            <Breadcrumb halaman="Visi dan Misi" deskripsi=""></Breadcrumb>
            <section id="service_section" className="service_section sec_ptb_120 clearfix">
                <div className="container">
                    <div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
                        <h2 className="title_text mb-0">Visi</h2>
                    </div>

                    <div className="row mb-20">
                        <div className="col-md-8 m-auto">
                            <p className="mb-50 text-center" data-aos="fade-up" data-aos-delay="300">
                            Menjadikan laboratorium sebagai pusat kegiatan belajar dan interaksi yang dapat menghasilkan informasi dan karya baru secara ilmiah dibidang teknologi informasi.
                            </p>
                        </div>
                    </div>

                    <div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
                        <h2 className="title_text mb-0">Misi</h2>
                    </div>

                    <div className="row mb-20">
                        <div className="col-md-8 m-auto" data-aos="fade-up" data-aos-delay="300">
                            <ol>
                                <li>Menjadi pusat kegiatan belajar dan pelatihan untuk merancang dan mengembangkan ilmu pengetahuan khususnya perangkat lunak dan perangkat keras komputer.</li>
                                <li>Ikut aktif dalam menyelesaikan permasalahan software dan hardware di masyarakat dengan melibatkan peran serta mahasiswa, asisten, dan dosen laboratorium.</li>
                            </ol>
                        </div>
                    </div>
                </div>
			</section>
        </React.Fragment>
    )
}

export default VisiMisi
