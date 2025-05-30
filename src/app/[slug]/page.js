import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { slug } = params;
  
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
  
    const data = pageData[slug];
    if (!data) {
        notFound(); // shows 404 page
      }
      
  
    return {
      title: data.title,
      description: data.description,
    };
  }
  