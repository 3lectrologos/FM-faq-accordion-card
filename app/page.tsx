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

function Accordion({ title, content, className='' }: { key: number, title: string, content: string, className?: string }) {
  const [active, setActive] = useState(false)
  return (
    <div
      className={`flex flex-col border-b border-divider py-[18px] cursor-pointer`}
      onClick={() => setActive(!active)}
    >
      <div className={`flex flex-row justify-between`}>
        <span className={`text-[13px] leading-[13px] ${active ? 'text-primaryblue font-bold' : 'text-textverydark'}`}>
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
    <div className={`flex flex-col min-h-screen bg-gradient-to-b from-bgviolet to-bgblue`}>
      <div className={`flex justify-center items-center pt-[148px] pb-[86px]`}>
        <div className={`relative w-[327px] flex flex-col bg-white rounded-3xl px-6 pb-12 pt-[136px] shadow-[0_50px_50px_-20px_rgba(53,18,122,0.5)]`}>
          <img className={`absolute top-0 left-[50%] transform -translate-x-1/2 translate-y-[2%]`}
               src='/images/bg-pattern-mobile.svg' width={236} alt='Background pattern'/>
          <img className={`absolute top-0 left-[50%] transform -translate-x-1/2 -translate-y-[60%]`}
            src='/images/illustration-woman-online-mobile.svg' width={236} alt='Background illustration' />
          <h1 className={`text-[32px] leading-[32px] font-bold mb-[18px] text-center`}>
            FAQ
          </h1>
          {titleArray.map((title, index) => {
            return <Accordion key={index} title={title} content={contentArray[index]} />
          })}
        </div>
      </div>
    </div>
  )
}