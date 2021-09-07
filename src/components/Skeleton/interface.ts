export interface SkeletonProps {
  avatar?: boolean;
  paragraph?: boolean | SkeletonParagraphProps;
  active?: boolean;
}

export interface SkeletonParagraphProps {
  rows?: number,
  width?: number | string | Array<number | string>
}