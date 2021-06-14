### Input

<table>
  <tbody>
    <tr>
      <th  width="15%">成员</th><th width="45%">说明</th><th width="25%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">addonAfter</td><td width="45%">带标签的 input，设置后置标签</td><td width="25%">ReactNode | string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">addonBefore</td><td width="45%">带标签的 input，设置前置标签</td><td width="25%">ReactNode | string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">allowClear</td><td width="45%">可以点击清除图标删除内容</td><td width="25%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">bordered</td><td width="45%">是否有边框</td><td width="25%">boolean</td><td width="15%">true</td>
    </tr>
    <tr>
      <td width="15%">defaultValue</td><td width="45%">输入框默认内容</td><td width="25%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">className</td><td width="45%">image 样式别名</td><td width="25%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">style</td><td width="45%">image 样式</td><td width="25%">CSSProperties</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">isMobile</td><td width="45%">是否为移动端状态</td><td width="25%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">maxLength</td><td width="45%">最大长度</td><td width="25%">number</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">prefix</td><td width="45%">带有前缀图标的 input</td><td width="25%">ReactNode | string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">size</td><td width="45%">控件大小。注：标准表单内的输入框大小限制为 large</td><td width="25%">large | middle | small</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">type</td><td width="45%">声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 Input.TextArea 代替 type="textarea")</td><td width="25%">string</td><td width="15%">text</td>
    </tr>
    <tr>
      <td width="15%">value</td><td width="45%">输入框内容</td><td width="25%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onChange</td><td width="45%">输入框内容变化时的回调</td><td width="25%">function(e)</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onPressEnter</td><td width="45%">按下回车的回调</td><td width="25%">function(e)</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onBlur</td><td width="45%">输入框失焦时的回调</td><td width="25%">function(e)</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onFoucs</td><td width="45%">输入框聚焦时的回调</td><td width="25%">function(e)</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>

### Input.Textarea

<table>
  <tbody>
    <tr>
      <th  width="15%">成员</th><th width="45%">说明</th><th width="25%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">allowClear</td><td width="45%">可以点击清除图标删除内容</td><td width="25%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">bordered</td><td width="45%">是否有边框</td><td width="25%">boolean</td><td width="15%">true</td>
    </tr>
    <tr>
      <td width="15%">defaultValue</td><td width="45%">输入框默认内容</td><td width="25%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">maxLength</td><td width="45%">内容最大长度</td><td width="25%">number</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">showCount</td><td width="45%">是否展示字数</td><td width="25%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">className</td><td width="45%">image 样式别名</td><td width="25%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">style</td><td width="45%">image 样式</td><td width="25%">CSSProperties</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">isMobile</td><td width="45%">是否为移动端状态</td><td width="25%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">value</td><td width="45%">输入框内容</td><td width="25%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onPressEnter</td><td width="45%">按下回车的回调</td><td width="25%">function(e)</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onChange</td><td width="45%">事件回调</td><td width="25%">function(e)</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onBlur</td><td width="45%">输入框失焦时的回调</td><td width="25%">function(e)</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onFoucs</td><td width="45%">输入框聚焦时的回调</td><td width="25%">function(e)</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>

### Input.Password

<table>
  <tbody>
    <tr>
      <th  width="15%">成员</th><th width="45%">说明</th><th width="25%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">iconRender</td><td width="45%">自定义切换按钮</td><td width="25%">(visible) => ReactNode</td><td width="15%">(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)</td>
    </tr>
  </tbody>
</table>