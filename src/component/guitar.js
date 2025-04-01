'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef, useEffect, useState } from 'react'
export default function Guitar() {
    const [defaultGuitar, setDefaultGuitar] = useState(false)
    const background = useRef()
    const instrument = useRef()
    const details = useRef()
    useGSAP(() => {
        gsap.from(background.current, {
            y: 0 - window.innerHeight,
            duration: 0.5
        })
        gsap.from(instrument.current, {
            scale: 3,
            opacity: 0,
            duration: 0.5,
            delay: 0.7
        })
        gsap.from(details.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.7
        })
    })
    const cordsClick = () => {
        setDefaultGuitar(true)
    }
    const tabsClick = () => {
        setDefaultGuitar(false)
    }
    return (
        <div ref={background} className="h-screen bg-guitar flex items-center justify-center overflow-hidden">
            <div ref={instrument} className='respective md:w-screen h-screen md:h-max'>
                <div className='w-max md:w-max mx-auto'>
                    <button onClick={cordsClick} className={`duration-100 cursor-pointer size-20 md:my-1 md:mr-8 text-white hover:text-yellow-300 text-lg font-black bg-gradient-to-bl from-orange-700 via-amber-600 to-orange-700 rounded-2xl ${(!defaultGuitar) && 'border-t-2 border-l-2 border-b-4 border-r-6 border-amber-800 shadow-[3px_3px_10px_#000000]'}`}>
                        Chords
                    </button>
                    <button onClick={tabsClick} className={`duration-100 cursor-pointer size-20 md:my-1 md:ml-8 text-white hover:text-yellow-300 text-lg font-black bg-gradient-to-bl from-orange-700 via-amber-600 to-orange-700 rounded-2xl ${(defaultGuitar) && 'border-t-2 border-l-2 border-b-4 border-r-6 border-amber-800 shadow-[3px_3px_10px_#000000]'}`}>
                        Tabs
                    </button>
                </div>
                {(!defaultGuitar) ? <TabGuitar /> : <ChordsGuitar />}
            </div>
            {(!defaultGuitar) ?
                <div ref={details} className='absolute bottom-0 left-0 w-[25%] px-2 bg-[#000000aa] text-white text-[15px] border rounded-lg'>
                    <h1 className='underline text-[18px]'>How to play</h1>
                    <h1>Click the desired tab.</h1>
                    <h1 className='text-center'>Or</h1>
                    <h1>Press the desired tab&apos;s alphabate and number togather.</h1>
                    <div className='flex'>
                        <h1 className='mr-1 underline'>Ex:</h1>
                        <h1>If &apos;Y3&apos; then press &apos;Y&apos; and &apos;3&apos; together.</h1>
                    </div>
                </div>
                :
                <div ref={details} className='absolute bottom-0 left-0 w-full px-2 bg-[#000000aa] text-white text-[12px] border rounded-lg'>
                    <h1 className='underline text-[15px]'>How to play</h1>
                    <div className='flex'>
                        <h1 className='mr-1'>Step1:</h1>
                        <h1>Click the Chords button.</h1>
                    </div>
                    <div className='flex'>
                        <h1 className='mr-1'>Step2:</h1>
                        <div>
                            <h1>Press &apos;D&apos; for down stroke / Press &apos;U&apos; for up stroke or Click the Up or Down button.</h1>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
const TabGuitar = () => {
    return (
        <div className='relative top-[5.5%] md:top-0 w-58 md:w-full h-[94.5%] md:h-68 md:flex items-center justify-center'>
            <div className='w-58 md:w-1/12 h-1/12 md:h-68 flex items-end md:items-center justify-center md:justify-end bg-gradient-to-br from-orange-800 via-amber-600 to-orange-800 md:border-t-3 border-b-2 md:border-b-4 border-r-4 md:border-r-2 border-l-4 md:border-l-0 border-amber-900 rounded-b-4xl md:rounded-bl-none rounded-r-none md:rounded-r-4xl'>
                <div className='respective z-10 w-max h-4 md:h-max flex md:block text-black text-[23px] font-semibold'>
                    <h1 className='mx-[6px] md:mx-0 drop-shadow-[2px_2px_0px_#ffffff]'>E</h1>
                    <h1 className='mx-[6px] md:mx-0 drop-shadow-[2px_2px_0px_#ffffff]'>B</h1>
                    <h1 className='mx-[6px] md:mx-0 drop-shadow-[2px_2px_0px_#ffffff]'>G</h1>
                    <h1 className='mx-[6px] md:mx-0 drop-shadow-[2px_2px_0px_#ffffff]'>D</h1>
                    <h1 className='mx-[6px] md:mx-0 drop-shadow-[2px_2px_0px_#ffffff]'>A</h1>
                    <h1 className='mx-[6px] md:mx-0 drop-shadow-[2px_2px_0px_#ffffff]'>E</h1>
                </div>
            </div>
            <div className='w-42 md:w-11/12 h-11/12 md:h-54 mx-auto bg-gradient-to-r from-orange-700 via-amber-800 to-orange-950 md:flex md:border-t-3 border-x-4 md:border-x-none md:border-b-4 border-amber-900'>
                <div className='w-full md:w-[12%] h-[11.5%] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-white'></div>
                <div className='w-full md:w-[11%] h-[11%] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-white'></div>
                <div className='w-full md:w-[10%] h-[10%] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-white flex items-center justify-center'>
                    <div className='size-6 bg-gray-300 rounded-full'></div>
                </div>
                <div className='w-full md:w-[9.5%] h-[9.5%] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-white'></div>
                <div className='w-full md:w-[9%] h-[9%] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-white flex items-center justify-center'>
                    <div className='size-6 bg-gray-300 rounded-full'></div>
                </div>
                <div className='w-full md:w-[8.5%] h-[8.5%] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-white'></div>
                <div className='w-full md:w-[8%] h-[8%] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-white flex items-center justify-center'>
                    <div className='size-6 bg-gray-300 rounded-full'></div>
                </div>
                <div className='w-full md:w-[7.5%] h-[7.5%] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-white'></div>
                <div className='w-full md:w-[7%] h-[7%] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-white flex items-center justify-center'>
                    <div className='size-6 bg-gray-300 rounded-full'></div>
                </div>
                <div className='w-full md:w-[6.5%] h-[6.5%] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-white'></div>
                <div className='w-full md:w-[6%] h-[6%] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-white'></div>
                <div className='w-full md:w-[5.5%] h-[5.5%] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-white flex items-center justify-center'>
                    <div className='size-max flex justify-center md:block'>
                        <div className='size-6 mr-8 md:mr-0 md:mb-16 bg-gray-300 rounded-full'></div>
                        <div className='size-6 ml-8 md:ml-0 md:mt-16 bg-gray-300 rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className='absolute w-full h-54 hidden md:grid grid-rows-6'>
                <div className='w-full flex items-center'>
                    <div className='w-full h-[1px] bg-white flex items-center'>
                        <div className='w-[8.2%]'>
                            <E4 text={'Q'} number={'1'} />
                        </div>
                        <div className='w-[11%]'>
                            <F4 text={'W'} number={'1'} />
                        </div>
                        <div className='w-[10%]'>
                            <Fb4 text={'E'} number={'1'} />
                        </div>
                        <div className='w-[9%]'>
                            <G4 text={'R'} number={'1'} />
                        </div>
                        <div className='w-[9%]'>
                            <Gb4 text={'T'} number={'1'} />
                        </div>
                        <div className='w-[8%]'>
                            <A4 text={'Y'} number={'1'} />
                        </div>
                        <div className='w-[8%]'>
                            <Ab4 text={'U'} number={'1'} />
                        </div>
                        <div className='w-[7%]'>
                            <B4 text={'I'} number={'1'} />
                        </div>
                        <div className='w-[7%]'>
                            <C5 text={'O'} number={'1'} />
                        </div>
                        <div className='w-[6.5%]'>
                            <Cb5 text={'P'} number={'1'} />
                        </div>
                        <div className='w-[6%]'>
                            <D5 text={'A'} number={'1'} />
                        </div>
                        <div className='w-[5%]'>
                            <Db5 text={'S'} number={'1'} />
                        </div>
                        <div className='w-[5%]'>
                            <E5 text={'D'} number={'1'} />
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center'>
                    <div className='w-full h-[2px] bg-white flex items-center'>
                        <div className='w-[8.2%]'>
                            <B3 text={'Q'} number={'2'} />
                        </div>
                        <div className='w-[11%]'>
                            <C4 text={'W'} number={'2'} />
                        </div>
                        <div className='w-[10%]'>
                            <Cb4 text={'E'} number={'2'} />
                        </div>
                        <div className='w-[9%]'>
                            <D4 text={'R'} number={'2'} />
                        </div>
                        <div className='w-[9%]'>
                            <Db4 text={'T'} number={'2'} />
                        </div>
                        <div className='w-[8%]'>
                            <E4 text={'Y'} number={'2'} />
                        </div>
                        <div className='w-[8%]'>
                            <F4 text={'U'} number={'2'} />
                        </div>
                        <div className='w-[7%]'>
                            <Fb4 text={'I'} number={'2'} />
                        </div>
                        <div className='w-[7%]'>
                            <G4 text={'O'} number={'2'} />
                        </div>
                        <div className='w-[6.5%]'>
                            <Gb4 text={'P'} number={'2'} />
                        </div>
                        <div className='w-[6%]'>
                            <A4 text={'A'} number={'2'} />
                        </div>
                        <div className='w-[5%]'>
                            <Ab4 text={'S'} number={'2'} />
                        </div>
                        <div className='w-[5%]'>
                            <B4 text={'D'} number={'2'} />
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center'>
                    <div className='w-full h-[2px] bg-white flex items-center'>
                        <div className='w-[8.2%]'>
                            <G3 text={'Q'} number={'3'} />
                        </div>
                        <div className='w-[11%]'>
                            <Gb3 text={'W'} number={'3'} />
                        </div>
                        <div className='w-[10%]'>
                            <A3 text={'E'} number={'3'} />
                        </div>
                        <div className='w-[9%]'>
                            <Ab3 text={'R'} number={'3'} />
                        </div>
                        <div className='w-[9%]'>
                            <B3 text={'T'} number={'3'} />
                        </div>
                        <div className='w-[8%]'>
                            <C4 text={'Y'} number={'3'} />
                        </div>
                        <div className='w-[8%]'>
                            <Cb4 text={'U'} number={'3'} />
                        </div>
                        <div className='w-[7%]'>
                            <D4 text={'I'} number={'3'} />
                        </div>
                        <div className='w-[7%]'>
                            <Db4 text={'O'} number={'3'} />
                        </div>
                        <div className='w-[6.5%]'>
                            <E4 text={'P'} number={'3'} />
                        </div>
                        <div className='w-[6%]'>
                            <F4 text={'A'} number={'3'} />
                        </div>
                        <div className='w-[5%]'>
                            <Fb4 text={'S'} number={'3'} />
                        </div>
                        <div className='w-[5%]'>
                            <G4 text={'D'} number={'3'} />
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center'>
                    <div className='w-full h-[2px] bg-white flex items-center'>
                        <div className='w-[8.2%]'>
                            <D3 text={'Q'} number={'4'} />
                        </div>
                        <div className='w-[11%]'>
                            <Db3 text={'W'} number={'4'} />
                        </div>
                        <div className='w-[10%]'>
                            <E3 text={'E'} number={'4'} />
                        </div>
                        <div className='w-[9%]'>
                            <F3 text={'R'} number={'4'} />
                        </div>
                        <div className='w-[9%]'>
                            <Fb3 text={'T'} number={'4'} />
                        </div>
                        <div className='w-[8%]'>
                            <G3 text={'Y'} number={'4'} />
                        </div>
                        <div className='w-[8%]'>
                            <Gb3 text={'U'} number={'4'} />
                        </div>
                        <div className='w-[7%]'>
                            <A3 text={'I'} number={'4'} />
                        </div>
                        <div className='w-[7%]'>
                            <Ab3 text={'O'} number={'4'} />
                        </div>
                        <div className='w-[6.5%]'>
                            <B3 text={'P'} number={'4'} />
                        </div>
                        <div className='w-[6%]'>
                            <C4 text={'A'} number={'4'} />
                        </div>
                        <div className='w-[5%]'>
                            <Cb4 text={'S'} number={'4'} />
                        </div>
                        <div className='w-[5%]'>
                            <D4 text={'D'} number={'4'} />
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center'>
                    <div className='w-full h-[2px] bg-white flex items-center'>
                        <div className='w-[8.2%]'>
                            <A2 text={'Q'} number={'5'} />
                        </div>
                        <div className='w-[11%]'>
                            <Ab2 text={'W'} number={'5'} />
                        </div>
                        <div className='w-[10%]'>
                            <B2 text={'E'} number={'5'} />
                        </div>
                        <div className='w-[9%]'>
                            <C3 text={'R'} number={'5'} />
                        </div>
                        <div className='w-[9%]'>
                            <Cb3 text={'T'} number={'5'} />
                        </div>
                        <div className='w-[8%]'>
                            <D3 text={'Y'} number={'5'} />
                        </div>
                        <div className='w-[8%]'>
                            <Db3 text={'U'} number={'5'} />
                        </div>
                        <div className='w-[7%]'>
                            <E3 text={'I'} number={'5'} />
                        </div>
                        <div className='w-[7%]'>
                            <F3 text={'O'} number={'5'} />
                        </div>
                        <div className='w-[6.5%]'>
                            <Fb3 text={'P'} number={'5'} />
                        </div>
                        <div className='w-[6%]'>
                            <G3 text={'A'} number={'5'} />
                        </div>
                        <div className='w-[5%]'>
                            <Gb3 text={'S'} number={'5'} />
                        </div>
                        <div className='w-[5%]'>
                            <A3 text={'D'} number={'5'} />
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center'>
                    <div className='w-full h-[2px] bg-white flex items-center'>
                        <div className='w-[8.2%]'>
                            <E2 text={'Q'} number={'6'} />
                        </div>
                        <div className='w-[11%]'>
                            <F2 text={'W'} number={'6'} />
                        </div>
                        <div className='w-[10%]'>
                            <Fb2 text={'E'} number={'6'} />
                        </div>
                        <div className='w-[9%]'>
                            <G2 text={'R'} number={'6'} />
                        </div>
                        <div className='w-[9%]'>
                            <Gb2 text={'T'} number={'6'} />
                        </div>
                        <div className='w-[8%]'>
                            <A2 text={'Y'} number={'6'} />
                        </div>
                        <div className='w-[8%]'>
                            <Ab2 text={'U'} number={'6'} />
                        </div>
                        <div className='w-[7%]'>
                            <B2 text={'I'} number={'6'} />
                        </div>
                        <div className='w-[7%]'>
                            <C3 text={'O'} number={'6'} />
                        </div>
                        <div className='w-[6.5%]'>
                            <Cb3 text={'P'} number={'6'} />
                        </div>
                        <div className='w-[6%]'>
                            <D3 text={'A'} number={'6'} />
                        </div>
                        <div className='w-[5%]'>
                            <Db3 text={'S'} number={'6'} />
                        </div>
                        <div className='w-[5%]'>
                            <E3 text={'D'} number={'6'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute left-8 top-0 w-42 h-full grid grid-cols-6 md:hidden'>
                <div className='relative'>
                    <div className='absolute left-[12px] w-[7px] h-full bg-white'></div>
                    <div className='relative w-full h-full'>
                        <div className='w-max h-[8.2%] flex items-center'>
                            <E2 text={'Q'} number={'6'} />
                        </div>
                        <div className='w-max h-[11%] flex items-center'>
                            <F2 text={'W'} number={'6'} />
                        </div>
                        <div className='w-max h-[10%] flex items-center'>
                            <Fb2 text={'E'} number={'6'} />
                        </div>
                        <div className='w-max h-[9%] flex items-center'>
                            <G2 text={'R'} number={'6'} />
                        </div>
                        <div className='w-max h-[9%] flex items-center'>
                            <Gb2 text={'T'} number={'6'} />
                        </div>
                        <div className='w-max h-[8%] flex items-center'>
                            <A2 text={'Y'} number={'6'} />
                        </div>
                        <div className='w-max h-[8%] flex items-center'>
                            <Ab2 text={'U'} number={'6'} />
                        </div>
                        <div className='w-max h-[7%] flex items-center'>
                            <B2 text={'I'} number={'6'} />
                        </div>
                        <div className='w-max h-[7%] flex items-center'>
                            <C3 text={'O'} number={'6'} />
                        </div>
                        <div className='w-max h-[6.5%] flex items-center'>
                            <Cb3 text={'P'} number={'6'} />
                        </div>
                        <div className='w-max h-[6%] flex items-center'>
                            <D3 text={'A'} number={'6'} />
                        </div>
                        <div className='w-max h-[5%] flex items-center'>
                            <Db3 text={'S'} number={'6'} />
                        </div>
                        <div className='w-max h-[5%] flex items-center'>
                            <E3 text={'D'} number={'6'} />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute left-[12px] w-[6px] h-full bg-white'></div>
                    <div className='relative w-full h-full'>
                        <div className='w-max h-[8.2%] flex items-center'>
                            <A2 text={'Q'} number={'5'} />
                        </div>
                        <div className='w-max h-[11%] flex items-center'>
                            <Ab2 text={'W'} number={'5'} />
                        </div>
                        <div className='w-max h-[10%] flex items-center'>
                            <B2 text={'E'} number={'5'} />
                        </div>
                        <div className='w-max h-[9%] flex items-center'>
                            <C3 text={'R'} number={'5'} />
                        </div>
                        <div className='w-max h-[9%] flex items-center'>
                            <Cb3 text={'T'} number={'5'} />
                        </div>
                        <div className='w-max h-[8%] flex items-center'>
                            <D3 text={'Y'} number={'5'} />
                        </div>
                        <div className='w-max h-[8%] flex items-center'>
                            <Db3 text={'U'} number={'5'} />
                        </div>
                        <div className='w-max h-[7%] flex items-center'>
                            <E3 text={'I'} number={'5'} />
                        </div>
                        <div className='w-max h-[7%] flex items-center'>
                            <F3 text={'O'} number={'5'} />
                        </div>
                        <div className='w-max h-[6.5%] flex items-center'>
                            <Fb3 text={'P'} number={'5'} />
                        </div>
                        <div className='w-max h-[6%] flex items-center'>
                            <G3 text={'A'} number={'5'} />
                        </div>
                        <div className='w-max h-[5%] flex items-center'>
                            <Gb3 text={'S'} number={'5'} />
                        </div>
                        <div className='w-max h-[5%] flex items-center'>
                            <A3 text={'D'} number={'5'} />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute left-[12px] w-[5px] h-full bg-white'></div>
                    <div className='relative w-full h-full'>
                        <div className='w-max h-[8.2%] flex items-center'>
                            <D3 text={'Q'} number={'4'} />
                        </div>
                        <div className='w-max h-[11%] flex items-center'>
                            <Db3 text={'W'} number={'4'} />
                        </div>
                        <div className='w-max h-[10%] flex items-center'>
                            <E3 text={'E'} number={'4'} />
                        </div>
                        <div className='w-max h-[9%] flex items-center'>
                            <F3 text={'R'} number={'4'} />
                        </div>
                        <div className='w-max h-[9%] flex items-center'>
                            <Fb3 text={'T'} number={'4'} />
                        </div>
                        <div className='w-max h-[8%] flex items-center'>
                            <G3 text={'Y'} number={'4'} />
                        </div>
                        <div className='w-max h-[8%] flex items-center'>
                            <Gb3 text={'U'} number={'4'} />
                        </div>
                        <div className='w-max h-[7%] flex items-center'>
                            <A3 text={'I'} number={'4'} />
                        </div>
                        <div className='w-max h-[7%] flex items-center'>
                            <Ab3 text={'O'} number={'4'} />
                        </div>
                        <div className='w-max h-[6.5%] flex items-center'>
                            <B3 text={'P'} number={'4'} />
                        </div>
                        <div className='w-max h-[6%] flex items-center'>
                            <C4 text={'A'} number={'4'} />
                        </div>
                        <div className='w-max h-[5%] flex items-center'>
                            <Cb4 text={'S'} number={'4'} />
                        </div>
                        <div className='w-max h-[5%] flex items-center'>
                            <D4 text={'D'} number={'4'} />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute left-[12px] w-[4px] h-full bg-white'></div>
                    <div className='relative w-full h-full'>
                        <div className='w-max h-[8.2%] flex items-center'>
                            <G3 text={'Q'} number={'3'} />
                        </div>
                        <div className='w-max h-[11%] flex items-center'>
                            <Gb3 text={'W'} number={'3'} />
                        </div>
                        <div className='w-max h-[10%] flex items-center'>
                            <A3 text={'E'} number={'3'} />
                        </div>
                        <div className='w-max h-[9%] flex items-center'>
                            <Ab3 text={'R'} number={'3'} />
                        </div>
                        <div className='w-max h-[9%] flex items-center'>
                            <B3 text={'T'} number={'3'} />
                        </div>
                        <div className='w-max h-[8%] flex items-center'>
                            <C4 text={'Y'} number={'3'} />
                        </div>
                        <div className='w-max h-[8%] flex items-center'>
                            <Cb4 text={'U'} number={'3'} />
                        </div>
                        <div className='w-max h-[7%] flex items-center'>
                            <D4 text={'I'} number={'3'} />
                        </div>
                        <div className='w-max h-[7%] flex items-center'>
                            <Db4 text={'O'} number={'3'} />
                        </div>
                        <div className='w-max h-[6.5%] flex items-center'>
                            <E4 text={'P'} number={'3'} />
                        </div>
                        <div className='w-max h-[6%] flex items-center'>
                            <F4 text={'A'} number={'3'} />
                        </div>
                        <div className='w-max h-[5%] flex items-center'>
                            <Fb4 text={'S'} number={'3'} />
                        </div>
                        <div className='w-max h-[5%] flex items-center'>
                            <G4 text={'D'} number={'3'} />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute left-[12px] w-[3px] h-full bg-white'></div>
                    <div className='relative w-full h-full'>
                        <div className='w-max h-[8.2%] flex items-center'>
                            <B3 text={'Q'} number={'2'} />
                        </div>
                        <div className='w-max h-[11%] flex items-center'>
                            <C4 text={'W'} number={'2'} />
                        </div>
                        <div className='w-max h-[10%] flex items-center'>
                            <Cb4 text={'E'} number={'2'} />
                        </div>
                        <div className='w-max h-[9%] flex items-center'>
                            <D4 text={'R'} number={'2'} />
                        </div>
                        <div className='w-max h-[9%] flex items-center'>
                            <Db4 text={'T'} number={'2'} />
                        </div>
                        <div className='w-max h-[8%] flex items-center'>
                            <E4 text={'Y'} number={'2'} />
                        </div>
                        <div className='w-max h-[8%] flex items-center'>
                            <F4 text={'U'} number={'2'} />
                        </div>
                        <div className='w-max h-[7%] flex items-center'>
                            <Fb4 text={'I'} number={'2'} />
                        </div>
                        <div className='w-max h-[7%] flex items-center'>
                            <G4 text={'O'} number={'2'} />
                        </div>
                        <div className='w-max h-[6.5%] flex items-center'>
                            <Gb4 text={'P'} number={'2'} />
                        </div>
                        <div className='w-max h-[6%] flex items-center'>
                            <A4 text={'A'} number={'2'} />
                        </div>
                        <div className='w-max h-[5%] flex items-center'>
                            <Ab4 text={'S'} number={'2'} />
                        </div>
                        <div className='w-max h-[5%] flex items-center'>
                            <B4 text={'D'} number={'2'} />
                        </div>
                    </div>
                </div>
                <div className='relative '>
                    <div className='absolute left-[12px] w-[2px] h-full bg-white'></div>
                    <div className='relative w-full h-full'>
                        <div className='w-max h-[8.2%] flex items-center'>
                            <E4 text={'Q'} number={'1'} />
                        </div>
                        <div className='w-max h-[11%] flex items-center'>
                            <F4 text={'W'} number={'1'} />
                        </div>
                        <div className='w-max h-[10%] flex items-center'>
                            <Fb4 text={'E'} number={'1'} />
                        </div>
                        <div className='w-max h-[9%] flex items-center'>
                            <G4 text={'R'} number={'1'} />
                        </div>
                        <div className='w-max h-[9%] flex items-center'>
                            <Gb4 text={'T'} number={'1'} />
                        </div>
                        <div className='w-max h-[8%] flex items-center'>
                            <A4 text={'Y'} number={'1'} />
                        </div>
                        <div className='w-max h-[8%] flex items-center'>
                            <Ab4 text={'U'} number={'1'} />
                        </div>
                        <div className='w-max h-[7%] flex items-center'>
                            <B4 text={'I'} number={'1'} />
                        </div>
                        <div className='w-max h-[7%] flex items-center'>
                            <C5 text={'O'} number={'1'} />
                        </div>
                        <div className='w-max h-[6.5%] flex items-center'>
                            <Cb5 text={'P'} number={'1'} />
                        </div>
                        <div className='w-max h-[6%] flex items-center'>
                            <D5 text={'A'} number={'1'} />
                        </div>
                        <div className='w-max h-[5%] flex items-center'>
                            <Db5 text={'S'} number={'1'} />
                        </div>
                        <div className='w-max h-[5%] flex items-center'>
                            <E5 text={'D'} number={'1'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const ChordsGuitar = () => {
    const mus1 = useRef()
    const mus2 = useRef()
    const mus3 = useRef()
    const mus4 = useRef()
    const mus5 = useRef()
    const mus6 = useRef()
    const down = useRef()
    const up = useRef()
    const array = [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]
    ]
    const [music2dArray, setMusic2dArray] = useState(array)
    const DownStream = () => {
        const time0 = setTimeout(() => { if (mus1.current) mus1.current.play() }, 0)
        const time1 = setTimeout(() => { if (mus2.current) mus2.current.play() }, 50)
        const time2 = setTimeout(() => { if (mus3.current) mus3.current.play() }, 100)
        const time3 = setTimeout(() => { if (mus4.current) mus4.current.play() }, 150)
        const time4 = setTimeout(() => { if (mus5.current) mus5.current.play() }, 200)
        const time5 = setTimeout(() => { if (mus6.current) mus6.current.play() }, 250)
    }
    const UpStream = () => {
        const time0 = setTimeout(() => { if (mus6.current) mus6.current.play() }, 0)
        const time1 = setTimeout(() => { if (mus5.current) mus5.current.play() }, 50)
        const time2 = setTimeout(() => { if (mus4.current) mus4.current.play() }, 100)
        const time3 = setTimeout(() => { if (mus3.current) mus3.current.play() }, 150)
        const time4 = setTimeout(() => { if (mus2.current) mus2.current.play() }, 200)
        const time5 = setTimeout(() => { if (mus1.current) mus1.current.play() }, 250)
    }
    const keyHandle = (event) => {
        if (event.key === 'D' || event.key === 'd') {
            DownStream()
        } else if (event.key === 'U' || event.key === 'u') {
            UpStream()
        }
    }
    const keyHandleStop = (event) => {
        if (event.key === 'D' || event.key === 'd' || event.key === 'U' || event.key === 'u') {
            if (mus1.current) {
                mus1.current.pause()
                mus1.currentTime = 0
            }
            if (mus2.current) {
                mus2.current.pause()
                mus2.currentTime = 0
            }
            if (mus3.current) {
                mus3.current.pause()
                mus3.currentTime = 0
            }
            if (mus4.current) {
                mus4.current.pause()
                mus4.currentTime = 0
            }
            if (mus5.current) {
                mus5.current.pause()
                mus5.currentTime = 0
            }
            if (mus6.current) {
                mus6.current.pause()
                mus6.currentTime = 0
            }
        }
    }
    const Eplay = () => {
        const newArray = [
            [true, false, false, false, true, true],
            [false, false, false, true, false, false],
            [false, true, true, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false]
        ]
        setMusic2dArray(newArray)
        window.addEventListener('keydown', keyHandle)
        down.current.addEventListener('touchstart', keyHandle('d'))
        down.current.addEventListener('touchstart', keyHandleStop('d'))
        window.addEventListener('keyup', keyHandleStop)
        up.current.addEventListener('touchstart', keyHandle('u'))
        up.current.addEventListener('touchstart', keyHandleStop('u'))
    }
    const Estop = () => {
        setMusic2dArray(array)
    }
    const Emplay = () => {
        const newArray = [
            [true, false, false, true, true, true],
            [false, false, false, false, false, false],
            [false, true, true, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false]
        ]
        setMusic2dArray(newArray)
        window.addEventListener('keydown', keyHandle)
        down.current.addEventListener('touchstart', keyHandle('d'))
        down.current.addEventListener('touchstart', keyHandleStop('d'))
        window.addEventListener('keyup', keyHandleStop)
        up.current.addEventListener('touchstart', keyHandle('u'))
        up.current.addEventListener('touchstart', keyHandleStop('u'))
    }
    const Emstop = () => {
        setMusic2dArray(array)
    }
    const Aplay = () => {
        const newArray = [
            [false, true, false, false, false, true],
            [false, false, false, false, false, false],
            [false, false, true, true, true, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false]
        ]
        setMusic2dArray(newArray)
        window.addEventListener('keydown', keyHandle)
        down.current.addEventListener('touchstart', keyHandle('d'))
        down.current.addEventListener('touchstart', keyHandleStop('d'))
        window.addEventListener('keyup', keyHandleStop)
        up.current.addEventListener('touchstart', keyHandle('u'))
        up.current.addEventListener('touchstart', keyHandleStop('u'))
    }
    const Astop = () => {
        setMusic2dArray(array)
    }
    const Amplay = () => {
        const newArray = [
            [true, true, false, false, false, true],
            [false, false, false, false, true, false],
            [false, false, true, true, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false]
        ]
        setMusic2dArray(newArray)
        window.addEventListener('keydown', keyHandle)
        down.current.addEventListener('touchstart', keyHandle('d'))
        down.current.addEventListener('touchstart', keyHandleStop('d'))
        window.addEventListener('keyup', keyHandleStop)
        up.current.addEventListener('touchstart', keyHandle('u'))
        up.current.addEventListener('touchstart', keyHandleStop('u'))
    }
    const Amstop = () => {
        setMusic2dArray(array)
    }
    const Dplay = () => {
        const newArray = [
            [false, false, true, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, true, false, true],
            [false, false, false, false, true, false],
            [false, false, false, false, false, false]
        ]
        setMusic2dArray(newArray)
        window.addEventListener('keydown', keyHandle)
        down.current.addEventListener('touchstart', keyHandle('d'))
        down.current.addEventListener('touchstart', keyHandleStop('d'))
        window.addEventListener('keyup', keyHandleStop)
        up.current.addEventListener('touchstart', keyHandle('u'))
        up.current.addEventListener('touchstart', keyHandleStop('u'))
    }
    const Dstop = () => {
        setMusic2dArray(array)
    }
    const Dmplay = () => {
        const newArray = [
            [false, false, true, false, false, false],
            [false, false, false, false, false, true],
            [false, false, false, true, false, false],
            [false, false, false, false, true, false],
            [false, false, false, false, false, false]
        ]
        setMusic2dArray(newArray)
        window.addEventListener('keydown', keyHandle)
        down.current.addEventListener('touchstart', keyHandle('d'))
        down.current.addEventListener('touchstart', keyHandleStop('d'))
        window.addEventListener('keyup', keyHandleStop)
        up.current.addEventListener('touchstart', keyHandle('u'))
        up.current.addEventListener('touchstart', keyHandleStop('u'))
    }
    const Dmstop = () => {
        setMusic2dArray(array)
    }
    const Cplay = () => {
        const newArray = [
            [false, false, false, true, false, true],
            [false, false, false, false, true, false],
            [false, false, true, false, false, false],
            [false, true, false, false, false, false],
            [false, false, false, false, false, false]
        ]
        setMusic2dArray(newArray)
        window.addEventListener('keydown', keyHandle)
        down.current.addEventListener('touchstart', keyHandle('d'))
        down.current.addEventListener('touchstart', keyHandleStop('d'))
        window.addEventListener('keyup', keyHandleStop)
        up.current.addEventListener('touchstart', keyHandle('u'))
        up.current.addEventListener('touchstart', keyHandleStop('u'))
    }
    const Cstop = () => {
        setMusic2dArray(array)
    }
    const Gplay = () => {
        const newArray = [
            [false, false, true, true, true, false],
            [false, false, false, false, false, false],
            [false, true, false, false, false, false],
            [true, false, false, false, false, true],
            [false, false, false, false, false, false]
        ]
        setMusic2dArray(newArray)
        window.addEventListener('keydown', keyHandle)
        down.current.addEventListener('touchstart', keyHandle('d'))
        down.current.addEventListener('touchstart', keyHandleStop('d'))
        window.addEventListener('keyup', keyHandleStop)
        up.current.addEventListener('touchstart', keyHandle('u'))
        up.current.addEventListener('touchstart', keyHandleStop('u'))
    }
    const Gstop = () => {
        setMusic2dArray(array)
    }
    const E7play = () => {
        const newArray = [
            [true, false, true, false, true, true],
            [false, false, false, true, false, false],
            [false, true, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false]
        ]
        setMusic2dArray(newArray)
        window.addEventListener('keydown', keyHandle)
        down.current.addEventListener('touchstart', keyHandle('d'))
        down.current.addEventListener('touchstart', keyHandleStop('d'))
        window.addEventListener('keyup', keyHandleStop)
        up.current.addEventListener('touchstart', keyHandle('u'))
        up.current.addEventListener('touchstart', keyHandleStop('u'))
    }
    const E7stop = () => {
        setMusic2dArray(array)
    }
    const D7play = () => {
        const newArray = [
            [false, false, true, false, false, false],
            [false, false, false, false, true, false],
            [false, false, false, true, false, true],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false]
        ]
        setMusic2dArray(newArray)
        window.addEventListener('keydown', keyHandle)
        down.current.addEventListener('touchstart', keyHandle('d'))
        down.current.addEventListener('touchstart', keyHandleStop('d'))
        window.addEventListener('keyup', keyHandleStop)
        up.current.addEventListener('touchstart', keyHandle('u'))
        up.current.addEventListener('touchstart', keyHandleStop('u'))
    }
    const D7stop = () => {
        setMusic2dArray(array)
    }
    const A7play = () => {
        const newArray = [
            [false, true, false, true, false, true],
            [false, false, false, false, false, false],
            [false, false, true, false, true, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false]
        ]
        setMusic2dArray(newArray)
        window.addEventListener('keydown', keyHandle)
        down.current.addEventListener('touchstart', keyHandle('d'))
        down.current.addEventListener('touchstart', keyHandleStop('d'))
        window.addEventListener('keyup', keyHandleStop)
        up.current.addEventListener('touchstart', keyHandle('u'))
        up.current.addEventListener('touchstart', keyHandleStop('u'))
    }
    const A7stop = () => {
        setMusic2dArray(array)
    }
    const C7play = () => {
        const newArray = [
            [false, false, false, false, false, true],
            [false, false, false, false, true, false],
            [false, false, true, false, false, false],
            [false, true, false, true, false, false],
            [false, false, false, false, false, false]
        ]
        setMusic2dArray(newArray)
        window.addEventListener('keydown', keyHandle)
        down.current.addEventListener('touchstart', keyHandle('d'))
        down.current.addEventListener('touchstart', keyHandleStop('d'))
        window.addEventListener('keyup', keyHandleStop)
        up.current.addEventListener('touchstart', keyHandle('u'))
        up.current.addEventListener('touchstart', keyHandleStop('u'))
    }
    const C7stop = () => {
        setMusic2dArray(array)
    }
    return (
        <div className='relative top-14 md:top-0 w-max mx-auto'>
            <div className='relative w-[260px] h-[357px]'>
                <div className=' w-full text-2xl px-4 text-white bg-gradient-to-br from-orange-800 via-amber-600 to-orange-800 grid grid-cols-6 border-2 border-amber-800 rounded-2xl'>
                    <h1 className='mx-auto'>E</h1>
                    <h1 className='mx-auto'>A</h1>
                    <h1 className='mx-auto'>D</h1>
                    <h1 className='mx-auto'>G</h1>
                    <h1 className='mx-auto'>B</h1>
                    <h1 className='mx-auto'>E</h1>
                </div>
                <div className='w-[88%] h-[320px] bg-gradient-to-b from-orange-700 via-amber-800 to-orange-950 mx-auto border-x-4 border-amber-950'>
                    <div className='w-full h-[28%] border-b-2 border-white'></div>
                    <div className='w-full h-[26%] border-b-2 border-white'></div>
                    <div className='w-full h-[24%] border-b-2 flex items-center justify-center border-white'>
                        <div className='size-7 bg-gray-300 rounded-full'></div>
                    </div>
                    <div className='w-full h-[22%] border-b-2 border-white'></div>
                </div>
                <div className='absolute bottom-1 left-[19px] w-[88%] h-[320px] grid grid-cols-6'>
                    <div className='relative'>
                        <div className='w-[6px] h-full mx-auto bg-white'></div>
                        <div className='absolute top-0 w-full h-full'>
                            {(music2dArray[0][0]) && <audio ref={mus1} src='/guitar/E2.wav' />}
                            <div className='w-full h-[28%] flex items-center justify-center'>
                                {(music2dArray[1][0]) && <CordMusic playAudio={mus1} tab='F2' />}
                            </div>
                            <div className='w-full h-[26%] flex items-center justify-center'>
                                {(music2dArray[2][0]) && <CordMusic playAudio={mus1} tab='Fb2' />}
                            </div>
                            <div className='w-full h-[24%] flex items-center justify-center'>
                                {(music2dArray[3][0]) && <CordMusic playAudio={mus1} tab='G2' />}
                            </div>
                            <div className='w-full h-[22%] flex items-center justify-center'>
                                {(music2dArray[4][0]) && <CordMusic playAudio={mus1} tab='Gb2' />}
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='w-[5px] h-full mx-auto bg-white'></div>
                        <div className='absolute top-0 w-full h-full'>
                            {(music2dArray[0][1]) && <audio ref={mus2} src='/guitar/A2.wav' />}
                            <div className='w-full h-[28%] flex items-center justify-center'>
                                {(music2dArray[1][1]) && <CordMusic playAudio={mus2} tab='Ab2' />}
                            </div>
                            <div className='w-full h-[26%] flex items-center justify-center'>
                                {(music2dArray[2][1]) && <CordMusic playAudio={mus2} tab='B2' />}
                            </div>
                            <div className='w-full h-[24%] flex items-center justify-center'>
                                {(music2dArray[3][1]) && <CordMusic playAudio={mus2} tab='C3' />}
                            </div>
                            <div className='w-full h-[22%] flex items-center justify-center'>
                                {(music2dArray[4][1]) && <CordMusic playAudio={mus2} tab='Cb3' />}
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='w-[4px] h-full mx-auto bg-white'></div>
                        <div className='absolute left-0 top-0 w-full h-full'>
                            {(music2dArray[0][2]) && <audio ref={mus3} src='/guitar/D3.wav' />}
                            <div className='w-full h-[28%] flex items-center justify-center'>
                                {(music2dArray[1][2]) && <CordMusic playAudio={mus3} tab='Db3' />}
                            </div>
                            <div className='w-full h-[26%] flex items-center justify-center'>
                                {(music2dArray[2][2]) && <CordMusic playAudio={mus3} tab='E3' />}
                            </div>
                            <div className='w-full h-[24%] flex items-center justify-center'>
                                {(music2dArray[3][2]) && <CordMusic playAudio={mus3} tab='F3' />}
                            </div>
                            <div className='w-full h-[22%] flex items-center justify-center'>
                                {(music2dArray[4][2]) && <CordMusic playAudio={mus3} tab='Fb3' />}
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='w-[3px] h-full mx-auto bg-white'></div>
                        <div className='absolute left-0 top-0 w-full h-full'>
                            {(music2dArray[0][3]) && <audio ref={mus4} src='/guitar/G3.wav' />}
                            <div className='w-full h-[28%] flex items-center justify-center'>
                                {(music2dArray[1][3]) && <CordMusic playAudio={mus4} tab='Gb3' />}
                            </div>
                            <div className='w-full h-[26%] flex items-center justify-center'>
                                {(music2dArray[2][3]) && <CordMusic playAudio={mus4} tab='A3' />}
                            </div>
                            <div className='w-full h-[24%] flex items-center justify-center'>
                                {(music2dArray[3][3]) && <CordMusic playAudio={mus4} tab='Ab3' />}
                            </div>
                            <div className='w-full h-[22%] flex items-center justify-center'>
                                {(music2dArray[4][3]) && <CordMusic playAudio={mus4} tab='B3' />}
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='w-[2px] h-full mx-auto bg-white'></div>
                        <div className='absolute left-0 top-0 w-full h-full'>
                            {(music2dArray[0][4]) && <audio ref={mus5} src='/guitar/B3.wav' />}
                            <div className='w-full h-[28%] flex items-center justify-center'>
                                {(music2dArray[1][4]) && <CordMusic playAudio={mus5} tab='C4' />}
                            </div>
                            <div className='w-full h-[26%] flex items-center justify-center'>
                                {(music2dArray[2][4]) && <CordMusic playAudio={mus5} tab='Cb4' />}
                            </div>
                            <div className='w-full h-[24%] flex items-center justify-center'>
                                {(music2dArray[3][4]) && <CordMusic playAudio={mus5} tab='D4' />}
                            </div>
                            <div className='w-full h-[22%] flex items-center justify-center'>
                                {(music2dArray[4][4]) && <CordMusic playAudio={mus5} tab='Db4' />}
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='w-[1px] h-full mx-auto bg-white'></div>
                        <div className='absolute left-0 top-0 w-full h-full'>
                            {(music2dArray[0][5]) && <audio ref={mus6} src='/guitar/E4.wav' />}
                            <div className='w-full h-[28%] flex items-center justify-center'>
                                {(music2dArray[1][5]) && <CordMusic playAudio={mus6} tab='F4' />}
                            </div>
                            <div className='w-full h-[26%] flex items-center justify-center'>
                                {(music2dArray[2][5]) && <CordMusic playAudio={mus6} tab='Fb4' />}
                            </div>
                            <div className='w-full h-[24%] flex items-center justify-center'>
                                {(music2dArray[3][5]) && <CordMusic playAudio={mus6} tab='G4' />}
                            </div>
                            <div className='w-full h-[22%] flex items-center justify-center'>
                                {(music2dArray[4][5]) && <CordMusic playAudio={mus6} tab='Gb4' />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 grid grid-cols-4 gap-2'>
                <button onMouseDown={Eplay} onMouseUp={Estop} onMouseLeave={Estop} onTouchStart={Eplay} onTouchEnd={Estop} className='cursor-pointer size-12 mx-auto font-semibold text-2xl text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 hover:border-0'>E</button>
                <button onMouseDown={Emplay} onMouseUp={Emstop} onMouseLeave={Emstop} onTouchStart={Emplay} onTouchEnd={Emstop} className='cursor-pointer size-12 mx-auto font-semibold text-2xl text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 hover:border-0'>Em</button>
                <button onMouseDown={Aplay} onMouseUp={Astop} onMouseLeave={Astop} onTouchStart={Aplay} onTouchEnd={Astop} className='cursor-pointer size-12 mx-auto font-semibold text-2xl text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 hover:border-0'>A</button>
                <button onMouseDown={Amplay} onMouseUp={Amstop} onMouseLeave={Amstop} onTouchStart={Amplay} onTouchEnd={Amstop} className='cursor-pointer size-12 mx-auto font-semibold text-2xl text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 hover:border-0'>Am</button>
                <button onMouseDown={Dplay} onMouseUp={Dstop} onMouseLeave={Dstop} onTouchStart={Dplay} onTouchEnd={Dstop} className='cursor-pointer size-12 mx-auto font-semibold text-2xl text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 hover:border-0'>D</button>
                <button onMouseDown={Dmplay} onMouseUp={Dmstop} onMouseLeave={Dmstop} onTouchStart={Dmplay} onTouchEnd={Dmstop} className='cursor-pointer size-12 mx-auto font-semibold text-2xl text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 hover:border-0'>Dm</button>
                <button onMouseDown={Cplay} onMouseUp={Cstop} onMouseLeave={Cstop} onTouchStart={Cplay} onTouchEnd={Cstop} className='cursor-pointer size-12 mx-auto font-semibold text-2xl text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 hover:border-0'>C</button>
                <button onMouseDown={Gplay} onMouseUp={Gstop} onMouseLeave={Gstop} onTouchStart={Gplay} onTouchEnd={Gstop} className='cursor-pointer size-12 mx-auto font-semibold text-2xl text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 hover:border-0'>G</button>
                <button onMouseDown={E7play} onMouseUp={E7stop} onMouseLeave={E7stop} onTouchStart={E7play} onTouchEnd={E7stop} className='cursor-pointer size-12 mx-auto font-semibold text-2xl text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 hover:border-0'>E7</button>
                <button onMouseDown={D7play} onMouseUp={D7stop} onMouseLeave={D7stop} onTouchStart={D7play} onTouchEnd={D7stop} className='cursor-pointer size-12 mx-auto font-semibold text-2xl text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 hover:border-0'>D7</button>
                <button onMouseDown={A7play} onMouseUp={A7stop} onMouseLeave={A7stop} onTouchStart={A7play} onTouchEnd={A7stop} className='cursor-pointer size-12 mx-auto font-semibold text-2xl text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 hover:border-0'>A7</button>
                <button onMouseDown={C7play} onMouseUp={C7stop} onMouseLeave={C7stop} onTouchStart={C7play} onTouchEnd={C7stop} className='cursor-pointer size-12 mx-auto font-semibold text-2xl text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 hover:border-0'>C7</button>
                <button ref={down} className='cursor-pointer w-full mx-auto font-semibold text-lg text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 col-span-2'>
                    Down Stroke
                    <hr></hr>
                    <p>Press &apos;D&apos; key</p>
                </button>
                <button ref={up} className='cursor-pointer w-full mx-auto font-semibold text-lg text-white text-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-lg border-2 col-span-2'>
                    Up Stroke
                    <hr></hr>
                    <p>Press &apos;U&apos; key</p>
                </button>
            </div>
        </div>
    )
}
const CordMusic = (props) => {
    return (
        <div className='size-7 bg-white rounded-full border-4'>
            <audio ref={props.playAudio} src={`/guitar/${props.tab}.wav`} />
        </div>
    )
}
const A2 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/A2.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Ab2 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Ab2.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const B2 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/B2.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const E2 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/E2.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const F2 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/F2.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Fb2 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Fb2.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const G2 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/G2.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Gb2 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Gb2.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const A3 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/A3.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Ab3 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Ab3.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const B3 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/B3.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const C3 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/C3.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Cb3 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Cb3.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const D3 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/D3.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Db3 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Db3.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const E3 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/E3.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const F3 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/F3.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Fb3 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Fb3.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const G3 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/G3.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Gb3 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Gb3.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const A4 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/A4.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Ab4 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Ab4.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const B4 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/B4.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const C4 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/C4.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Cb4 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Cb4.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const D4 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/D4.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Db4 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Db4.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const E4 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/E4.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const F4 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/F4.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Fb4 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Fb4.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const G4 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/G4.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Gb4 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Gb4.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const C5 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/C5.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Cb5 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Cb5.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const D5 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/D5.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const Db5 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/Db5.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
const E5 = (props) => {
    const [click, setClick] = useState(false)
    const [keyPress, setKeypress] = useState({
        alphabate: false,
        number: false
    })
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event
            if (key === props.text || key === props.text.toLowerCase()) {
                setKeypress(prevState => ({
                    ...prevState,
                    alphabate: true
                }))
            }
            if (key === props.number) {
                setKeypress(prevState => ({
                    ...prevState,
                    number: true
                }))
            }
            if (keyPress.alphabate && keyPress.number) {
                play()
            }
            const time = setTimeout(() => {
                setKeypress({
                    alphabate: false,
                    number: false
                })
            }, 300)
        }
        window.addEventListener('keydown', handleKeyDown)
    })
    const play = () => {
        music.current.play()
        setClick(true)
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }, 850)
    }
    return (
        <button className={`cursor-pointer w-full h-full flex items-center justify-center`} onClick={play}>
            <audio ref={music} src='/guitar/E5.wav' />
            <h1 className={`size-7 text-[15px] ${(click) ? 'text-white bg-black' : 'bg-white text-black'} font-bold flex items-center justify-center rounded-full border-2`}>{props.text}{props.number}</h1>
        </button>
    )
}
