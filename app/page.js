'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"
import Projets from './components/projet/Projets'
import dynamic from 'next/dynamic'

const Lenis = dynamic(() => import('@studio-freight/lenis'), { ssr: false })
const SplitType = dynamic(() => import('split-type'), { ssr: false })
const gsap = dynamic(() => import('gsap'), { ssr: false })

export default function Home() {
  const descriptionRef = useRef(null)

  useEffect(() => {
    let lenis;
    let splitInstance;

    Promise.all([
      import('@studio-freight/lenis'),
      import('split-type'),
      import('gsap')
    ]).then(([{ default: Lenis }, { default: SplitType }, { gsap }]) => {
      lenis = new Lenis()

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      // GSAP animation for text appearance
      if (descriptionRef.current) {
        splitInstance = new SplitType(descriptionRef.current);
        const chars = splitInstance.chars;

        gsap.set(chars,
          { filter: 'blur(8px)', opacity: 0, y: 10 }
        )
        gsap.to(chars, {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          duration: 1.3,
          stagger: 0.01,
          ease: "power3.out",
        })
      }
    })

    return () => {
      if (lenis) lenis.destroy()
      if (splitInstance) splitInstance.revert()
    }
  }, [])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <p className={styles.description} ref={descriptionRef}>I'm Mouysset Hugo, a freelance interface designer and hard surface modeler based in France. Welcome to my online space, where I focus on crafting unique landing pages, interfaces,  websites and 3D models.</p>
        </div>
        <Projets
          imageSrc="/medias/laporte_export_webl1.png"
          imageAlt="laporte"
          projectInfo="[ Hero Section Concept - La Porte Académie]"
        />
        <Projets
          imageSrc="/medias/workflowgen1.png"
          imageAlt="Description of Project 2"
          projectInfo="[ Landing Page - WorkflowGen - Creative direction : ANNEXE CONTRE INTUITIV ]"
        />
        <Projets
          imageSrc="/medias/workflowgen2.png"
          imageAlt="Description of Project 2"
          projectInfo="[ Landing Page - WorkflowGen - Creative direction : ANNEXE CONTRE INTUITIV ]"
        />
        <Projets
          imageSrc="/medias/cleaverface1.png"
          imageAlt="clever Faces"
          projectInfo="[ Design - Clever Faces - Creative direction : ANNEXE CONTRE INTUITIV ]"
        />
        <Projets
          imageSrc="/medias/cleaverface2.png"
          imageAlt="Clever Faces"
          projectInfo="[ Design - Clever Faces - Creative direction : ANNEXE CONTRE INTUITIV ]"
        />
      </main>
    </div>
  )
}