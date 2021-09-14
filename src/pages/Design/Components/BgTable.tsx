import React, { useEffect, useState, memo } from 'react'

import './index.less'

interface BgTableProps {
  width: number
  height: number
}

const BgTable: React.SFC<BgTableProps> = (props) => {
  const { width, height } = props;
  const [referTo, setReferTo] = useState<number>(20)
  
  useEffect(() => {

  }, [])

  return (
    <div className='bgTable'>
      <table cellPadding="0" cellSpacing="0" >
        <tbody>
          {
            new Array(Math.ceil(height / referTo)).fill(null).map((_, n) => {
              return (
                <tr key={`bg-ul-${n}`}>
                  {
                    new Array(Math.ceil(width / referTo)).fill(null).map((_, m) => {
                      return <td data-alt='bg_td' key={`bg-li-${m}`} style={{ width: `${referTo}px`}}/>
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default memo(BgTable)
