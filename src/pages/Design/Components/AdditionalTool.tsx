import React from 'react'
import DegisnContext from '../DegisnContext'
import { useLocalStore } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import store from '@/stores'
import './index.less'

interface AdditionalToolProps {
  id: string
  onDelete: any
  onMove: (id: string, event: MouseEvent) => void
}

const AdditionalTool: React.SFC<AdditionalToolProps> = observer((props) => {
  const localStore = useLocalStore(() => store)
  const { elements, focusElement } = localStore.editorMange
  const { id, onDelete, onMove } = props

  const handleDelete = () => {
    onDelete(id)
  }

  const handleMoveDown = async (func: Function, func1: Function, event: MouseEvent) => {
    func(true)
    const target = document.getElementById(id)
    const copyElement: any = target.cloneNode(true)
    copyElement.style.position = 'absolute'
    copyElement.style.zIndex = '2'
    copyElement.style.width = target.clientWidth + 'px'
    copyElement.style.top = event.clientY - 36 + 'px'
    copyElement.style.left = event.clientX + 12 + 'px'
    copyElement.style.pointerEvents = 'none'

    document.body.appendChild(copyElement)

    onDelete(id).then(() => {
      window.onmousemove = (e) => {
        copyElement.style.top = e.clientY - 36 + 'px'
        copyElement.style.left = e.clientX + 12 + 'px'
      }

      window.onmouseup = (e) => {
        document.body.removeChild(copyElement)
        window.onmouseup = null
        func(false)

        setTimeout(function () {
          func1(e, id.split('_')[0])
          window.onmousemove = null
          window.onmouseup = null

          window.onmousemove = null
        }, 100)
      }
    })
  }

  return (
    <DegisnContext.Consumer>
      {(context) => {
        const { setIsMovingDom, setElement } = context
        return (
          <>
            <span
              className='additionalTool additionalTool-move'
              onMouseDown={(e: any) => handleMoveDown(setIsMovingDom, setElement, e)}
            >
              <i className='iconfont wk-icon-add' />
            </span>
            <span className='additionalTool additionalTool-delete' onClick={handleDelete}>
              <i className='iconfont wk-icon-dustbin' />
            </span>
          </>
        )
      }}
    </DegisnContext.Consumer>
  )
})

export default AdditionalTool
