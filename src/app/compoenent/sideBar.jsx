"use client"; // required for event handling

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
  { name: "Home", path: "/home", icon: "/img/svg/home-run.svg" },
  { name: "About", path: "/about", icon: "/img/svg/avatar.svg" },
  { name: "Service", path: "/service", icon: "/img/svg/setting.svg" },
  { name: "Portfolio", path: "/portfolio", icon: "/img/svg/briefcase.svg" },
  { name: "News", path: "/news", icon: "/img/svg/paper.svg" },
  { name: "Contact", path: "/contact", icon: "/img/svg/mail.svg" },
];

export default function Sidebar() {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  return (
    <div className="leftpart">
      <div className="leftpart_inner">
        <div className="logo">
          <a className="navbar-brand" href="/">
            <Image
              alt="brand"
              // srcSet="/_next/image?url=%2Fimg%2Flogo%2Fdark.png&w=256&q=75 1x, /_next/image?url=%2Fimg%2Flogo%2Fdark.png&w=384&q=75 2x"
              src="/img/_img_logo_dark.png"
              width={135}
              height={20}
              decoding="async"
              data-nimg={1}
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </a>
        </div>
        <div className="menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  className={item?.path ==pathname && "active" } 
                  href={item.path}
                  data-menuanchor={item.name.toLowerCase()}
                >
                  <img
                    alt="homerun"
                    src={item.icon}
                    width={15}
                    height={15}
                    decoding="async"
                    data-nimg={1}
                    className="svg"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                  <span className="menu_content">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="copyright">
          <p>
            ©{/* */}
            2025
            {/* */}
            Divya <br />
          </p>
        </div>
      </div>
    </div>
  );
}
