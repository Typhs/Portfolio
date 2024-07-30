export default {};

declare global {
  type ResumeSection = {
    title?: string;
    items: ResumeSectionItem[];
    type: "bullet-list" | "simple-list" | "skill-list";
  };

  type ResumeSectionItem = {
    title?: string;
    subtitle?: string;
    content: string | ResumeSection;
    icon?: string;
    percentage?: number;
  };

  type ResumeData = {
    name: string;
    job_title: string;
    portfolio: {
      label: string;
      href: string;
    };
    column_left: ResumeSection[];
    column_right: ResumeSection[];
  };
}
