export type Contact = {
  location: string;
  phone?: string;
  email: string;
  website: string;
  social: {
    LinkedIn: { name: string; link: string };
    GitHub: { name: string; link: string };
    Twitter: { name: string; link: string };
  };
};

export type Languages = {
  french: string;
  english: string;
  spanish: string;
};

export type Interest = {
  name: string;
  link?: string;
  description: string;
};

export type Entry = {
  name: string;
  from: string;
  to?: string;
  duration?: string;
  company?: string;
  link?: string;
  location?: string;
  description: string;
  technologies?: string[];
};

export type Labels = {
  contact: string;
  languages: string;
  skills: string;
  ambitions: string;
  jobs: string;
  projects: string;
  education: string;
  interests: string;
};

export type Data = {
  firstName: string;
  lastName: string;
  aboutMe: string;
  cvLink: string;
  headline: string;
  contact: Contact;
  languages: Languages;
  skills: Record<string, string>;
  ambitions: string[];
  experience: Entry[];
  projects: Entry[];
  education: Entry[];
  interests: Interest[];
  labels: Labels;
};
