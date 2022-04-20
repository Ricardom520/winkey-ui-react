import request from '@/tool/request'

/**
 * 导出代码文件
 */
export async function fetchExportCodeFile(params: {
  code: string
  filename: string
}) {
  return request('/sys/v1/winkeyServer/code/exportCode', {
    method: 'POST',
    data: params,
    responseType: 'blob'
  })
}

/**
 * 初始化代码
 */
export async function fetchInitCode() {
  return request('/sys/v1/winkeyServer/code/initCode')
}

/**
 * 保存代码
 */
export async function fetchSaveCode(params) {
  return request('/sys/v1/winkeyServer/code/saveCode', {
    method: 'POST',
    data: params,
  })
}