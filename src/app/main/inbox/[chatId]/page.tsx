'use client';

import { useState, useRef, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import styles from './chat.module.css';
import { chatData } from '@/lib/ChatData';
import { Message } from '@/lib/ChatData';

export default function ChatPage() {
  const params = useParams();
  const router = useRouter();
  
  const chatId = params.chatId as string;
  const chatThread = chatData[chatId];

  const [messages, setMessages] = useState<Message[]>(chatThread?.messages || []);
  const [newMessage, setNewMessage] = useState('');

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  if (!chatThread) {
    return <div className="p-4">Chat tidak ditemukan.</div>;
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const messageToSend: Message = {
      id: Date.now(),
      text: newMessage,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, messageToSend]);
    setNewMessage('');
  };

  const { other } = chatThread.participants;

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <Link href="/main/inbox">
            <Image src="https://api.iconify.design/solar/arrow-left-bold.svg?color=%231f2937" alt="Kembali" width={24} height={24} />
        </Link>
        <Image src={other.avatarUrl} alt={other.name} width={40} height={40} className={styles.avatar} />
        <span className={styles.participantName}>{other.name}</span>
      </header>

      <main className={styles.messageArea}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.messageBubble} ${msg.sender === 'me' ? styles.myMessage : styles.otherMessage}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>

      <form onSubmit={handleSendMessage} className={styles.inputArea}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Ketik pesan..."
          className={styles.textInput}
        />
        <button type="submit" className={styles.sendButton}>
          <Image src="https://api.iconify.design/solar/plain-bold.svg?color=%23ffffff" alt="Kirim" width={24} height={24} />
        </button>
      </form>
    </div>
  );
}