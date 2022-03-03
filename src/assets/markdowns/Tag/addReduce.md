```tsx
import React, { useState } from 'reaact'
import { Tag, Input } from 'winkey-ui-react'

/**
 * .tag-item-input {
 *    width: 80px;
 * }
 */

const Demo: React.SFC = () => {
  const saveInputRef: any = useRef()
  const [tags, setTags] = useState<string[]>(['Unremovable', 'Tag 2', 'Tag 3'])
  const [inputVisible, setInputVisible] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  const handleClose = (removedTag) => {
    const tagsClose = tags.filter((tag) => tag !== removedTag)

    setTags(tagsClose)
  }

  const showInput = async () => {
    await setInputVisible(true)

    saveInputRef.current.onFocus()
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleInputConfirm = () => {
    let tagsCopy = Object.assign([], tags)

    if (inputValue && tags.indexOf(inputValue) === -1) {
      tagsCopy = [...tags, inputValue]
    }

    setTags(tagsCopy)
    setInputVisible(false)
    setInputValue('')
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      {tags.map((tag, index) => {
        const isLongTag = tag.length > 20

        const tagElem = (
          <Tag
            className='edit-tag'
            key={tag}
            closable={index !== 0}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                if (index !== 0) {
                  setEditInputIndex(index)
                  setEditInputValue(tag)

                  e.preventDefault()
                }
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        )
        return tagElem
      })}
      {inputVisible && (
        <Input
          ref={saveInputRef}
          type='text'
          size='small'
          className='tag-item-input'
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag className='site-tag-plus' onClick={showInput}>
          <span>+</span> New Tag
        </Tag>
      )}
    </div>
  )
}

return Demo
```
