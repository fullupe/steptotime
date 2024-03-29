import React from 'react'
import Link from 'next/link'
import { defaultHead } from 'next/head'
//import {urlFor} from '../lib/client'

function FooterBanner({ data, hourOnly, dayInfo }) {
  function getOrdinalNum(n) {
    return (
      n +
      (n > 0
        ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
        : '')
    )
  }

  //console.log("Day",new Date().getDay())

  // let colorh = String(dayInfo[0]?.colorId || 'pink')

  //let colors = ["red","green","purple","yellow","pink","orange","blue"]

  //let colorRand = colors[Math.floor(Math.random()*colors.length)]

  //console.log(dayInfo)
  return (
    <div
      className={`py-4 px-6 bg-pink-500 !important text-lg rounded-2xl relative  flex flex-col h leading- w-4/5 text-white mt-8 mb-12 overflow-hidden`}
    >
      <div className=" flex flex-col items-center ">
        <div className=" flex flex-col items-center ">
          <small className="font-cinzel text-lg">
            {getOrdinalNum(hourOnly) == 0 ? '24th' : getOrdinalNum(hourOnly)}{' '}
            Hour
          </small>
          <img className="w-32 rounded-2xl h-32 " src={data[0]?.image} />
          <h3 className="font-bold text-2xl font-poppins">{data[0]?.name}</h3>
        </div>

        <div className=" p-1 flex justify-center items-center md:max-w-3xl">
          <p className="m-2 font-tapestry font-semibold">{data[0]?.info}</p>
        </div>
      </div>

      <div className="flex flex-col   md:flex-row space-y-4 md:space-y-0 md:justify-evenly">
        <div className="flex justify-around items-center flex-codl md:px-12 md:border-r-2">

          <div className="flex flex-col space-y-2">
          <p className="text-xs text-gray-100  font-cinzel">
            Element :{' '}  
          </p>
          <span className="text-xs text-orange-300 capitalize ml-0">
              {data[0]?.element}
            </span>
          </div>

        <div className="flex flex-col space-y-2" >
          <p className="text-xs text-gray-100 font-cinzel ">
            Colors :{' '} 
          </p>

          <span className="text-xs text-orange-300 capitalize ml-0">
              {data[0]?.colors}
            </span>
        </div>


        <div className="flex flex-col space-y-2">
          <p className="text-xs text-gray-100  font-cinzel">
            Planet :{' '}
          </p>

            <span className="text-xs text-orange-300 capitalize ml-0">
              {data[0]?.Planet}
            </span>
        </div>


        </div>

        <div className="flex flex-col md:border-l-2 md:px-12 justify-center items-center space-y-2">
          <p className="text-xs text-gray-100 font-cinzel">
            {/* Today :{' '} */}
            <span className="text-2xl text-gray-300 capitalize ml-6">
              {dayInfo[0]?.day}
            </span>
          </p>

          <div className="flex">
          <p className="text-xs text-gray-100 font-cinzel">
            {/* Colors :{' '} */}
            <span className="text-2xl text-orange-200 capitalize ml-0">
              {dayInfo[0]?.color}
            </span>
          </p>

          <p className="text-xs text-gray-100 font-cinzel ">
            {/* Sign :{' '} */}
            <span className="text-2xl text-orange-200 capitalize ml-8">
              {dayInfo[0]?.sign}
            </span>
          </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FooterBanner
