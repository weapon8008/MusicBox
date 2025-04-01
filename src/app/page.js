'use client'
import { useState } from "react"
import Navbar from "@/component/navbar"
import Piano from "@/component/piano"
import Default from "@/component/default"
import Guitar from "@/component/guitar"
import Drums from "@/component/drums"

export default function Home() {
  const [bg, setbg] = useState(<Default />)
  const changeBackground = (e) => {
    if (e === 1) {
      setbg(<Piano />)
    } else if (e === 2) {
      setbg(<Guitar />)
    } else if (e === 3) {
      setbg(<Drums />)
    }
  }

  return (
    <div>
      <Navbar changebg={changeBackground} />
      {bg}
    </div>
  )
}
