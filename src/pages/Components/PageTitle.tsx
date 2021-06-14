import React from 'react';

import './index.less';

interface PageTitleProps {
  title: string;
  description: string;
}

const PageTitle: React.SFC<PageTitleProps> = (props) => {
  const { title, description } = props;

  return (
    <section className='pageTitleContainer'>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  )
}

export default PageTitle;