export default function Tailwind(){
  return(
      <div>
          <h1 className="text-9xl text-red-950">
              Tailwind CSS
          </h1>
          <div className="flex justify-center items-center bg-gray-100 h-[300px]">
            <div className="bg-blue-300 w-[100px] hover:bg-red-300">
              Box-1
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-blue-300 h-[100px]">
              Box1
            </div>
            <div className="bg-blue-300 h-[100px]">
              Box2
            </div>
            <div className="bg-blue-300 h-[100px]">
              Box3
            </div>
            <div className="bg-blue-300 h-[100px]">
              Box4
            </div>
          </div>

          <div className="flex justify-center">
            <h1 className="text-xl text-green-300 lg:text-red-300">
                Responsive!
            </h1>
          </div>
      </div>
    )
  }