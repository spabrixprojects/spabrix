import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: "Our Projects | Spabrix Portfolio",
  description: "View our portfolio of successful web development and branding projects. See how Spabrix helps businesses in Malappuram and beyond succeed online.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
