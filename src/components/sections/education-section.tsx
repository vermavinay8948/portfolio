
import { educationData } from '@/data/portfolio-data';
import { SectionContainer } from '@/components/shared/section-container';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, Star, CalendarClock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function EducationSection() {
  const { institution, degree, cgpa, duration, location } = educationData;

  return (
    <SectionContainer id="education">
      <SectionTitle>Education</SectionTitle>
      <Card className={cn(
        "shadow-lg",
        "hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-in-out"
      )}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl text-primary">{institution}</CardTitle>
            <GraduationCap className="w-8 h-8 text-primary/70" />
          </div>
          <CardDescription className="text-lg text-foreground/80">{degree}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="flex items-center text-md text-foreground/70">
            <Star className="w-5 h-5 mr-2 text-primary/80" />
            <strong>CGPA:</strong>&nbsp;{cgpa}
          </p>
          <p className="flex items-center text-md text-foreground/70">
            <CalendarClock className="w-5 h-5 mr-2 text-primary/80" />
            <strong>Duration:</strong>&nbsp;{duration}
          </p>
          <p className="flex items-center text-md text-foreground/70">
            <MapPin className="w-5 h-5 mr-2 text-primary/80" />
            <strong>Location:</strong>&nbsp;{location}
          </p>
        </CardContent>
      </Card>
    </SectionContainer>
  );
}
