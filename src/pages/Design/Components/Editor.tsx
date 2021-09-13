import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { ElementStruct } from '@/stores/EditorMange'
import BgTable from './BgTable'
import './index.less'

interface EditorProps {
  datas: ElementStruct
}

const Editor: React.FC<EditorProps> = (props) => {
  const { datas } = props
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const instantiateElement = (arr, zIndex) => {
    if (!arr) {
      return null
    }

    return Object.keys(arr).map((i, n) => {
      if (i === 'type') {
        if (arr[i] === 'block') {
          return <div 
            style={{
              minWidth: arr.minWidth, 
              minHeight: arr.minHeight,
              backgroundColor: arr.backgroundColor
            }} 
            key={`div-${zIndex}-${n}`}></div>
        }
      }

      return null
    })
  }

  useEffect(() => {
    setWidth(document.getElementById('editorBox').clientWidth)
    setHeight(document.getElementById('editorBox').clientHeight)
  }, []) 

  console.log(datas)
  return (
    <div className='editorContainer'>
      <div id='editorBox' className='editorBox'>
        <BgTable width={width} height={height} />
        <div className='elementBox'>
          {
            instantiateElement(datas, 0)
          }
        </div>
      </div>
    </div>
  )
}

export default Editor