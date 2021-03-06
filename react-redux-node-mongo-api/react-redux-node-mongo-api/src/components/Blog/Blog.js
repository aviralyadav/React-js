import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../About/About.css';

class Blog extends Component {
    state = {}
    render() {
        return (
            <div>
                {/* <!-- Title page --> */}
                <section className="bg-img1 txt-center p-lr-15 p-tb-92 " style={{ 'backgroundImage': "url('images/products/bg-02.jpg')" }}>
                    <h2 className="ltext-105 cl0 txt-center">
                        Blog
		            </h2>
                </section>


                {/* <!-- Content page --> */}
                <section className="bg0 p-t-62 p-b-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-lg-9 p-b-80">
                                <div className="p-r-45 p-r-0-lg">
                                    {/* <!-- item blog --> */}
                                    <div className="p-b-63">
                                        <Link to="blog-detail.html" className="hov-img0 how-pos5-parent">
                                            <img src="images/products/blog-04.jpg" alt="IMG-BLOG" />

                                            <div className="flex-col-c-m size-123 bg9 how-pos5">
                                                <span className="ltext-107 cl2 txt-center">
                                                    22
									            </span>

                                                <span className="stext-109 cl3 txt-center">
                                                    Jan 2018
									            </span>
                                            </div>
                                        </Link>

                                        <div className="p-t-32">
                                            <h4 className="p-b-15">
                                                <Link to="blog-detail.html" className="ltext-108 cl2 hov-cl1 trans-04">
                                                    8 Inspiring Ways to Wear Dresses in the Winter
									            </Link>
                                            </h4>

                                            <p className="stext-117 cl6">
                                                ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
								            </p>

                                            <div className="flex-w flex-sb-m p-t-18">
                                                <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                                                    <span>
                                                        <span className="cl4">By</span> Admin
											<span className="cl12 m-l-4 m-r-6">|</span>
                                                    </span>

                                                    <span>
                                                        StreetStyle, Fashion, Couple
											<span className="cl12 m-l-4 m-r-6">|</span>
                                                    </span>

                                                    <span>
                                                        8 Comments
										            </span>
                                                </span>

                                                <Link to="blog-detail.html" className="stext-101 cl2 hov-cl1 trans-04 m-tb-10">
                                                    Continue Reading

										<i className="fa fa-long-arrow-right m-l-9"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- item blog --> */}
                                    <div className="p-b-63">
                                        <Link to="blog-detail.html" className="hov-img0 how-pos5-parent">
                                            <img src="images/products/blog-05.jpg" alt="IMG-BLOG" />

                                            <div className="flex-col-c-m size-123 bg9 how-pos5">
                                                <span className="ltext-107 cl2 txt-center">
                                                    18
									</span>

                                                <span className="stext-109 cl3 txt-center">
                                                    Jan 2018
									</span>
                                            </div>
                                        </Link>

                                        <div className="p-t-32">
                                            <h4 className="p-b-15">
                                                <Link to="blog-detail.html" className="ltext-108 cl2 hov-cl1 trans-04">
                                                    The Great Big List of Men’s Gifts for the Holidays
									            </Link>
                                            </h4>

                                            <p className="stext-117 cl6">
                                                ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
								            </p>

                                            <div className="flex-w flex-sb-m p-t-18">
                                                <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                                                    <span>
                                                        <span className="cl4">By</span> Admin
											<span className="cl12 m-l-4 m-r-6">|</span>
                                                    </span>

                                                    <span>
                                                        StreetStyle, Fashion, Couple
											<span className="cl12 m-l-4 m-r-6">|</span>
                                                    </span>

                                                    <span>
                                                        8 Comments
										</span>
                                                </span>

                                                <Link to="blog-detail.html" className="stext-101 cl2 hov-cl1 trans-04 m-tb-10">
                                                    Continue Reading

										<i className="fa fa-long-arrow-right m-l-9"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- item blog --> */}
                                    <div className="p-b-63">
                                        <Link to="blog-detail.html" className="hov-img0 how-pos5-parent">
                                            <img src="images/products/blog-06.jpg" alt="IMG-BLOG" />

                                            <div className="flex-col-c-m size-123 bg9 how-pos5">
                                                <span className="ltext-107 cl2 txt-center">
                                                    16
									</span>

                                                <span className="stext-109 cl3 txt-center">
                                                    Jan 2018
									</span>
                                            </div>
                                        </Link>

                                        <div className="p-t-32">
                                            <h4 className="p-b-15">
                                                <Link to="blog-detail.html" className="ltext-108 cl2 hov-cl1 trans-04">
                                                    5 Winter-to-Spring Fashion Trends to Try Now
									</Link>
                                            </h4>

                                            <p className="stext-117 cl6">
                                                ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
								</p>

                                            <div className="flex-w flex-sb-m p-t-18">
                                                <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                                                    <span>
                                                        <span className="cl4">By</span> Admin
											<span className="cl12 m-l-4 m-r-6">|</span>
                                                    </span>

                                                    <span>
                                                        StreetStyle, Fashion, Couple
											<span className="cl12 m-l-4 m-r-6">|</span>
                                                    </span>

                                                    <span>
                                                        8 Comments
										</span>
                                                </span>

                                                <Link to="blog-detail.html" className="stext-101 cl2 hov-cl1 trans-04 m-tb-10">
                                                    Continue Reading

										<i className="fa fa-long-arrow-right m-l-9"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Pagination --> */}
                                    <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
                                        <Link to="/" className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1">
                                            1
							</Link>

                                        <Link to="/" className="flex-c-m how-pagination1 trans-04 m-all-7">
                                            2
							</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-3 p-b-80">
                                <div className="side-menu">
                                    <div className="bor17 of-hidden pos-relative">
                                        <input className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55" type="text" name="search" placeholder="Search" />

                                        <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
                                            <i className="zmdi zmdi-search"></i>
                                        </button>
                                    </div>

                                    <div className="p-t-55">
                                        <h4 className="mtext-112 cl2 p-b-33">
                                            Categories
							</h4>

                                        <ul>
                                            <li className="bor18">
                                                <Link to="/" className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                                                    Fashion
									</Link>
                                            </li>

                                            <li className="bor18">
                                                <Link to="/" className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                                                    Beauty
									</Link>
                                            </li>

                                            <li className="bor18">
                                                <Link to="/" className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                                                    Street Style
									</Link>
                                            </li>

                                            <li className="bor18">
                                                <Link to="/" className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                                                    Life Style
									</Link>
                                            </li>

                                            <li className="bor18">
                                                <Link to="/" className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                                                    DIY & Crafts
									</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-t-65">
                                        <h4 className="mtext-112 cl2 p-b-33">
                                            Featured Products
							</h4>

                                        <ul>
                                            <li className="flex-w flex-t p-b-30">
                                                <Link to="/" className="wrao-pic-w size-214 hov-ovelay1 m-r-20">
                                                    <img src="images/products/product-min-01.jpg" alt="PRODUCT" />
                                                </Link>

                                                <div className="size-215 flex-col-t p-t-8">
                                                    <Link to="/" className="stext-116 cl8 hov-cl1 trans-04">
                                                        White Shirt With Pleat Detail Back
										</Link>

                                                    <span className="stext-116 cl6 p-t-20">
                                                        $19.00
										</span>
                                                </div>
                                            </li>

                                            <li className="flex-w flex-t p-b-30">
                                                <Link to="/" className="wrao-pic-w size-214 hov-ovelay1 m-r-20">
                                                    <img src="images/products/product-min-02.jpg" alt="PRODUCT" />
                                                </Link>

                                                <div className="size-215 flex-col-t p-t-8">
                                                    <Link to="/" className="stext-116 cl8 hov-cl1 trans-04">
                                                        Converse All Star Hi Black Canvas
										</Link>

                                                    <span className="stext-116 cl6 p-t-20">
                                                        $39.00
										</span>
                                                </div>
                                            </li>

                                            <li className="flex-w flex-t p-b-30">
                                                <Link to="/" className="wrao-pic-w size-214 hov-ovelay1 m-r-20">
                                                    <img src="images/products/product-min-03.jpg" alt="PRODUCT" />
                                                </Link>

                                                <div className="size-215 flex-col-t p-t-8">
                                                    <Link to="/" className="stext-116 cl8 hov-cl1 trans-04">
                                                        Nixon Porter Leather Watch In Tan
										</Link>

                                                    <span className="stext-116 cl6 p-t-20">
                                                        $17.00
										</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-t-55">
                                        <h4 className="mtext-112 cl2 p-b-20">
                                            Archive
							</h4>

                                        <ul>
                                            <li className="p-b-7">
                                                <Link to="/" className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2">
                                                    <span>
                                                        July 2018
										</span>

                                                    <span>
                                                        (9)
										</span>
                                                </Link>
                                            </li>

                                            <li className="p-b-7">
                                                <Link to="/" className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2">
                                                    <span>
                                                        June 2018
										</span>

                                                    <span>
                                                        (39)
										</span>
                                                </Link>
                                            </li>

                                            <li className="p-b-7">
                                                <Link to="/" className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2">
                                                    <span>
                                                        May 2018
										</span>

                                                    <span>
                                                        (29)
										</span>
                                                </Link>
                                            </li>

                                            <li className="p-b-7">
                                                <Link to="/" className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2">
                                                    <span>
                                                        April  2018
										</span>

                                                    <span>
                                                        (35)
										</span>
                                                </Link>
                                            </li>

                                            <li className="p-b-7">
                                                <Link to="/" className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2">
                                                    <span>
                                                        March 2018
										</span>

                                                    <span>
                                                        (22)
										</span>
                                                </Link>
                                            </li>

                                            <li className="p-b-7">
                                                <Link to="/" className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2">
                                                    <span>
                                                        February 2018
										</span>

                                                    <span>
                                                        (32)
										</span>
                                                </Link>
                                            </li>

                                            <li className="p-b-7">
                                                <Link to="/" className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2">
                                                    <span>
                                                        January 2018
										</span>

                                                    <span>
                                                        (21)
										</span>
                                                </Link>
                                            </li>

                                            <li className="p-b-7">
                                                <Link to="/" className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2">
                                                    <span>
                                                        December 2017
										</span>

                                                    <span>
                                                        (26)
										</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-t-50">
                                        <h4 className="mtext-112 cl2 p-b-27">
                                            Tags
							</h4>

                                        <div className="flex-w m-r--5">
                                            <Link to="/" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Fashion
								</Link>

                                            <Link to="/" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Lifestyle
								</Link>

                                            <Link to="/" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Denim
								</Link>

                                            <Link to="/" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Streetstyle
								</Link>

                                            <Link to="/" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Crafts
								</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Blog;