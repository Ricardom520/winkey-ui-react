### Steps

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">className</td><td width="35%">步骤条类名</td><td width="35%">string</td><td width="15%">-</td>
    </tr>
    <tr>
      <td width="15%">current</td><td width="35%">指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态</td><td width="35%">number</td><td width="15%">0</td>
    </tr>
    <tr>
      <td width="15%">direction</td><td width="35%">指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向</td><td width="35%">"horizontal" | "vertical"</td><td width="15%">horizontal</td>
    </tr>
    <tr>
      <td width="15%">progressDot</td><td width="35%">点状步骤条，可以设置为一个 function，labelPlacement 将强制为 vertical</td><td width="35%">boolean | (iconDot, {index, status, title, description}) => ReactNode</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">size</td><td width="35%">指定大小，目前支持普通（default）和迷你（small）</td><td width="35%">default | small</td><td width="15%">default</td>
    </tr>
    <tr>
      <td width="15%">status</td><td width="35%">指定当前步骤的状态，可选 wait process finish error</td><td width="35%">wait | process | finish | error</td><td width="15%">process</td>
    </tr>
    <tr>
      <td width="15%">onChange</td><td width="35%">点击切换步骤时触发</td><td width="35%">(current) => void</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>

### Steps.Step

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">description</td><td width="35%">步骤的详情描述，可选</td><td width="35%">ReactNode</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">disabled</td><td width="35%">禁用点击</td><td width="35%">boolean</td><td width="15%">false</td>
    </tr>
    <tr>
      <td width="15%">status</td><td width="35%">指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error</td><td width="35%">"wait" | "process" | "finish" | "error"</td><td width="15%">process</td>
    </tr>
    <tr>
      <td width="15%">subTitle</td><td width="35%">子标题</td><td width="35%">ReactNode</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">title</td><td width="35%">标题</td><td width="35%">ReactNode</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>
