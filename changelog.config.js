module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['feat', 'fix', 'refactor'], // Only required types
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body'], // Mandatory questions
  scopes: ['SRC', 'DOC', 'CI', 'ENV'], // Changed to an array of strings
  types: {
    feat: {
      description: 'A new feature',
      emoji: '✨',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      emoji: '🐛',
      value: 'fix',
    },
    refactor: {
      description: 'A code change that neither fixes a bug nor adds a feature',
      emoji: '💡',
      value: 'refactor',
    },
  },
  messages: {
    type: 'Select the type of change you are committing:',
    scope: 'Select the scope of your changes:',
    subject: 'Write a brief description of the change:\n',
    body: 'Provide a detailed description of the change (optional):\n',
  },
};
