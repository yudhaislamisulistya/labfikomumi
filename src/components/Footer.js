import React from 'react'
import { Link } from 'react-router-dom'
import { url } from '../const'

function Footer() {
    return (
        <footer id="footer_section" class="footer_section bg_dark_blue text-white deco_wrap clearfix">
				<div class="widget_area">
					<div class="container position-relative">
						<div class="row justify-content-lg-between">
							<div class="col-lg-4 col-md-12">
								<div class="widget about_content">
									<div class="brand_logo mb-50">
										<Link href="/" class="brand_link">
											<img src={url.image + "logo/logo_2.png"} alt="logo_not_found"/>
										</Link>
									</div>
									<div class="contact_info ul_li_block mb-30">
										<ul class="clearfix">
                                            <li><span>Whatsapp:</span><a href="https://api.whatsapp.com/send?phone=6285240986164&text=Halo Saya Ingin Bertanya Kak!">+62 852-4098-6164</a></li>
										</ul>
									</div>
								</div>
							</div>

							<div class="col-lg-2 col-md-4 col-sm-4">
								<div class="widget useful_links ul_li_block">
									<ul class="clearfix">
										<li><Link to="/tamu/visi-dan-misi">Visi & Misi</Link></li>
										<li><Link to="/tamu/praktikum/prosedur">Prosedur Praktikum</Link></li>
                                        <li><Link to="/tamu/praktikum/kegiatan-asistensi">Kegiatan Asistensi</Link></li>
                                        <li><Link to="/tamu/praktikum/model-pembelajaran">Model Pembelejaran</Link></li>
									</ul>
								</div>
							</div>

							<div class="col-lg-2 col-md-4 col-sm-4">
								<div class="widget useful_links ul_li_block">
									<ul class="clearfix">
                                        <li><Link to="/tamu/laboratorium/penanggung-jawab">Penanggung Jawab</Link></li>
                                        <li><Link to="/tamu/laboratorium/asisten">Asisten</Link></li>
                                        <li><Link to="/tamu/laboratorium/kegiatan">Kegiatan Laboratorium</Link></li>
                                        <li><Link to="/tamu/laboratorium/kompetensi-laboran-dan-asisten">Kompetensi Laboran dan Asisten</Link></li>
                                        <li><Link to="/tamu/laboratorium/sarana-dan-prasarana">Saran dan Prasarana</Link></li>
									</ul>
								</div>
							</div>

							<div class="col-lg-2 col-md-4 col-sm-4">
								<div class="widget useful_links ul_li_block">
									<ul class="clearfix">
										<li><Link to="/tamu/tentang-kami">Tentang Kami</Link></li>
										<li><Link to="/tamu/kontak">kontak</Link></li>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</div>

				<div class="footer_bottom">
					<div class="container">
						<div class="row align-items-center">

							<div class="col-lg-4 col-md-4 col-sm-12">
								<div class="copyright_text">
									<p class="mb-0">
										Copyright © 2021 LAB FIKOM UMI
									</p>
								</div>
							</div>

							<div class="col-lg-4 col-md-4 col-sm-12">
								<div class="social_icon ul_li_center">
									<ul class="clearfix">
										<li>
											<a href="https://www.instagram.com/labfikomumi/" target="blank_">
												<i class="icon-facebook"></i>
												<i class="icon-facebook"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div class="col-lg-4 col-md-4 col-sm-12">
								<div class="footer_menu ul_li_right">
									<ul class="clearfix">
										<li><a href="#!">Terms of Use</a></li>
										<li><a href="#!">Privacy Policy</a></li>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</div>
			</footer>
    )
}

export default Footer
