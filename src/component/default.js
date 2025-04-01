'use client'
import { useRef, useState } from "react"
export default function Default() {
    const [audio, setAudio] = useState(false)
    const music = useRef()
    const play = () => {
        if(!audio) {
            music.current.play()
        }else{
            music.current.pause()
        }
        setAudio(!audio)
    }
    return (
        <div className={`h-screen ${(audio) ? 'bg-video' : 'bg-static'}`}>
            <audio ref={music} loop src='/instruments/Mama Can You Hear Me.mp3' />
            <div className="absolute bottom-5 lg:bottom-10 w-full sm:w-[500px] lg:w-[700px] p-3 bg-[#000000a3] text-white font-serif border-y-2 sm:border-y-2 sm:border-r-2 border-white">
                <div className="text-[25px] text-center font-bold">
                    <h1>Play the background Music</h1>
                    <button onClick={play} className="cursor-pointer w-32 text-white px-2 py-1 my-4 mx-auto flex items-center justify-center border-white border-2 rounded-3xl">{(!audio) ? <Play /> : <Pause />}</button>
                </div>
                <h1 className=" mb-4 text-[20px] leading-6">
                    <strong>Mu&#119070;ic b&#119241;x</strong> an intrument web appplication
                </h1>
                <p className="text-[13px] text-justify">
                    Welcome to our interactive music platform, where you can unleash your creativity and experience the joy of playing musical instruments! Whether you're a beginner or an experienced musician, our web application allows you to play a virtual piano, guitar, and drums right from your browser.
                </p>
                <div className="w-full flex gap-2">
                    <p className="font-semibold text-[13px]">
                        Piano:
                    </p>
                    <p className="text-[13px]">
                        Learn and play your favorite songs with an interactive, easy-to-use piano. Play by clicking keys or using your keyboard for a realistic experience.
                    </p>
                </div>
                <div className="w-full flex gap-2">
                    <p className="font-semibold text-[13px]">
                        Guitar:
                    </p>
                    <p className="text-[13px]">
                        Strum chords or pluck individual strings with a virtual guitar. Perfect for beginners looking to practice or anyone wanting to try guitar.
                    </p>
                </div>
                <div className="w-full flex gap-2">
                    <p className="font-semibold text-[13px]">
                        Drums:
                    </p>
                    <p className="text-[13px]">
                        Tap into your rhythm with a full drum kit. Whether it's a basic beat or a complex pattern, you can drum along to your favorite tunes.
                    </p>
                </div>
                <div className="mt-5">
                    <h1 className="underline font-bold text-[16px]">
                        Step by Step Guidance
                    </h1>
                    <div className="w-full flex gap-2">
                        <p className="font-semibold text-[13px]">
                            Step1:
                        </p>
                        <p className="text-[13px]">
                            Click the "MENU" box in the navbar.
                        </p>
                    </div>
                    <div className="w-full flex gap-2">
                        <p className="font-semibold text-[13px]">
                            Step2:
                        </p>
                        <p className="text-[13px]">
                            Select the desired instrument from the displayed box after the click of the "MENU" box.
                        </p>
                    </div>
                    <div className="w-full flex gap-2">
                        <p className="font-semibold text-[13px]">
                            Step3:
                        </p>
                        <p className="text-[13px]">
                            Play your instrument.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
const Play = () => {
    return (
        <svg className="size-5 mx-1 fill-[#ffffff]" viewBox="0 0 17.804 17.804">
            <path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313
			c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04
			c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"/>
        </svg>
    )
}
const Pause = () => {
    return (
        <svg className="size-5 mx-1 fill-[#ffffff]" viewBox="0 0 16 16">
            <path d="M7 1H2V15H7V1Z" />
            <path d="M14 1H9V15H14V1Z" />
        </svg>
    )
}