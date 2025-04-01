'use client'
import { useState } from "react"
import Navbar from "@/component/navbar"
import Piano from "@/component/piano"
import Default from "@/component/default"
import Guitar from "@/component/guitar"
import Drums from "@/component/drums"

export default function Home() {
  const [bg, setbg] = useState(0)

  const list = [<Default />, <Piano />, <Guitar />, <Drums />]

  const changeBackground = (e) => {
    setbg(e)
  }

  return (
    <div>
      <Navbar changebg={changeBackground} />
      {list[bg]}
    </div>
  )
}
