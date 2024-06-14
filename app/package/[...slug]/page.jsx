"use client"
import React, { useEffect } from 'react'
import Header4 from '@/components/layout/header/Header4'
import FooterFour from '@/components/layout/footers/FooterFour'

const page = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [post, setPosts] = useState("");

    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("https://mountaintrekkingnepal.com/api/package")
                setTitle(response?.data?.title);
                setPosts(response?.data?.posts);
                const unpurifiedDesc = response?.data?.description;
                let updatedHtmlString = DOMPurify.sanitize(unpurifiedDesc);
                setDesc(updatedHtmlString);              
            }
            catch(error){
                setError(error)
                console.error(error)
            }
        };
        fetchData();
    }, []);

  return (
    <div>
        <Header4 />
        <div className="menu js-menu">
                <div className="menu__overlay js-menu-button"></div>
                <div className="menu__container">
                    <div className="menu__header">
                        <h4>Main Menu</h4>
                        <button className="js-menu-button">
                            <i className="icon-cross text-10"></i>
                        </button>
                    </div>
                    <div className="menu__content">
                        <ul className="menuNav js-navList">
                            <li className="menuNav__item">
                                <Link href="/"> 
                                    Home
                                </Link>
                            </li>
                            <li className="menuNav__item -has-submenu js-has-submenu">
                                <Link href="/nepal">
                                    Nepal
                                    <i className="icon-chevron-right"></i>
                                </Link>
                                <ul className="submenu">
                                    <li className="submenu__item js-nav-list-back">
                                        <Link href="/">Back</Link> 
                                    </li>
                                    <li className="submenu__item">
                                        <Link href="/tour-list-1.html">Nepal Trekking</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="menu__footer">
                        <i className="icon-headphone text-50"></i>
                        <div className="text-20 lh-12 fw-500 mt-20">
                            <div>Speak to our expert at</div>
                            <div className="text-accent-1">1-800-453-6744</div>
                        </div>
                        <div className="d-flex items-center x-gap-10 pt-30">
                            <div>
                                <Link href="#">
                                    <i className="icon-facebook"></i>
                                </Link>
                            </div>
                            <div>
                                <Link href="#">
                                    <i className="icon-twitter"></i>
                                </Link>
                            </div>
                            <div>
                                <Link href="#">
                                    <i className="icon-instagram"></i>
                                </Link>
                            </div>
                            <div>
                                <Link href="#">
                                    <i className="icon-linkedin"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
            <section data-aos="fade-up" data-aos-delay="400" className="pageHeader -type-3">
                <div className="container">
                    <div className="row justify-between">
                        <div className="col-auto">
                            <div className="text-14 breadcrumb-text">
                                <Link href="/">Home</Link>
                                <Image src="/img/chevron-right.svg" alt="chevron" width={12} height={12} />
                                <Link href="/destination">Region</Link>
                                <Image src="/img/chevron-right.svg" alt="chevron" width={12} height={12} />
                                <Link href={`/region/${slug}`}>{title}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-30">
                        <div className="col-auto text-collapse">
                            <h1 className="pageHeader__title">{title}</h1>
                            <span dangerouslySetInnerHTML={{ __html: content }}></span>
                        </div>
                    </div>
                </div> 
            </section> 

        <FooterFour />
    </div>
  )
}

export default page