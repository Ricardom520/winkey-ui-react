import React, { Component } from 'react'

import { TreeProps, TreeDataStruce, TreeState } from './interface'
import './index.less'

class Tree extends Component<TreeProps, TreeState> {
  static defaultProps = {
    treeData: []
  }

  constructor(props) {
    super(props)

    this.state = {
      checkedKeys: []
    }
  }

  componentDidMount() {
    const { defaultCheckedKeys, checkedKeys } = this.props

    if (defaultCheckedKeys || checkedKeys) {
      this.setState({
        checkedKeys: checkedKeys || defaultCheckedKeys
      })
    }
  }

  componentWillReceiveProps(next) {
    const { defaultCheckedKeys, checkedKeys } = next

    if (defaultCheckedKeys || checkedKeys) {
      this.setState({
        checkedKeys: checkedKeys || defaultCheckedKeys
      })
    }
  }

  initTreeItem = (arr: TreeDataStruce[], index: number) => {
    const { checkedKeys } = this.state
    console.log(checkedKeys)
    return (
      arr.map((item: TreeDataStruce) => {
        return (
          <>
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
                  ' wk-tree-switcher_open'
                }
              >
                {
                  item.children && item.children.length !== 0 && <i className='wk-tree-switcher-icon' />
                }
              </span>
              <span 
                className={
                  'wk-tree-checkbox' +
                  (checkedKeys.includes(item.key) ? ' wk-tree-checkbox-checked' : '') +
                  (item.disabled ? ' wk-tree-checkbox-disabled' : '')
                }
              >
                <span className='wk-tree-checkbox-inner'></span>
              </span>
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
              item.children &&
              this.initTreeItem(item.children, index + 1)
            }
          </>
        )
      })
    )
  }

  render() {
    const { treeData } = this.props
    console.log(treeData)
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