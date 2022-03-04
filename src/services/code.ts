import request from '@/tool/request'

/**
 * 导出代码文件
 */
export async function fetchExportCodeFile(params: {
  code: string
}) {
  return request('/v1/winkeyServer/code/exportCode', {
    method: 'POST',
    data: params
  })
}