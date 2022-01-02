import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { toJS } from 'mobx'
import { useLocalStore } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import { ElementStruct } from '@/stores/EditorMange'
import BgTable from './BgTable'
import store from '@/stores'
import './index.less'
import { Card, Table } from '@/components'

const Editor: React.FC = observer((props) => {
  const localStore = useLocalStore(() => store)
  const { elementsObj, focusElement } = localStore.editorMange
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const handleFocusClick = (item: ElementStruct) => {
    localStore.editorMange.setFocusElement(item)
  }

  const instantiateElement = (arr: ElementStruct, zIndex) => {
    if (!arr) {
      return null
    }

    if (arr.type === 'block') {
      return <div 
        data-alt={`${arr.id}`}
        className={focusElement ? focusElement.id === arr.id ? 'focusElement' : '' : ''}
        style={{
          minWidth: arr.minWidth, 
          minHeight: arr.minHeight,
          padding: '20px 40px 20px 40px',
          backgroundColor: arr.backgroundColor
        }} 
        key={`block-${zIndex}`}>
          {
            arr.children && arr.children.map((item: ElementStruct) => {
              return instantiateElement(item, zIndex + 1)
            })
          }
        </div>
    } else if (arr.type === 'card') {
      return (
        <div 
          data-alt={`${arr.id}`} 
          key={`card-${zIndex}`} 
          className={focusElement ? focusElement.id === arr.id ? 'focusElement' : '' : ''}
          onDoubleClick={() => handleFocusClick(arr)}
        >
          <Card title={arr.title}>
            {arr.content || <p className="normal_color">展示内容</p>}
          </Card>
        </div>
      )
    } else if (arr.type === 'table') {
      return (
        <div 
          style={{margin: arr.margin}} 
          data-alt={`${arr.id}`} 
          key={`table-${zIndex}`} 
          className={focusElement ? focusElement.id === arr.id ? 'focusElement' : '' : ''}
          onDoubleClick={() => handleFocusClick(arr)}
        >
          <Table columns={arr.columns} dataSource={[]} />
        </div>
      )
    }

    return null
  }

  const handleClick = (e) => {
    if (e.target.dataset.alt && e.target.dataset.alt.indexOf('bg') > -1) {
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
            instantiateElement(toJS(elementsObj), 0)
          }
        </div>
      </div>
    </div>
  )
})

export default Editor