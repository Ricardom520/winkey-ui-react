import React, { Component, ReactElement } from 'react';

import {
  UploadProps,
  UploadState,
  UploadFile
} from './interface';
import './index.less';

const processStatus = {
  done: 'success',
  error: 'error',
  uploading: 'normal'
}

class Upload extends Component<UploadProps, UploadState> {
  input: HTMLInputElement;

  static defaultProps = {
    listType: 'text',
    className: '',
    name: 'file',
    showUploadList: true,
  }

  constructor(props) {
    super(props);

    this.state = {
      fileList: [],
      processFileList: [],
    }
  }

  componentDidMount() {
    const { defaultFileList, fileList } = this.props;

    if (fileList) {
      this.setState({
        fileList: [...fileList]
      })
    } else if (defaultFileList) {
      this.setState({
        fileList: [...defaultFileList]
      })
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { fileList } = nextProps;

    if (fileList) {
      this.setState({
        fileList: [...fileList],
      })
    }
  }

  uploadFile = () => {
    const { beforeUpload } = this.props;

    this.input.click();
    this.input.onchange = (e: any) => {
      const file = e.target.files[0];

      if (beforeUpload && beforeUpload(file)) {
        this.sendFile(file);
      } else if (!beforeUpload) {
        this.sendFile(file);
      }
      
      this.input.value = null;
    }
  }

  sendFile = (file) => {
    const { onChange, action, headers, name } = this.props;
    const { fileList, processFileList } = this.state;
    const processFileIndex = processFileList.length;
    const formData = new FormData();
    formData.append(name, file);
    
    const xhr = new XMLHttpRequest();

    const files: UploadFile = {
      status: 'uploading',
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      name: file.name,
      size: file.size,
      type: file.type,
      webkitRelativePath: file.webkitRelativePath,
      originFileObj: file,
      percent: 0,
    };

    processFileList[processFileIndex] = files;

    this.setState({
      processFileList
    })

    xhr.open('post', action)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        const response = JSON.parse(xhr.response);
        const files: any = {
          status: xhr.status === 200 ? 'done' : 'error',
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          name: file.name,
          size: file.size,
          type: file.type,
          webkitRelativePath: file.webkitRelativePath,
          originFileObj: file,
          response,
          url: response.url,
        };

        if (xhr.status === 200) {
          fileList.push(files);
          processFileList.splice(processFileIndex, 1);

          this.setState({
            fileList,
            processFileList
          })
        } else {
          processFileList[processFileIndex] = files;
          
          this.setState({
            processFileList
          })
        }

        if (onChange) {
          onChange({
            file: files,
            fileList,
          })
        }
      }
    }

    xhr.upload.onprogress = (event) => {
      if (event.type === 'progress') {
        const files: UploadFile = {
          status: 'uploading',
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          name: file.name,
          size: file.size,
          type: file.type,
          webkitRelativePath: file.webkitRelativePath,
          percent: event.loaded / event.total * 100,
          originFileObj: file,
        };

        if (onChange) {
          onChange({
            file: files,
            fileList,
          })
        }

        processFileList[processFileIndex] = files

        this.setState({
          processFileList
        })
      }
    }

    for (let item in headers) {
      xhr.setRequestHeader(item, headers[item])
    }

    if (onChange) {
      onChange({
        file: files,
        fileList,
      })
    }

    xhr.send(formData);
  }

  handleDeleteFile = (index) => {
    const { fileList } = this.state;
    const { onRemove, onChange } = this.props;
    const file: any = fileList.splice(index, 1);

    if (onRemove) {
      onRemove(file[0], index);
    }

    this.setState({
      fileList
    })
  }

  handlePreview = (file) => {
    const { onPreview } = this.props;
  
    if (onPreview) {
      onPreview(file);
    }
  }

  render() {
    const { children, listType, className, showUploadList, onPreview } = this.props;
    const { fileList, processFileList } = this.state;

    return (
      <>
        {
          listType === 'text' &&
          <>
            <div 
              className={
                'wk-upload' +
                ' wk-upload-select wk-upload-select-text'
              }
            >
              <span role='button' className='wk-upload' tabIndex={0} onClick={this.uploadFile}>
                <input ref={input=>this.input = input} accept='' type='file' style={{display: 'none'}} />
                {
                  children && React.Children.map(children, (child: ReactElement) => {
                    return React.cloneElement(child, {
                      
                    })
                  })
                }
              </span>
            </div>
            {
              showUploadList && (fileList.length > 0 || processFileList.length > 0) &&
              <div
                className='wk-upload-list wk-upload-list-text'
              >
                <div
                  className='wk-upload-list-text-container'
                >
                  {
                    processFileList.length > 0 &&
                    processFileList.map((i: UploadFile) => {
                      return (
                        <>
                          <div
                            className={
                            'wk-upload-list-item wk-upload-list-item-list-type-text' +
                            ` wk-upload-list-item-upload` 
                          }>
                            <div
                              className={
                                'wk-upload-list-item-info'
                              }
                            >
                              <span className='wk-upload-span'>
                                <div className='wk-upload-text-icon'>
                                  <i className='iconfont wk-icon-link'/>
                                </div>
                                <span className='wk-upload-list-item-name'>{i.name}</span>
                              </span>
                            </div>
                            <div className='wk-upload-list-item-progress'>
                              <div className={
                                'wk-progress wk-progress-line wk-progress-default' +
                                ` wk-progress-status-${processStatus[i.status]}`
                              }>
                                <div className='wk-progress-outer'>
                                  <div className='wk-progress-inner'>
                                    <div className='wk-progress-bg' style={{width: `${i.percent}%`, height: '2px'}}/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>       
                        </>
                      )
                    })
                  }
                  {
                    fileList.map(((i: UploadFile, n: number) => {
                      return (
                        <div 
                          key={`${i.name}-${n}`}
                          className={
                            'wk-upload-list-item wk-upload-list-item-list-type-text' +
                            ` wk-upload-list-item-${i.status}` 
                          }>
                          <div
                            className={
                              'wk-upload-list-item-info'
                            }
                          >
                            <span className='wk-upload-span'>
                              <div className='wk-upload-text-icon'>
                                <i className='iconfont wk-icon-link'/>
                              </div>
                              {
                                i.url &&
                                <a target='_blank' href={i.url} className='wk-upload-list-item-name'>{i.name}</a>
                              }
                              {
                                !i.url &&
                                <span className='wk-upload-list-item-name'>{i.name}</span>
                              }
                              <span className='wk-upload-list-item-card-actions' onClick={() => this.handleDeleteFile(n)}>
                                <i className='iconfont wk-icon-dustbin'/>
                              </span>
                            </span>
                          </div>
                        </div>
                      )
                    }))
                  }
                </div>
              </div>
            }
          </>
        }
        {
          listType === 'picture-card' &&
          <span
            className={
              `wk-upload-picture-wrapper ${className}`
            }
          >
            <div
              className={
                'wk-upload-list wk-upload-list-picture-card'
              }
            >
              {
                showUploadList && fileList.map((i: UploadFile, n: number) => {
                  return (
                    <div key={`${i.name}-${n}`} className='wk-upload-list-picture-card-container'>
                      <div
                        className={
                          'wk-upload-list-item' +
                          ` wk-upload-list-item-${i.status}` +
                          ' wk-upload-list-item-list-type-picture-card'
                        }
                      >
                        <div className='wk-upload-list-item-info'>
                          <span className='wk-upload-span'>
                            {
                              i.url && i.status === 'done' &&
                              <a href={i.url} target='_blank' className='wk-upload-list-item-thumbnail'>
                                <img src={i.url} className='wk-upload-list-item-image' />
                              </a>
                            }
                            {
                              i.status === 'uploading' &&
                              <div className='wk-upload-list-item-thumbnail'>
                                文件上传中
                              </div> 
                            }
                            {
                              !i.url &&
                              <div className='wk-upload-list-item-thumbnail wk-upload-list-item-file'>
                                <i className='iconfont wk-icon-picture' style={{fontSize: '20px'}}/>
                                <span className='wk-upload-list-item-name'>image.png</span>
                              </div> 
                            }
                          </span>
                        </div>
                        {
                          i.status === 'uploading' &&
                          <div className='wk-upload-list-item-progress'>
                            <div className='wk-progress wk-progress-line wk-progress-status-normal wk-progress-default'>
                              <div className='wk-progress-outer'>
                                <div className='wk-progress-inner'>
                                  <div className='wk-progress-bg' style={{width: `${i.percent}%`, height: '2px'}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                        <span className='wk-upload-list-item-actions'>
                          {
                            onPreview && 
                            <a href={i.url} target='_blank' rel='noopener noreferrer' onClick={() => this.handlePreview(i)}>
                              <i className='iconfont wk-icon-open-eyes'/>
                            </a>
                          }
                          <i className='iconfont wk-icon-dustbin' onClick={() => this.handleDeleteFile(n)}/>
                        </span>
                      </div>
                    </div>     
                  )
                })
              }
              {
                showUploadList && processFileList.map((i: UploadFile, n: number) => {
                  return (
                    <div key={`${i.name}-${n}`} className='wk-upload-list-picture-card-container'>
                      <div
                        className={
                          'wk-upload-list-item' +
                          ` wk-upload-list-item-${i.status}` +
                          ' wk-upload-list-item-list-type-picture-card'
                        }
                      >
                        <div className='wk-upload-list-item-info'>
                          <span className='wk-upload-span'>
                            {
                              i.status === 'uploading' &&
                              <div className='wk-upload-list-item-thumbnail'>
                                文件上传中
                              </div> 
                            }
                          </span>
                        </div>
                        <div className='wk-upload-list-item-progress'>
                          <div className='wk-progress wk-progress-line wk-progress-status-normal wk-progress-default'>
                            <div className='wk-progress-outer'>
                              <div className='wk-progress-inner'>
                                <div className='wk-progress-bg' style={{width: `${i.percent}%`, height: '2px'}} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>     
                  )
                })
              }
              {
                children &&
                <div
                  className='wk-upload wk-upload-select wk-upload-select-picture-card'
                >
                  <span tabIndex={0} className='wk-upload' role='button' onClick={this.uploadFile}>
                    <input ref={input=>this.input = input} type='file' accept='' style={{display: 'none'}} />
                    {
                      children
                    }
                  </span>
                </div>
              }
            </div>
          </span>
        }
      </>
    )
  }
}

export default Upload;