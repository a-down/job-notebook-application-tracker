"use client"


export default function Dashboard() {


  return (
    <main className="bg-gray-1 min-h-[calc(100vh-96px)] px-16 py-16">
      <h2 className="font-display font-semibold text-4xl mb-12">Dashboard</h2>

      <div className="grid grid-cols-12 gap-4">

        <div className="grid-cols-2 grid grid-flow-row auto-rows-min gap-4 col-span-10">
          <div className="bg-white h-[164px] rounded-md col-span-1 drop-shadow-brand"></div>  
          <div className="bg-white h-[164px] rounded-md col-span-1 drop-shadow-brand"></div>  
          <div className="bg-white h-[164px] rounded-md col-span-1 drop-shadow-brand"></div>  
          <div className="bg-white h-[164px] rounded-md col-span-1 drop-shadow-brand"></div>  
          <div className="bg-white h-[164px] rounded-md col-span-1 drop-shadow-brand"></div>  
 
        </div>

        <aside className="col-span-2 bg-gray-2 rounded drop-shadow-brand h-full">

        </aside>

      </div>

      

    </main>
  )
}