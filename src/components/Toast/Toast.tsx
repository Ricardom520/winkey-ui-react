import React from 'react';
import ReactDOM from 'react-dom';
import "./index.less"

export type onClose = true;

export interface ToastProps {
    icon?: string;
    message: string | React.ReactNode,
    duration?: number;
    onClose: () => void;
}

interface ToastState {
    show: boolean;
}

const icons = {
    info: 'wk-icon-sigh wk-toast-notice-info',
    success: 'wk-icon-check wk-toast-notice-success',
    error: 'wk-icon-fail wk-toast-notice-error',
    warning: 'wk-icon-sigh wk-toast-notice-warning',
    loading: "wk-icon-loading-solid-round wk-toast-notice-loading"
  }

class Toast extends React.PureComponent<ToastProps, ToastState> {
    static defaultProps = {
        duration: 1.5,
    }

    private closeTime: number;

    static newInstance: (properties: ToastProps, callback: any) => void;

    constructor(props: ToastProps) {
        super(props);
        this.state = {
            show: true,
        }
    }

    close = ()=> {
        this.setState({
            show: false,
        });
        this.clearCloseTime();
        this.props.onClose();
    } 

    clearCloseTime = ()=> {
        if (this.closeTime) {
            clearTimeout(this.closeTime);
            this.closeTime = -1;
        }
    }

    startCloseTime = () => {
        const { duration } = this.props;
        if (duration) {
            this.closeTime = window.setTimeout(() => {
                this.close();
            }, duration * 1000)
        }
    }

    componentDidMount() {
        this.startCloseTime();
    }

    componentWillUnmount() {
        this.clearCloseTime();
    }

    render() {
        const { icon, message } = this.props;
        const { show } = this.state;

        return (
            <>
            {
                show && 
                <div className="wk-toast">
                    <div className="wk-toast-notice">
                        { icon && 
                          <i className={`wk-toast-notice-icon iconfont ${icons[icon]}`}></i>
                        }
                        <div className="wk-toast-message">{message}</div>
                    </div>
                </div>
            }
            </>
        )
    } 
}

export default Toast;

Toast.newInstance = (properties, callback) => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    let called = false;
    function ref (instance: any) {
        if(called) {
            return;
        }
        called = true;
        callback({
            component: instance,
            destroy() {
                ReactDOM.unmountComponentAtNode(div);
                div && div.parentNode && div.parentNode.removeChild(div);
            }
        })
    }

    ReactDOM.render(<Toast {...properties} ref={ref} />, div)
}
