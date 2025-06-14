"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dropdown, Menu, Space } from "antd";
import { usePathname } from "next/navigation"; 
import logo from "@/assests/logo.png"
import Image from "next/image";

const Navbar = () => {
  const pathName = usePathname();

  const values = [
    {
      key: 1,
      name: "Home",
      path: "/",
    },
    {
      key: 2,
      name: "About Us",
      path: "/about",
    },
    {
      key: 3,
      name: "Pricing",
      path: "/pricing",
    },
    {
      key: 4,
      name: "States Covered",
      path: "/states-covered",
    },
    {
      key: 5,
      name: "FAQ",
      path: "/faq",
    },
    {
      key: 6,
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const menuItems = [
    ...values.map((value) => ({
      key: value.key,
      label: (
        <Link
          href={value.path}
          className={pathName === value.path ? "text-[#1D75F2] font-medium" : "text-black font-medium"}
        >
          {value.name}
        </Link>
      ),
    })),
    {
      type: "divider",
    },
    {
      key: "client-portal",
      label: (
        <Link href="/login">
          <Button variant="btn2">Client Portal</Button>
        </Link>
      ),
    },
    {
      key: "get-started",
      label: (
        <Link href="/intake">
          <Button variant="default">Get Started</Button>
        </Link>
      ),
    },
  ];

  return (
    <div className="container py-4 border-b border-[#C1D3FF]">
      <div className="flex justify-between items-center">
        <div> 
          <Link href="/"> 
          <Image src={logo} alt="" height={8} width={170} />
          </Link>
    
        </div>

        {/* Mobile device */}
        <div className="lg:hidden block"> 
          {/* @ts-ignore  */}
          <Dropdown menu={{ items: menuItems }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <RxHamburgerMenu size={20} />
              </Space>
            </a>
          </Dropdown>
        </div>

        <div className="hidden lg:flex gap-[21px] items-center text-[16px] text-[#737373]">
          {values.map((value) => (
            <p key={value.key}>
              <Link
                href={value.path}
                className={
                  pathName === value.path ? "text-[#1D75F2]" : "text-black"
                }
              >
                {value.name}
              </Link>
            </p>
          ))}
        </div>

        <div className="hidden lg:flex gap-2">
          <Link href="/login">
          <button className=" h-[48px]  px-3 rounded border  border-[#C738BD] hover:bg-[#C738BD] hover:text-white   text-[#C738BD] bg-transparent font-medium ">Client Portal</button>
          </Link>

          <Link href="/intake">
            <Button variant="btn3">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
