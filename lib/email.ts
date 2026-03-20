/**
 * Normalizes an email address to ensure consistent identification across the system.
 * - Trims whitespace
 * - Converts to lowercase
 * - For Gmail addresses: removes dots and plus tags from the local part
 * - For other domains: removes plus tags from the local part
 */
export function normalizeEmail(email: string): string {
  if (!email || typeof email !== 'string') return '';
  
  let [user, domain] = email.toLowerCase().trim().split('@');
  if (!domain) return user; // Handle incomplete emails gracefully

  if (domain === 'gmail.com') {
    // Gmail ignores dots and anything after a plus sign
    user = user.replace(/\./g, '').split('+')[0];
  } else {
    // Most other providers support plus tagging but not dot-ignoring
    user = user.split('+')[0];
  }
  
  return `${user}@${domain}`;
}
