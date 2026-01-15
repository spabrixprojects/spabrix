import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: "Our Portfolio | Spabrix Web Design & Marketing Case Studies Kerala",
  description: "Explore our portfolio of high-performance websites and successful marketing campaigns for Kerala businesses. See how Spabrix delivers tangible results for clients in Malappuram, Calicut, and Kochi.",
  alternates: {
    canonical: 'https://spabrix.in/projects',
  },
  keywords: ['spabrix portfolio', 'web design case studies kerala', 'website projects malappuram', 'digital marketing results'],
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
