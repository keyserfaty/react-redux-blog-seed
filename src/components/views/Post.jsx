import React from 'react';
import { Banner } from '../components/Banner.jsx';
import { TitleH3 } from '../components/TitleH3.jsx';
import { SmallInput } from '../components/SmallInput.jsx';
import { LargeTextarea } from '../components/LargeTextarea.jsx';
import { SmallButton } from '../components/SmallButton.jsx';

export const Post = () => {
  const breadCrumbsLinks = [
    {
      name: 'Editor',
      href: '/editor',
    }, {
      name: 'Post',
      href: '/post',
    },
  ];

  return (
    <div>
      <Banner links={breadCrumbsLinks} />
      <TitleH3 title="Add a new Post" />
      <SmallInput />
      <LargeTextarea />
      <SmallButton value="Publish" />
    </div>
  );
};
