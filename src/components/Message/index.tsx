import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

function createNofication() {
  const div = document.createElement('div');
  div.style.position = "absolute";
  div.style.top = "0px";
  div.style.left = "0px";
  div.style.width = "100%";
  document.body.appendChild(div);

  const notification: any = ReactDOM.render(<Message/>, div)
 
  return {
    addNotice(notice) {
      return notification.addNotice(notice);
    },
    destory() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  }
}

let notification;

const notice = (type, content, duration = 2000, onClose) => {
  if (!notification) {
    notification = createNofication()
  }
  return notification.addNotice({ type, content, duration, onClose })
}

export default {
  info(content?, duration?, onClose?) {
    return notice('info', content, duration, onClose)
  },
  success(content = '成功', duration?, onClose?) {
    return notice('success', content, duration, onClose)
  },
  error(content = '错误', duration?, onClose?) {
    return notice('error', content, duration, onClose)
  },
  warning(content = '警告', duration?, onClose?) {
    return notice('warning', content, duration, onClose)
  },
  loading(content = 'Action in progress..', duration?, onClose?) {
    return notice('loading', content, duration, onClose)
  }
}