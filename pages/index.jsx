import { Routes } from "@config/routes";
import Image from "next/image"; // Import the Image component from Next.js
import styles from "./index.module.scss";
import { Header } from "../features/layout/header/header"; // Import the Header component
import {
  Button,
  ButtonSize,
  ButtonColor,
  ButtonIcon,
  ButtonState,
} from "features/ui/button/button";

const IssuesPage = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <Image
            className={styles.logo}
            src="/icons/logo-large.svg"
            alt="Prolog logo"
            width={118}
            height={33}
          />
          <Header />
          <Button
            className={styles.dashboardButton}
            size={ButtonSize.md}
            color={ButtonColor.primary}
            icon={ButtonIcon.leading}
            state={ButtonState.default}
            onClick={() => (window.location.href = Routes.projects)}
          >
            Open Dashboard
          </Button>
        </header>
      </div>
      <section className={styles.heroSection}>
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
        <div className={styles.companyMobileBackground}>
          <h4 className={styles.textSmall}>
            Join 4,000+ companies using Prolog
          </h4>
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
            <Image
              className={styles.companyLogoMobileOnly}
              src="/images/Company logo 6.png"
              alt="Company 6"
              width={187}
              height={48}
            />
          </div>
        </div>
      </section>

      <div className={styles.testimonialHeading}>
        <h2 className={styles.headingText}>Don&apos;t Only Trust Our Words</h2>
        <div className={styles.supportingTextWrap}>
          <p className={styles.supportingText}>
            Our customers around the globe share their opinions.
          </p>
        </div>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonial}>
            <h3 className={styles.testimonialCategory}>Frontend Development</h3>
            <p className={styles.testimonialQuoteOffset}>
              Prolog has saved us many times. We get an alert, investigate the
              error, and fix it. That simple.
            </p>
            <div className={styles.testimonialAvatarAndText}>
              <div className={styles.avatarContainer}>
                <Image
                  src="/images/Avatar 1.png"
                  alt="Avatar"
                  width={56}
                  height={56}
                />
                <p className={styles.testimonialName}>Mollie Hall</p>
                <p className={styles.testimonialRole}>
                  Web Developer, Sisyphus
                </p>
              </div>
            </div>
          </div>

          <div className={styles.testimonialOffColor}>
            <h3 className={styles.testimonialCategory}>
              Microservice Architectures
            </h3>
            <p className={styles.testimonialQuoteOffColor}>
              Our services fail from time to time. That’s normal. But with
              Prolog we’re able to track the issue down in no time.
            </p>
            <div className={styles.testimonialAvatarAndText}>
              <div className={styles.avatarContainer}>
                <Image
                  src="/images/Avatar 2.png"
                  alt="Avatar"
                  width={56}
                  height={56}
                />
                <p className={styles.testimonialName}>Alec Whitten</p>
                <p className={styles.testimonialRole}>
                  Software Architect, Layers
                </p>
              </div>
            </div>
          </div>

          <div className={styles.testimonial}>
            <h3 className={styles.testimonialCategory}>Backend Servers</h3>
            <p className={styles.testimonialQuote}>
              Prolog’s UI is beautiful and intuitive. It’s simple to find bugs
              and our devs are always on top of pressing issues.
            </p>
            <div className={styles.testimonialAvatarAndText}>
              <div className={styles.avatarContainer}>
                <Image
                  src="/images/Avatar 3.png"
                  alt="Avatar"
                  width={56}
                  height={56}
                />
                <p className={styles.testimonialName}>Kelly Williams</p>
                <p className={styles.testimonialRole}>
                  Engineering Manager, Catalog
                </p>
              </div>
            </div>
          </div>
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
        <Image src="/icons/message.svg" alt="Contact" width={24} height={24} />
      </button>
    </div>
  );
};

export default IssuesPage;
