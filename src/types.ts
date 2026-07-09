export interface ServiceItem {
  name: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  items: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  avatarLetter: string;
  rating: number;
  time: string;
  text: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
  alt: string;
}
