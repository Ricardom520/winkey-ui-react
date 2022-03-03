### List

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
      <td width="15%">dataSource</td><td width="35%">列表数据源</td><td width="35%">any[]</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">style</td><td width="35%">分割线样式对象</td><td width="35%">CSSProperties</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">header</td><td width="35%">列表头部</td><td width="35%">ReactNode</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">itemLayout</td><td width="35%">设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">renderItem</td><td width="35%">当使用 dataSource 时，可以用 renderItem 自定义渲染列表项</td><td width="35%">(item) => ReactNode</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">size</td><td width="35%">list 的尺寸</td><td width="35%">default | large | small</td><td width="15%">default</td>
    </tr>
    <tr>
      <td width="15%">split</td><td width="35%">是否展示分割线</td><td width="35%">boolean</td><td width="15%">true</td>
    </tr>
  </tbody>
</table>

### List.Item

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">className</td><td width="35%">分割线样式类</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">style</td><td width="35%">分割线样式对象</td><td width="35%">CSSProperties</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">extra</td><td width="35%">额外内容,</td><td width="35%">ReactNode</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">name</td><td width="35%">list ID</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">required</td><td width="35%">展示红点,(使用与移动端列表)</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
  </tbody>
</table>

### List.Item.Meta

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">avatar</td><td width="35%">列表元素的图标</td><td width="35%">ReactNode</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">description</td><td width="35%">列表元素的描述内容</td><td width="35%">ReactNode</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">title</td><td width="35%">列表元素的标题</td><td width="35%">ReactNode</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>
