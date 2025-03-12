// List of keywords associated with fake or illegal news
const SUSPICIOUS_KEYWORDS = [
    'lajmërpatar',
    'falsa',
    'kthjellje',
    'plotësishme',
    'trufim',
    // Add more keywords as needed
  ];
  
  // Function to detect fake news based on keywords
  function detectFakeNews(text) {
    if (!text) return false;
  
    // Convert text to lowercase for case-insensitive matching
    const lowerText = text.toLowerCase();
  
    // Check if any suspicious keyword exists in the text
    return SUSPICIOUS_KEYWORDS.some(keyword => lowerText.includes(keyword));
  }
  
  module.exports = { detectFakeNews };