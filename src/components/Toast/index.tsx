import React from 'react'
import Toast, { ToastProps } from './Toast'

interface IToastOptions {
  duration: number
}

const SHORT = 3
const options: IToastOptions = {
  duration: SHORT
}
let toastInstance: any = null

function getInstance(props: ToastProps, callback: (notification: any) => void) {
  if (toastInstance) {
    toastInstance.destroy()
    toastInstance = null
  }
  Toast.newInstance(props, (notification: any) => {
    return callback && callback(notification)
  })
}

function notice(
  message: string | React.ReactNode,
  icon: any,
  duration = options.duration,
  onClose?: () => void
) {
  function close() {
    if (toastInstance) {
      console.log(toastInstance)
      toastInstance.destroy()
      toastInstance = null
    }
    if (onClose) {
      onClose()
    }
  }

  getInstance(
    {
      message,
      icon,
      duration,
      onClose: close
    },
    (notification: any) => {
      toastInstance = notification
    }
  )
}

export default {
  show(message: string | React.ReactNode, duration?: number, onClose?: () => void) {
    return notice(message, null, duration, onClose)
  },
  success(message: string | React.ReactNode, duration?: number, onClose?: () => void) {
    return notice(message, 'success', duration, onClose)
  },
  error(message: string | React.ReactNode, duration?: number, onClose?: () => void) {
    return notice(message, 'error', duration, onClose)
  },
  loading(message: string | React.ReactNode, duration?: number, onClose?: () => void) {
    return notice(message, 'loading', duration, onClose)
  },
  close() {
    if (toastInstance) {
      toastInstance.destroy()
      toastInstance = null
    }
  }
}
