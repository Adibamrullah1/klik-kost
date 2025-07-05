'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineHome, HiHome } from 'react-icons/hi2';
import { BsChatDots, BsChatDotsFill } from 'react-icons/bs';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { IoClipboardOutline, IoClipboard } from 'react-icons/io5';
import { FaRegClock, FaClock } from 'react-icons/fa6';

import styles from './FooterNavigation.module.css';

const FooterNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Beranda',
      href: '/main/home',
      icon: <HiOutlineHome size={22} />,
      activeIcon: <HiHome size={22} />,
    },
    {
      label: 'Pesanan',
      href: '/main/orders',
      icon: <IoClipboardOutline size={20} />,
      activeIcon: <IoClipboard size={20} />,
    },
    {
      label: 'Inbox',
      href: '/main/inbox',
      icon: <BsChatDots size={18} />,
      activeIcon: <BsChatDotsFill size={18} />,
    },
    {
      label: 'Riwayat',
      href: '/main/history',
      icon: <FaRegClock size={20} />,
      activeIcon: <FaClock size={20} />,
    },
    {
      label: 'Profil',
      href: '/main/profile',
      icon: <FaRegUser size={20} />,
      activeIcon: <FaUser size={20} />,
    },
  ];

  return (
    <nav className={styles.footerNav}>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} className={styles.navItem}>
            <div className={styles.icon}>{isActive ? item.activeIcon : item.icon}</div>
            <span className={isActive ? styles.active : ''}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default FooterNavigation;
