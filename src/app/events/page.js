import styles from "./styles.module.css";
import events from "@/data/events";

export default function Events() {
    return (
        <div id={styles.eventsContainer}>
            <h2>Registered Events</h2>
            <ul id={styles.registeredEvents}>
                {events.registered.map((event) => (
                    <li key={event.name}>
                        <img src={event.img} alt={event.name} />
                        <span>{event.name}</span>
                        <button className={styles.cta}>View Details</button>
                    </li>
                ))}
            </ul>
            <h2>Non-registered Events</h2>
            <ul id={styles.nonregisteredEvents}>
                {events.unregistered.map((event) => (
                    <li key={event.name}>
                        <img src={event.img} alt={event.name} />
                        <span>{event.name}</span>
                        <button className={styles.cta}>Register Now</button>
                    </li>
                ))}
            </ul>
            <h2>Guest Lectures and Workshops</h2>
            <ul id={styles.guestLectures}>
                {events.gl.map((lecture) => (
                    <li key={lecture.name}>
                        <img src={lecture.image} alt={lecture.name} />
                        <span>{lecture.name}</span>
                        <button
                            className={`${styles.cta}`}
                            style={{
                                "--accent": lecture.registered
                                    ? "rgb(35 239 77)"
                                    : "rgb(239 35 60)",
                            }}
                        >
                            {lecture.registered
                                ? "View Details"
                                : "Register Now"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
