### Select

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">className</td><td width="35%">分割线样式类</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">bordered</td><td width="35%">是否展示边框</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">allowClear</td><td width="35%">支持清除</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">style</td><td width="35%">分割线样式对象</td><td width="35%">CSSProperties</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">defaultValue</td><td width="35%">指定默认选中的条目</td><td width="35%">string | string[]
number | number[]
LabeledValue | LabeledValue[]</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">disabled</td><td width="35%">是否禁用</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">dropdownClassName</td><td width="35%">下拉菜单的 className 属性</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">size</td><td width="35%">select 的尺寸</td><td width="35%">default | large | small</td><td width="15%">default</td>
    </tr>
    <tr>
      <td width="15%">dropdownStyle</td><td width="35%">下拉菜单的 style 属性</td><td width="35%">CSSProperties</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">loading</td><td width="35%">加载中状态</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">mode</td><td width="35%">设置 Select 的模式为多选</td><td width="35%">multiple </td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">options</td><td width="35%">数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能</td><td width="35%">{ label, value }[] </td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">removeIcon</td><td width="35%">自定义的多选框清除图标</td><td width="35%">ReactNode</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">searchValue</td><td width="35%">控制搜索文本</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">size</td><td width="35%">选择框大小</td><td width="35%">large | default | small</td><td width="15%">default</td>
    </tr>
    <tr>
      <td width="15%">value</td><td width="35%">指定当前选中的条目</td><td width="35%">string | string[]
number | number[]
LabeledValue | LabeledValue[]</td><td width="15%">default</td>
    </tr>
    <tr>
      <td width="15%">onChange</td><td width="35%">选中 option，或 input 的 value 变化时，调用此函数</td><td width="35%">function(value, option:Option | Array<Option>)</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onClear</td><td width="35%">清除内容时回调</td><td width="35%">function</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onSearch</td><td width="35%">文本框值变化时回调</td><td width="35%">function(value: string)</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onBlur</td><td width="35%">失去焦点时回调</td><td width="35%">function</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onFocus</td><td width="35%">获得焦点时回调</td><td width="35%">function</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>
