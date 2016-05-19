import React from 'react';
import { Banner } from '../components/Banner.jsx';
import { TitleH3 } from '../components/TitleH3.jsx';
import { BreadCrumbs } from '../components/Breadcrumbs.jsx';
import { SmallInput } from '../components/SmallInput.jsx';
import { LargeTextarea } from '../components/LargeTextarea.jsx';
import { SmallButton } from '../components/SmallButton.jsx';

export const Post = () => {
  return (
    <div>
      <h1>Holi</h1>
      <Banner />
      <BreadCrumbs />
      <TitleH3 />
      <SmallInput />
      <LargeTextarea />
      <SmallButton />
    </div>
  );
};
