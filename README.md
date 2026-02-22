# TickTock Timesheet Management System

A responsive timesheet management web application built with **Next.js (App Router)**, **Tailwind CSS**, and **NextAuth authentication**.

This project allows users to track weekly work entries, manage tasks per day, and monitor total working hours through a structured timesheet interface.


---

## 🔐 Login Credentials

EMAIL= admin@test.com

PASSWORD= tentwentyfrontendexam@2025



---

## ▶️ Running the Project

### Install dependencies

npm install

### Run development server

npm run dev

open - 


http://localhost:3000


---

## 🚀 Live Features

### Authentication
- Credential-based login using NextAuth
- Protected dashboard routes
- Session-based access control

### Timesheets Overview
- Weekly timesheet list
- Status indicator (Missing / Incomplete / Completed)
- Pagination support
- Mobile responsive table → card layout

### Weekly Details View
- View entries grouped by day
- Add new tasks per day
- Edit existing entries
- Delete entries
- Automatic weekly hours calculation
- Progress bar based on 40-hour weekly limit

### Entry Management
- Create entry
- Update entry
- Delete entry
- Form validation
- Reusable modal for create + edit

### UI / UX
- Fully responsive layout
- Desktop table + mobile card view
- Skeleton loading states
- Dropdown actions menu
- Tailwind CSS modular architecture

---

## 🧠 Core System Logic

The system follows a **2-level structure**:

### 1. Timesheets (Weekly Containers)
Each record represents one week.

Contains:
- Week number
- Date range
- Status
- ID (used for routing)

Timesheets are **predefined containers**, not generated from entries.

---

### 2. Entries (Actual Work Data)
Entries belong to a specific week.

Each entry contains:
- weekId
- date
- project
- work type
- description
- hours

Entries are grouped by day inside the weekly details page.

---

## 🧩 Tech Stack

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS v4
- CSS Modules with `@apply`
- NextAuth Credentials Provider
- Axios
- React Hook Form

---

## 📁 Project Structure
src/
│
├── app/
│ ├── (auth)/
│ │ └── login/
│ ├── dashboard/
│ ├── timesheet/
│ │ └── [id]/
│ └── api/
│ ├── timesheets/
│ └── entries/
│
├── components/
│ ├── ui/
│ ├── layout/
│ └── timesheets/
│
├── hooks/
│ ├── useEntries.ts
│ ├── useTimesheets.ts
│ └── useSingleTimesheet.ts
│
├── lib/
│ ├── axios.ts
│ ├── mockData.ts
│ └── date-utils.ts
│
└── types/



---

## 🎨 Styling Architecture

Hybrid styling approach:

- Tailwind utility classes in JSX
- CSS Modules for grouped utilities using `@apply`
- Train-case class naming
- Responsive utilities handled with `@screen`
- Tailwind v4 requires:

```css
@reference "tailwindcss";


📡 API Routes
Timesheets
GET /api/timesheets
GET /api/timesheets/[id]
Entries
GET /api/entries?weekId=
POST /api/entries
PUT /api/entries/[id]
DELETE /api/entries/[id]

All data stored in mock memory.

##Responsive Behaviour

Desktop:

Structured table

Multi-column layout

Mobile:

Card-based list

Stacked layout

Touch-friendly actions

###🧪Validation Rules

Project required

Work type required

Description minimum length

Hours range 1–24

🔄 State Management

Local React state

Custom data hooks

API refresh after mutation

Form reset on submit
