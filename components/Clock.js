import React from 'react'

function Clock({hourRatio, minuteRatio, secondRatio}) {

    console.log(Math.floor(hourRatio*24))
  return (
    <div className="clock1">
        <div className=" numberSign number1"></div>
        
        <div className=" number  number2">Sagittarius</div>

        <div className=" numberSign number3"></div>

        <div className=" number number4">Scorpio</div>

        <div className=" numberSign number5"> </div>

        <div className=" number number6">Libra</div>

        <div className=" numberSign number7"> </div>

        <div className=" number number8">Virgo</div>

        <div className=" numberSign number9"></div>

        <div className=" number number10">Leo</div>

        <div className=" numberSign number11"> </div>

        <div className=" number number12">Cancer</div>

        <div className=" numberSign number13"></div>

        <div className=" number number14">Gemini</div>

        <div className=" numberSign number15"> </div>

        <div className=" number number16">Taurus</div>

        <div className=" numberSign number17"></div>

        <div className=" number number18">Aries</div>

        <div className=" numberSign number19"></div>

        <div className=" number number20">Pisces</div>

        <div className=" numberSign number21"></div>

        <div className=" number number22">Aquarius</div>

        <div className=" numberSign number23"> </div>

        <div className=" number number24">Capricorn</div>
        

    <div className="clock">
    <div className="hand hour" style={{transform: `translate(-50%) rotate(${hourRatio * 360}deg)`}}></div>
    <div className="hand minute"style={{transform: `translate(-50%) rotate(${minuteRatio * 360}deg)`}}  ></div>
    <div className="hand second"style={{transform: `translate(-50%) rotate(${secondRatio * 360}deg)`}}  ></div>
    
    <div className="number number1"><div className="div1">1</div></div>
    <div className="number number2"><div className="div2">2</div></div>
    <div className="number number3 "><div className="div3">3</div></div>
    <div className="number number4 "><div className="div4">4</div></div>
    <div className="number number5 "><div className="div5">5</div></div>
    <div className="number number6 "><div className="div6">6</div></div>
    <div className="number number7 "><div className="div7">7</div></div>
    <div className="number number8 "><div className="div8">8</div></div>
    <div className="number number9 "><div className="div9">9</div></div>
    <div className="number number10 "><div className="div10">10</div></div>
    <div className="number number11 "><div className="div11">11</div></div>
    <div className="number number12 "><div className="div12">12</div></div>

    <div className="number number13 "><div className="div13">13</div></div>
    <div className="number number14 "><div className="div14">14</div></div>
    <div className="number number15 "><div className="div15">15</div></div>
    <div className="number number16"><div className="div16">16</div></div>
    <div className="number number17"><div className="div17">17</div></div>
    <div className="number number18 "><div className="div18">18</div></div>
    <div className="number number19 "><div className="div19">19</div></div>
    <div className="number number20 "><div className="div20">20</div></div>
    <div className="number number21 "><div className="div21">21</div></div>
    <div className="number number22 "><div className="div22">22</div></div>
    <div className="number number23 "><div className="div23">23</div></div>
    <div className="number number24 "><div className="div24">24</div></div>
 </div>

</div>
  )
}

export default Clock
