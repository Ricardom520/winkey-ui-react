export interface UploadProps {
  name?: string;
  action?: string;
  headers?: {
    [props: string]: string
  },
  onChange?: (info: onChangeProps) => void;
  onRemove?: (file: UploadFile, index: number) => void;
  listType?: 'text' | 'picture' | 'picture-card';
  className?: string;
  showUploadList?: boolean;
  beforeUpload?:(file?: {
    type?: string,
    size?: number,
  }) => boolean;
  defaultFileList?: UploadFile[];
  fileList?: UploadFile[];
  onPreview?: (file: UploadFile) => void;
}

interface onChangeProps {
  file: UploadFile,
  fileList: UploadFile[]
}

export interface UploadState {
  fileList: UploadFile[],
  processFileList: UploadFile[],
}

export interface UploadFile {
  status?: 'uploading' | 'done' | 'error' | string,
  name?: string,
  percent?: number,
  lastModified?: string,
  lastModifiedDate?: number,
  size?: number,
  type?: string,
  webkitRelativePath?: string,
  originFileObj?: File;
  url?: string;
  response?: any;
  uid?: string | number;
}