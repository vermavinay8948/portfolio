
import { contactData } from '@/data/portfolio-data';
import { Mail, Phone, Linkedin, ExternalLink, CalendarPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function HeroSection() {
  const { name, title, email, phone, linkedin, linkedinUser, intro } = contactData;
  const scheduleMeetLink = `https://calendar.google.com/calendar/u/0/r/eventedit?add=${email}&text=Meeting%20with%20${encodeURIComponent(name)}&details=Let's%20discuss%20a%20potential%20opportunity%20or%20collaboration.`;

  return (
    <section id="hero" className="bg-accent/50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary shadow-lg">
          <AvatarImage src={`https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=E6E6FA&color=4B0082&size=128&font-size=0.33&bold=true`} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          {name}
        </h1>
        <p className="text-xl sm:text-2xl text-foreground/80 mb-8">
          {title}
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-foreground/70 mb-10">
          {intro}
        </p>
        <div className="flex flex-wrap justify-center gap-4 items-center mb-10">
          <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
            <a href={`mailto:${email}`} className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>{email}</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <span>{linkedinUser}</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>{phone}</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
            <a href={scheduleMeetLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <CalendarPlus className="w-5 h-5" />
              <span>Schedule a Meet</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
