import { ProjectNav } from "@/components/project-nav"
import { mockProjects } from "@/lib/data"
import { notFound } from "next/navigation"

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const project = mockProjects.find(p => p.id === params.id)
  if (!project) {
    notFound()
  }

  return (
    <div>
      <div className="border-b bg-card">
        <div className="container py-4">
          <h1 className="text-2xl font-bold font-headline">{project.name}</h1>
          <p className="text-muted-foreground">{project.id}</p>
        </div>
      </div>
      <ProjectNav projectId={params.id} />
      <div className="container py-8">
        {children}
      </div>
    </div>
  )
}
