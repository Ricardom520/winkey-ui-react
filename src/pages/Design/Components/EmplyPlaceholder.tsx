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
    if (id === 'placeholder_0_0_0') {
      console.log(self.current)
      console.log(childNodes)
      console.log(index)
      console.log(parent)
    }
    
    if (childNodes.length === 1) {
      _height = parent.clientHeight * .8
    } else if (index === 0) {
      console.log('???')
      // 第一个元素
      setTop(parent.childNodes[1].offsetTop)
      _height = parent.childNodes[1].offsetTop
    } else {
      let sum = 0 // 子元素的高度和上边距和
      const _index = 2 * index + 1
      // setTop(childNodes[_index].offsetTop)
      for (let i = 1; i < childNodes.length; i = i + 2) {
        sum += childNodes[i].clientHeight + parseInt(getComputedStyle(childNodes[i]).marginTop)
      }
      
      if (parent.childNodes.length === _index) {
        // 最后一个元素
        _height = (parentHeight - sum) / 2
      } else {
        _height = (parentHeight - sum + parseInt(getComputedStyle(childNodes[_index]).marginTop)) / 5
      }
    }

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
              style={{height: `${height}px`, lineHeight: `${height}px`}}
              data-alt={id} 
              key={id} 
              className={`empty_placeholder ${isMovingDom ? 'show' : id === 'placeholder_0_0_0' ? 'show' : ''}`}
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