import { useState } from "react";
import { Calendar, Clock, Users, MapPin, Video, Check, Star } from "lucide-react";

const EVENTS_DATA = [
  {
    id: 1,
    title: "AI in the Workplace: Future of Work",
    description:
      "Join industry leaders as they discuss how AI is transforming the workplace and what skills you need to stay ahead.",
    host: {
      name: "LinkedIn Learning",
      avatar: "https://i.pravatar.cc/150?img=60",
    },
    date: "Jan 25, 2025",
    time: "10:00 AM PST",
    duration: "1 hour",
    type: "Webinar",
    attendees: 2847,
    isOnline: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Networking for Introverts: Build Authentic Connections",
    description:
      "Learn practical strategies for building meaningful professional relationships, even if you're naturally introverted.",
    host: {
      name: "Career Coach Sarah",
      avatar: "https://i.pravatar.cc/150?img=44",
    },
    date: "Jan 28, 2025",
    time: "2:00 PM EST",
    duration: "90 min",
    type: "Workshop",
    attendees: 1523,
    isOnline: true,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Tech Hiring Trends 2025",
    description:
      "Top recruiters share insights on what they're looking for in 2025 and how to position yourself for success.",
    host: {
      name: "Tech Recruiters Network",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    date: "Feb 2, 2025",
    time: "11:00 AM PST",
    duration: "1.5 hours",
    type: "Panel Discussion",
    attendees: 3421,
    isOnline: true,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
];

const MY_EVENTS = [
  {
    id: 101,
    title: "Product Management AMA",
    date: "Jan 20",
    status: "attending",
  },
];

function EventCard({ event }) {
  const [rsvpStatus, setRsvpStatus] = useState(null);

  const handleRsvp = (status) => {
    setRsvpStatus(status === rsvpStatus ? null : status);
  };

  const isAttending = rsvpStatus === "attend";
  const isInterested = rsvpStatus === "interested";

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-gray-100 text-xs font-medium rounded-full">
            {event.type}
          </span>
        </div>
        {event.isOnline && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
            <Video className="w-3 h-3" />
            Online
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Host */}
        <div className="flex items-center gap-2 mb-3">
          <img
            src={event.host.avatar}
            alt={event.host.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Hosted by {event.host.name}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Date & Time */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4 text-gray-400" />
            <span>
              {event.time} · {event.duration}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Users className="w-4 h-4 text-gray-400" />
            <span>{event.attendees.toLocaleString()} attending</span>
          </div>
        </div>

        {/* RSVP Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => handleRsvp("attend")}
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
              isAttending
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isAttending ? (
              <span className="flex items-center justify-center gap-1">
                <Check className="w-4 h-4" />
                Attending
              </span>
            ) : (
              "Attend"
            )}
          </button>
          <button
            onClick={() => handleRsvp("interested")}
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium border transition-colors ${
              isInterested
                ? "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800"
                : "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            }`}
          >
            {isInterested ? (
              <span className="flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                Interested
              </span>
            ) : (
              "Interested"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function MyEventCard({ event }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
        <Calendar className="w-6 h-6 text-blue-600" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900 dark:text-gray-100 text-sm truncate">
          {event.title}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{event.date}</p>
      </div>
      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
        {event.status}
      </span>
    </div>
  );
}

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <aside className="lg:col-span-1 space-y-4">
          {/* My Events */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
              My events
            </h2>
            {MY_EVENTS.length > 0 ? (
              <div className="space-y-2">
                {MY_EVENTS.map((event) => (
                  <MyEventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You haven&apos;t joined any events yet.
              </p>
            )}
            <button className="w-full mt-3 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
              View all
            </button>
          </div>

          {/* Event Categories */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Categories
            </h2>
            <div className="space-y-1">
              {[
                "All events",
                "Webinars",
                "Workshops",
                "Networking",
                "Career fairs",
              ].map((category, i) => (
                <button
                  key={category}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    i === 0
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Create Event CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Host your own event
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Share your expertise and grow your network.
            </p>
            <button className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors">
              Create event
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Events
            </h1>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Online events near you
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
            {[
              { id: "upcoming", label: "Upcoming" },
              { id: "past", label: "Past" },
              { id: "my", label: "My events" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? "text-blue-600"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          {activeTab === "upcoming" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {EVENTS_DATA.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}

          {activeTab === "past" && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                No past events
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Events you attended will appear here
              </p>
            </div>
          )}

          {activeTab === "my" && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                No registered events
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Browse upcoming events and register to see them here
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
