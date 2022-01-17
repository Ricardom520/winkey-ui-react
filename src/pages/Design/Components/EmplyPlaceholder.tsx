import React, { useRef, useEffect, useState } from 'react'
import DegisnContext, { DegisnContextProps } from '../DegisnContext'

interface EmptyPlaceholderProps {
  id: string
}

const EmptyPlaceholder: React.SFC<EmptyPlaceholderProps> = (props) => {
  const { id } = props
  const self: any = useRef<HTMLLIElement>()
  const [height, setHeight] = useState<number>(0) 
  const [top, setTop] = useState<number>(0)

  useEffect(() => {
    const paths = id.split('_')
    const index = parseInt(paths[paths.length - 1])
    const parent = self.current.parentNode
    const childNodes = parent.childNodes
    const parentHeight = parent.clientHeight
    let _height: number = 0
    let _top: number = 0
    
    if (childNodes.length === 1) {
      _top = parseInt(getComputedStyle(parent).paddingTop) || parent.clientHeight * .25
      _height = parent.clientHeight * .7
    } else if (index === 0) {
      // 第一个元素
      _top = parent.childNodes[1].offsetTop
      _height = parent.childNodes[1].offsetTop
    } else {
      let sum = 0 // 子元素的高度和上边距和
      const _index = 2 * index + 1

      for (let i = 1; i < childNodes.length; i = i + 2) {
        _top += childNodes[i].clientHeight + (i === 1 ? childNodes[i].offsetTop : parseInt(getComputedStyle(childNodes[i]).marginTop)) 
        sum += childNodes[i].clientHeight + parseInt(getComputedStyle(childNodes[i]).marginTop)
      }
      
      if (parent.childNodes.length === _index) {
        // 最后一个元素
        _height = (parentHeight - sum) / 2
      } else {
        _height = (parentHeight - sum + parseInt(getComputedStyle(childNodes[_index]).marginTop)) / 5
      }
    }

    setTop(_top)
    setHeight(_height)
  })

  return (
    <DegisnContext.Consumer>
      {
        (props: DegisnContextProps) => {
          const { isMovingDom } = props
          return (
            <div 
              ref={self}
              style={{height: `${height}px`, lineHeight: `${height}px`, top: `${top}px`}}
              data-alt={id} 
              key={id} 
              className={`empty_placeholder ${isMovingDom ? 'show' : ''}`}
            >
              + 拖放到此处
            </div>
          )
        }
      }
    </DegisnContext.Consumer>
  )
}

export default EmptyPlaceholder