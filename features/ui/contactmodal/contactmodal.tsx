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
        width={48}
        height={48}
      />
      <h2 className={styles.emailHeader}>Contact us via Email</h2>
      <p className={styles.infoText}>
        <p>Any questions? Send us an email at </p>
        <p>prolog@profy.dev. We usually answer within 24</p>
        <p>hours.</p>
      </p>
      <div className={styles.buttons}>
        <Button
          size={ButtonSize.md}
          color={ButtonColor.secondary}
          onClick={onClose}
          className={styles.cancelButton}
        >
          Cancel
        </Button>
        <Button
          size={ButtonSize.md}
          color={ButtonColor.primary}
          onClick={() => window.open("mailto:tyler@profydev.com")}
        >
          Open Email App
        </Button>
      </div>
    </div>
  );
}
