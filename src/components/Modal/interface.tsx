import { ReactNode, CSSProperties } from "react";

export interface ModalProps {
  title?: ReactNode;
  visible: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  width?: string | number;
  footer?: ReactNode;
  okText?: string;
  cancelText?: string;
  className?: string;
  style?: CSSProperties;
}