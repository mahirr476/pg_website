// src/lib/api-config.ts
/**
 * Centralized API configuration
 */

// Get API base URL from environment variables
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.paragongroup-bd.com';

/**
 * Process API image paths and return properly formatted URLs
 * @param imagePath - The image path from API response
 * @returns Formatted image URL
 */
export const formatImageUrl = (imagePath: string): string => {
  if (!imagePath) return '';
  
  let finalUrl: string;
  
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    // Already a full URL
    return imagePath;
  } else if (imagePath.startsWith('public/')) {
    // Path already has 'public/' prefix
    finalUrl = `${API_BASE_URL}/${imagePath}`;
  } else if (imagePath.startsWith('uploads/')) {
    // Path has 'uploads/' prefix, add 'public/'
    finalUrl = `${API_BASE_URL}/public/${imagePath}`;
  } else {
    // Path has no prefix, add 'public/uploads/'
    finalUrl = `${API_BASE_URL}/public/uploads/${imagePath}`;
  }
  
  return finalUrl;
};

/**
 * Process an array of API image paths
 * @param imagePaths - Array of image paths from API
 * @returns Array of formatted image URLs
 */
export const formatImageUrls = (imagePaths: string[]): string[] => {
  if (!imagePaths || !Array.isArray(imagePaths)) return [];
  
  return imagePaths.map(formatImageUrl).filter(Boolean);
};

/**
 * Test if an image URL is accessible
 * @param imageUrl - The image URL to test
 * @returns Promise<boolean> - True if image is accessible
 */
export const testImageUrl = async (imageUrl: string): Promise<boolean> => {
  try {
    const response = await fetch(imageUrl, { 
      method: 'HEAD',
      mode: 'cors'
    });
    return response.ok;
  } catch (error) {
    console.warn(`Failed to test image URL: ${imageUrl}`, error);
    return false;
  }
};

/**
 * Get the first working image from an array of image URLs
 * @param imageUrls - Array of image URLs to test
 * @returns Promise<string | null> - First working image URL or null
 */
export const getFirstWorkingImage = async (imageUrls: string[]): Promise<string | null> => {
  for (const imageUrl of imageUrls) {
    const isWorking = await testImageUrl(imageUrl);
    if (isWorking) {
      console.log(`Working image found: ${imageUrl}`);
      return imageUrl;
    }
  }
  
  console.log('No working images found from candidates:', imageUrls);
  return null;
};

/**
 * API endpoints configuration
 */
export const API_ENDPOINTS = {
  heroes: `${API_BASE_URL}/api/heroes`,
  impacts: `${API_BASE_URL}/api/impacts`,
  businesses: `${API_BASE_URL}/api/businesses`,
  // Add more endpoints as needed
} as const;

/**
 * Common API request headers
 */
export const API_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
} as const;