'use strict';

const IZINLI_ALAN_ADLARI = [
  // YouTube
  'youtube.com', 'www.youtube.com', 'youtu.be', 'm.youtube.com',
  // Instagram
  'instagram.com', 'www.instagram.com',
  // Twitter / X
  'twitter.com', 'www.twitter.com', 'x.com', 'www.x.com',
  // TikTok
  'tiktok.com', 'www.tiktok.com', 'vm.tiktok.com', 'm.tiktok.com',
  // Facebook
  'facebook.com', 'www.facebook.com', 'fb.watch', 'm.facebook.com',
  // Vimeo
  'vimeo.com', 'www.vimeo.com',
  // Dailymotion
  'dailymotion.com', 'www.dailymotion.com', 'dai.ly',
  // SoundCloud
  'soundcloud.com', 'www.soundcloud.com',
  // Rumble
  'rumble.com', 'www.rumble.com',
  // Streamable
  'streamable.com', 'www.streamable.com',
  // LinkedIn
  'linkedin.com', 'www.linkedin.com',
  // BBC
  'bbc.com', 'www.bbc.com', 'bbc.co.uk', 'www.bbc.co.uk',
  // CNN
  'cnn.com', 'www.cnn.com', 'edition.cnn.com',
  // Reuters
  'reuters.com', 'www.reuters.com',
  // The Guardian
  'theguardian.com', 'www.theguardian.com',
  // Al Jazeera
  'aljazeera.com', 'www.aljazeera.com',
  // DW
  'dw.com', 'www.dw.com',
  // France 24
  'france24.com', 'www.france24.com',
  // Euronews
  'euronews.com', 'www.euronews.com',
  // Sky News
  'sky.com', 'news.sky.com', 'www.sky.com',
  // NBC
  'nbcnews.com', 'www.nbcnews.com',
  // ABC News
  'abcnews.go.com',
  // CBS News
  'cbsnews.com', 'www.cbsnews.com',
  // AP
  'apnews.com', 'www.apnews.com',
  // Bloomberg
  'bloomberg.com', 'www.bloomberg.com'
];

function platformTespit(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const host = parsed.hostname.toLowerCase();

  const izinliMi = IZINLI_ALAN_ADLARI.some(alan => host === alan || host.endsWith('.' + alan));
  if (!izinliMi) return null;

  if (host.includes('youtube.com') || host === 'youtu.be') {
    const shorts = parsed.pathname.startsWith('/shorts/');
    return { platform: shorts ? 'youtube_shorts' : 'youtube', ad: shorts ? 'YouTube Shorts' : 'YouTube', ikon: 'youtube' };
  }
  if (host.includes('instagram.com')) return { platform: 'instagram', ad: 'Instagram', ikon: 'instagram' };
  if (host.includes('twitter.com') || host.includes('x.com')) return { platform: 'twitter', ad: 'Twitter / X', ikon: 'twitter' };
  if (host.includes('tiktok.com')) return { platform: 'tiktok', ad: 'TikTok', ikon: 'tiktok' };
  if (host.includes('facebook.com') || host.includes('fb.watch')) return { platform: 'facebook', ad: 'Facebook', ikon: 'facebook' };
  if (host.includes('vimeo.com')) return { platform: 'vimeo', ad: 'Vimeo', ikon: 'vimeo' };
  if (host.includes('dailymotion.com') || host.includes('dai.ly')) return { platform: 'dailymotion', ad: 'Dailymotion', ikon: 'dailymotion' };
  if (host.includes('soundcloud.com')) return { platform: 'soundcloud', ad: 'SoundCloud', ikon: 'soundcloud' };
  if (host.includes('rumble.com')) return { platform: 'rumble', ad: 'Rumble', ikon: 'rumble' };
  if (host.includes('streamable.com')) return { platform: 'streamable', ad: 'Streamable', ikon: 'streamable' };
  if (host.includes('linkedin.com')) return { platform: 'linkedin', ad: 'LinkedIn', ikon: 'linkedin' };
  if (host.includes('bbc.com') || host.includes('bbc.co.uk')) return { platform: 'bbc', ad: 'BBC', ikon: 'bbc' };
  if (host.includes('cnn.com')) return { platform: 'cnn', ad: 'CNN', ikon: 'cnn' };
  if (host.includes('reuters.com')) return { platform: 'reuters', ad: 'Reuters', ikon: 'reuters' };
  if (host.includes('theguardian.com')) return { platform: 'guardian', ad: 'The Guardian', ikon: 'guardian' };
  if (host.includes('aljazeera.com')) return { platform: 'aljazeera', ad: 'Al Jazeera', ikon: 'aljazeera' };
  if (host.includes('dw.com')) return { platform: 'dw', ad: 'DW', ikon: 'dw' };
  if (host.includes('france24.com')) return { platform: 'france24', ad: 'France 24', ikon: 'france24' };
  if (host.includes('euronews.com')) return { platform: 'euronews', ad: 'Euronews', ikon: 'euronews' };
  if (host.includes('sky.com')) return { platform: 'skynews', ad: 'Sky News', ikon: 'skynews' };
  if (host.includes('nbcnews.com')) return { platform: 'nbc', ad: 'NBC News', ikon: 'nbc' };
  if (host.includes('abcnews.go.com')) return { platform: 'abc', ad: 'ABC News', ikon: 'abc' };
  if (host.includes('cbsnews.com')) return { platform: 'cbs', ad: 'CBS News', ikon: 'cbs' };
  if (host.includes('apnews.com')) return { platform: 'ap', ad: 'AP News', ikon: 'ap' };
  if (host.includes('bloomberg.com')) return { platform: 'bloomberg', ad: 'Bloomberg', ikon: 'bloomberg' };

  return null;
}

function urlDogrula(url) {
  if (!url || typeof url !== 'string') return false;
  if (url.length > 500) return false;
  const bilgi = platformTespit(url);
  return bilgi !== null;
}

module.exports = { platformTespit, urlDogrula, IZINLI_ALAN_ADLARI };
