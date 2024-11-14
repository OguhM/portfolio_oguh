'use client'

import React, {forwardRef, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = forwardRef((props, ref) => {

  useEffect(() => {

  }, []);

  return (
    <nav className={styles.header}>
      <Link href="/">
        <Image className={styles.imgHeader} src="/brand.svg" alt="alt" width={126} height={28} />
      </Link>
    </nav>
  );
});

export default Header;