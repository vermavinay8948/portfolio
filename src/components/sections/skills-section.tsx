
import { skillsData } from '@/data/portfolio-data';
import type { SkillItem, SkillCategory } from '@/data/portfolio-data';
import { SectionContainer } from '@/components/shared/section-container';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layers } from 'lucide-react'; // Default icon if none provided
import { cn } from '@/lib/utils';

export function SkillsSection() {
  return (
    <SectionContainer id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category: SkillCategory) => {
          const CategoryIcon = category.categoryIcon || Layers; // Use specific icon or default to Layers
          return (
            <Card key={category.categoryName} className={cn(
              "shadow-lg",
              "hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-in-out"
            )}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-primary">{category.categoryName}</CardTitle>
                  <CategoryIcon className="w-6 h-6 text-primary/70" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skillItem: SkillItem) => {
                    const SkillIconComponent = skillItem.icon;
                    return (
                      <Badge
                        key={skillItem.name}
                        variant="secondary"
                        className="text-sm bg-primary/10 text-primary hover:bg-primary/20 flex items-center"
                      >
                        {SkillIconComponent && <SkillIconComponent className="mr-1.5 h-3.5 w-3.5" />}
                        {skillItem.name}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}
