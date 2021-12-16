import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./Sidebar.css";

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axiosInstance.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
                    necessitatibus nostrum illum reprehenderit.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarIcon">
                    <a href="https://www.facebook.com/"><i className="icon fab fa-facebook-square"></i></a>
                    <a href="https://twitter.com/"><i className="icon fab fa-twitter-square"></i></a>
                    <a href="https://www.pinterest.com/"><i className="icon fab fa-pinterest-square"></i></a>
                    <a href="https://www.instagram.com/"><i className="icon fab fa-instagram-square"></i></a>
                </div>
            </div>
        </div>
    );
}


export default Sidebar;