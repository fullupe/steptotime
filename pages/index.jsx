//import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Clock from "../components/Clock"

import FooterBanner from "../components/FooterBanner"
import Footer from "../components/Footer"

import data from "../Data"
import weekDaysSign from "../weekDaysSign"

const Home = () => {

  const [secondRatio, setSecondRatio] = useState(0)
  const [minuteRatio, setMinuteRatio] = useState(0)
  const [hourRatio, setHourRatio] = useState(0)

   //data.map((da)=>console.log(da))

  //const [hourOnly] = useState(Math.floor((hourRatio*24)))

  let hourOnly = Math.floor((hourRatio*24))

  const [hourData, setHourData] = useState([])
  const [dayInfo, setDayInfo] = useState([])

  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
  const weekday = weekDays[new Date().getDay()]

 const setClock = () =>{
    
    const currentDate = new Date;
     let secondRatio = currentDate.getSeconds() / 60;
     let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
     let hourRatio = (minuteRatio + currentDate.getHours()) / 24;

     setSecondRatio(currentDate.getSeconds() / 60) 
     setMinuteRatio((secondRatio + currentDate.getMinutes()) / 60) 
     setHourRatio((minuteRatio + currentDate.getHours()) / 24);
  
 }   
 
 useEffect(()=>{
  setInterval(() => {
    setClock()
  }, 1000);

})


useEffect(()=>{
  const hourData = data.filter((da)=> da.hour1 === hourOnly || da.hour2 === hourOnly)
  const weekDs = weekDaysSign.filter((wkds)=>wkds.day===weekday)
  setHourData(hourData)
  setDayInfo(weekDs)
  console.log("koko",hourOnly)
},[hourOnly])

  return (
  
    <div className="flex justify-content items-center flex-col h-screen">
               <video
                className="w-full h-screen object-cover  opacity-90"
                src=" ../bgvideo.mp4" 
                type="video/mp4"
                loop
                controls={false}
                muted
                autoPlay
                />

      <div className="top-0 right-0 left-0 bottom-0 absolute h-screen ">

    <div className="
     
    opacity-90
    pt-8
    bg-slate-900 
    flex 
    flex-col
    justify-center 
    items-center 
    h-screenn 
    overflow-hidden">

        

           <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/>
  
           <FooterBanner data={hourData} hourOnly={hourOnly} dayInfo={dayInfo}/>

           <Footer/>
    
 
           
   </div>

   </div>


   </div>
  )
}

export default Home
