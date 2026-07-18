// components/42_ToolsList.jsx
import React from 'react';
import ToolCardItem from './43_ToolCardItem';

function ToolsList({ toolsData }) {
  // പ്രോപ്സ് വഴി ഡാറ്റ വന്നില്ലെങ്കിൽ ഡിഫോൾട്ട് ആയി ചിത്രത്തിലുള്ള 6 ടൂളുകൾ എടുക്കും
  const finalTools = toolsData || [
    { id: 1, icon: "📊", tag: "Interactive Tool", title: "Mood Tracker", description: "Track your daily mood patterns and identify triggers." },
    { id: 2, icon: "📝", tag: "Journal", title: "Gratitude Journal", description: "Daily prompts to cultivate gratitude and positive thinking." },
    { id: 3, icon: "🧘‍♀️", tag: "Exercise", title: "Breathing Exercises", description: "Guided breathing techniques for stress relief." },
    { id: 4, icon: "🌙", tag: "Tracker", title: "Sleep Log", description: "Monitor your sleep patterns and improve sleep quality." },
    { id: 5, icon: "📋", tag: "Worksheet", title: "Anxiety Worksheet", description: "CBT-based worksheets to manage anxiety." },
    { id: 6, icon: "🧘", tag: "Guide", title: "Meditation Guide", description: "Step-by-step meditation exercises for beginners." }
  ];

  return (
    <div className="tools-grid-layout">
      {finalTools.map((tool) => (
        <ToolCardItem key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

export default ToolsList;