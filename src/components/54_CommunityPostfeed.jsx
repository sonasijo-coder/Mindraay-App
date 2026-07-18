import React from 'react';
import CommunityPostFeedItem from './55_CommunityPostItem';

const CommunityPostFeed = () => {

  const mockPosts = [
    {
      id: 1,
      author: 'Jessica M.',
      time: '2 hours',
      category: 'Success Story',
      tagLabel: 'story',
      tagClass: 'story',
      title: 'Six months in — anxiety is so much better managed now',
      content: 'I started therapy on Mindraay six months ago after years of untreated anxiety. Today I completed a presentation at work without a panic attack for the first time ever. Grateful for this community and my therapist Dr. Mitchell. 💚',
      likes: 342,
      comments: 28,
    },
    {
      id: 2,
      author: 'Community Team',
      badgeText: 'Official',
      badgeType: 'official',
      time: '5 hours',
      category: 'Awareness',
      tagLabel: 'awareness',
      tagClass: 'awareness',
      title: 'June is PTSD Awareness Month — You Are Not Alone',
      content: "Post-traumatic stress affects millions of people worldwide. This month, we're sharing resources, stories, and support. Remember: healing is not linear, and reaching out for help is a sign of incredible strength. 💙",
      likes: 891,
      comments: 74,
    },
    {
      id: 3,
      author: 'Dr. Michael Chen',
      badgeText: 'Professional',
      badgeType: 'professional',
      time: '1 day',
      category: 'Mental Health Tip',
      tagLabel: 'tip',
      tagClass: 'tip',
      title: '5-4-3-2-1 grounding technique for anxiety & panic',
      content: 'When anxiety spikes, ground yourself with this technique: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. It engages your senses and brings you back to the present moment. Share this with someone who might need it today.',
      likes: 567,
      comments: 42,
    },
    {
      id: 4,
      author: 'Robert K.',
      time: '1 day',
      category: 'Support',
      tagLabel: 'support',
      tagClass: 'support',
      title: 'Struggling with sleep — any tips from the community?',
      content: "I've been dealing with insomnia for about 3 months. My therapist suggested sleep hygiene practices but I'm still finding it hard. Does anyone have personal strategies that have helped them? Would appreciate any advice. 🙏",
      likes: 89,
      comments: 31,
    }
  ];

  return (
    <div className="community-feed-wrapper">
      {mockPosts.map((singlePost) => (
        <CommunityPostFeedItem key={singlePost.id} post={singlePost} />
      ))}
    </div>
  );
};

export default CommunityPostFeed;