# Reels App

Reels App is a vertical scrolling video platform inspired by Instagram Reels. It provides a seamless and engaging user experience, allowing users to discover and interact with short-form videos.

## Features

1. **Vertical Scrolling Layout**: The app features a vertical scrolling layout similar to Instagram Reels, providing an immersive video experience.
2. **Autoplay and Pause**: The videos automatically play when visible in the viewport and pause when scrolled out of view, enhancing the user experience.
3. **Video Controls**: Users can control the playback of the videos by using the built-in play/pause and mute/unmute buttons.
4. **Smooth Transitions**: The app ensures smooth transitions between the reels, creating a seamless scrolling experience.
5. **Responsiveness**: The app is fully responsive and optimized for mobile, tablet, and desktop devices, providing a consistent design across all viewports.
6. **Design Flexibility**: The app can display placeholder videos and product information when real data is not available, ensuring design modularity for future API integration.
7. **Like and Share**: Users can like and share the videos, allowing them to engage with the content.
8. **Product Tag Animation**: The app includes an animation effect for product tags appearing on the videos, adding visual interest and interactivity.

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) - A React framework for building server-rendered applications.
- **Styling**: [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- **Deployment**: The app is deployed using [Vercel](https://vercel.com/), providing a seamless hosting and deployment solution.

## Getting Started

To run the Reels App locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/reels-app.git
   ```

2. **Install dependencies**:
   ```bash
   cd reels-app
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Deployment

The Reels App is deployed using Vercel. You can access the live version of the app at the following URL:

```
https://video-reel-format.vercel.app/
```

## Documentation

### Thought Process and Design Choices

1. **Vertical Scrolling Layout**: The vertical scrolling layout was chosen to mimic the Instagram Reels experience, as it provides an intuitive and engaging way for users to discover and interact with short-form videos.
2. **Autoplay and Pause**: Automatically playing the videos when they come into view and pausing them when they scroll out of view enhances the user experience by reducing the need for manual interaction.
3. **Video Controls**: Providing basic video controls, such as play/pause and mute/unmute, allows users to customize their viewing experience.
4. **Smooth Transitions**: Implementing smooth transitions between reels ensures a seamless and visually appealing scrolling experience.
5. **Responsiveness**: Designing the app to be fully responsive and optimizing it for different devices guarantees a consistent user experience across various screen sizes.
6. **Design Flexibility**: Incorporating placeholder videos and product information enables the app to be used even when real data is not available, facilitating future API integration.
7. **Like and Share**: Allowing users to like and share videos encourages engagement and social sharing, potentially increasing the app's reach and popularity.
8. **Product Tag Animation**: Adding an animation effect for product tags creates a more visually engaging and interactive experience for users.

### Known Issues and Future Improvements

1. **Video Quality**: The current implementation may not optimally handle high-resolution videos, which could impact the app's performance on slower internet connections. Implementing adaptive bitrate streaming or lazy loading techniques could help improve video quality and loading times.
2. **User Profiles**: Introducing user profiles and the ability to follow other users would enhance the social aspects of the app and allow for a more personalized discovery experience.
3. **Recommendations and Trending**: Implementing an intelligent recommendation system and highlighting trending videos could help users discover new and engaging content more effectively.
4. **Offline Support**: Adding offline capabilities, such as the ability to download videos for offline viewing, would improve the user experience and accessibility of the app.


## Conclusion

The Reels App is a modern and responsive video platform that provides an engaging user experience inspired by Instagram Reels. By leveraging the latest frontend technologies and design principles, the app offers a seamless and visually appealing way for users to discover and interact with short-form videos. As the project continues to evolve, the team is committed to addressing known issues and implementing new features to enhance the overall user experience.
