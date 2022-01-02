import React, { useEffect } from 'react'

import { HighlightCode } from "@/tool/func";
import { Tree } from '@/components'
import PageTitle from "../PageTitle";
import IntroduceBox from "../IntroduceBox";
import {
  treeData1
} from './data'
import TreeBaseMd from '@/assets/markdowns/Tree/base.md'

const TreePage: React.FC = () => {
  const onSelect1 = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck1 = (checkedKeys: React.Key[], info: any) => {
    console.log('onCheck', checkedKeys, info);
  };

  useEffect(() => {
    HighlightCode();
  }, []);

  return (
    <div>
      <PageTitle title="Tree树形控件" description="多层次的结构列表。" />

      <IntroduceBox
        height={1110}
        title="基本"
        description="最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。"
        demo={
          <div style={{ marginBottom: "20px" }}>
            <Tree
              checkable
              defaultExpandedKeys={['0-0-0', '0-0-1']}
              defaultSelectedKeys={['0-0-0', '0-0-1']}
              defaultCheckedKeys={['0-0-0', '0-0-1']}
              onSelect={onSelect1}
              onCheck={onCheck1}
              treeData={treeData1}
            />
          </div>
        }
        markdown={
          <div
            className="show-html"
            dangerouslySetInnerHTML={{ __html: TreeBaseMd.html }}
          />
        }
      />
    </div>
  )
}

export default TreePage