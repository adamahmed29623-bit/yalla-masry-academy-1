export type Project = {
  id: string;
  name: string;
  region: string;
  createdAt: string;
};

export const mockProjects: Project[] = [
  { id: 'yalla-masry-prod', name: 'Yalla Masry - Prod', region: 'us-central1', createdAt: '2023-10-26' },
  { id: 'yalla-masry-dev', name: 'Yalla Masry - Dev', region: 'us-central1', createdAt: '2023-08-15' },
  { id: 'analytics-pipeline', name: 'Analytics Pipeline', region: 'europe-west1', createdAt: '2023-05-01' },
];

export type User = {
  id: string;
  email: string;
  provider: string;
  createdAt: string;
  lastSignedIn: string;
};

export const mockUsers: User[] = [
  { id: 'uid-1', email: 'user1@example.com', provider: 'password', createdAt: '2023-11-01', lastSignedIn: '2023-11-10' },
  { id: 'uid-2', email: 'user2@example.com', provider: 'google.com', createdAt: '2023-11-02', lastSignedIn: '2023-11-11' },
  { id: 'uid-3', email: 'user3@example.com', provider: 'password', createdAt: '2023-11-03', lastSignedIn: '2023-11-09' },
  { id: 'uid-4', email: 'user4@example.com', provider: 'github.com', createdAt: '2023-10-28', lastSignedIn: '2023-11-12' },
];
