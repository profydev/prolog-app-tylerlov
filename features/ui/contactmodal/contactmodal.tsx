import React from "react";
import { Button, ButtonSize, ButtonColor } from "features/ui/button/button";
import styles from "./contactmodal.module.scss";
import Image from "next/image";

interface ContactModalProps {
  onClose: () => void;
}

export function ContactModal({ onClose }: ContactModalProps) {
  return (
    <div className={styles.modal}>
      <Image
        src="/icons/mail.svg"
        alt="Mail Icon"
        className={styles.icon}
        width={50}
        height={50}
      />
      <h2>Contact us via Email</h2>
      <p className={styles.infoText}>
        Any questions? Send us an email at prolog@profy.dev. We usually answer
        within 24 hours.
      </p>
      <div className={styles.buttons}>
        <Button
          size={ButtonSize.md}
          color={ButtonColor.primary}
          onClick={() => window.open("mailto:tyler@profydev.com")}
        >
          Open Email App
        </Button>
        <Button
          size={ButtonSize.md}
          color={ButtonColor.secondary}
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
