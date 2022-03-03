### Checkbox

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">defaultChecked</td><td width="35%">初始是否选中</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">checked</td><td width="35%">指定当前是否选中</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">disabled</td><td width="35%">失效状态</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">onChange</td><td width="35%">变化时回调函数</td><td width="35%">function(e:Event)</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>

### Checkbox Group

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">defaultValue</td><td width="35%">默认选中的选项</td><td width="35%">string[]</td><td width="15%">[]</td>
    </tr>
    <tr>
      <td width="15%">disabled</td><td width="35%">整组失效</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">name</td><td width="35%">CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">options</td><td width="35%">指定可选项</td><td width="35%">string[] | Option[]</td><td width="15%">[]</td>
    </tr>
    <tr>
      <td width="15%">value</td><td width="35%">指定选中的选项</td><td width="35%">string[]</td><td width="15%">[]</td>
    </tr>
    <tr>
      <td width="15%">onChange</td><td width="35%">变化时回调函数</td><td width="35%">function(checkedValue)</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>

### option

    interface Options {
    label: string;
    value: string;
    }
