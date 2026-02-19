"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import TimesheetTable from "@/components/timesheets/TimesheetTable";


export default function Dashboard() {
  return (
    <div className="p-6">
       <Header />
      <TimesheetTable />
        <Footer />
    </div>
  );
}
