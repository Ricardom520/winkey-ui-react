import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import { Tooltip, Card } from '@/components'
import Header from '../Header'
import Editor from './Components/Editor'
import DegisnContext, { DegisnContextProps } from './DesignContext'
import { Block } from './Templates'
import './index.less'

const Design: React.FC = () => {
  const BlockRef: any = useRef<HTMLLIElement>()
  const handleMouseDown = (type: string, e) => {
    let target: any;
    let copyElement: any;
    console.log(e)
    if (type === 'block') {
      target = BlockRef.current.children[0]
      copyElement = target.cloneNode(true)
      
      copyElement.style.position = "absolute"
      copyElement.style.top = target.getBoundingClientRect().top + "px"
      copyElement.style.left = target.getBoundingClientRect().left + "px"

      document.body.appendChild(copyElement)
      console.log('???')
      window.onmousemove = (moveEvent: MouseEvent) => {
        console.log(moveEvent)
        copyElement.style.top = moveEvent.y + 'px'
        copyElement.style.left = moveEvent.x + 'px'
        console.log(moveEvent)

        window.onmouseup = () => {
          window.onmousemove = null
        }
      }
    }
  }

  const getContext = () => {
    return {

    }
  }

  return (
    <DegisnContext.Provider value={getContext()}>
      <div className='designContainer'>
        <Header/>
        <div className='container'>
          <div className='left'>
            <ul>
              <li className='listItem' onMouseDown={(e) => handleMouseDown('block', e)} ref={BlockRef}>
                <Tooltip title='block'>
                  <div> 
                    <Block/>
                  </div>
                </Tooltip>
              </li>
              <li className='listItem'>
                <Tooltip title='Card'>
                  <div>
                    <Card title='title' size='small'/>
                  </div>
                </Tooltip>
              </li>
            </ul>
          </div>
          <div className='right'>
            <div className='content'>
              <Editor/>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </DegisnContext.Provider>
  )
}

export default Design