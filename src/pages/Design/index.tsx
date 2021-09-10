import React from 'react'

import { Tooltip, Card } from '@/components'
import Header from '../Header'
import Editor from './Components/Editor'
import DegisnContext, { DegisnContextProps } from './DesignContext'
import { Block } from './Templates'
import './index.less'

const Design: React.FC = () => {
  const handleMouseDown = (type: string) => {
    console.log(type)
    let copyElement: any;

    if (type === 'block') {
      copyElement = Block()
      console.log(copyElement)
      document.body.appendChild(copyElement)
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
              <li className='listItem' onMouseDown={() => handleMouseDown('block')}>
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