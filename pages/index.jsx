import { Routes } from "@config/routes";
import Image from "next/image"; // Import the Image component from Next.js
import styles from "./index.module.scss";
import { Header } from "../features/layout/header/header"; // Import the Header component

const IssuesPage = () => {
  return (
    <div>
      <header className={styles.header}>
        <Image
          className={styles.logo}
          src="/icons/logo-large.svg"
          alt="Prolog logo"
          width={118}
          height={33}
        />
        <Header />
        <a href={Routes.projects}>Dashboard</a>
      </header>
      <div className={styles.headingContainer}>
        <h1 className={styles.headingText}>
          Your Issues In Sight. At All Times.
        </h1>
        <div className={styles.supportingTextWrap}>
          <p className={styles.supportingText}>
            Powerful error tracking and monitoring for software applications.
            Trusted by over 4,000 startups.
          </p>
        </div>
        <Image
          className={styles.computer}
          src="/images/Macbook Pro 16 mockup.png"
          alt="Screen Mockup"
          width={753.676}
          height={445.894}
        />
      </div>

      {/* Social Proof Section */}
      <section>
        <h4 className={styles.textSmall}>Join 4,000+ companies using Prolog</h4>
        <div className={styles.companyContainer}>
          <Image
            className={styles.companyLogo}
            src="/images/Company logo 1.png"
            alt="Company 1"
            width={146}
            height={48}
          />
          <Image
            className={styles.companyLogo}
            src="/images/Company logo 2.png"
            alt="Company 2"
            width={169}
            height={48}
          />
          <Image
            className={styles.companyLogo}
            src="/images/Company logo 3.png"
            alt="Company 3"
            width={183}
            height={48}
          />
          <Image
            className={styles.companyLogo}
            src="/images/Company logo 4.png"
            alt="Company 4"
            width={160}
            height={48}
          />
          <Image
            className={styles.companyLogo}
            src="/images/Company logo 5.png"
            alt="Company 5"
            width={187}
            height={48}
          />
        </div>
      </section>

      {/* Testimonial Section */}
      <div className={styles.testimonialHeading}>
        <h2 className={styles.headingText}>Don&apos;t Only Trust Our Words</h2>
        <div className={styles.supportingTextWrap}>
          <p className={styles.supportingText}>
            Our customers around the globe share their opinions.
          </p>
        </div>
        <div className={styles.testimonialContainer}>
          {[1, 2, 3].map((testimonial, index) => (
            <div key={index} className={styles.testimonial}>
              <h3>Frontend Development</h3>
              <p>
                Prolog has saved us many times. We get an alert, investgate the
                error, and fix it. That simple.
              </p>
              <div className={styles.avatarContainer}>
                <Image
                  src="/images/Avatar 1.png"
                  alt="Avatar"
                  width={56}
                  height={56}
                />
                <p>Mollie Hall</p>
                <p>Web Developer, Sisyphus</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        <Image src="/icons/message.svg" alt="Contact" width={56} height={56} />
      </button>
    </div>
  );
};

export default IssuesPage;
