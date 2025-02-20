'use client'

import { useState } from 'react'

export function FooterEmail() {
  const [isCopied, setIsCopied] = useState(false)

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch {
      console.error('Failed to copy email to clipboard')
    }
  }

  return (
    <div
      data-state={isCopied ? 'shown' : 'hidden'}
      onClick={(e) => {
        copyToClipboard(e.currentTarget.innerText)
      }}
      className='group relative bg-gradient-to-r from-[#DCD7CD] to-[#E7BE6C] bg-clip-text text-2.5xl text-transparent hover:cursor-pointer sm:text-5.5xl'
    >
      erick.prussak@gmail.com
      <CopiedContent />
    </div>
  )
}

export function CopiedContent() {
  return (
    <div className='absolute bottom-0 right-2 -z-10 -translate-y-6 text-sm text-[#57544E] transition-transform will-change-transform group-data-[state="shown"]:translate-y-10'>
      {'Copied!'.split('').map((char, i) => (
        <span
          key={i}
          className='inline-block animate-[fadeIn_0.3s_ease-in-out_forwards] opacity-0 delay-150'
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  )
}
