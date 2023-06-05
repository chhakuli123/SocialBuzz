import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "ab3d795b-59c6-4e36-b95d-56fa7e3c3bfb",
    content: "Nice Weather Today😃!!",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685682649/SocialBuzz/photo-1570478050568-4a5b7a82159f_vy947n.avif",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "e4135a8d-bdc3-4ccf-976b-6b9d4a9e74ed",
        username: "bobsmith",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595771/SocialBuzz/247-2479526_round-profile-picture-png-transparent-png_ukpjxm.png",
        text: "I agree!! Feels like we should go for an outing😃. What say?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "chhakulizingare",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "c47f5d9e-1f67-4c9a-a2ab-132a7c92c554",
    content:
      "Just finished working on a new frontend project. Excited to launch🚀 it soon!",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685682799/SocialBuzz/photo-1544256718-3bcf237f3974_qmlyoo.avif",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fa8d92a3-23bb-4cda-af50-8f15430806e9",
        username: "bobsmith",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595771/SocialBuzz/247-2479526_round-profile-picture-png-transparent-png_ukpjxm.png",
        text: "Great work!🚀 Can't wait to see the final product.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "alicejohnson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "4ff5dcfa-1a45-45bc-9d9a-3286c10dc8e3",
    content:
      "Life is a beautiful journey filled with ups and downs, twists and turns, and countless moments that shape who we are. It's a canvas upon which we paint our dreams, hopes, and aspirations. Along the way, we encounter challenges that test our resilience and setbacks that teach us valuable lessons. It's in these moments that we discover our true strength and capacity for growth. 💫",
    mediaURL: "",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "d4c40a4d-7800-4ad4-8d1e-8f1375e9ad43",
        username: "sophieclark",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595920/SocialBuzz/images_qynsis.jpg",
        text:
          "Such profound and inspiring words! Thank you for this beautiful thread!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "d267bc91-4e9a-4da9-ba7b-3a89fb3a6b4e",
        username: "jameswilson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595800/SocialBuzz/images_wxjv0c.jpg",
        text: "I couldn't agree more!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "b0c82814-9f8a-434e-81d3-72a4eb9c4db5",
        username: "emmadavis",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595740/SocialBuzz/images_zrbwa3.jpg",
        text:
          "This thread is a gentle reminder to cherish the journey, embrace growth, and live with purpose.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "chhakulizingare",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "97e6b4d7-2a94-4a7d-bff0-458d846c833e",
    content: "Spread kindness like confetti! 🎉✨",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685938199/SocialBuzz/photo-1581998392741-67879e0ef04a_mcubiw.avif",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "a2517e3e-4b6e-4b4b-9d4d-1e0b159a465e",
        username: "bobsmith",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595771/SocialBuzz/247-2479526_round-profile-picture-png-transparent-png_ukpjxm.png",
        text:
          "Absolutely! Small acts of kindness can make a big difference✨ in someone's day. Let's make the world a better place!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "c37e0491-df4e-4cfd-9b50-8c0e69c012c5",
        username: "jameswilson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595800/SocialBuzz/images_wxjv0c.jpg",
        text:
          "Kindness is contagious!✨ Let's create a ripple effect of positivity and compassion.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "chhakulizingare",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "a7e9dd2d-48a4-4f6c-86de-6fc02a67c8a5",
    content:
      "Exploring new web design trends. Can't wait to implement them in my next project! 😃🚀",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "625f0ab2-ec68-4c68-8a75-82e67431d112",
        username: "emmadavis",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595740/SocialBuzz/images_zrbwa3.jpg",
        website: "https://emmadavis.com/",
        text:
          "I love experimenting with design too. Let's exchange ideas sometime! 💡💭",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "bobsmith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "7423f85c-8d4b-46cc-96bc-efa574f7d8b2",
    content:
      "Embrace the challenges. They are stepping stones to your success.💪Life is a series of twists and turns, filled with both triumphs and trials. Challenges may seem daunting and overwhelming at times, but they are not meant to break you. Instead, they are opportunities for growth, learning, and transformation",
    mediaURL: "",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "b2e1f19e-58d7-4151-b486-8efb78c39b33",
        username: "sophieclark",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595920/SocialBuzz/images_qynsis.jpg",
        text:
          "Absolutely! Every challenge is an opportunity for growth and learning. 💯",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "a3c5d2e1-76b9-4a8e-9e2f-843dc1dc048d",
        username: "lilyanderson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595837/SocialBuzz/images_b9qohl.jpg",
        text:
          "I love the positive mindset! Challenges make us stronger and more resilient.💪💥 Keep pushing forward!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "chhakulizingare",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "e4580e2b-52a5-462f-971f-38001a1cbed4",
    content:
      "Captured some breathtaking landscapes today. Photography is my passion! 📸🌄",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685682890/SocialBuzz/photo-1563791877359-4a03fb576945_xekyeo.avif",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "bc062695-9e82-4d7f-86b4-ee84de68322c",
        username: "jameswilson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595800/SocialBuzz/images_wxjv0c.jpg",
        website: "https://jameswilson.com/",
        text: "Amazing shot! The colors are so vibrant. 🌈👏",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "emmadavis",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "d7c8e1b5-8f91-4d10-a68e-1683c8755cc3",
    content: "Adventures await! 🌄✨",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685937473/SocialBuzz/istockphoto-1133850671-170667a_g9e3kl.webp",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "e685c9e9-30e7-4d41-91c1-48f6e12d9f85",
        username: "jameswilson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595800/SocialBuzz/images_wxjv0c.jpg",
        text: "This photo makes me want to pack my bags and go exploring✨!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "f34059b3-11d5-4a1d-936f-9e23dabf67f0",
        username: "emmadavis",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595740/SocialBuzz/images_zrbwa3.jpg",
        text: "Where is this place? It looks incredible🌈👏!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "chhakulizingare",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "87c2c12d-61d5-438d-a10e-58f6a15af792",
    content:
      "Working on a new music composition. Can't wait to share it with you all!",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685682994/SocialBuzz/istockphoto-1452556411-170667a_azhaoa.webp",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "3a9c01f2-c142-4a70-87f3-8bca0d7e48fe",
        username: "chhakulizingare",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685515809/SocialBuzz/photo_pd6e7o.jpg",
        text: "I'm a big fan of your music! Looking forward to it. 🎶👏",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "jameswilson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "e3b02e95-5180-4c83-b450-0f8f8c9e3884",
    content:
      "Designing a new logo for a client. Loving the creative process! 💡✍️",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "59da5de9-0e68-4cc1-b9de-70e94784e1d7",
        username: "sophieclark",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595920/SocialBuzz/images_qynsis.jpg",
        website: "https://sophieclark.com/",
        text:
          "Your designs are always top-notch! Can't wait to see the final result. 👌🎨",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "lilyanderson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "329bd206-d0a4-48a5-93f7-0d419b5db764",
    content:
      "Just returned from an amazing trip. Can't wait to share my travel experiences!",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685683091/SocialBuzz/istockphoto-1266475132-170667a_ewrjwl.webp",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "f24a01e9-8e74-4c95-bd50-6e94a856e105",
        username: "alicejohnson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685596157/SocialBuzz/images_vrd6b5.jpg",
        website: "https://alicejohnson.com/",
        text:
          "I'm always inspired by your travel stories. Looking forward to it! ✈️🌍",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "olivertaylor",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "1df2124f-1187-4963-8044-aaab4d8c5d17",
    content:
      "Just completed a challenging fitness routine. Feeling accomplished! 💪🔥",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685683210/SocialBuzz/photo-1522898467493-49726bf28798_z48fvm.avif",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "1e141d4e-02a1-44f6-9ab9-d2bb63b523f1",
        username: "emmadavis",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595740/SocialBuzz/images_zrbwa3.jpg",
        website: "https://emmadavis.com/",
        text: "You're such an inspiration! Keep up the great work. 👏💯",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "sophieclark",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "a3b2c1d4-1e2f-3g4h-5i6j-7k8l9m0n1o2",
    content:
      "Just finished reading an amazing book. Highly recommend it to everyone!",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "b2c3d4e5-2f3g-4h5i-6j7k-8l9m0n1o2p3",
        username: "bobsmith",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595771/SocialBuzz/247-2479526_round-profile-picture-png-transparent-png_ukpjxm.png",
        text: "I love reading! What's the title of the book? 📚",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "c3d4e5f6-4h5i-6j7k-8l9m0n1o2p3q4",
        username: "sophieclark",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595920/SocialBuzz/images_qynsis.jpg",
        website: "https://sophieclark.com/",
        text:
          "I'm always looking for book recommendations. Thanks for sharing! 🙏",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "alicejohnson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "d4e5f6g7-5i6j-7k8l-9m0n-1o2p3q4r5s6",
    content: "Just completed a challenging workout. Feeling energized! 💪💥",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "e5f6g7h8-6j7k-8l9m-0n1o-2p3q4r5s6t7",
        username: "lilyanderson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595837/SocialBuzz/images_b9qohl.jpg",
        website: "https://lilyanderson.com/",
        text: "Great job! Working out is so important for our well-being. 👍",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "f6g7h8i9-8l9m-0n1o-2p3q-4r5s6t7u8v9",
        username: "emmadavis",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595740/SocialBuzz/images_zrbwa3.jpg",
        website: "https://emmadavis.com/",
        text:
          "I need some motivation to get back into a fitness routine. Any tips? 🏋️‍♀️💪",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "sophieclark",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "g7h8i9j0-9k0l-1m2n-3o4p-5q6r7s8t9u0",
    content: "Just cooked a delicious homemade meal. Food is love! 🍳🥗",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685683277/SocialBuzz/photo-1579619168313-d2e074a7ee02_tdz0ft.avif",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "lilyanderson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "h8i9j0k1-0l1m-2n3o-4p5q-6r7s8t9u0v1",
    content:
      "Exploring a new city today. So many hidden gems to discover! ✈️🗺️",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "i9j0k1l2-1m2n-3o4p-5q6r-7s8t9u0v1w2",
        username: "alicejohnson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685596157/SocialBuzz/images_vrd6b5.jpg",
        website: "https://alicejohnson.com/",
        text:
          "I love exploring new places! Any recommendations for must-visit spots? 🌇",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "j0k1l2m3-2n3o-4p5q-6r7s-8t9u0v1w2x3",
        username: "emmadavis",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595740/SocialBuzz/images_zrbwa3.jpg",
        website: "https://emmadavis.com/",
        text:
          "Enjoy your adventure! Traveling is the best way to broaden our horizons. 🌍✈️",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "olivertaylor",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "k1l2m3n4-3o4p-5q6r-7s8t-9u0v1w2x3y4",
    content:
      "Just attended an inspiring conference. Learned so much from the speakers! 🎓📚",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685683340/SocialBuzz/istockphoto-823840662-170667a_zho9lt.webp",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "l2m3n4o5-4p5q-6r7s-8t9u-0v1w2x3y4z5",
        username: "bobsmith",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595771/SocialBuzz/247-2479526_round-profile-picture-png-transparent-png_ukpjxm.png",
        text:
          "Conferences are a great way to gain new insights. Which conference was it? 🎙️",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "m3n4o5p6-5q6r-7s8t-9u0v-1w2x3y4z5a6",
        username: "jameswilson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595800/SocialBuzz/images_wxjv0c.jpg",
        website: "https://jameswilson.com/",
        text:
          "I'm always on the lookout for professional development opportunities. Any recommendations? 📊👨‍💼",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "emmadavis",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "n4o5p6q7-6r7s-8t9u-0v1w-2x3y4z5a6b7",
    content: "Just adopted a new pet. Meet my adorable furry friend! 🐾🐱",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685683392/SocialBuzz/istockphoto-1276788283-170667a_kyajsw.webp",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "lilyanderson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
