import React, { useEffect, useRef, useState } from 'react';

import { HighlightCode } from '@/tool/func';
import { Tag, Divider, Button, Input } from '@/components';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import TagBaseMd from '@/assets/markdowns/Tag/base.md';
import TagColorMd from '@/assets/markdowns/Tag/color.md';
import TagColorVisibleMd from '@/assets/markdowns/Tag/visible.md';
import TagCheckableTagMd from '@/assets/markdowns/Tag/checkableTag.md';
import TagAddReduceMd from '@/assets/markdowns/Tag/addReduce.md';
import TagIconMd from '@/assets/markdowns/Tag/icon.md';
import TagStatusMd from '@/assets/markdowns/Tag/status.md';
import TagReadMd from '@/assets/markdowns/Tag/read.md';
import './index.less';

const { CheckableTag } = Tag;

const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

const TagPage: React.FC = () => {
  const saveInputRef: any = useRef();
  const [visible, setVisible] = useState<boolean>(true);
  const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);
  const [tags, setTags] = useState<string[]>(['Unremovable', 'Tag 2', 'Tag 3']);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const log = (e) => {
    console.log(e);
  }
  
  const preventDefault = (e) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }
  
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);

    setSelectedTags(nextSelectedTags)
  }

  const handleClose = removedTag => {
    const tagsClose = tags.filter(tag => tag !== removedTag);
 
    setTags(tagsClose)
  };

  const showInput = async () => {
    await setInputVisible(true)
    
    saveInputRef.current.onFocus();
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let tagsCopy = Object.assign([], tags);

    if (inputValue && tags.indexOf(inputValue) === -1) {
      tagsCopy = [...tags, inputValue];
    }

    setTags(tagsCopy);
    setInputVisible(false);
    setInputValue('');
  };

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{paddingBottom: '20px'}}>
      <PageTitle title="Tag??????" description="????????????????????????????????????" />
     
      <IntroduceBox
        height={600}
        title="??????"
        description="?????????????????????????????????????????? closable ????????????????????????????????????????????? onClose ?????????"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Tag>Tag 1</Tag>
            <Tag>
              <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
            </Tag>
            <Tag closable onClose={log}>
              Tag 2
            </Tag>
            <Tag closable onClose={preventDefault}>
              Prevent Default
            </Tag>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: TagBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={650}
        title="????????????"
        description="?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Divider orientation="left">Presets</Divider>
              <div>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
              </div>
              <Divider orientation="left">Custom</Divider>
              <div>
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
              </div>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: TagColorMd.html }} />
        }
      />

      <IntroduceBox
        height={480}
        title="??????????????????"
        description="?????? visible ???????????????????????????"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Tag
              closable
              visible={visible}
              onClose={() => setVisible(false)}
              style={{marginBottom: '10px'}}
            >
              Movies
            </Tag>
            <br />
            <Button size="small" onClick={() => setVisible(!visible)}>
              Toggle
            </Button>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: TagColorVisibleMd.html }} />
        }
      />

      <IntroduceBox
        height={630}
        title="???????????????"
        description="????????? CheckableTag ???????????? Checkbox ???????????????????????????????????????"
        demo={
          <div style={{marginBottom: '20px'}}>
            <span style={{ marginRight: 8 }}>Categories:</span>
              {tagsData.map(tag => (
                <CheckableTag
                  key={tag}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={checked => handleChange(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: TagCheckableTagMd.html }} />
        }
      />

      <IntroduceBox
        height={1800}
        title="?????????????????????"
        description="????????????????????????????????????????????????????????????"
        demo={
          <div style={{marginBottom: '20px'}}>
            {tags.map((tag, index) => {
              const isLongTag = tag.length > 20;

              const tagElem = (
                <Tag
                  className="edit-tag"
                  key={tag}
                  closable={index !== 0}
                  onClose={() => handleClose(tag)}
                >
                  <span>
                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                  </span>
                </Tag>
              );
              return tagElem;
            })}
            {inputVisible && (
              <Input
                ref={saveInputRef}
                type="text"
                size="small"
                className="tag-item-input"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputConfirm}
                onPressEnter={handleInputConfirm}
              />
            )}
            {!inputVisible && (
              <Tag className="site-tag-plus" onClick={showInput}>
                <span>+</span> New Tag
              </Tag>
            )}
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: TagAddReduceMd.html }} />
        }
      />

      <IntroduceBox
        height={480}
        title="????????????"
        description="???????????? Tag ????????? Icon ?????????????????? icon ???????????????????????? Tag ????????? Icon ?????????"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Tag icon={<i className="iconfont wk-icon-twitter" style={{fontSize: '12px', marginRight: '5px'}}/>} color="#55acee">
              Twitter
            </Tag>
            <Tag icon="wk-icon-youtube" color="#cd201f">
              Youtube
            </Tag>
            <Tag icon={<i className="iconfont wk-icon-facebook" style={{marginRight: '5px'}}/>} color="#3b5999">
              Facebook
            </Tag>
            <Tag icon={<i className="iconfont wk-icon-linkedin" style={{marginRight: '5px'}}/>} color="#55acee">
              LinkedIn
            </Tag>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: TagIconMd.html }} />
        }
      />

      <IntroduceBox
        height={400}
        title="?????????????????????"
        description="????????????????????????????????????????????? color ??? success??? processing???error???default???warning ???????????????????????????"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Divider orientation="left">Without icon</Divider>
            <div>
              <Tag color="success">success</Tag>
              <Tag color="processing">processing</Tag>
              <Tag color="error">error</Tag>
              <Tag color="warning">warning</Tag>
              <Tag color="default">default</Tag>
            </div>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: TagStatusMd.html }} />
        }
      />

      <IntroduceBox
        title="API"
        table={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: TagReadMd.html }} />
        }
      />
    </div>
  )
}

export default TagPage;