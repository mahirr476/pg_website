// pages/api/image-proxy.js
// Simple single-file proxy solution

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get image path from query parameter
    const { url: imagePath } = req.query;
    
    if (!imagePath) {
      return res.status(400).json({ 
        error: 'Missing image path',
        usage: '/api/image-proxy?url=uploads/group/hero/image.jpg'
      });
    }

    // Construct full URL
    const fullImageUrl = `http://api.pg-admin.57.155.183.218.nip.io/${imagePath}`;
    
    console.log('🔄 [PROXY] Fetching:', fullImageUrl);

    // Fetch the image
    const response = await fetch(fullImageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NextJS-ImageProxy/1.0)',
      },
    });

    console.log(`📊 [PROXY] Response: ${response.status}`);

    if (!response.ok) {
      console.log(`❌ [PROXY] Failed: ${response.status} ${response.statusText}`);
      return res.status(response.status).json({
        error: 'Failed to fetch image',
        status: response.status,
        url: fullImageUrl
      });
    }

    // Get image data
    const imageBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(imageBuffer);
    
    // Set appropriate headers
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    console.log(`✅ [PROXY] Success: ${buffer.length} bytes`);

    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Length', buffer.length);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    return res.send(buffer);

  } catch (error) {
    console.error('🚨 [PROXY] Error:', error.message);
    return res.status(500).json({
      error: 'Proxy error',
      message: error.message
    });
  }
}