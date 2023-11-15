import React from 'react';

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from '@tabler/icons-react';

import HowToUsePackItUpImage1 from '../assets/webps/how-to-use-packitup-image-1.webp';
import HowToUsePackItUpImage2 from '../assets/webps/how-to-use-packitup-image-2.webp';
import HowToUsePackItUpImage3 from '../assets/webps/how-to-use-packitup-image-3.webp';
import HowToUsePackItUpImage4 from '../assets/webps/how-to-use-packitup-image-4.webp';
import HowToUsePackItUpImage5 from '../assets/webps/how-to-use-packitup-image-5.webp';

export const howToUsePackItUp = [
  {
    id: 1,
    howToUsePackItUpImage: HowToUsePackItUpImage1,
    howToUsePackItUpHeading: 'Stay Organized',
    howToUsePackItUpDesc:
      "Create a comprehensive list of items you need to bring for your adventure. From clothing to equipment, we've got you covered.",
  },

  {
    id: 2,
    howToUsePackItUpImage: HowToUsePackItUpImage2,
    howToUsePackItUpHeading: 'Track Quantities',
    howToUsePackItUpDesc:
      "Specify the quantity of each item you're bringing. No more guessing how many pairs of socks or batteries you need.",
  },

  {
    id: 3,
    howToUsePackItUpImage: HowToUsePackItUpImage3,
    howToUsePackItUpHeading: 'Check Off Items',
    howToUsePackItUpDesc:
      "As you pack your essentials, simply check them off the list. It's satisfying to see your progress!",
  },

  {
    id: 4,
    howToUsePackItUpImage: HowToUsePackItUpImage4,
    howToUsePackItUpHeading: 'Sort Your List',
    howToUsePackItUpDesc:
      'Need to arrange your items in a specific order? Use our easy sorting feature to customize your list.',
  },

  {
    id: 5,
    howToUsePackItUpImage: HowToUsePackItUpImage5,
    howToUsePackItUpHeading: 'Clear the List',
    howToUsePackItUpDesc:
      "Once you're done with your adventure, one click clears your list. No more clutter!",
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    icon: React.createElement(IconBrandFacebook),
  },

  {
    id: 2,
    icon: React.createElement(IconBrandInstagram),
  },

  {
    id: 3,
    icon: React.createElement(IconBrandX),
  },
];
