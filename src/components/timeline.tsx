import Header from './util/header';
// import { TimelineAceternity } from './util/timeline';
import * as TemplateTimeline from './timeline-template';

const timelineData = [
  {
    date: '20 Dec 2024',
    title: 'Pre-Program',
    content: 'Soft Launch',
  },
  {
    date: '21 Dec 2024 - 20 Jan 2025',
    title: 'Pre-Program',
    content: 'Launch, Socialization',
  },
  {
    date: '21 Jan - 11 Feb 2025',
    title: 'Pre-Program',
    content: 'Close Registration & Applicants Selection',
  },
  {
    date: '11 - 14 Feb 2025',
    title: 'Pre-Program',
    content: 'Top 25 Announcement',
  },
  {
    date: '17 Feb - 17 Mar 2025',
    title: 'Acceleration Phase',
    content: 'Boot Camp & Business Matchmaking',
  },
  {
    date: '21 Mar - 11 April 2024',
    title: 'Demo Day',
    content: 'Top 6',
  },
  {
    date: 'April - Jun 2024',
    title: 'Pilot Implementation',
    content: 'Pilot Project (On-site)',
  },
  {
    date: 'Jun 2024',
    title: 'Post-program',
    content: 'Pilot Publication',
  }
];

const timelineData2 = timelineData.map((item) => ({
  ...item,
  description: item.content,
}));

const Timeline = () => {

  return (
    <section id='timeline' className="min-h-screen w-full overflow-hidden bg-green-500/5 relative py-20  " >
      <div className="absolute inset-0 overflow-hidden z-0">
        <svg className="absolute top-10 left-10 text-emerald-100 w-40 h-40 opacity-50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor"/>
        </svg>
        <svg className="absolute top-40 right-20 text-emerald-50 w-60 h-60 opacity-40" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor"/>
        </svg>
        <svg className="absolute bottom-20 left-1/4 text-emerald-100 w-32 h-32 opacity-30" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="currentColor"/>
        </svg>
      </div>

      <div className="text-center mb-16 z-10 isolate">
        <Header className='mb-4'>Programs Timeline</Header>
        <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
      </div>
      <TemplateTimeline.default data={timelineData2} />
    </section>
  );
};

export default Timeline;
