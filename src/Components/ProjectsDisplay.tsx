import Card from "./Card.tsx"
import { CardProps } from '../types/index.ts';
import projectData from "../assets/mock-project-data.json"

export default function ProjectsDisplay() {
  return (
    <div id="projects" className="m-auto my-16 flex flex-col items-center">
      <h3 className="text-3xl font-bold text-center">My Projects</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1">
      {projectData.map((item: CardProps, index: number)=>(
        <Card key={index} imgURL={item.imgURL} title={item.title} description={item.description} githubURL={item.githubURL}></Card>
        ))}
      </div>
    </div>
  )
}