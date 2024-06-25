'use client';
import React, { useEffect, useState } from 'react';
import AboutUs from './AboutUs';
import DOMPurify from 'dompurify';

const ClientCompAbout = ({ dataSettings, response }) => {
  const [sanitizedContent, setSanitizedContent] = useState('');

  useEffect(() => {
    const sanitized = DOMPurify.sanitize(response?.content);
    setSanitizedContent(sanitized);
  }, [response?.content]);

  const title = response?.title;
  const image = response?.image;
  const video = response?.youtube_url;

  return (
    <AboutUs
      dataSettings={dataSettings}
      title={title}
      content={sanitizedContent}
      image={image}
      video={video}
    />
  );
};

export default ClientCompAbout;
