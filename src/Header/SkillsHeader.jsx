
export const logo =[ { id:1,title:"logo1",src:"./assets/w1.png" }, { id:2,title:"logo2",src:"./assets/w2.png" }, { id:3,title:"logo3",src:"./assets/w3.png" }, { id:4,title:"logo4",src:"./assets/w4.png" }, { id:5,title:"logo5",src:"./assets/w5.png" }, { id:6,title:"logo6",src:"./assets/w6.png" }, { id:7,title:"logo7",src:"./assets/w7.png" } ]

export default function SkillsHeader(){
  return (
              <div className="bottom-0 left-0 absolute flex justify-center items-center gap-1 lg:gap-2 bg-gray-300 px-4 py-1 rounded-r-sm">
                      {logo.map((logo) => <img className="w-[15px] md:w-[30px]" src={logo.src} alt={logo.id} key={logo.title}></img>)}

          </div>
  )
}