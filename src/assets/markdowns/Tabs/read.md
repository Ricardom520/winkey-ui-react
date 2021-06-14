### Tabs

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">className</td><td width="35%">单选框线样式类</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">activeKey</td><td width="35%">当前激活 tab 面板的 key</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">addIcon</td><td width="35%">自定义添加按钮</td><td width="35%">ReactNode</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">style</td><td width="35%">分割线样式对象</td><td width="35%">CSSProperties</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">defaultActiveKey</td><td width="35%">初始化选中面板的 key，如果没有设置 activeKey</td><td width="35%">string</td><td width="15%">第一个面板</td>
    </tr>
    <tr>
      <td width="15%">size</td><td width="35%">大小，提供 large default 和 small 三种大小</td><td width="35%">string</td><td width="15%">default</td>
    </tr>
    <tr>
      <td width="15%">onChange</td><td width="35%">切换面板的回调</td><td width="35%">function(activeKey) {}</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>

### Tabs.TabPane

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">tab</td><td width="35%">选项卡头显示文字</td><td width="35%">ReactNode</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">key</td><td width="35%">对应 activeKey</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">disabled</td><td width="35%">禁用</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
  </tbody>
</table>