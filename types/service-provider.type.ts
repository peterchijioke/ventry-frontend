export type IServiceProvider = {
  name: string;
  serviceType: string;
  location: string;
  address: string;
  chargePerDay: number;
  availability: { days: string; openingHour: string; closingHour: string };
  avatar: string;
  rating: number; // Rating from 1 to 5
  completedJobs: number; // Number of completed jobs
};
