const assets = {
  thumbnails: [
    require('../assets/thumbnail-1.jpg'),
    require('../assets/thumbnail-2.jpg'),
    require('../assets/thumbnail-3.jpg'),
    require('../assets/thumbnail-4.jpg'),
    require('../assets/thumbnail-5.jpg'),
    require('../assets/thumbnail-6.jpg'),
    require('../assets/thumbnail-7.jpg'),
  ],
  profiles: [
    require('../assets/profile-1.png'),
    require('../assets/profile-2.png'),
    require('../assets/profile-3.png'),
    require('../assets/profile-4.png'),
    require('../assets/profile-5.png'),
    require('../assets/profile-6.png'),
    require('../assets/profile-7.png'),
    require('../assets/profile-8.png')
  ],
};

const videoData = [
  { title: 'Porsche 992 GT3 RS // 306km/h REVIEW', subtitle: 'on Autobahn', channel: 'AutoTopNL', views: '37 lakh', time: '1 year' },
  { title: 'Oppenheimer | New Trailer', subtitle: 'A Film by Christopher Nolan', channel: 'Universal Pictures', views: '7.2 crore', time: '1 year' },
  { title: 'Interstellar 4K HDR IMAX - Gargantua', subtitle: 'Into the Black Hole', channel: 'Apex Clips', views: '70 lakh', time: '4 years' },
  { title: 'Brian Cox Explains Quantum Mechanics', subtitle: 'In 60 Seconds - BBC News', channel: 'BBC News', views: '84 lakh', time: '10 years' },
  { title: 'Batman Begins - The Will to Act', subtitle: 'Training Scene HD', channel: 'S3r3nity Now', views: '94 lakh', time: '11 years' },
  { title: "You're on the Edge of Discovery", subtitle: 'Can You Hear It? | Hypermind Music', channel: 'Flow State Studio', views: '152k', time: '2 months' },
  { title: 'How This Telescope Searches for Aliens', subtitle: '', channel: 'Cleo Abram', views: '346k', time: '2 years' },
  { title: "Inside the Ferrari Challenge: Racing", subtitle: "Italy's Finest Supercars", channel: 'Ferrari', views: '74lakh', time: '3 months'}
];

const selectedVideo = videoData[7];

export const videoDetails = {
  title: selectedVideo.title,
  subtitle: selectedVideo.subtitle,
  profile: assets.profiles[7],
  metadata: `${selectedVideo.channel} · ${selectedVideo.views} views · ${selectedVideo.time} ago`,
};

export const videos = videoData
  .map((video, index) => {
    if (index === 7) {
      return null;
    }
    return {
      id: (index + 1).toString(),
      thumbnail: assets.thumbnails[index],
      profile: assets.profiles[index],
      title: video.title,
      subtitle: video.subtitle,
      metadata: `${video.channel} · ${video.views} views · ${video.time} ago`,
    };
  })
  .filter(video => video !== null);

