```tsx
import React, { useState } from 'reaact';
import { Upload } from 'winkey-ui-react';

const Demo:React.SFC = () => {
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
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
  };

  const handleChange = ({ fileList }) => {
    setFileList(JSON.parse(JSON.stringify(fileList)));
  }

  const uploadButton = (
    <div>
      {loading ? <i className='iconfont wk-icon-loading-solid-round' /> : <i className='iconfont wk-icon-add' />}
      <div>Upload</div>
    </div>
  );

  return (
     <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture-card"
      fileList={fileList1}
      onPreview={handlePreview}
      onChange={handleChange}
    >
      {fileList.length >= 8 ? null : uploadButton}
    </Upload>
  )
}

return Demo;
```