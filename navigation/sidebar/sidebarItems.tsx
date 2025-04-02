import {
  File,
  Inbox,
  Send,
  Receipt,
  KeySquare,
  LucideIcon,
  PanelsTopLeft,
  Bell,
  ShieldCheck,
  Cog,
  CalendarPlus,
  Clock,
  UserCircle,
  Wallet,
  History,
  MessageCircle,
  FileQuestion,
  FileWarning,
  Briefcase,
} from 'lucide-react';

export interface NavSubItem {
  title: string;
  path: string;
}

export interface NavMainItem {
  title: string;
  path: string;
  icon?: LucideIcon;
  isActive?: boolean;
  subItems?: NavSubItem[];
}

export interface NavGroup {
  id: number;
  label: string;
  items: NavMainItem[];
}

const basePath = '/customer/overview';

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: 'Overview',
    items: [
      {
        title: 'Dashboard',
        path: basePath,
        icon: PanelsTopLeft,
        isActive: true,
      },
    ],
  },
  {
    id: 2,
    label: 'Profile',
    items: [
      {
        title: 'My Profile',
        path: '/profile',
        icon: UserCircle,
        isActive: false,
      },
      {
        title: 'My Wallet',
        path: '/wallet',
        icon: Wallet,
        isActive: false,
      },
    ],
  },

  {
    id: 4,
    label: 'Notifications',
    items: [
      {
        title: 'All Notifications',
        path: '/notifications',
        icon: Bell,
        isActive: false,
      },
    ],
  },
  {
    id: 3,
    label: 'Services',
    items: [
      {
        title: 'My Jobs',
        path: '/customer/services/jobs',
        icon: Briefcase,
        isActive: false,
      },
    ],
  },
  {
    id: 5,
    label: 'Support',
    items: [
      {
        title: 'FAQs',
        path: '/support/faqs',
        icon: FileQuestion,
        isActive: false,
      },
      {
        title: 'Report an Issue',
        path: '/support/report',
        icon: FileWarning,
        isActive: false,
      },
    ],
  },
  {
    id: 6,
    label: 'Settings',
    items: [
      {
        title: 'Account Settings',
        path: '/settings/account',
        icon: Cog,
        isActive: false,
      },
      {
        title: 'Privacy Settings',
        path: '/settings/privacy',
        icon: ShieldCheck,
        isActive: false,
      },
    ],
  },
];

// export const sidebarItems: NavGroup[] = [
//   {
//     id: 1,
//     label: "Overview",
//     items: [
//       {
//         title: "Dashboard",
//         path: basePath,
//         icon: PanelsTopLeft,
//         isActive: true,
//       },
//     ],
//   },
//   {
//     id: 2,
//     label: "Apps & Pages",
//     items: [
//       {
//         title: "Inbox",
//         path: `${basePath}/inbox`,
//         icon: Inbox,
//       },
//       {
//         title: "Invoice",
//         path: "#",
//         icon: Receipt,
//         subItems: [
//           { title: "List", path: `${basePath}/invoice/list-preview` },
//           { title: "View", path: `${basePath}/invoice/view` },
//           { title: "Add", path: `${basePath}/invoice/add` },
//           { title: "Edit", path: `${basePath}/invoice/edit` },
//         ],
//       },
//       {
//         title: "Auth",
//         path: "#",
//         icon: KeySquare,
//         subItems: [{ title: "Unauthorized", path: `${basePath}/auth/unauthorized` }],
//       },
//       {
//         title: "Drafts",
//         path: `${basePath}/drafts`,
//         icon: File,
//       },
//       {
//         title: "Sent",
//         path: `${basePath}/sent`,
//         icon: Send,
//       },
//     ],
//   },
//   {
//     id: 3,
//     label: "Billing",
//     items: [
//       {
//         title: "Billing",
//         path: `${basePath}/billing`,
//         icon: Receipt,
//       },
//     ],
//   },
// ]
