'use client';

import Link from 'next/link';
import Image from 'next/image';
import { inboxData } from '@/lib/InboxData'; // Sesuaikan path jika perlu
import styles from './inbox.module.css';

export default function InboxPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Inbox</h1>
      </header>

      <ul className={styles.messageList}>
        {inboxData.map((message) => (
          <li key={message.id}>
            <Link href={`/main/inbox/${message.id}`} className={styles.messageItem}>
              <Image
                src={message.avatarUrl}
                alt={message.senderName}
                width={50}
                height={50}
                className={styles.avatar}
              />
              <div className={styles.messageContent}>
                <div className={styles.senderInfo}>
                  <span className={styles.senderName}>{message.senderName}</span>
                </div>
                <p className={styles.kostName}>{message.kostName}</p>
                <p className={styles.messagePreview}>{message.messagePreview}</p>
              </div>
              <div className={styles.metaInfo}>
                <span className={styles.timestamp}>{message.timestamp}</span>
                {message.unreadCount > 0 && (
                  <span className={styles.unreadBadge}>{message.unreadCount}</span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}