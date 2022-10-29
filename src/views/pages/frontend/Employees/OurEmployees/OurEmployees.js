import './OurEmployees.scss'
import profile_1 from '../../../../../assets/images/employee_profile_1.jpg';
import profile_2 from '../../../../../assets/images/employee_profile_2.jpg';
import profile_3 from '../../../../../assets/images/employee_profile_3.jpg';
import profile_4 from '../../../../../assets/images/employee_profile_4.jpg';

const OurEmployees = () => {
    return (
        <div className="container-fluid m-0 p-0 py-5">
            <div className="row g-2">
                <div
                    className="col-md-6 col-lg-4 col-xl-3 p-3"
                >
                    <div className="employee_card p-2 py-3 h-100">
                        <div className="employee_image">
                            <img src={profile_4} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                        <div className="employee_info p-2 mt-3">
                            <div className="name title-fm">
                                <div className="title title-fm text-center fw-bold">Chief Executive Officer</div>
                            </div>

                            <div className="description body-fm text-center mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis distinctio
                                odit, eos odio obcaecati vitae commodi nulla voluptates eius accusantium ad
                                blanditiis corporis, nam ipsa ex fugiat illum eligendi.
                            </div>

                            <div className="footer title-fm text-center mt-4">
                                Thura Moe
                                <div className="title title-fm mt-2">Chief Executive Officer of Fresh Moe</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-6 col-lg-4 col-xl-3 p-3"
                >
                    <div className="employee_card p-2 py-3 h-100">
                        <div className="employee_image">
                            <img src={profile_1} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                        <div className="employee_info p-2 mt-3">
                            <div className="name title-fm">
                                <div className="title title-fm text-center fw-bold">Web developer</div>
                            </div>

                            <div className="description body-fm text-center mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis distinctio
                                odit, eos odio obcaecati vitae commodi nulla voluptates eius accusantium ad
                                blanditiis corporis, nam ipsa ex fugiat illum eligendi.
                            </div>

                            <div className="footer title-fm text-center mt-4">
                                Aung Chan Oo
                                <div className="title title-fm mt-2">Web developer of Fresh Moe</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-6 col-lg-4 col-xl-3 p-3"
                >
                    <div className="employee_card p-2 py-3 h-100">
                        <div className="employee_image">
                            <img src={profile_2} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                        <div className="employee_info p-2 mt-3">
                            <div className="name title-fm">
                                <div className="title title-fm text-center fw-bold">Android developer</div>
                            </div>

                            <div className="description body-fm text-center mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis distinctio
                                odit, eos odio obcaecati vitae commodi nulla voluptates eius accusantium ad
                                blanditiis corporis, nam ipsa ex fugiat illum eligendi.
                            </div>

                            <div className="footer title-fm text-center mt-4">
                                Kyaw Thet Naing
                                <div className="title title-fm mt-2">Android developer of Fresh Moe</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-6 col-lg-4 col-xl-3 p-3"
                >
                    <div className="employee_card p-2 py-3 h-100">
                        <div className="employee_image">
                            <img src={profile_3} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                        <div className="employee_info p-2 mt-3">
                            <div className="name title-fm">
                                <div className="title title-fm text-center fw-bold">Graphic Designer</div>
                            </div>

                            <div className="description body-fm text-center mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis distinctio
                                odit, eos odio obcaecati vitae commodi nulla voluptates eius accusantium ad
                                blanditiis corporis, nam ipsa ex fugiat illum eligendi.
                            </div>

                            <div className="footer title-fm text-center mt-4">
                                Zaw Myat Aung
                                <div className="title title-fm mt-2">Graphic designer of Fresh Moe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurEmployees;