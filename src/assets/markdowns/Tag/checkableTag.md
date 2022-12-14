```tsx
import React from 'reaact'
import { Tag } from 'winkey-ui-react'

const { CheckableTag } = Tag
const tagsData = ['Movies', 'Books', 'Music', 'Sports']

const Demo: React.SFC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['Books'])

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    console.log('You are interested in: ', nextSelectedTags)
    setSelectedTags(nextSelectedTags)
  }

  return (
    <>
      <span style={{ marginRight: 8 }}>Categories:</span>
      {tagsData.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) => this.handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  )
}

return Demo
```
