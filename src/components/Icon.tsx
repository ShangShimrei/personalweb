import React from 'react';
import { Twitter, Linkedin, Github, Instagram, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  switch (name.toLowerCase()) {
    case 'twitter': return <Twitter className={className} />;
    case 'linkedin': return <Linkedin className={className} />;
    case 'github': return <Github className={className} />;
    case 'instagram': return <Instagram className={className} />;
    case 'arrowright': return <ArrowRight className={className} />;
    case 'mail': return <Mail className={className} />;
    case 'mappin': return <MapPin className={className} />;
    case 'phone': return <Phone className={className} />;
    default: return null;
  }
};