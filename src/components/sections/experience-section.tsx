
import { experienceData } from '@/data/portfolio-data';
import { SectionContainer } from '@/components/shared/section-container';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <Card key={index} className={cn(
            "shadow-lg",
            "hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-in-out"
          )}>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <CardTitle className="text-2xl text-primary">{exp.role}</CardTitle>
                  <CardDescription className="text-lg text-foreground/80">{exp.company} - {exp.location}</CardDescription>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="w-5 h-5 text-primary/70" />
                  <span>{exp.duration}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-none">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/90">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>{responsibility}</span>
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
