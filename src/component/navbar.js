'use client'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Navbar(props) {
    const [show, setShow] = useState(false)
    const [audio, setAudio] = useState(null)

    const audioList = [<PianoAudio />, <GuitarAudio />, <DrumsAudio />]

    const box = useRef()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (box.current && !box.current.contains(event.target)) {
                gsap.to(box.current, {
                    x: 500,
                    duration: 0.5
                })
                const time = setTimeout(() => {
                    changeShow(!show)
                }, 500)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
    })

    const changeShow = () => {
        setShow(!show)
    }

    const playPiano = () => {
        gsap.to(box.current, {
            x: 500,
            duration: 0.5
        })
        setAudio(audioList[0])
        props.changebg(1)
        const time1 = setTimeout(() => {
            changeShow(!show)
        }, 500)
        const time2 = setTimeout(() => {
            setAudio(null)
        }, 1200)
    }

    const playGuitar = () => {
        gsap.to(box.current, {
            x: 500,
            duration: 0.5
        })
        setAudio(audioList[1])
        props.changebg(2)
        const time1 = setTimeout(() => {
            changeShow(!show)
        }, 500)
        const time2 = setTimeout(() => {
            setAudio(null)
        }, 1300)
    }

    const playDrums = () => {
        gsap.to(box.current, {
            x: 500,
            duration: 0.5
        })
        setAudio(audioList[2])
        props.changebg(3)
        const time1 = setTimeout(() => {
            changeShow(!show)
        }, 500)
        const time2 = setTimeout(() => {
            setAudio(null)
        }, 1300)
    }

    return (
        <>
            <nav className="fixed z-10 top-0 w-screen h-16 px-5 sm:px-12 grid grid-cols-2">
                <div className="cursor-default h-16 text-white text-[30px] font-serif flex items-center drop-shadow-[-2px_2px_0px_#000000]">
                    Mu&#119070;ic b&#119241;x
                </div>
                <div className="flex items-center justify-end">
                    <Button handleOnClick={changeShow} />
                </div>
            </nav>
            {(show) &&
                <div ref={box} className='fixed z-10 top-0 right-0 w-screen sm:w-[250px] h-screen'>
                    <Popup handleOnClick={changeShow} pianoButton={playPiano} guitarButton={playGuitar} drumsButton={playDrums} />
                </div>
            }
            {audio}
        </>
    )
}

const Popup = (props) => {
    const menu = useRef()
    useGSAP(() => {
        gsap.from(menu.current, {
            x: 500,
            duration: 0.5
        })
    })

    return (
        <div ref={menu} className='size-full p-5 bg-gradient-to-bl from-teal-500 via-indigo-600 to-purple-700 overflow-auto'>
            <button className='cursor-pointer relative size-12 ml-auto flex items-center' onClick={props.handleOnClick} >
                <span className='absolute w-full h-1 bg-white rotate-[45deg] rounded-2xl'></span>
                <span className='absolute w-full h-1 bg-white rotate-[-45deg] rounded-2xl'></span>
            </button>
            <div className='w-full h-max px-10 text-white text-[30px] font-serif'>
                <div className='duration-100 group mb-2 py-5 hover:border-y-2 border-white'>
                    <h1 className='cursor-default group-hover:text-black text-center group-hover:drop-shadow-[2px_2px_0px_#ffffff]'>Piano</h1>
                    <button className='cursor-pointer w-full' onClick={props.pianoButton}>
                        <Image className='w-auto h-[100px] mx-auto group-hover:drop-shadow-[0px_0px_5px_#000000]' quality={100} width={100} height={100} src={'/instruments/piano.png'} alt={'piano'} />
                    </button>
                </div>
                <div className='duration-100 group my-2 py-5 hover:border-y-2 border-white'>
                    <h1 className='cursor-default group-hover:text-black text-center group-hover:drop-shadow-[2px_2px_0px_#ffffff]'>Guitar</h1>
                    <button className='cursor-pointer w-full' onClick={props.guitarButton}>
                        <Image className='w-auto h-[120px] mx-auto group-hover:drop-shadow-[0px_0px_5px_#000000]' quality={100} width={100} height={100} src={'/instruments/guitar.png'} alt={'guitar'} />
                    </button>
                </div>
                <div className='duration-100 group mt-2 py-5 hover:border-y-2 border-white'>
                    <h1 className='cursor-default group-hover:text-black text-center group-hover:drop-shadow-[2px_2px_0px_#ffffff]'>Drum</h1>
                    <button className='cursor-pointer w-full' onClick={props.drumsButton}>
                        <Image className='w-auto h-[120px] mx-auto group-hover:drop-shadow-[0px_0px_5px_#000000]' quality={100} width={100} height={100} src={'/instruments/drums.png'} alt={'drums'} />
                    </button>
                </div>
            </div>
        </div>
    )
}

const PianoAudio = () => {
    return (
        <div>
            <audio autoPlay src='/instruments/piano.mp3' />
        </div>
    )
}

const GuitarAudio = () => {
    return (
        <div>
            <audio autoPlay src='/instruments/guitar.mp3' />
        </div>
    )
}

const DrumsAudio = () => {
    return (
        <div>
            <audio autoPlay src='/instruments/drums.mp3' />
        </div>
    )
}

const Button = (props) => {
    return (
        <StyledWrapper>
            <button className="setting-btn" onClick={props.handleOnClick}>
                <span className="bar bar1" />
                <span className="bar bar2" />
                <span className="bar bar1" />
            </button>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    .setting-btn {
      width: 45px;
      height: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;
      border-radius: 10px;
      cursor: pointer;
      border: 1px solid #ffffff;
      box-shadow: 0px 0px 0px 2px #ffffff;
    }
    .bar {
      width: 50%;
      height: 2px;
      background-color: rgb(229, 229, 229);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border-radius: 2px;
    }
    .bar::before {
      content: "";
      width: 2px;
      height: 2px;
      background-color: rgb(126, 117, 255);
      position: absolute;
      border-radius: 50%;
      border: 2px solid white;
      transition: all 0.3s;
      box-shadow: 0px 0px 5px white;
    }
    .bar1::before {
      transform: translateX(-4px);
    }
    .bar2::before {
      transform: translateX(4px);
    }
    .setting-btn:hover .bar1::before {
      transform: translateX(4px);
    }
    .setting-btn:hover .bar2::before {
      transform: translateX(-4px);
    }`