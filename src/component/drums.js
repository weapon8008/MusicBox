'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Drums() {
    const [keys, setkeys] = useState()
    const background = useRef()
    const instrument = useRef()
    useGSAP(() => {
        gsap.from(background.current, {
            y: 0 - window.innerHeight,
            duration: 0.5
        })
        gsap.from(instrument.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.7
        })
    })
    const changeKey = (e) => {
        setkeys(e)
        const time = setTimeout(() => {
            setkeys(null)
        }, 800)
    }

    return (
        <div ref={background} className="h-screen bg-drums flex items-center justify-center">
            <div ref={instrument} className='rotate-90 md:rotate-0 size-max scale-70 sm:scale-100'>
                <div className='relative w-[800px] sm:w-[700px] h-[520px] p-2 bg-[#ffffff4f] border-4 border-[#ffffff] rounded-4xl'>
                    <div className='absolute top-[170px] w-36 col-start-1 row-start-2'>
                        <HitHat value={changeKey} />
                    </div>
                    <div className='absolute top-[25px] left-[130px] w-44 col-start-2'>
                        <TomDrum value={changeKey} />
                    </div>
                    <div className='absolute left-[180px] bottom-0 w-72 col-start-2 row-start-2 col-span-2 row-span-2'>
                        <BassDrum value={changeKey} />
                    </div>
                    <div className='absolute top-[75px] left-[350px] w-36 row-start-2 col-start-4'>
                        <SnareDrum value={changeKey} />
                    </div>
                    <div className='absolute right-2 w-48 col-start-4'>
                        <Cymbals value={changeKey} />
                    </div>
                    <div className='absolute bottom-5 left-5 size-28 p-2 bg-[#000000] border-4 border-white rounded-3xl'>
                        <h1 className='text-white text-center text-sm font-bold'>Pressed Key</h1>
                        {(keys && <h1 className='size-10 mt-4 mx-auto bg-white font-sans font-bold text-2xl text-black flex items-center justify-center rounded-md'>{keys}</h1>)}
                    </div>
                    <div className='absolute right-0 bottom-0 w-[190px] p-5 bg-[#000000aa] text-white font-serif rounded-4xl'>
                        <h1 className='font-bold underline'>Keys:</h1>
                        <div className='flex'>
                            <h1 className='size-5 mr-1 bg-white font-sans font-bold text-center text-black flex items-center justify-center rounded-sm'>S</h1>
                            <p>Hit-Hat Crash</p>
                        </div>
                        <div className='flex'>
                            <h1 className='size-5 mr-1 bg-white font-sans font-bold text-center text-black flex items-center justify-center rounded-sm'>D</h1>
                            <p>Hit-Hat Thrush</p>
                        </div>
                        <div className='flex'>
                            <h1 className='size-5 mr-1 bg-white font-sans font-bold text-center text-black flex items-center justify-center rounded-sm'>R</h1>
                            <p>&</p>
                            <h1 className='size-5 mx-1 bg-white font-sans font-bold text-center text-black flex items-center justify-center rounded-sm'>T</h1>
                            <p>Tom Drum</p>
                        </div>
                        <div className='flex'>
                            <h1 className='size-5 mr-1 bg-white font-sans font-bold text-center text-black flex items-center justify-center rounded-sm'>J</h1>
                            <p>Snare Drum 1</p>
                        </div>
                        <div className='flex'>
                            <h1 className='size-5 mr-1 bg-white font-sans font-bold text-center text-black flex items-center justify-center rounded-sm'>K</h1>
                            <p>Snare Drum 2</p>
                        </div>
                        <div className='flex'>
                            <h1 className='size-5 mr-1 bg-white font-sans font-bold text-center text-black flex items-center justify-center rounded-sm'>O</h1>
                            <p>Cymbal</p>
                        </div>
                        <div className='flex'>
                            <h1 className='size-5 mr-1 bg-white font-sans font-bold text-center text-black flex items-center justify-center rounded-sm'>B</h1>
                            <p>Bass Drum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const BassDrum = (props) => {
    const music = useRef()
    useEffect(() => {
        const handlePress = (event) => {
            if (event.key === 'b' || event.key === 'B') {
                play()
            }
        }
        window.addEventListener('keydown', handlePress)
    })
    const play = () => {
        () => {
            music.current.pause()
        }
        music.current.currentTime = 0
        music.current.play()
        props.value('B')
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
        }, 850)
    }
    return (
        <div className='w-full'>
            <audio ref={music} src='./drums/beats/bass-drum.mp3' />
            <button onClick={play} className='duration-100 cursor-pointer hover:scale-105 w-full'>
                <Image className='w-full' width={100} height={100} src={'/drums/set/bass-drum.png'} alt='bass drum' />
            </button>
            <button onClick={play} className='duration-100 cursor-pointer size-12 ml-32 bg-white hover:bg-black hover:text-white border-4 rounded-xl'>
                <h1 className='font-bold text-center text-4xl'>B</h1>
            </button>
        </div>
    )
}
const SnareDrum = (props) => {
    const music1 = useRef()
    const music2 = useRef()
    useEffect(() => {
        const handlePress = (event) => {
            if (event.key === 'j' || event.key === 'J') {
                play1()
            } else if (event.key === 'k' || event.key === 'K') {
                play2()
            }
        }
        window.addEventListener('keydown', handlePress)
    })
    const play1 = () => {
        () => {
            music1.current.pause()
        }
        music1.current.currentTime = 0
        music1.current.play()
        props.value('J')
        const time = setTimeout(() => {
            music1.current.pause()
            music1.current.currentTime = 0
        }, 350)
    }
    const play2 = () => {
        () => {
            music2.current.pause()
        }
        music2.current.currentTime = 0
        music2.current.play()
        props.value('K')
        const time = setTimeout(() => {
            music2.current.pause()
            music2.current.currentTime = 0
        }, 350)
    }
    return (
        <div className='w-full'>
            <audio ref={music1} src='./drums/beats/snare-drum-1.mp3' />
            <audio ref={music2} src='./drums/beats/snare-drum-2.mp3' />
            <div className='flex items-center justify-center'>
                <button onClick={play1} className='duration-100 cursor-pointer mr-1 size-12 bg-white hover:bg-black hover:text-white border-4 rounded-xl'>
                    <h1 className='font-bold text-center text-4xl'>J</h1>
                </button>
                <button onClick={play2} className='duration-100 cursor-pointer size-12 bg-white hover:bg-black hover:text-white border-4 rounded-xl'>
                    <h1 className='font-bold text-center text-4xl'>K</h1>
                </button>
            </div>
            <button onClick={play1} className='duration-100 cursor-pointer hover:scale-105 w-full'>
                <Image className='w-full' width={100} height={100} src={'/drums/set/snare-drum.png'} alt='bass drum' />
            </button>
        </div>
    )
}
const HitHat = (props) => {
    const music1 = useRef()
    const music2 = useRef()
    useEffect(() => {
        const handlePress = (event) => {
            if (event.key === 's' || event.key === 'S') {
                play1()
            } else if (event.key === 'd' || event.key === 'D') {
                play2()
            }
        }
        window.addEventListener('keydown', handlePress)
    })
    const play1 = () => {
        () => {
            music1.current.pause()
        }
        music1.current.currentTime = 0
        music1.current.play()
        props.value('S')
        const time = setTimeout(() => {
            music1.current.pause()
            music1.current.currentTime = 0
        }, 400)
    }
    const play2 = () => {
        () => {
            music2.current.pause()
        }
        music2.current.currentTime = 0
        music2.current.play()
        props.value('D')
        const time = setTimeout(() => {
            music2.current.pause()
            music2.current.currentTime = 0
        }, 650)
    }
    return (
        <div className='w-full'>
            <audio ref={music1} src='./drums/beats/hit-hat-1.mp3' />
            <audio ref={music2} src='./drums/beats/hit-hat-2.mp3' />
            <button onClick={play1} className='duration-100 cursor-pointer hover:scale-105 w-full'>
                <Image className='w-full' width={100} height={100} src={'/drums/set/hit-hat.png'} alt='bass drum' />
            </button>
            <div className='flex items-center justify-center'>
                <button onClick={play1} className='duration-100 cursor-pointer mr-1 size-12 bg-white hover:bg-black hover:text-white border-4 rounded-xl'>
                    <h1 className='font-bold text-center text-4xl'>S</h1>
                </button>
                <button onClick={play2} className='duration-100 cursor-pointer size-12 bg-white hover:bg-black hover:text-white border-4 rounded-xl'>
                    <h1 className='font-bold text-center text-4xl'>D</h1>
                </button>
            </div>
        </div>
    )
}
const TomDrum = (props) => {
    const music1 = useRef()
    const music2 = useRef()
    useEffect(() => {
        const handlePress = (event) => {
            if (event.key === 'r' || event.key === 'R') {
                play1()
            } else if (event.key === 't' || event.key === 't') {
                play2()
            }
        }
        window.addEventListener('keydown', handlePress)
    })
    const play1 = () => {
        () => {
            music1.current.pause()
        }
        music1.current.currentTime = 0
        music1.current.play()
        props.value('R')
        const time = setTimeout(() => {
            music1.current.pause()
            music1.current.currentTime = 0
        }, 500)
    }
    const play2 = () => {
        () => {
            music2.current.pause()
        }
        music2.current.currentTime = 0
        music2.current.play()
        props.value('T')
        const time = setTimeout(() => {
            music2.current.pause()
            music2.current.currentTime = 0
        }, 500)
    }
    return (
        <div className='w-full'>
            <audio ref={music1} src='./drums/beats/tom-drum.mp3' />
            <audio ref={music2} src='./drums/beats/tom-drum.mp3' />
            <div className='flex items-center justify-center'>
                <button onClick={play1} className='duration-100 cursor-pointer ml-10 mr-2 size-12 bg-white hover:bg-black hover:text-white border-4 rounded-xl'>
                    <h1 className='font-bold text-center text-4xl'>R</h1>
                </button>
                <button onClick={play2} className='duration-100 cursor-pointer size-12 bg-white hover:bg-black hover:text-white border-4 rounded-xl'>
                    <h1 className='font-bold text-center text-4xl'>T</h1>
                </button>
            </div>
            <button onClick={play1} className='duration-100 cursor-pointer hover:scale-105 w-full'>
                <Image className='w-full' width={100} height={100} src={'/drums/set/tom-drum.png'} alt='bass drum' />
            </button>
        </div>
    )
}
const Cymbals = (props) => {
    const music = useRef()
    useEffect(() => {
        const handlePress = (event) => {
            if (event.key === 'o' || event.key === 'O') {
                play()
            }
        }
        window.addEventListener('keydown', handlePress)
    })
    const play = () => {
        () => {
            music.current.pause()
        }
        music.current.currentTime = 0
        music.current.play()
        props.value('O')
        const time = setTimeout(() => {
            music.current.pause()
            music.current.currentTime = 0
        }, 1200)
    }
    return (
        <div className='w-full'>
            <audio ref={music} src='./drums/beats/cymbal.mp3' />
            <button onClick={play} className='duration-100 cursor-pointer size-12 ml-16 bg-white hover:bg-black hover:text-white border-4 rounded-xl'>
                <h1 className='font-bold text-center text-4xl'>O</h1>
            </button>
            <button onClick={play} className='duration-100 cursor-pointer hover:scale-105 w-full'>
                <Image className='w-full' width={100} height={100} src={'/drums/set/cymbal.png'} alt='cymbal' />
            </button>
        </div>
    )
}