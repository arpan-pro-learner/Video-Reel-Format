const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

export interface PexelsVideo {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  video_files: {
    id: number;
    quality: string;
    file_type: string;
    width: number;
    height: number;
    link: string;
  }[];
}

export async function getRandomVideos(perPage: number = 5): Promise<PexelsVideo[]> {
  try {
    const response = await fetch(
      `https://api.pexels.com/videos/popular?per_page=${perPage}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY!,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch videos');
    }

    const data = await response.json();
    return data.videos;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}