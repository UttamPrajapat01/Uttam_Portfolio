import { ContactMessage } from '../types/portfolio';

export interface SendMessageResponse {
  success: boolean;
  message: string;
  isSimulated?: boolean;
}

const STORAGE_KEY = 'uttam_portfolio_inbox';

class ContactService {
  /**
   * Dispatches a contact inquiry.
   * In a live production deployment with an ASP.NET Core API, EmailJS, or Formspree,
   * replace the API_ENDPOINT and credentials below.
   */
  async sendMessage(data: Omit<ContactMessage, 'id' | 'createdAt' | 'read'>): Promise<SendMessageResponse> {
    // 1. Client-side artificial latency for realistic feedback
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 2. Persist locally so messages are accessible in the Admin Panel
    const newMessage: ContactMessage = {
      ...data,
      id: 'msg_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
      createdAt: new Date().toISOString(),
      read: false,
    };

    try {
      const existing = this.getStoredMessages();
      existing.unshift(newMessage);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch (e) {
      console.warn('Could not persist message to local storage', e);
    }

    // 3. Check for external API integration configuration
    // To connect to a live backend endpoint:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newMessage)
    // });
    
    return {
      success: true,
      message: 'Thank you, Uttam will review your inquiry shortly. Your message has been safely recorded in the application portal.',
      isSimulated: true
    };
  }

  getStoredMessages(): ContactMessage[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  markAsRead(id: string): void {
    const messages = this.getStoredMessages().map((m) =>
      m.id === id ? { ...m, read: true } : m
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }

  deleteMessage(id: string): void {
    const messages = this.getStoredMessages().filter((m) => m.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }
}

export const contactService = new ContactService();
