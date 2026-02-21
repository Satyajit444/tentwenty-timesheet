import { Timesheet, Entry } from "@/types";

export const timesheets: Timesheet[] = [
  { id: "1", week: 1, dateRange: "1 - 5 Jan 2024", status: "COMPLETED" },
  { id: "2", week: 2, dateRange: "8 - 12 Jan 2024", status: "COMPLETED" },
  { id: "3", week: 3, dateRange: "15 - 19 Jan 2024", status: "INCOMPLETE" },
  { id: "4", week: 4, dateRange: "22 - 26 Jan 2024", status: "COMPLETED" },
  { id: "5", week: 5, dateRange: "28 Jan - 1 Feb", status: "MISSING" },
  { id: "6", week: 6, dateRange: "5 - 9 Feb 2024", status: "COMPLETED" },
  { id: "7", week: 7, dateRange: "12 - 16 Feb 2024", status: "COMPLETED" },
  { id: "8", week: 8, dateRange: "19 - 23 Feb 2024", status: "INCOMPLETE" },
  { id: "9", week: 9, dateRange: "26 Feb - 1 Mar 2024", status: "COMPLETED" },
  { id: "10", week: 10, dateRange: "4 - 8 Mar 2024", status: "MISSING" },

  { id: "11", week: 11, dateRange: "11 - 15 Mar 2024", status: "COMPLETED" },
  { id: "12", week: 12, dateRange: "18 - 22 Mar 2024", status: "COMPLETED" },
  { id: "13", week: 13, dateRange: "25 - 29 Mar 2024", status: "INCOMPLETE" },
  { id: "14", week: 14, dateRange: "1 - 5 Apr 2024", status: "COMPLETED" },
  { id: "15", week: 15, dateRange: "8 - 12 Apr 2024", status: "COMPLETED" },

  { id: "16", week: 16, dateRange: "15 - 19 Apr 2024", status: "MISSING" },
  { id: "17", week: 17, dateRange: "22 - 26 Apr 2024", status: "COMPLETED" },
  {
    id: "18",
    week: 18,
    dateRange: "29 Apr - 3 May 2024",
    status: "INCOMPLETE",
  },
  { id: "19", week: 19, dateRange: "6 - 10 May 2024", status: "COMPLETED" },
  { id: "20", week: 20, dateRange: "13 - 17 May 2024", status: "COMPLETED" },

  { id: "21", week: 21, dateRange: "20 - 24 May 2024", status: "MISSING" },
  { id: "22", week: 22, dateRange: "27 - 31 May 2024", status: "COMPLETED" },
  { id: "23", week: 23, dateRange: "3 - 7 Jun 2024", status: "COMPLETED" },
  { id: "24", week: 24, dateRange: "10 - 14 Jun 2024", status: "INCOMPLETE" },
  { id: "25", week: 25, dateRange: "17 - 21 Jun 2024", status: "COMPLETED" },
];

export const entries: Entry[] = [
  // ---------- WEEK 1 ----------
  {
    id: "e1",
    weekId: "1",
    date: "Jan 1",
    project: "Website Redesign",
    workType: "Development",
    description: "Homepage layout implementation",
    hours: 4,
  },
  {
    id: "e2",
    weekId: "1",
    date: "Jan 2",
    project: "Website Redesign",
    workType: "Bug Fix",
    description: "Responsive issues on mobile",
    hours: 3,
  },
  {
    id: "e3",
    weekId: "1",
    date: "Jan 3",
    project: "Admin Panel",
    workType: "Feature",
    description: "User role management module",
    hours: 5,
  },
  {
    id: "e4",
    weekId: "1",
    date: "Jan 4",
    project: "Team Meeting",
    workType: "Meeting",
    description: "Sprint planning discussion",
    hours: 2,
  },
  {
    id: "e5",
    weekId: "1",
    date: "Jan 5",
    project: "Testing",
    workType: "QA",
    description: "Manual testing and reporting",
    hours: 4,
  },

  // ---------- WEEK 2 ----------
  {
    id: "e6",
    weekId: "2",
    date: "Jan 8",
    project: "Mobile App",
    workType: "Development",
    description: "Authentication module",
    hours: 6,
  },
  {
    id: "e7",
    weekId: "2",
    date: "Jan 9",
    project: "Mobile App",
    workType: "Integration",
    description: "API integration for login",
    hours: 4,
  }, // ---------- WEEK 3 ----------
  {
    id: "e11",
    weekId: "3",
    date: "Jan 15",
    project: "Analytics Dashboard",
    workType: "Development",
    description: "Chart components implementation",
    hours: 5,
  },

  // ---------- WEEK 4 ----------
  {
    id: "e12",
    weekId: "4",
    date: "Jan 22",
    project: "Backend API",
    workType: "Integration",
    description: "Connected frontend with API",
    hours: 4,
  },

  // ---------- WEEK 5 ----------
  {
    id: "e13",
    weekId: "5",
    date: "Jan 29",
    project: "Authentication",
    workType: "Security",
    description: "JWT token handling",
    hours: 6,
  },

  // ---------- WEEK 6 ----------
  {
    id: "e14",
    weekId: "6",
    date: "Feb 5",
    project: "UI Improvements",
    workType: "Design",
    description: "Improved layout spacing",
    hours: 3,
  },

  // ---------- WEEK 7 ----------
  {
    id: "e15",
    weekId: "7",
    date: "Feb 12",
    project: "Performance",
    workType: "Optimization",
    description: "Reduced bundle size",
    hours: 4,
  },

  // ---------- WEEK 8 ----------
  {
    id: "e16",
    weekId: "8",
    date: "Feb 19",
    project: "Bug Fixing",
    workType: "Bug Fix",
    description: "Resolved login crash issue",
    hours: 3,
  },

  // ---------- WEEK 9 ----------
  {
    id: "e17",
    weekId: "9",
    date: "Feb 26",
    project: "Admin Panel",
    workType: "Feature",
    description: "Permission management UI",
    hours: 5,
  },

  // ---------- WEEK 10 ----------
  {
    id: "e18",
    weekId: "10",
    date: "Mar 4",
    project: "Testing",
    workType: "QA",
    description: "Regression testing",
    hours: 4,
  },

  // ---------- WEEK 11 ----------
  {
    id: "e19",
    weekId: "11",
    date: "Mar 11",
    project: "Deployment",
    workType: "DevOps",
    description: "Configured CI/CD pipeline",
    hours: 6,
  },

  // ---------- WEEK 12 ----------
  {
    id: "e20",
    weekId: "12",
    date: "Mar 18",
    project: "Documentation",
    workType: "Writing",
    description: "API usage guide",
    hours: 3,
  },

  // ---------- WEEK 13 ----------
  {
    id: "e21",
    weekId: "13",
    date: "Mar 25",
    project: "Refactoring",
    workType: "Maintenance",
    description: "Code cleanup and structure",
    hours: 4,
  },

  // ---------- WEEK 14 ----------
  {
    id: "e22",
    weekId: "14",
    date: "Apr 1",
    project: "Notifications",
    workType: "Feature",
    description: "Email notification system",
    hours: 5,
  },

  // ---------- WEEK 15 ----------
  {
    id: "e23",
    weekId: "15",
    date: "Apr 8",
    project: "Mobile Optimization",
    workType: "UI",
    description: "Responsive adjustments",
    hours: 4,
  },

  // ---------- WEEK 16 ----------
  {
    id: "e24",
    weekId: "16",
    date: "Apr 15",
    project: "Security Audit",
    workType: "Audit",
    description: "Reviewed vulnerabilities",
    hours: 5,
  },

  // ---------- WEEK 17 ----------
  {
    id: "e25",
    weekId: "17",
    date: "Apr 22",
    project: "Feature Planning",
    workType: "Planning",
    description: "Roadmap discussion",
    hours: 2,
  },

  // ---------- WEEK 18 ----------
  {
    id: "e26",
    weekId: "18",
    date: "Apr 29",
    project: "Search Module",
    workType: "Development",
    description: "Global search feature",
    hours: 6,
  },

  // ---------- WEEK 19 ----------
  {
    id: "e27",
    weekId: "19",
    date: "May 6",
    project: "Logging",
    workType: "Backend",
    description: "Centralized logging setup",
    hours: 4,
  },

  // ---------- WEEK 20 ----------
  {
    id: "e28",
    weekId: "20",
    date: "May 13",
    project: "Release Preparation",
    workType: "Release",
    description: "Version packaging",
    hours: 3,
  },
];
