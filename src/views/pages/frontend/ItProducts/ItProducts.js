import React from 'react'
import './ItProducts.scss'
import laptop from '../../../../assets/images/website_laptop.6aef0c01.jpg';
import phone from '../../../../assets/images/app_phone.76db84c5.jpg';
import app_store from '../../../../assets/images/app_store.428f2d8e.png';
import play_store from '../../../../assets/images/playstore_img.ba0de1d3.png';

function ItProducts() {
  return (
    <div>
        <section id="it_products" data-aos="fade-up">
            <div className="container">
            <div className="center_title">
                <h3 className="text-center text-dark title-fm">Our Website & Apps</h3>
                <span className="center_title_underline"></span>
            </div>

            <div className="row justify-content-center">
                <div
                className="col-md-6 d-flex justify-content-center align-items-center it_products_col"
                >
                <div className="it_product_detail">
                    <img
                    src={laptop}
                    alt=""
                    className="it_product_img laptop_img"
                    />
                    <p className="text-center mt-3 body-fm">
                    You can find the webiste on<br />
                    <a href="https://www.freshmoe.shop" className="underline"
                        >www.freshmoe.shop</a
                    >
                    </p>
                </div>
                </div>
                <div
                className="col-md-6 d-flex justify-content-center align-items-center it_products_col"
                >
                <div className="it_product_detail">
                    <img
                    src={phone}
                    alt=""
                    className="it_product_img phone_img"
                    />
                    <div className="d-flex justify-content-center gap-1 mt-3">
                    <a
                        href="https://play.google.com/store/apps/details?id=commerce.freshmoe.fresh_moe"
                    >
                        <img
                        src={play_store}
                        alt=""
                        width="150"
                        height="50"
                        />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=commerce.freshmoe.fresh_moe">
                        <img
                        src={app_store}
                        alt="https://play.google.com/store/apps/details?id=commerce.freshmoe.fresh_moe"
                        width="150"
                        height="50"
                        />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default ItProducts