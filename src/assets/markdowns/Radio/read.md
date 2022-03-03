### Radio/Radio.Button

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">className</td><td width="35%">单选框线样式类</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">checked</td><td width="35%">指定当前是否选中</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">defaultChecked</td><td width="35%">初始是否选中</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">style</td><td width="35%">分割线样式对象</td><td width="35%">CSSProperties</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">disabled</td><td width="35%">禁用 Radio</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">value</td><td width="35%">根据 value 进行比较，判断是否选中</td><td width="35%">any</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>

### RadioGroup

</br>
单选框组合，用于包裹一组 Radio。
</br>

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">className</td><td width="35%">单选框线样式类</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">buttonStyle</td><td width="35%">RadioButton 的风格样式，目前有描边和填色两种风格</td><td width="35%">outline | solid</td><td width="15%">outline</td>
    </tr>
    <tr>
      <td width="15%">defaultValue</td><td width="35%">默认选中的值</td><td width="35%">any</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">style</td><td width="35%">分割线样式对象</td><td width="35%">CSSProperties</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">disabled</td><td width="35%">禁用 Radio</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">value</td><td width="35%">用于设置当前选中的值</td><td width="35%">any</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onChange</td><td width="35%">选项变化时的回调函数</td><td width="35%">function(e:Event)</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">optionType</td><td width="35%">用于设置 Radio options 类型</td><td width="35%">default | button</td><td width="15%">default</td>
    </tr>
    <tr>
      <td width="15%">options</td><td width="35%">以配置形式设置子元素</td><td width="35%">string[] | Array<{ label: string value: string disabled?: boolean }></td><td width="15%">--</td>
    </tr>
  </tbody>
</table>
