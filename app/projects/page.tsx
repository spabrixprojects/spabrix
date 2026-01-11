import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: "Our Work | Spabrix Portfolio & Case Studies",
  description: "Explore our portfolio of high-performance websites and successful marketing campaigns. See how Spabrix delivers tangible results for clients.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
