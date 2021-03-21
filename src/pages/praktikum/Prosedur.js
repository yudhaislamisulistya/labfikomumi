import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function Prosedur() {
    return (
        <React.Fragment>
            <Breadcrumb halaman="Prosedur Praktikum" deskripsi=""></Breadcrumb>
            <section id="service_section" className="service_section sec_ptb_120 clearfix">
                <div className="container">

                    <div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
                        <h2 className="title_text mb-0">Prosedur</h2>
                    </div>

                    <div className="row mb-20">
                        <div className="col-md-12 m-auto" data-aos="fade-up" data-aos-delay="300">
                            <ol>
                                <li>Persiapan Praktikum</li>
                                <ol type="a">
                                    <li>Mahasiswa melakukan registrasi pembayaran praktikum (bagi mahasiswa yang mengulang).</li>
                                    <li>Laboran menyusun jadwal praktikum beserta nama Dosen Pengampu dan Asisten Laboratorium</li>
                                    <li>Laboran dan Asisten Laboratorium menyiapkan alat dan bahan pendukung dalam praktikum.</li>
                                    <li>Dosen pengampu praktikum menyiapkan bahan ajar/modul praktikum sebagai bahan pembelajaran yang dapat diakses mahasiswa baik secara offline maupun online.</li>
                                    <li>Dosen pengampu praktikum wajib menyampaikan rencana perkuliahan, rencana tugas-tugas dan ujian serta mekanisme penilaian diawal praktikum.</li>
                                </ol>
                                <li>Pelaksanaan Praktikum</li>
                                <ol type="a">
                                    <li>Praktikum dimulai sesuai dengan jadwal praktikum yang dikeluarkan oleh Laboratorium.</li>
                                    <li>Jumlah pertemuan praktikum per mata kuliah bagi mahasiswa kurikulum baru maksimal empat (4) kali pertemuan dan mahasiswa kurikulum lama maksimal enam (10) kali pertemuan sesuai dengan aturan yang dikeluarkan oleh Laboratorium.</li>
                                    <li>Absen dan monitoring praktikum wajib diisi oleh dosen dan asisten laboratorium pada setiap pertemuan.</li>
                                    <li>Dosen wajib memberikan tugas praktikum kepada mahasiswa.</li>
                                </ol>
                                <li>Penyampaian Materi Praktikum</li>
                                <li>Evaluasi</li>
                                <ol type="a">
                                    <li>Setiap Dosen pengampu praktikum dan Asisten laboratorium harus memiliki mekanisme evaluasi melalui tugas dan/atau ujian. Ujian minimal dilakukan melalui Ujian Tengah Semester (UTS) dan Ujian Akhir Semester (UAS).</li>
                                    <li>Materi tugas dan ujian harus sesuai dengan Rencana Pembelajaran Semester (RPS) dan mencakup materi yang diajarkan.</li>
                                    <li>Pembobotan dan mekanisme penilaian diatur oleh dosen pengampu praktikum.</li>
                                </ol>
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

export default Prosedur
