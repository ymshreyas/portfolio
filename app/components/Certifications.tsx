import React from 'react'
import ExpandableCardDemo from './ui/expandable-card-demo-standard'

const Certifications = () => {
  return (
    <div className="py-20" id="certifications">
        <h1 className="heading">
            My{" "}
        <span className="text-purple">Certifications</span>
        </h1>
        <div className="w-full flex mt-14">
            <ExpandableCardDemo/>
        </div>
    </div>
  )
}

export default Certifications
