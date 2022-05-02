import React from 'react'

const ImageGrid = () => {
  return (
    <div className="flex items-center gap-1 w-full sm:mt-24 lg:mt-0">
        <div className="md:w-86 lg:w-9/12 overflow-hidden h-64 md:h-96 my-10 md:my-0">
            <img src="https://b.zmtcdn.com/data/pictures/chains/2/50382/6fa52a1c7dad34faa24f1bae4e7159de.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" className="w-full h-full rounded-sm transition duration-700 transform hover:scale-110"/>
        </div>
        <div className="hidden md:flex flex-wrap items-center gap-1 lg:w-1/2 lg:h-96 my-1">
            <div className="w-48 h-48 overflow-hidden" style={{height: "49%"}}>
                <img src="https://b.zmtcdn.com/data/pictures/chains/2/50382/2eb4ebef13c3bba9c55a515f6ddf6e88.jpg?fit=around|300:273&crop=300:273;*,*" alt="" className="w-full h-full rounded-sm transition duration-700 transform hover:scale-110" />
            </div>
            <div className="h-48 w-48 overflow-hidden" style={{height: "49%"}}>
                <img src="https://b.zmtcdn.com/data/pictures/chains/2/50382/2781ab2c532b711ecd401571cdd87eb9.jpg?fit=around|300:273&crop=300:273;*,*" alt="" className="w-full h-full rounded-sm transition duration-700 transform hover:scale-110" />
            </div>
            <div className="h-48 w-48 overflow-hidden" style={{height: "49%"}}>
                <img src="https://b.zmtcdn.com/data/pictures/chains/2/50382/bd8dfea96f558f70726e9adeea69ad59.jpg?fit=around|300:273&crop=300:273;*,*" alt="" className="w-full h-full rounded-sm transition duration-700 transform hover:scale-110" />
            </div>
            <div className="h-48 w-48 overflow-hidden relative" style={{height: "49%"}}>
                <img src="https://b.zmtcdn.com/data/pictures/chains/2/50382/bd8dfea96f558f70726e9adeea69ad59.jpg?fit=around|300:273&crop=300:273;*,*" alt="" className="w-full h-full rounded-sm transition duration-700 transform hover:scale-110" />
                <div className="absolute bg-gray-300 inset-0">
                    <div>
                        <div></div>
                        <h4>View Gallery</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageGrid;