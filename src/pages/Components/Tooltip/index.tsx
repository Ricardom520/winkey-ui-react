import React, { useEffect } from 'react'

import { HighlightCode } from "@/tool/func";
import { Tooltip } from "@/components";
import PageTitle from "../PageTitle";
import IntroduceBox from "../IntroduceBox";
import TooltipBaseMd from '@/assets/markdowns/Tooltip/base.md'

const TooltipPage: React.FC = () => {
  useEffect(() => {
    HighlightCode();
  }, []);

  return (
    <div>
      <PageTitle title="Tooltip文字提示" description="简单的文字提示气泡框。" />

      <IntroduceBox
        height={275}
        title="基本"
        description="最简单的用法。"
        demo={
          <div style={{ marginBottom: "20px" }}>
            <Tooltip title="prompt text">
              <span>Tooltip will show on mouse enter.</span>
            </Tooltip>
          </div>
        }
        markdown={
          <div
            className="show-html"
            dangerouslySetInnerHTML={{ __html: TooltipBaseMd.html }}
          />
        }
      />
    </div>
  )
}

export default TooltipPage
