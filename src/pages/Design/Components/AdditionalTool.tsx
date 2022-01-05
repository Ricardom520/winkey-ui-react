import React from 'react'
import './index.less'

interface AdditionalToolProps {
  id: string
  onDelete: (id: string) => void
}

const AdditionalTool: React.SFC<AdditionalToolProps> = (props) => {
  const { id, onDelete } = props

  const handleDelete = () => {
    console.log(id)
    onDelete(id)
  } 

  return (
    <>
      <span className='additionalTool additionalTool-move'>
        <i className='iconfont wk-icon-add' />
      </span>
      <span className='additionalTool additionalTool-delete' onClick={handleDelete}>
        <i className='iconfont wk-icon-dustbin'/>
      </span>
    </>
  )
}

export default AdditionalTool