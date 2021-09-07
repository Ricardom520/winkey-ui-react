import React, { useEffect, useState } from 'react';
import { Button, Upload, message } from '@/components';

import { HighlightCode } from '@/tool/func';
import UploadBaseMd from '@/assets/markdowns/Upload/base.md';
import UploadPictureCardMd from '@/assets/markdowns/Upload/pictureCard.md';
import UploadDefaultListMd from '@/assets/markdowns/Upload/defaultList.md';
import UploadPictureWardMd from '@/assets/markdowns/Upload/pictureWard.md';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';

const UploadPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [fileList1, setFileList1] = useState<any[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);
  const [fileList2, setFileList2] = useState<any[]>([]);
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const props1 = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
  }

  const getBase64 = (img, callback?) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setLoading(false),
        setImageUrl(imageUrl)
      });
    }
  };

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    // this.setState({
    //   previewImage: file.url || file.preview,
    //   previewVisible: true,
    //   previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    // });
  };

  const handleChange1 = ({ fileList }) => {
    setFileList1(JSON.parse(JSON.stringify(fileList)));
  }

  const handleChange2 = (info) => {
    const { file } = info;
    if (file.status === 'done') {
      info.fileList.forEach((i) => {
        fileList2.push({
          url: i.response.data.uri,
          status: 'done',
        })
      })
      console.log(fileList2);
      setFileList2(JSON.parse(JSON.stringify(fileList2)));
    }
    // setFileList2(JSON.parse(JSON.stringify(fileList)));
  }

  const uploadButton = (
    <div>
      {loading ? <i className='iconfont wk-icon-loading-solid-round' /> : <i className='iconfont wk-icon-add' />}
      <div>Upload</div>
    </div>
  );

  const uploadButton1 = (
    <div>
      <i className='iconfont wk-icon-add' />
      <div>Upload</div>
    </div>
  );

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{paddingBottom: '20px'}}>
      <PageTitle title="Upload上传" description="文件选择上传和拖拽上传控件。" />
    
      <IntroduceBox
        height={600}
        title="点击上传"
        description="经典款式，用户点击按钮弹出文件选择框。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Upload {...props}>
              <Button icon={<i className='iconfont wk-icon-upload'/>}>Click to Upload</Button>
            </Upload>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: UploadBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={1150}
        title="用户头像"
        description="点击上传用户头像，并使用 beforeUpload 限制用户上传的图片格式和大小。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: UploadPictureCardMd.html }} />
        }
      />

      <IntroduceBox
        height={850}
        title="已上传的文件列表"
        description="使用 defaultFileList 设置已上传的内容。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Upload {...props1}>
              <Button icon={<i className='iconfont wk-icon-upload'/>}>Click to Upload</Button>
            </Upload>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: UploadDefaultListMd.html }} />
        }
      />

      <IntroduceBox
        height={1530}
        title="照片墙"
        description="用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList1}
              onPreview={handlePreview}
              onChange={handleChange1}
            >
              {fileList1.length >= 8 ? null : uploadButton1}
            </Upload>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: UploadPictureWardMd.html }} />
        }
      />

      <IntroduceBox
        height={1530}
        title="照片墙"
        description="用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList2}
              onPreview={handlePreview}
              onChange={handleChange2}
            >
              {fileList1.length >= 8 ? null : uploadButton1}
            </Upload>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: UploadPictureWardMd.html }} />
        }
      />
    </div>
  )
}

export default UploadPage;