'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Projects from './Projects'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20">
      <Projects />
    </div>
  )
}

