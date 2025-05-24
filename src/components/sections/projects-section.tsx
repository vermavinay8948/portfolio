
import { projectsData } from '@/data/portfolio-data';
import { SectionContainer } from '@/components/shared/section-container';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FolderKanban, CheckCircle, CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <Card key={index} className={cn(
            "shadow-lg",
            "hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-in-out"
          )}>
            <CardHeader>
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <CardTitle className="text-2xl text-primary">{project.name}</CardTitle>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="w-5 h-5 text-primary/70" />
                  <span>{project.duration}</span>
                </div>
              </div>
               <div className="flex items-center gap-2 mt-1">
                 <FolderKanban className="w-5 h-5 text-primary/70" />
                 <CardDescription className="text-md text-foreground/80">Tech Stack</CardDescription>
               </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-none">
                {project.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/90">
                     <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
