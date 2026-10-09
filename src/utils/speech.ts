/**
 * Speech Recognition and Speech Synthesis Utilities for SBA Kitchen
 * Supports Urdu, Hindi, and English voice interactions
 * Enables non-readers to listen to recipes and ask questions by voice
 */

// Check browser support
export const isSpeechRecognitionSupported = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
};

export const isSpeechSynthesisSupported = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
};

// Text-to-Speech (Listen Aloud / بول کر سنائیں)
class VoiceNarrator {
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking = false;
  private listeners: ((speaking: boolean) => void)[] = [];

  public subscribe(listener: (speaking: boolean) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify(speaking: boolean) {
    this.isSpeaking = speaking;
    this.listeners.forEach(cb => cb(speaking));
  }

  public getSpeakingState(): boolean {
    if (typeof window === 'undefined' || !window.speechSynthesis) return false;
    return window.speechSynthesis.speaking && this.isSpeaking;
  }

  public stop() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      this.notify(false);
    }
  }

  public speak(text: string, lang: 'ur' | 'hi' | 'en' = 'ur', onEnd?: () => void) {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      console.warn('Speech synthesis not supported in this browser.');
      return;
    }

    // Cancel any previous speech
    window.speechSynthesis.cancel();

    // Clean text: strip markdown symbols like **, ##, etc.
    const cleanText = text
      .replace(/[*_#`~[\]]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    this.currentUtterance = utterance;

    // Select suitable voice
    const voices = window.speechSynthesis.getVoices();
    let selectedVoice: SpeechSynthesisVoice | undefined;

    if (lang === 'ur') {
      utterance.lang = 'ur-PK';
      // Look for urdu or hindi voice (Hindi voice phonetically reads Urdu very well on Android/iOS/Windows)
      selectedVoice = voices.find(v => v.lang.startsWith('ur')) || 
                      voices.find(v => v.lang.startsWith('hi')) ||
                      voices.find(v => v.name.toLowerCase().includes('india') || v.name.toLowerCase().includes('pakistan'));
    } else if (lang === 'hi') {
      utterance.lang = 'hi-IN';
      selectedVoice = voices.find(v => v.lang.startsWith('hi')) ||
                      voices.find(v => v.name.toLowerCase().includes('hindi') || v.name.toLowerCase().includes('india'));
    } else {
      utterance.lang = 'en-US';
      selectedVoice = voices.find(v => v.lang.startsWith('en')) || voices[0];
    }

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.rate = lang === 'en' ? 1.0 : 0.92; // Slightly slower for clarity
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      this.notify(true);
    };

    utterance.onend = () => {
      this.notify(false);
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      this.notify(false);
    };

    this.notify(true);
    window.speechSynthesis.speak(utterance);
  }
}

export const voiceNarrator = new VoiceNarrator();

// Speech-to-Text Recognition Hook / Helper
export class VoiceRecognizer {
  private recognition: any = null;
  private isListening = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
      }
    }
  }

  public startListening(
    lang: 'ur' | 'hi' | 'en',
    onResult: (transcript: string, isFinal: boolean) => void,
    onError: (err: string) => void,
    onEnd: () => void
  ) {
    if (!this.recognition) {
      onError('آواز کی شناخت اس براؤزر میں دستیاب نہیں ہے۔ برائے مہربانی لکھ کر پوچھیں۔');
      return;
    }

    try {
      if (this.isListening) {
        this.recognition.stop();
      }

      this.recognition.lang = lang === 'ur' ? 'ur-PK' : lang === 'hi' ? 'hi-IN' : 'en-US';

      this.recognition.onstart = () => {
        this.isListening = true;
      };

      this.recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        const text = finalTranscript || interimTranscript;
        if (text) {
          onResult(text, !!finalTranscript);
        }
      };

      this.recognition.onerror = (event: any) => {
        this.isListening = false;
        console.warn('Speech recognition error:', event.error);
        if (event.error === 'not-allowed') {
          onError('مائیکروفون کی اجازت درکار ہے۔ برائے مہربانی مائیکروفون کی اجازت دیں۔');
        } else if (event.error === 'no-speech') {
          onError('کوئی آواز نہیں سنی گئی۔ دوبارہ کوشش کریں۔');
        } else {
          onError(`مسئلہ پیش آیا: ${event.error}`);
        }
      };

      this.recognition.onend = () => {
        this.isListening = false;
        onEnd();
      };

      this.recognition.start();
    } catch (err: any) {
      this.isListening = false;
      onError(err.message || 'Error starting speech recognition');
    }
  }

  public stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }
}
