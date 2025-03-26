import EventDisplay from "@/components/EventDisplay";
// import "./page.module.css";

export default function EventPage() {
  return (
    <div className="container">
      <h1>Upcoming Events</h1>
      <h2>Click on the event to register</h2>
      <EventDisplay />
    </div>
  );
}
