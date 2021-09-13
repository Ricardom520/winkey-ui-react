import React, { useEffect, useRef, useState } from 'react'
import { useLocalStore } from 'mobx-react'

import { Tooltip, Card } from '@/components'
import Header from '../Header'
import Editor from './Components/Editor'
import { ElementStruct } from '@/stores/EditorMange'
import { Block } from './Templates'
import store from '@/stores'
import './index.less'

const Design: React.FC = () => {
  const localStore = useLocalStore(() => store)
  const BlockRef: any = useRef<HTMLLIElement>()
  const [datas, setDatas] = useState<ElementStruct>()

  const setElement = (e: MouseEvent, type: string) => {
    console.log(type)
    console.log(e)
    if (!datas) {
      if (type === 'block') {
        setDatas({
          type,
          minWidth: '100%',
          minHeight: '380px',
          backgroundColor: '#fff',
        })
      }
    }
  }

  const handleMouseDown = (type: string, e) => {
    let target: any;
    let copyElement: any;

    const getLocation = (event: MouseEvent) => {
      setElement(event, type)
    }

    if (type === 'block') {
      target = BlockRef.current.children[0]
      copyElement = target.cloneNode(true)
      
      copyElement.style.position = "absolute"
      copyElement.style.top = target.getBoundingClientRect().top + "px"
      copyElement.style.left = target.getBoundingClientRect().left + "px"

      document.body.appendChild(copyElement)
      
      window.onmousemove = (moveEvent: MouseEvent) => {
        copyElement.style.top = moveEvent.y - e.nativeEvent.offsetY + 'px'
        copyElement.style.left = moveEvent.x - e.nativeEvent.offsetX + 'px'

        window.onmouseup = () => {
          document.body.removeChild(copyElement)
          document.addEventListener('mousemove', getLocation)
    
          setTimeout(function() {
            document.removeEventListener('mousemove', getLocation)
          }, 100)
        }
      }
    }
  }

  useEffect(() => {
    console.log(localStore.editorMange)
  }, [])

  return (
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
            <Editor datas={datas} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Design