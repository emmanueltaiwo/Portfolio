import React from 'react'

const CustomFooterIcon = (props) => {
    const iconLink = [
        {
            id: 1,
            link: 'https://i.ibb.co/5kmh7gS/pngwing-com.png',
        },
        {
            id: 2,
            link: 'https://i.ibb.co/hBZgb6g/pngwing-com-2.png',
        },
        {
            id: 3,
            link: 'https://i.ibb.co/pX7CspW/pngwing-com-1.png',
        },
    ]

    const getIcon = () => {
        return iconLink.map((icon) =>  (
           icon.link
        ))
    }

  return ( 
    <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
        <img src={getIcon()}  className="w-7 md:w-8" />
            <div className="text-left ml-3">
                <p className='text-xs text-gray-200'>{props.children}</p>
            </div>
    </div>
  )
}

export default CustomFooterIcon