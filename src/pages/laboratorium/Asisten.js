import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Member from '../../components/Member'

function Asisten() {
    return (
        <React.Fragment>
            <Breadcrumb halaman="Asisten Laboratorium" deksripsi=""></Breadcrumb>
            <section id="service_section" className="service_section sec_ptb_120 clearfix">
					<div className="container">

						<div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
							<h2 className="title_text mb-0">Asisten</h2>
						</div>

						<div className="row mb-80">
                            <Member nama="Furqaan Ismail" kemampuan="DevOps Developer"></Member>
                            <Member nama="Muh. Dhiya Ulhaq" kemampuan="Website Developer"></Member>
                            <Member nama="Andi Alfian Pratama Putra" kemampuan="Fullstack Developer"></Member>
                            <Member nama="Irwan Ardyansah" kemampuan="Flutter Developer"></Member>
                        </div>
					</div>
				</section>

                <div className="container" data-aos="fade-up" data-aos-delay="300">
					<hr className="m-0"/>
				</div>
        </React.Fragment>
    )
}

export default Asisten
