import React from 'react'
import Button from 'react-bootstrap/Button'
const Annoucement = () => {
  return (
    <div className="flex bg-white justify-center p-1 gap-2">
        <div className= "mx-auto flex max-w-7xl w-half items-center py-1 text-sm">
        <Button className=" bg-gray-300 rounded border-r-4 py-1 px-2">
                <p className=' font-bold leading-6 text-gray-600'>Announcement</p>
        </Button>
        <p>We are happy to announce that we raise $2 Million in Seed Funding</p>
        </div>
    </div>
  )
}

export default Annoucement