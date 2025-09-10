import Link from 'next/link'
import React from 'react'

const Footar1 = () => {
  return (
    <div className='bg-gray-600 min-h-screen w-full flex justify-center items-center p-6'>
     
      <div className='w-4/5 h-[500px] border-2 border-black rounded-lg shadow-lg bg-gray-400 flex flex-col'>
        
       
        <h1 className='text-center text-3xl font-bold py-4 border-b border-black bg-gray-400'>
          Term of Use
        </h1>

       
        <div className='flex-1 overflow-y-auto p-6'>
          <p className='leading-relaxed'>
            <span className="font-semibold">TERMS AND CONDITIONS :</span> By visiting our site “algorooms.com" you ("you" refers to the user or viewer of the Website) are agreeing to be bound by the following terms and conditions and the Privacy Policy on the Website.<br/><br/>

            <span className="font-semibold">REGISTRATION AND TERMINATION :</span> By registering for this facility you understand that algorooms and its directors, employees and associates reserve the right, in its sole discretion, to deny you access to this Website or any portion thereof without notice for various reasons.<br/><br/>

            <span className="font-semibold">LICENSE :</span> Algorooms grants to you a non-exclusive royalty-free revocable license to view, copy, and store this website and the material on this website for personal non-commercial use.<br/><br/>

            <span className="font-semibold">ENFORCEMENT OF COPYRIGHT :</span> Algorooms takes the protection of its copyright materials very seriously. If Algorooms discovers that you have used our copyright materials in contravention of the license above, ALGOROOMS may bring legal proceedings against you for an injunction to stop you using those materials and monetary damages.<br/><br/>

            <span className="font-semibold">SECURITY :</span> Unauthorized use of this Website and systems, including, but not limited to, unauthorized entry into Algorooms’s systems, online accounts, misuse of passwords is strictly prohibited.<br/><br/>

            <span className="font-semibold">STRATEGY INTELLECTUAL PROPERTY :</span> The intellectual property of the strategy logic and configuration will solely and exclusively belong to the strategy creator.<br/><br/>

            <span className="font-semibold">CAVEAT EMPTOR :</span> Indian laws require Portfolio managers and Investment Advisory Service providers to be registered under SEBI. US Laws do not have any such requirement.<br/><br/>

            <span className="font-semibold">SERVICE DELAYS :</span> Algorooms reserves its right to change, improve or correct the information, materials and descriptions on this website and to suspend and/or deny access to this web site for scheduled or unscheduled maintenance.<br/><br/>

            <span className="font-semibold">LIABILITY :</span> You agree that Algorooms shall not be liable for any direct, special, indirect, consequential or incidental damages arising out of the use or inability to use www.algorooms.com.<br/><br/>

            <span className="font-semibold">INDEMNIFICATION :</span> You shall indemnify, defend and hold harmless Algorooms from any and all claims and losses imposed on, incurred by or asserted as a result of or related to your access and use of www.algorooms.com.<br/><br/>

            <span className="font-semibold">ENTIRE AGREEMENT :</span> This User Agreement constitutes the entire agreement between the parties.<br/><br/>

            <span className="font-semibold">DISCLAIMER :</span> The information made available is for educational purposes only. Algorooms does not recommend or advocate the buying, selling, or holding of any investment.<br/><br/>

            If you have any questions or concerns about these Terms, please contact us at <Link href="" className='text-blue-900'>supports@algorooms.com</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footar1
