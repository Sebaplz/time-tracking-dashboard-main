import React from "react";

export default function Card(props) {
  return <>
    <article className={`${props.color} my-5 rounded-xl lg:h-56 lg:pb-5 lg:mb-4 lg:m-0`}>
      <div className="flex justify-end h-16">
        <img src={`assets/icon-${props.imagen}.svg`} alt="Imagen Work" className="bg-cover"/>
      </div>
      <div className="bg-[#1c1f4a] p-5 rounded-xl hover:bg-[#2e3479] cursor-pointer lg:">
        <div className="flex justify-between items-center">
        <p className="text-white">{props.actividad}</p>
        <img src="assets/icon-ellipsis.svg" alt="icon ellipsis" className="cursor-pointer"/>
        </div>
        <div className="flex justify-between items-center lg:flex-col lg:items-start">
        <h2 className="text-white text-3xl lg:text-5xl lg:font-light lg:py-5">{props.horas}</h2>
          <p className="text-[#bdc1ff]">Last Week - {props.lastWeek}</p>
        </div>
      </div>
    </article>
  </>;
}
