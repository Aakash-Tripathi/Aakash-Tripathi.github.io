/**
 * Fetches citation count from Google Scholar profile
 * @param {string} userId - Google Scholar user ID
 * @returns {Promise<number|null>} - Citation count or null if fetch fails
 */
export async function fetchCitationCount(userId = '7X57fGgAAAAJ') {
  try {
    console.log(`Fetching citation count for user: ${userId}`);

    const url = `https://scholar.google.com/citations?user=${userId}&hl=en`;

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AstroSite/1.0)'
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`HTTP ${response.status} when fetching Google Scholar`);
      return null;
    }

    const html = await response.text();

    // Try multiple patterns to extract citation count
    // Pattern 1: Table format - "Citations</a></td><td class="...">NUMBER"
    const tableMatch = html.match(/Citations<\/a><\/td><td[^>]*>(\d+(?:,\d+)*)</);
    if (tableMatch) {
      const count = parseInt(tableMatch[1].replace(/,/g, ''));
      console.log(`✓ Citation count fetched successfully: ${count}`);
      return count;
    }

    // Pattern 2: Cited by format - "Cited by NUMBER"
    const citedByMatch = html.match(/Cited by (\d+(?:,\d+)*)/);
    if (citedByMatch) {
      const count = parseInt(citedByMatch[1].replace(/,/g, ''));
      console.log(`✓ Citation count fetched successfully: ${count}`);
      return count;
    }

    // Pattern 3: gsc_rsb_std format (citation stats box)
    const statsMatch = html.match(/<td class="gsc_rsb_std">(\d+(?:,\d+)*)<\/td>/);
    if (statsMatch) {
      const count = parseInt(statsMatch[1].replace(/,/g, ''));
      console.log(`✓ Citation count fetched successfully: ${count}`);
      return count;
    }

    console.warn('Could not find citation count in HTML');
    return null;

  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Fetch timeout: Google Scholar took too long to respond');
    } else {
      console.error('Error fetching citation count:', error.message);
    }
    return null;
  }
}
