//react hooks provides a concepts called context .
//react context api allow you to acces the dsta at every levels of the components tree, whitout passing props to every level , you can directly send the data to your target level , .

//context api banaan k lia 3 steps hoty hn srf , 1) createContext    2) then you need provider taky log esy use krsken 3) consumer    jo use kryga usko consumer bannnna pryga tab hi jaky vo use krskkyyygaa 
import React from 'react'
import CompoB from './CompoB'

function CompoA() {
  return (
    <div>
      <CompoB></CompoB>
    </div>
  )
}

export default CompoA
