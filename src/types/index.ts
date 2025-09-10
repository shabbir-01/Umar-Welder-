export interface Project {
  id: number;
  image?: string;
  category: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

export interface Filter {
  id: string;
  labelEn: string;
  labelAr: string;
}
