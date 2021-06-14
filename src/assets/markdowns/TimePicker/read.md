### TimePicker

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">className</td><td width="35%">单选框线样式类</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">allowClear</td><td width="35%">是否展示清除按钮</td><td width="35%">boolean</td><td width="15%">true</td>
    </tr>
    <tr>
      <td width="15%">bordered</td><td width="35%">是否有边框</td><td width="35%">boolean</td><td width="15%">true</td>
    </tr>
    <tr>
      <td width="15%">defaultValue</td><td width="35%">默认时间</td><td width="35%">moment</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">disabled</td><td width="35%">禁用全部操作</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">format</td><td width="35%">展示的时间格式</td><td width="35%">string</td><td width="15%">HH:mm:ss</td>
    </tr>
    <tr>
      <td width="15%">placeholder</td><td width="35%">没有值的时候显示的内容</td><td width="35%">string</td><td width="15%">请选择时间</td>
    </tr>
    <tr>
      <td width="15%">hourStep</td><td width="35%">小时选项间隔</td><td width="35%">number</td><td width="15%">1</td>
    </tr>
    <tr>
      <td width="15%">minuteStep</td><td width="35%">分钟选项间隔</td><td width="35%">number</td><td width="15%">1</td>
    </tr>
    <tr>
      <td width="15%">secondStep</td><td width="35%">秒选项间隔</td><td width="35%">number</td><td width="15%">1</td>
    </tr>
    <tr>
      <td width="15%">showNow</td><td width="35%">面板是否显示“此刻”按钮（只应用于PC端）</td><td width="35%">boolean</td><td width="15%">true</td>
    </tr>
    <tr>
      <td width="15%">showSuffixIcon</td><td width="35%">是否显示后缀Icon（只应用于PC端）</td><td width="35%">boolean</td><td width="15%">true</td>
    </tr>
    <tr>
      <td width="15%">showNow</td><td width="35%">面板是否显示“此刻”按钮（只应用于PC端）</td><td width="35%">boolean</td><td width="15%">true</td>
    </tr>
    <tr>
      <td width="15%">showFooter</td><td width="35%">是否隐藏底部（只应用于PC端，建议用于列选择模式）</td><td width="35%">boolean</td><td width="15%">true</td>
    </tr>
    <tr>
      <td width="15%">isColChoose</td><td width="35%">列选择模式，可不用底部确定（只应用于PC端）</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">value</td><td width="35%">当前时间</td><td width="35%">moment</td><td width="15%">true</td>
    </tr>
    <tr>
      <td width="15%">onChange</td><td width="35%">时间发生变化的回调</td><td width="35%">function(time: moment, timeString: string): void</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">size</td><td width="35%">大小（只应用于PC端）</td><td width="35%">"small" | "large"</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">isMobile</td><td width="35%">是否是手机模式</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">dismissText</td><td width="35%">取消文案（只应用于移动端）</td><td width="35%">string</td><td width="15%">取消</td>
    </tr>
    <tr>
      <td width="15%">okText</td><td width="35%">确定文案（只应用于移动端）</td><td width="35%">string</td><td width="15%">确定</td>
    </tr>
    <tr>
      <td width="15%">title</td><td width="35%">标题文案（只应用于移动端）</td><td width="35%">string</td><td width="15%">选择时间</td>
    </tr>
    <tr>
      <td width="15%">onOk</td><td width="35%">确定事件（只应用于移动端）</td><td width="35%">(val)=>void</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>