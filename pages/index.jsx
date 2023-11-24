import { Routes } from "@config/routes";
import Image from "next/image"; // Import the Image component from Next.js
import styles from "./index.module.scss";
import { Header } from "../features/layout/header/header"; // Import the Header component

const IssuesPage = () => {
  return (
    <div>
      <header className={styles.header}>
        <Image
          src="/icons/logo-large.svg"
          alt="Prolog logo"
          width={500}
          height={300}
        />
        <Header />
        <a href={Routes.projects}>Dashboard</a>
      </header>
      <h1>Your Issues In Sight. At All Times.</h1>
      <p>
        Powerful error tracking and monitoring for software applications.
        Trusted by over 4,000 startups.
      </p>
      <Image
        src="/path/to/your/image.jpg"
        alt="Screen Mockup"
        width={500}
        height={300}
      />

      {/* Social Proof Section */}
      <section>
        <h2>Join 4,000+ companies using Prolog</h2>
        <div className={styles.socialProofContainer}>
          <Image
            src="/path/to/image1.jpg"
            alt="Company 1"
            width={500}
            height={300}
          />
          <Image
            src="/path/to/image2.jpg"
            alt="Company 2"
            width={500}
            height={300}
          />
          <Image
            src="/path/to/image3.jpg"
            alt="Company 3"
            width={500}
            height={300}
          />
          <Image
            src="/path/to/image4.jpg"
            alt="Company 4"
            width={500}
            height={300}
          />
          <Image
            src="/path/to/image5.jpg"
            alt="Company 5"
            width={500}
            height={300}
          />
        </div>
      </section>

      {/* Testimonial Section */}
      <section>
        <h2>Don&apos;t Only Trust Our Words</h2>
        <p>Our customers around the globe share their opinions.</p>
        <div className={styles.testimonialContainer}>
          {[1, 2, 3].map((testimonial, index) => (
            <div key={index} className={styles.testimonial}>
              <h3>Subhead</h3>
              <p>&ldquo;Quote&rdquo;</p>
              <div className={styles.avatarContainer}>
                <Image
                  src="/path/to/avatar.jpg"
                  alt="Avatar"
                  width={500}
                  height={300}
                />
                <p>Name</p>
                <p>Profession</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        <Image
          src="/icons/message.svg"
          alt="Contact"
          width={500}
          height={300}
        />
      </button>
    </div>
  );
};

export default IssuesPage;
