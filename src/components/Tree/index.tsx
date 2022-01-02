import React, { Component } from 'react'

import { TreeProps, TreeState, TreeDataPrivateStruce } from './interface'
import './index.less'

class Tree extends Component<TreeProps, TreeState> {
  static defaultProps = {
    treeData: []
  }

  constructor(props) {
    super(props)

    this.state = {
      checkedKeys: [],
      treeData: [],
      expandedKeys: []
    }
  }

  componentDidMount() {
    const { defaultCheckedKeys, checkedKeys, treeData, defaultExpandedKeys, expandedKeys } = this.props

    if (defaultCheckedKeys || checkedKeys) {
      this.setState({
        checkedKeys: checkedKeys || defaultCheckedKeys,
      })
    }

    if (defaultCheckedKeys || expandedKeys) {
      this.setState({
        expandedKeys: expandedKeys || defaultCheckedKeys
      })
    }

    this.initTreeData(treeData)
  }

  componentWillReceiveProps(next) {
    const { defaultCheckedKeys, checkedKeys, treeData, defaultExpandedKeys, expandedKeys } = next

    if (defaultCheckedKeys || checkedKeys) {
      this.setState({
        checkedKeys: checkedKeys || defaultCheckedKeys,
      })
    }

    if (defaultCheckedKeys || expandedKeys) {
      this.setState({
        expandedKeys: expandedKeys || defaultCheckedKeys
      })
    }

    this.initTreeData(treeData)
  }

  initTreeData = (treeData) => {
    if (treeData && treeData.length) {
      this.setState({
        treeData
      }, () => {
        treeData.forEach((item: TreeDataPrivateStruce) => {
          this.deepTreeData(item)
        })
      })
    }
  }

  deepTreeData = (info: TreeDataPrivateStruce) => {
    const { checkedKeys, treeData, expandedKeys } = this.state
    let checkedNums = 0
    let expandedNums = 0

    info.checked = info.checked || checkedKeys.includes(info.key) || false

    if (info.children) {
      info.children.forEach((item: TreeDataPrivateStruce) => {
        item.parent = info
        if (info.checked && !info.disabled) {
          item.checked = true
        }

        if (checkedKeys.includes(item.key)) {
          checkedNums++
        }
        if (expandedKeys.includes(item.key)) {
          expandedNums++
        }
  
        this.deepTreeData(item)
      })

      if (checkedNums === info.children.length) {
        checkedKeys.push(info.key)
        info.checked = true
        info.indeterminate = false
      } else if (checkedNums > 0) {
        info.checked = false
        info.indeterminate = true
      } else {
        info.indeterminate = false
      }
    }

    info.expanded = expandedKeys.includes(info.key) || expandedNums > 0

    this.setState({
      treeData: Object.assign([], treeData),
      checkedKeys
    })
  }

  handleClickSwitcher = (info: TreeDataPrivateStruce) => {
    const { treeData }  = this.state
    info.expanded = !info.expanded

    this.setState({
      treeData
    })
  }

  handleClickCheckbox = (info: TreeDataPrivateStruce) => {
    const { onCheck } = this.props
    let { treeData, checkedKeys } = this.state

    info.checked = !info.checked

    const initParent = (data: TreeDataPrivateStruce) => {
      if (data.parent) {
        const parent = data.parent
        let childrenCheckedNums = 0
        let childrenDisabledNums = 0

        parent.children.forEach((item: TreeDataPrivateStruce) => {
          if (item.checked && !item.disabled) {
            childrenCheckedNums++
          }
          if (item.disabled) {
            childrenDisabledNums++
          }
        })

        if (childrenCheckedNums === parent.children.length - childrenDisabledNums) {
          checkedKeys.push(parent.key)
          parent.checked = true
          parent.indeterminate = false
        } else if (childrenCheckedNums > 0) {
          parent.checked = false
          parent.indeterminate = true
        } else {
          parent.checked = false
          parent.indeterminate = false

          checkedKeys = checkedKeys.filter((key: React.Key) => {
            return key !== parent.key
          })
        }

        initParent(parent)
      }

      return
    }

    initParent(info)

    const initChilren = (data: TreeDataPrivateStruce) => {
      if (data.children) {
        data.children.forEach((item: TreeDataPrivateStruce) => {
          if (!item.disabled) {
            item.checked = data.checked
            
            if (item.checked) {
              checkedKeys.push(item.key)
            } else {
              checkedKeys = checkedKeys.filter((key: React.Key) => {
                return key !== item.key
              })
            }

            initChilren(item)
          }
        })
      }
    }

    initChilren(info)

    if (!info.checked) {
      checkedKeys = checkedKeys.filter((key: React.Key) => {
        return key !== info.key
      })
    } else {
      checkedKeys.push(info.key)
    }

    if (onCheck) {
      onCheck(checkedKeys, info)
    }

    this.setState({
      treeData,
      checkedKeys
    })
  }

  initTreeItem = (arr: TreeDataPrivateStruce[], index: number, checked?: boolean) => {
    const { checkedKeys } = this.state
    const { checkable } = this.props

    return (
      arr.map((item: TreeDataPrivateStruce) => {
        return (
          <React.Fragment key={item.key}>
            <div 
              className={
                'wk-tree-treenode' +
                ' wk-tree-treenode-switcher-open' +
                ' wk-tree-treenode-leaf-last' +
                (item.disabled ? ' wk-tree-treenode-disabled' : '') +
                (item.children && item.children.length !== 0 ? '' : ' wk-tree-treenode-close')
              }
            >
              <span className='wk-tree-indent'>
                {
                  new Array(index).fill(0).map((_, n: number) => {
                    return (
                      <span
                        key={`${item.key}_wk-tree-indent_${n}`}
                        className={
                          'wk-tree-indent-unit wk-tree-indent-unit-start' + 
                          (n === index - 1 ? ' wk-tree-indent-unit-end' : '')
                        }
                      />
                    )
                  })
                }
              </span>
              <span 
                className={
                  'wk-tree-switcher' +
                  (item.children && item.children.length !== 0 ? '' : ' wk-tree-switcher-noop') +
                  (item.expanded ? ' wk-tree-switcher_open' : '')
                }
                onClick={() => this.handleClickSwitcher(item)}
              >
                {
                  item.children && item.children.length !== 0 && <i className='wk-tree-switcher-icon' />
                }
              </span>
              {
                checkable && 
                <span 
                  className={
                    'wk-tree-checkbox' +
                    (item.checked ? ' wk-tree-checkbox-checked' : '') +
                    (item.indeterminate ? ' wk-tree-checkbox-indeterminate' : '') +
                    (item.disabled || item.disableCheckbox ? ' wk-tree-checkbox-disabled' : '')
                  }
                  onClick={() => this.handleClickCheckbox(item)}
                >
                  <span className='wk-tree-checkbox-inner'></span>
                </span>
              }
              <span
                className={
                  'wk-tree-node-content-wrapper' +
                  ' wk-tree-node-content-wrapper-open'
                }
              >
                <span>{item.title}</span>
              </span>
            </div>
            {
              item.children && item.expanded &&
              this.initTreeItem(item.children, index + 1, checkedKeys.includes(item.key) && !item.disabled)
            }
          </React.Fragment>
        )
      })
    )
  }

  render() {
    const { treeData } = this.state

    return (
      <div 
        className={
          'wk-tree'
        }
      >
        <div>
          <input 
            tabIndex={0} 
            style={{ 
              display: 'flex',
              width: '0px',
              height: '0px',
              padding: '0px',
              margin: '0px',
              border: '0px',
              opacity: 0,
              overflow: 'hidden'
            }}
          />
        </div>
        <div
          className='wk-tree-treenode'
          aria-hidden
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            visibility: 'hidden',
            height: '0px',
            overflow: 'hidden'
          }}
        >
          <div className='wk-tree-indent'>
            <div className='wk-tree-indent-unit'></div>
          </div>
        </div>
        <div 
          className='wk-tree-list'
          style={{
            position: 'relative'
          }}
        >
          <div className='wk-tree-list-holder'>
            <div>
              <div 
                className='wk-tree-list-holder-inner'
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {this.initTreeItem(treeData, 0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } 
}

export default Tree