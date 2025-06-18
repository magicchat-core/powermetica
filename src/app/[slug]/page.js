// src/app/[slug]/page.js

import { notFound } from 'next/navigation';

const pageData = {
  'dating-app-development': {
    title: 'Dating App Development',
    description: 'Custom dating apps built for user engagement and performance.',
  },
  'website-development': {
    title: 'Website Development',
    description: 'Responsive, SEO-optimized websites for your brand.',
  },
  'technology': {
    title: 'technology',
    description: 'Responsive, SEO-optimized websites for your brand.',
  },
};

// ✅ Required for static export
export async function generateStaticParams() {
  return Object.keys(pageData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = pageData[slug];

  if (!data) notFound();

  return {
    title: data.title,
    description: data.description,
  };
}

export default function Page({ params }) {
  const data = pageData[params.slug];

  if (!data) return notFound();

  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </main>
  );
}
