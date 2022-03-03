import React from 'react'
import classNames from 'classnames'
import { PickerViewTypes } from './PickerViewTypes'
import PickerViewMixin from './PickerViewMixin'

export interface IPickerViewProps {
  select: (...arg: any[]) => void
  doScrollingComplete: (...arg: any[]) => void
  computeChildIndex: (...arg: any[]) => void
}

interface PickerViewState {
  selectedValue
  selectedIndex
  selectedLabel
}

class PickerViewBox extends React.Component<IPickerViewProps & PickerViewTypes, PickerViewState> {
  private rootRef
  private maskRef
  private indicatorRef
  private contentRef
  private itemHeight
  private scrollValue

  static defaultProps = {
    prefixCls: 'wk-picker'
  }

  scrollHanders = (() => {
    let scrollY = -1
    let lastY = 0
    let startY = 0
    let scrollDisabed = false
    let isMoving = false

    const setTransform = (nodeStyle: CSSStyleDeclaration, value: any) => {
      nodeStyle.transform = value
      nodeStyle.webkitTransform = value
    }

    const setTransition = (nodeStyle: CSSStyleDeclaration, value: any) => {
      nodeStyle.transition = value
      nodeStyle.webkitTransition = value
    }

    const scrollTo = (_x, y, time = 0.3) => {
      if (scrollY !== y) {
        scrollY = y

        if (time && !this.props.noAnimate) {
          setTransition(this.contentRef.style, `cubic-bezier(0, 0, 0.2, 1.15) ${time}s`)
        }

        setTransform(this.contentRef.style, `translate3d(0, ${-y}px, 0)`)

        setTimeout(() => {
          this.scrollingComplete()

          if (this.contentRef) {
            setTransition(this.contentRef.style, '')
          }
        }, +time * 1000)
      }
    }

    const Velocity = ((minInterval = 30, maxInterval = 100) => {
      let _time = 0
      let _y = 0
      let _velocity = 0

      const recorder = {
        record: (y) => {
          const now = +new Date()
          _velocity = (y - _y) / (now - _time)

          if (now - _time >= minInterval) {
            _velocity = now - _time <= maxInterval ? _velocity : 0
            _y = y
            _time = now
          }
        },
        getVelocity: (y) => {
          if (y !== _y) {
            recorder.record(y)
          }

          return _velocity
        }
      }

      return recorder
    })()

    const onFinish = () => {
      isMoving = false
      let targetY = scrollY

      const height = ((this.props.children as any).length - 1) * this.itemHeight

      let time = 0.3

      const velocity = Velocity.getVelocity(targetY) * 4

      if (velocity) {
        targetY = velocity * 40 + targetY
        time = Math.abs(velocity) * 0.1
      }

      if (targetY % this.itemHeight !== 0) {
        targetY = Math.round(targetY / this.itemHeight) * this.itemHeight
      }

      if (targetY < 0) {
        targetY = 0
      } else if (targetY > height) {
        targetY = height
      }

      scrollTo(0, targetY, time < 0.3 ? 0.3 : time)
      this.onScrollChange()
    }

    const onStart = (y: number) => {
      if (scrollDisabed) {
        return
      }

      isMoving = true
      startY = y
      lastY = scrollY
    }

    const onMove = (y: number) => {
      if (scrollDisabed || !isMoving) {
        return
      }

      scrollY = lastY - y + startY
      Velocity.record(scrollY)

      this.onScrollChange()
      setTransform(this.contentRef.style, `translate3d(0, ${-scrollY}px, 0)`)
    }

    return {
      touchstart: (evt: React.TouchEvent<HTMLDivElement>) => onStart(evt.touches[0].pageY),
      mousedown: (evt: React.MouseEvent<HTMLDivElement>) => onStart(evt.pageY),
      touchmove: (evt: React.TouchEvent<HTMLDivElement>) => {
        evt.preventDefault()
        onMove(evt.touches[0].pageY)
      },
      mousemove: (evt: React.MouseEvent<HTMLDivElement>) => {
        evt.preventDefault()
        onMove(evt.pageY)
      },
      touchend: () => onFinish(),
      touchcancel: () => onFinish(),
      mouseup: () => onFinish(),
      getValue: () => {
        return scrollY
      },
      scrollTo,
      setDisabled: (disable: boolean = false) => {
        scrollDisabed = disable
      }
    }
  })()

  constructor(props) {
    super(props)

    let selectedValueState
    let selectedLabelState
    let selectedIndexState

    const { selectedValue, defaultSelectedValue } = this.props

    if ((selectedValue || defaultSelectedValue) !== undefined) {
      selectedValueState = selectedValue || defaultSelectedValue
      Array.prototype.slice.call(this.props.children).forEach((i, n) => {
        if (i.props.value === (selectedValue || defaultSelectedValue)) {
          selectedIndexState = n
          selectedLabelState = i.props.children
        }
      })
    } else {
      const children: any = React.Children.toArray(this.props.children)
      selectedValueState = children && children[0] && children[0].props.value
      selectedLabelState = children && children[0] && children[0].props.children
    }

    this.state = {
      selectedValue: selectedValueState,
      selectedIndex: selectedIndexState || 0,
      selectedLabel: selectedLabelState
    }
  }

  componentDidMount() {
    const { contentRef, indicatorRef, maskRef, rootRef } = this
    const rootHeight = rootRef.getBoundingClientRect().height
    const itemHeight = (this.itemHeight = indicatorRef.getBoundingClientRect().height)

    let num = Math.floor(rootHeight / itemHeight)

    if (num % 2 === 0) {
      num--
    }
    num--
    num /= 2

    contentRef.style.padding = `${itemHeight * num}px 0`
    indicatorRef.style.top = `${itemHeight * num}px`
    maskRef.style.backgroundSize = `100% ${itemHeight * num}px`

    this.scrollHanders.setDisabled(this.props.disabled)
    this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo)

    const passiveSupported = this.passiveSupported()
    const willPreventDefault = passiveSupported ? { passive: false } : false
    const willNotPreventDefault = passiveSupported ? { passive: true } : false

    Object.keys(this.scrollHanders).forEach((key) => {
      if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
        const pd = key.indexOf('move') >= 0 ? willPreventDefault : willNotPreventDefault
        ;(rootRef as HTMLDivElement).addEventListener(key, this.scrollHanders[key], pd as any)
      }
    })
  }

  componentWillUnmount() {
    Object.keys(this.scrollHanders).forEach((key) => {
      if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
        ;(this.rootRef as HTMLDivElement).removeEventListener(key, this.scrollHanders[key])
      }
    })
  }

  passiveSupported() {
    let passiveSupported = false

    try {
      const options = Object.defineProperty({}, 'passive', {
        get: () => {
          passiveSupported = true
        }
      })

      window.addEventListener('test', null as any, options)
    } catch (err) {}

    return passiveSupported
  }

  UNSAFE_componentWillReceiveProps(nextProps: IPickerViewProps & PickerViewTypes) {
    if ('selectedValue' in nextProps) {
      if (this.state.selectedValue !== nextProps.selectedValue) {
        this.setState(
          {
            selectedValue: nextProps.selectedValue
          },
          () => {
            this.props.select(
              nextProps.selectedValue,
              this.itemHeight,
              nextProps.noAnimate ? this.scrollToWithoutAnimation : this.scrollTo
            )
          }
        )
      }
    }

    if (nextProps.children.toString() !== this.props.children.toString()) {
      let selectedValueState
      let selectedLabelState

      const children: any = React.Children.toArray(nextProps.children)

      selectedValueState = children && children[0] && children[0].props.value
      selectedLabelState = children && children[0] && children[0].props.children

      this.state = {
        selectedValue: selectedValueState,
        selectedIndex: 0,
        selectedLabel: selectedLabelState
      }

      if (this.props.onValueChange) {
        this.props.onValueChange(selectedValueState, 0, selectedLabelState)
      }
    }

    this.scrollHanders.setDisabled(nextProps.disabled)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.selectedValue !== nextState.selectedValue ||
      this.props.children !== nextProps.children
    )
  }

  componentDidUpdate() {
    this.props.select(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation)
  }

  scrollTo = () => {
    const { children, selectedValue } = this.props

    let index: number = 0

    Array.prototype.slice.call(children).forEach((i, n) => {
      if (i.props.value === selectedValue) {
        index = n
      }
    })

    this.scrollHanders.scrollTo(0, index * this.itemHeight)
  }

  scrollToWithoutAnimation = (top) => {
    this.scrollHanders.scrollTo(0, top, 0)
  }

  fireValueChange = (selectedValue) => {
    if (selectedValue !== this.state.selectedValue) {
      if (!('selectedValue' in this.props)) {
        this.setState({
          selectedValue
        })
      }
    }

    if (this.props.onValueChange) {
      this.props.onValueChange(selectedValue, this.state.selectedIndex, this.state.selectedLabel)
    }
  }

  onScrollChange = () => {
    const top = this.scrollHanders.getValue()

    if (top >= 0) {
      const children: any = React.Children.toArray(this.props.children)
      const index: any = this.props.computeChildIndex(top, this.itemHeight, children.length)

      if (this.scrollValue !== index) {
        this.scrollValue = index
        const child: any = children[index]

        if (child && this.props.onScrollChange) {
          this.props.onScrollChange(child.props.value)
        } else if (!child && console.warn) {
          console.warn('child not found', children, index)
        }
      }

      this.setState({
        selectedIndex: index,
        selectedLabel: children[index].props.children
      })
    }
  }

  scrollingComplete = () => {
    const top = this.scrollHanders.getValue()

    if (top >= 0) {
      this.props.doScrollingComplete(top, this.itemHeight, this.fireValueChange)
    }
  }

  render() {
    const {
      className,
      prefixCls,
      style,
      indicatorClassName = '',
      indicatorStyle,
      children,
      itemStyle
    } = this.props

    const itemClassName = `${prefixCls}-item`
    const selectedItemClassName = `${itemClassName} ${prefixCls}-item-selected`

    const map = (item: any) => {
      const { className = '', style, value } = item.props
      const { selectedValue } = this.state

      return (
        <div
          style={{ ...itemStyle, ...style }}
          className={`${
            selectedValue === value ? selectedItemClassName : itemClassName
          } ${className}`}
          key={value}
        >
          {item.children || item.props.children}
        </div>
      )
    }

    const items = React.Children
      ? React.Children.map(children, map)
      : ([] as any[]).concat(children).map(map)

    const pickerViewCls = {
      [className as string]: !!className,
      [prefixCls as string]: true
    }

    return (
      <div className={classNames(pickerViewCls)} ref={(el) => (this.rootRef = el)} style={style}>
        <div className={`${prefixCls}-mask`} ref={(el) => (this.maskRef = el)} />
        <div
          className={`${prefixCls}-indicator ${indicatorClassName}`}
          ref={(el) => (this.indicatorRef = el)}
          style={indicatorStyle}
        />
        <div className={`${prefixCls}-content`} ref={(el) => (this.contentRef = el)}>
          {items}
        </div>
      </div>
    )
  }
}

export default PickerViewMixin(PickerViewBox)
