"use client"; // required for event handling

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, UserIcon, CartIcon, SettingsIcon, DocumentIcon, MailboxIcon } from "../components/icons";

const menuItems = [
  { name: "Home", path: "/home", icon: HomeIcon },
  { name: "About", path: "/about", icon: UserIcon },
  { name: "Service", path: "/service", icon: SettingsIcon },
  { name: "Portfolio", path: "/portfolio", icon: CartIcon },
  // { name: "News", path: "/news", icon: DocumentIcon },
  { name: "Contact", path: "/contact", icon: MailboxIcon},
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="leftpart shadow-xl shadow-gray-500/40 p-6 rounded-lg">
      <div className="leftpart_inner">
        <div className="logo">
          <a className="navbar-brand logo" href="/">
          OMI
            {/* <Image
              alt="brand"
              src="/img/_img_logo_dk.png"
              width={135}
              height={20}
              decoding="async"
              data-nimg={1}
              loading="lazy"
              style={{ color: "transparent" }}
            /> */}
          </a>
        </div>
        <div className="menu">
          <ul>
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = item?.path === pathname;

              return (
                <li key={index}>
                  <a
                    className={isActive ? "active" : ""}
                    href={item.path}
                    data-menuanchor={item.name.toLowerCase()}
                  >
                    <Icon
                      color={isActive ? "#ca2a30" : "#94a3b8"}
                      className="w-5 h-5"
                    />
                    <span className="menu_content">{item.name}</span>
                  </a>
                </li>
              );
            })}
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
