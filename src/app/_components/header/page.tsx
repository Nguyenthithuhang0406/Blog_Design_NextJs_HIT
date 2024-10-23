"use client";
/* eslint-disable */
import React from 'react'

import Logo from '@/app/public/Logo.png'
import Image from 'next/image';
import { SlArrowDown } from "react-icons/sl";
import { SlMenu } from "react-icons/sl";

import "./Header.scss";
import { useRouter } from 'next/navigation';
const Header = () => {

  const router = useRouter();

  const handleClickSignIn = () => {
    router.push('/register');
  };

  return (
    <div className='header-container'>
      <div className='logo-header'>
        <Image src={Logo} alt='logo' className='logo-image-header'/>
      </div>
      <div className='menuHeader1'>
        <div className='menuItem-group'>
          <p className='p-item'>Home</p>
        </div>
        <div className='menuItem-group'>
          <p className='p-item'>Articles</p>
        </div>
        <div className='menuItem-group'>
          <p className='p-item'>Pages</p>
          <SlArrowDown className='icon-item'/>
        </div>
        <div className='menuItem-group'>
          <p className='p-item'>Pricing</p>
        </div>
        <div className='menuItem-group'>
          <p className='p-item'>Faq</p>
        </div>
        <div className='menuItem-btn'>
          <button onClick={handleClickSignIn}>Sign in</button>
        </div>
      </div>
      <div className='menuHeader2'>
        <SlMenu className='icon-menu'/>
        <div className='menuHeader2-hover'>
          <div className='menuItem-group2'>
            <p className='p-item'>Home</p>
          </div>
          <div className='menuItem-group2'>
            <p className='p-item'>Articles</p>
          </div>
          <div className='menuItem-group2'>
            <p className='p-item'>Pages</p>
            <SlArrowDown className='icon-item'/>
          </div>
          <div className='menuItem-group2'>
            <p className='p-item'>Pricing</p>
          </div>
          <div className='menuItem-group2'>
            <p className='p-item'>Faq</p>
          </div>
          <div className='menuItem-btn2'>
            <button onClick={handleClickSignIn}>Sign in</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header;