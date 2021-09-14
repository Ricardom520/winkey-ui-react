import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocalStore } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import { ElementStruct } from '@/stores/EditorMange'
import BgTable from './BgTable'
import store from '@/stores'
import './index.less'

const Editor: React.FC = observer((props) => {
  const localStore = useLocalStore(() => store)
  const { elementsObj, focusElement } = localStore.editorMange
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const instantiateElement = (arr, zIndex) => {
    if (!arr) {
      return null
    }

    if (arr.type === 'block') {
      return <div 
        className={focusElement ? focusElement.id === arr.id ? 'focusElement' : '' : ''}
        style={{
          minWidth: arr.minWidth, 
          minHeight: arr.minHeight,
          backgroundColor: arr.backgroundColor
        }} 
        key={`block-${zIndex}`}>
          {arr.children && instantiateElement(arr.children, zIndex + 1)}
        </div>
    }

    return null
  }

  const handleClick = (e) => {
    console.log(e)
    if (e.target.dataset.alt.indexOf('bg') > -1) {
      console.log('????')
      localStore.editorMange.focusElement = null
    }
  }

  useEffect(() => {
    setWidth(document.getElementById('editorBox').clientWidth)
    setHeight(document.getElementById('editorBox').clientHeight)
  }, []) 

  return (
    <div className='editorContainer'>
      <div id='editorBox' className='editorBox' onClick={handleClick}>
        <BgTable width={width} height={height} />
        <div className='elementBox'>
          {
            instantiateElement(elementsObj, 0)
          }
        </div>
      </div>
    </div>
  )
})

export default Editor