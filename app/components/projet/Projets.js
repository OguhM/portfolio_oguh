'use client'

import React, { forwardRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projets.module.css';

const Projets = forwardRef(({
  imageSrc = "/medias/workflowgen1.png",
  imageAlt = "Description de l'image WorkflowGen",
  projectInfo = "[ Landing Page - WorkflowGen - Creative direction : ANNEXE CONTRE INTUITIV ]"
}, ref) => {

  useEffect(() => {
    // Any side effects can be placed here
  }, []);

  return (
    <div className={styles.containerElementProjet} ref={ref}>
      <div className={styles.containerProject}>
        <Image
          className={styles.imgProjet}
          src={imageSrc}
          alt={imageAlt}
          width={0}
          height={0}
          sizes="100vw"
          priority
        />
      </div>
      <span className={styles.infoProject}>{projectInfo}</span>
    </div>
  );
});

Projets.displayName = 'Projets';

export default Projets;