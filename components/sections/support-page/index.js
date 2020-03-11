import React, { useState } from 'react'
import { arrowDownIcon } from '../../../icon/index.js'

import './style.scss'
/// ///////////////////////////////////////////

const categoryList = [
  {
    title: 'Can I see the apartment prior to booking?'
  },
  {
    title: 'What if I want to stay longer?'
  },
  {
    title: 'Can two people live in one room?'
  },
  {
    title: 'Do you offer extra storage?'
  },
  {
    title: 'Does each apartment have access to washing machines?'
  },
  {
    title: 'Can I receive mail at my place?'
  },
  {
    title: 'Is there parking on site?'
  }
]

const QuestionComponents = ({i, item}) => {
  const [open, setOpen] = useState(false)
  const mainWrap = `question-wrap ${open ? 'active' : ''}`
  const arrowClass = `down-arrow ${open ? 'rotate' : ''}`
  const textClass = `${open ? 'active' : ''}`
  const handelOpen = (val) => {
    setOpen(val)
  }
  return (
    <div
      key={i}
      className={mainWrap}
      onClick={() => handelOpen(!open)}
    >
      <div>
        <h5 className={textClass}>{item.title}</h5>
        <div className={arrowClass}>
          {arrowDownIcon(20, 20)}
        </div>
      </div>
      <p className={textClass}>
        Yes! We do offer viewings at some of our
        locations, if there is a vacancy.
        Please get in touch with our booking team
        in your preferred location and we will find
        a solution for you! <br />
        Email: barcelona@vondereurope.com,
        berlin@vondereurope.com, <br />
        londoncommunity@vondereurope.com, <br />
        warsaw@vondereurope.com <br />
      </p>
    </div>
  )
}

export const SupportSection = (props) => (
  <div className='wrapper'>
    <div className='container support'>
      <h2>FAQ</h2>
      {
        categoryList.map(
          (item, i) => (
            <QuestionComponents key={i} i={i} item={item} />
          )
        )
      }
    </div>
  </div>
)

export default React.memo(SupportSection)
