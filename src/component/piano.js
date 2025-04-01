'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react'
export default function Piano() {
    const background = useRef()
    const instrument = useRef()
    const details = useRef()
    useGSAP(() => {
        gsap.from(background.current, {
            y: 0 - window.innerHeight,
            duration: 0.5
        })
        gsap.from(instrument.current, {
            y: window.innerHeight,
            duration: 1,
            delay: 0.7
        })
        gsap.from(details.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.7
        })
    })
    return (
        <div ref={background} className="h-screen bg-piano flex items-center justify-center overflow-hidden">
            <div ref={instrument} className='rotate-90 md:rotate-0 size-max pt-10 px-2 pb-3 bg-gradient-to-r from-orange-900 via-amber-700 to-orange-900 border-y-4 border-amber-950 shadow-[0px_15px_20px_#000000]'>
                <div className='relative w-[700px] h-[200px] flex'>
                    <div className='w-[6.66%]'><F2 /></div>
                    <div className='w-[6.66%]'><G2 /></div>
                    <div className='absolute top-0 left-[82px] w-[3%] h-[130px]'><Gb2 /></div>
                    <div className='w-[6.66%]'><A3 /></div>
                    <div className='absolute top-0 left-[128px] w-[3%] h-[130px]'><Ab3 /></div>
                    <div className='w-[6.66%]'><B3 /></div>
                    <div className='absolute top-0 left-[175px] w-[3%] h-[130px]'><Bb3 /></div>
                    <div className='w-[6.66%]'><C3 /></div>
                    <div className='w-[6.66%]'><D3 /></div>
                    <div className='absolute top-0 left-[268px] w-[3%] h-[130px]'><Db3 /></div>
                    <div className='w-[6.66%]'><E3 /></div>
                    <div className='absolute top-0 left-[313px] w-[3%] h-[130px]'><Eb3 /></div>
                    <div className='w-[6.66%]'><F3 /></div>
                    <div className='w-[6.66%]'><G3 /></div>
                    <div className='absolute top-0 left-[410px] w-[3%] h-[130px]'><Gb3 /></div>
                    <div className='w-[6.66%]'><A4 /></div>
                    <div className='absolute top-0 left-[456px] w-[3%] h-[130px]'><Ab4 /></div>
                    <div className='w-[6.66%]'><B4 /></div>
                    <div className='absolute top-0 left-[502px] w-[3%] h-[130px]'><Bb4 /></div>
                    <div className='w-[6.66%]'><C4 /></div>
                    <div className='w-[6.66%]'><D4 /></div>
                    <div className='absolute top-0 left-[596px] w-[3%] h-[130px]'><Db4 /></div>
                    <div className='w-[6.66%]'><E4 /></div>
                    <div className='absolute top-0 left-[642px] w-[3%] h-[130px]'><Eb4 /></div>
                    <div className='w-[6.66%]'><F4 /></div>
                </div>
            </div>
            <div ref={details} className='absolute bottom-0 left-0 w-1/3 bg-[#000000aa] text-white border rounded-lg'>
                <h1 className='underline text-[16px]'>How to play</h1>
                <h1>Press the desired keys from the key-board / click the piano keys</h1>
            </div>
        </div>
    )
}
const F2 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'q' || event.key === 'Q') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'q' || event.key === 'Q') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/F2.mp3' />
            <h1 className='text-[25px] font-bold'>Q</h1>
        </button>
    )
}
const G2 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'w' || event.key === 'W') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'w' || event.key === 'W') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/G2.mp3' />
            <h1 className='text-[25px] font-bold'>W</h1>
        </button>
    )
}
const Gb2 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '1') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === '1') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#222222]' : 'bg-[#000000]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/Gb2.mp3' />
            <h1 className='text-[20px] text-white font-bold'>1</h1>
        </button>
    )
}
const A3 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'e' || event.key === 'E') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'e' || event.key === 'E') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/A3.mp3' />
            <h1 className='text-[25px] font-bold'>E</h1>
        </button>
    )
}
const Ab3 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '2') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === '2') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#222222]' : 'bg-[#000000]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/Ab3.mp3' />
            <h1 className='text-[20px] text-white font-bold'>2</h1>
        </button>
    )
}
const B3 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'r' || event.key === 'R') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'r' || event.key === 'R') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/B3.mp3' />
            <h1 className='text-[25px] font-bold'>R</h1>
        </button>
    )
}
const Bb3 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '3') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === '3') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#222222]' : 'bg-[#000000]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/Bb3.mp3' />
            <h1 className='text-[20px] text-white font-bold'>3</h1>
        </button>
    )
}
const C3 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 't' || event.key === 'T') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 't' || event.key === 'T') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/C3.mp3' />
            <h1 className='text-[25px] font-bold'>T</h1>
        </button>
    )
}
const D3 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'y' || event.key === 'Y') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'y' || event.key === 'Y') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/D3.mp3' />
            <h1 className='text-[25px] font-bold'>Y</h1>
        </button>
    )
}
const Db3 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '4') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === '4') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#222222]' : 'bg-[#000000]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/Db3.mp3' />
            <h1 className='text-[20px] text-white font-bold'>4</h1>
        </button>
    )
}
const E3 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'u' || event.key === 'U') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'u' || event.key === 'U') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/E3.mp3' />
            <h1 className='text-[25px] font-bold'>U</h1>
        </button>
    )
}
const Eb3 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '5') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === '5') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#222222]' : 'bg-[#000000]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/Eb3.mp3' />
            <h1 className='text-[20px] text-white font-bold'>5</h1>
        </button>
    )
}
const F3 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'i' || event.key === 'I') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'i' || event.key === 'I') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/F3.mp3' />
            <h1 className='text-[25px] font-bold'>I</h1>
        </button>
    )
}
const G3 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'o' || event.key === 'O') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'o' || event.key === 'O') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/G3.mp3' />
            <h1 className='text-[25px] font-bold'>O</h1>
        </button>
    )
}
const Gb3 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '6') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === '6') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#222222]' : 'bg-[#000000]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/Gb3.mp3' />
            <h1 className='text-[20px] text-white font-bold'>6</h1>
        </button>
    )
}
const A4 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'p' || event.key === 'P') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'p' || event.key === 'P') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/A4.mp3' />
            <h1 className='text-[25px] font-bold'>P</h1>
        </button>
    )
}
const Ab4 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '7') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === '7') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#222222]' : 'bg-[#000000]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/Ab4.mp3' />
            <h1 className='text-[20px] text-white font-bold'>7</h1>
        </button>
    )
}
const B4 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'a' || event.key === 'A') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'a' || event.key === 'A') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/B4.mp3' />
            <h1 className='text-[25px] font-bold'>A</h1>
        </button>
    )
}
const Bb4 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '8') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === '8') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#222222]' : 'bg-[#000000]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/Bb4.mp3' />
            <h1 className='text-[20px] text-white font-bold'>8</h1>
        </button>
    )
}
const C4 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 's' || event.key === 'S') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 's' || event.key === 'S') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/C4.mp3' />
            <h1 className='text-[25px] font-bold'>S</h1>
        </button>
    )
}
const D4 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'd' || event.key === 'D') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'd' || event.key === 'D') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/D4.mp3' />
            <h1 className='text-[25px] font-bold'>D</h1>
        </button>
    )
}
const Db4 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '9') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === '9') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#222222]' : 'bg-[#000000]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/Db4.mp3' />
            <h1 className='text-[20px] text-white font-bold'>9</h1>
        </button>
    )
}
const E4 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'f' || event.key === 'F') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'f' || event.key === 'F') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/E4.mp3' />
            <h1 className='text-[25px] font-bold'>F</h1>
        </button>
    )
}
const Eb4 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '0') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === '0') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#222222]' : 'bg-[#000000]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/Eb4.mp3' />
            <h1 className='text-[20px] text-white font-bold'>0</h1>
        </button>
    )
}
const F4 = () => {
    const [click, setClick] = useState(false)
    const music = useRef()
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'g' || event.key === 'G') {
                start()
            }
        }
        const handleKeyUp = (event) => {
            if (event.key === 'g' || event.key === 'G') {
                stop()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })
    const start = () => {
        if (music.current) {
            music.current.play()
            setClick(true)
        }
    }
    const stop = () => {
        if (music.current) {
            music.current.pause()
            music.current.currentTime = 0
            setClick(false)
        }
    }
    return (
        <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop} onTouchStart={start} onTouchEnd={stop} className={`cursor-pointer size-full ${(!click) ? 'bg-[#E5E5E5]' : 'bg-[#c6c3c3]'} border-2 rounded-b-full ${(!click) ? 'shadow-[0px_6px_0px_#222222]' : 'shadow-[0px_2px_0px_#222222]'}`}>
            <audio ref={music} loop src='/piano/F4.mp3' />
            <h1 className='text-[25px] font-bold'>G</h1>
        </button>
    )
}
