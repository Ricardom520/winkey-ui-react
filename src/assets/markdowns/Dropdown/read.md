### API

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">disabled</td><td width="35%">菜单是否禁用</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">overlay</td><td width="35%">菜单</td><td width="35%">Menu | () => Menu</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">style</td><td width="35%">样式对象</td><td width="35%">CSSProperties</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">overlayClassName</td><td width="35%">下拉根元素的类名称</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">overlayStyle</td><td width="35%">下拉根元素的样式</td><td width="35%">CSSProperties</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">trigger</td><td width="35%">触发下拉的行为, 移动端不支持 hover</td><td width="35%">Array<click|hover|contextMenu>	</td><td width="15%">[hover]</td>
    </tr>
    <tr>
      <td width="15%">visible</td><td width="35%">菜单是否显示</td><td width="35%">boolean</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onVisibleChange</td><td width="35%">菜单显示状态改变时调用，参数为 visible</td><td width="35%">(visible: boolean) => void	2</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>