import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

function Kontak() {


    return (
        <React.Fragment>
            <Breadcrumb halaman="Kontak Laboratorium"></Breadcrumb>
            <section id="service_section" className="service_section sec_ptb_120 clearfix">
					<div className="container">

						<div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
							<h2 className="title_text mb-0">Kontak</h2>
						</div>

						<div className="row mb-80 justify-content-lg-between justify-content-md-center justify-content-sm-center">
                            <div className="col-lg-3 col-md-8 col-sm-10">
                                <div className="contact_info ul_li_block" data-aos="fade-up" data-aos-delay="300">
                                    <h3 className="list_title">Alamat</h3>
                                    <ul className="clearfix">
                                        <li>Fakultas Ilmu Komputer Universitas Muslim Indonesia</li>
                                        <li>Jl. Urip Sumoharjo KM. 5</li>
                                        <li>Makassar Sulawesi Selatan</li>
                                        <li>90231 Indonesia</li>
                                    </ul>
                                </div>

                                <div className="contact_info ul_li_block" data-aos="fade-up" data-aos-delay="400">
                                    <h3 className="list_title mt-3">Kontak</h3>
                                    <ul className="clearfix">
                                        <li><span>Whatsapp:</span><a href="https://api.whatsapp.com/send?phone=6285240986164&text=Halo Saya Ingin Bertanya Kak!">+62 852-4098-6164</a></li>
                                        <li><span>Email:</span>labfikomumi@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
							<div className="col-lg-8 col-md-8 col-sm-10">
								<div className="contact_form" data-aos="fade-up" data-aos-delay="500">
									<form action="#">
										<div className="row">
											<div className="col-lg-6">
												<div className="form_item">
													<input type="text" name="name" placeholder="Nama"/>
												</div>
											</div>

											<div className="col-lg-6">
												<div className="form_item">
													<input type="email" name="email" placeholder="Email"/>
												</div>
											</div>
										</div>
										<div className="form_item">
											<textarea name="comment" placeholder="Pesan"></textarea>
										</div>
										<button type="submit" className="btn bg_default_blue">Kirim</button>
									</form>
								</div>
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




export default Kontak
