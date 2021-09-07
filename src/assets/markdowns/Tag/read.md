### Tag

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">className</td><td width="35%">单选框线样式类</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">action</td><td width="35%">上传的地址</td><td width="35%">string</td><td width="15%">
      --</td>
    </tr>
    <tr>
      <td width="15%">beforeUpload</td><td width="35%">上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）；也可以返回 Upload.LIST_IGNORE，此时列表中将不展示此文件。 注意：IE9 不支持该方法</td><td width="35%">(file, fileList) => boolean | Promise<File> | Upload.LIST_IGNORE</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">style</td><td width="35%">样式对象</td><td width="35%">CSSProperties</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">defaultFileList</td><td width="35%">默认已经上传的文件列表</td><td width="35%">	object[]</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">fileList</td><td width="35%">已经上传的文件列表（受控），使用此参数时，如果遇到 onChange 只调用一次的问题</td><td width="35%">UploadFile[]</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">listType</td><td width="35%">上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card</td><td width="35%">text | picture | picture-card</td><td width="15%">text</td>
    </tr>
    <tr>
      <td width="15%">name</td><td width="35%">发到后台的文件参数名</td><td width="35%">string</td><td width="15%">file</td>
    </tr>
    <tr>
      <td width="15%">onChange</td><td width="35%">上传文件改变时的状态</td><td width="35%">function</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onPreview</td><td width="35%">点击文件链接或预览图标时的回调</td><td width="35%">function(file)</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onRemove</td><td width="35%">点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除</td><td width="35%">function(file): boolean | Promise</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">showUploadList</td><td width="35%">是否展示文件列表, 可设为一个对象，用于单独设定 showPreviewIcon, showRemoveIcon, showDownloadIcon, removeIcon 和 downloadIcon</td><td width="35%">boolean </td><td width="15%">true</td>
    </tr>
  </tbody>
</table>

### Tag.CheckableTag

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">checked</td><td width="35%">设置标签的选中状态</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">onChange</td><td width="35%">点击标签时触发的回调</td><td width="35%">(checked) => void</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>