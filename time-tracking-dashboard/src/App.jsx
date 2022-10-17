import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="main container mx-auto p-5 min-h-screen lg:flex lg:items-center lg:justify-center">
      <div className="lg:grid lg:grid-cols-4 lg:gap-4">
        <article className="bg-[#1c1f4a] rounded-xl lg:row-span-2 ">
          <div className="bg-[#5847eb] rounded-xl flex  lg:flex-col lg:h-4/6">
            <div className="p-5">
              <img
                className="w-20 border-4 rounded-full"
                src="images/image-jeremy.png"
                alt="Foto de perfil"
              />
            </div>
            <div className="flex-col my-auto lg:p-5 lg:m-0">
              <p className="text-[#bdc1ff]">Report for</p>
              <h1 className="text-white text-2xl lg:text-5xl lg:font-light">Jeremy Robson</h1>
            </div>
          </div>
          <div className="flex justify-between items-center py-5 px-7 lg:flex-col lg:items-start lg:px-5">
            <p className="text-[#bdc1ff] cursor-pointer hover:text-white lg:py-2">
              Daily
            </p>
            <p className="text-white cursor-pointer hover:text-white lg:py-2">Weekly</p>
            <p className="text-[#bdc1ff]  hover:text-white cursor-pointer lg:py-2 lg:pb-5">
              Monthly
            </p>
          </div>
        </article>
        <Card color="bg-[#ff8c66]" imagen="work" actividad="Work" horas="32hrs" lastWeek="36hrs" />
        <Card color="bg-[#56c2e6]" imagen="play" actividad="Play" horas="10hrs" lastWeek="8hrs" />
        <Card color="bg-[#ff5c7c]" imagen="study" actividad="Study" horas="4hrs" lastWeek="7hrs" />
        <Card color="bg-[#4acf81]" imagen="exercise" actividad="Exercise" horas="4hrs" lastWeek="5hrs" />
        <Card color="bg-[#7536d3]" imagen="social" actividad="Social" horas="5hrs" lastWeek="10hrs" />
        <Card color="bg-[#f1c65b]" imagen="self-care" actividad="Self Care" horas="2hrs" lastWeek="2hrs" />
      </div>
      
    </div>
  );
}

export default App;
