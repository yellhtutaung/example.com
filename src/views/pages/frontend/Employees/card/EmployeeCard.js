import profile_4 from "../../../../../assets/images/employee_profile_4.jpg";
import {SwiperSlide} from "swiper/react";

const EmployeeCard = (props) => {
    let {img, profession, content, name} = props.data;
    return (
            <div className="p-3 w-100">
                <div className="employee_card p-2 py-3 h-100">
                    <div className="employee_image">
                        <img src={img} alt="" className="img-fluid mx-auto d-block" />
                    </div>
                    <div className="employee_info p-2 mt-3">
                        <div className="name title-fm">
                            <h5 className=" title-fm text-center fw-bold">{profession}</h5>
                        </div>
                        <div className="description body-fm text-center mt-3">
                            {content}
                        </div>
                        <div className="footer title-fm text-center mt-4">
                            {name}
                            <div className="title title-fm mt-2">{profession}</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default EmployeeCard;