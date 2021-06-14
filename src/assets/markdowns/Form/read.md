### Form

<table>
  <tbody>
    <tr>
      <th  width="15%">参数</th><th width="35%">说明</th><th width="35%">类型</th><th width="15%">默认值</th>
    </tr>
    <tr>
      <td width="15%">className</td><td width="35%">单选框线样式类</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">form</td><td width="35%">经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建</td><td width="35%">FormInstance</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">initialValues</td><td width="35%">表单默认值，只有初始化以及重置时生效</td><td width="35%">object</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">labelAlign</td><td width="35%">label 标签的文本对齐方式</td><td width="35%">left | right | center</td><td width="15%">right</td>
    </tr>
    <tr>
      <td width="15%">layout</td><td width="35%">表单布局</td><td width="35%">horizontal | vertical | inline</td><td width="15%">horizontal	</td>
    </tr>
    <tr>
      <td width="15%">name</td><td width="35%">表单名称，会作为表单字段 id 前缀使用</td><td width="35%">string</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">size</td><td width="35%">设置字段组件的尺寸（仅限 winkey 组件）</td><td width="35%">small | middle | large</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">wrapperCol</td><td width="35%">需要为输入控件设置布局样式时，使用该属性，用法同 labelCol</td><td width="35%">object</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onFinish</td><td width="35%">提交表单且数据验证成功后回调事件</td><td width="35%">function(values)</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onFinishFailed</td><td width="35%">提交表单且数据验证失败后回调事件</td><td width="35%">function({ values, errorFields, outOfDate })</td><td width="15%">--</td>
    </tr>
    <tr>
      <td width="15%">onValuesChange</td><td width="35%">字段值更新时触发回调事件</td><td width="35%">function(changedValues, allValues)</td><td width="15%">--</td>
    </tr>
  </tbody>
</table>