'use client'

import { useState } from 'react'

const titleArray = [
  'How many team members can I invite?',
  'What is the maximum file upload size?',
  'How do I reset my password?',
  'Can I cancel my subscription?',
  'Do you provide additional support?'
]

const contentArray = [
  'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  'No more than 2GB. All files in your account must fit your allotted storage space.',
  'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
  'Yes! Send us a message and we’ll process your request no questions asked.',
  'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
]

function Accordion({ title, content, className='', initActive=false }: { key: number, title: string, content: string, className?: string, initActive?:boolean }) {
  const [active, setActive] = useState(initActive)
  const [hover, setHover] = useState(false)
  return (
    <div
      className={`flex flex-col border-b border-divider py-[18px] cursor-pointer lg:py-[19.5px] ${className}`}
      onClick={() => setActive(!active)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`flex flex-row justify-between`}>
        <span className={`transition text-[13px] leading-[13px] ${active ? 'text-primaryblue font-bold' : 'text-textverydark'} lg:text-[14px] lg:leading-[14px] ${hover ? 'lg:transition lg:text-primaryred' : ''}`}>
          {title}
        </span>
        <div className={`flex flex-col justify-center items-center`}>
          <img
            className={`inline transform ${active ? 'rotate-180' : ''}`}
            src='/images/icon-arrow-down.svg'
            width={10}
            alt="arrow" />
        </div>
      </div>
      { active &&
        <span className={`text-[12px] leading-[18px] text-textdark pt-3.5 pr-5`}>
          {content}
        </span>
      }
    </div>
  )
}

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-b from-bgviolet to-bgblue lg:justify-center`}>
      <div className={`relative flex justify-center items-center pt-[148px] pb-[86px] lg:py-0`}>
        <img className={`hidden absolute top-0 left-[50%] transform -translate-x-[290.5%] translate-y-[112.5%] lg:block lg:w-[190px] z-50`}
          src='/images/illustration-box-desktop.svg' alt='Box illustration' />
        <div className={`relative w-[327px] flex flex-col bg-white rounded-3xl px-6 pb-12 pt-[136px] shadow-[0_50px_50px_-20px_rgba(53,18,122,0.5)] lg:w-[920px] lg:pt-16 lg:pl-[475px] lg:pr-24 lg:pb-[85px] lg:overflow-hidden`}>
          <picture className={`w-[236px] absolute top-0 left-[50%] transform -translate-x-1/2 translate-y-[2%] lg:w-[964px] lg:top-0 lg:-left-0 lg:-translate-x-[60%] lg:-translate-y-[30.5%]`}>
            <source srcSet='/images/bg-pattern-desktop.svg' media='(min-width: 1024px)' />
            <img src='/images/bg-pattern-mobile.svg' alt='Background pattern' />
          </picture>
          <picture className={`w-[236px] absolute top-0 left-[50%] transform -translate-x-1/2 -translate-y-[60%] lg:w-[472px] lg:top-0 lg:left-0 lg:-translate-x-[17.5%] lg:translate-y-[20%]`}>
            <source srcSet='/images/illustration-woman-online-desktop.svg' media='(min-width: 1024px)' />
            <img src='/images/illustration-woman-online-mobile.svg' alt='Background illustration' />
          </picture>
          <h1 className={`text-[32px] leading-[32px] font-bold mb-[18px] text-center lg:text-left`}>
            FAQ
          </h1>
          {titleArray.map((title, index) => {
            return <Accordion className={`z-50`}
              key={index} title={title} content={contentArray[index]}
              initActive={index === 1}
            />
          })}
        </div>
      </div>
    </div>
  )
}