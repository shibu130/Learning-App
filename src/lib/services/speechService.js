let utterance = null;

/**
 * Speak Kannada text using the browser's Text-to-Speech API.
 * Stops any currently playing speech before starting a new one.
 * @param {string} text - The Kannada text to speak
 * @returns {Promise<void>}
 */
export function speak(text) {
  return new Promise((resolve) => {
    // Cancel any ongoing speech
    if (utterance) {
      window.speechSynthesis.cancel();
    }

    if (!text || text.trim().length === 0) {
      resolve();
      return;
    }

    utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'kn-IN';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      utterance = null;
      resolve();
    };

    utterance.onerror = () => {
      utterance = null;
      resolve();
    };

    window.speechSynthesis.speak(utterance);
  });
}

/**
 * Stop any currently playing speech.
 */
export function stop() {
  if (utterance) {
    window.speechSynthesis.cancel();
    utterance = null;
  }
}

/**
 * Check if the browser supports speech synthesis with Kannada.
 * @returns {boolean}
 */
export function isSpeechSupported() {
  return 'speechSynthesis' in window;
}