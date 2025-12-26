import { Crown, BookOpen, MessageSquare, Star, type LucideIcon } from 'lucide-react';

export interface BadgeInfo {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const badgeList: Record<string, BadgeInfo> = {
  first_login: {
    name: 'Newcomer',
    description: 'You have started your journey!',
    icon: Star,
    color: '#FFD700', // Gold
  },
  first_lesson: {
    name: 'Eager Student',
    description: 'You completed your first lesson.',
    icon: BookOpen,
    color: '#4682B4', // SteelBlue
  },
  first_chat: {
      name: 'Social Butterfly',
      description: 'You started your first conversation.',
      icon: MessageSquare,
      color: '#32CD32' // LimeGreen
  },
  king_tut: {
      name: 'King Tut',
      description: 'You have achieved royal status!',
      icon: Crown,
      color: '#FF6347' // Tomato
  }
};

export const getBadgeByName = (name: string): BadgeInfo | undefined => {
  return badgeList[name];
};
