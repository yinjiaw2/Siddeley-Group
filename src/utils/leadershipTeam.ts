export type LeadershipCategory =
  | "board"
  | "executive"
  | "specialists"
  | "emerging";

export interface Member {
  id: string;
  name: string;
  roleKey: string;
  category: LeadershipCategory;
  linkedin: string;
  photo: string | null;
  avatarColor: string;
}

export const leadershipMembers: Member[] = [
  {
    id: "jw",
    name: "James Whitmore",
    roleKey: "chairman",
    category: "board",
    linkedin: "#",
    photo: null,
    avatarColor: "#C79D00",
  },
  {
    id: "sc",
    name: "Sarah Chen",
    roleKey: "nonExecDirector",
    category: "board",
    linkedin: "#",
    photo: null,
    avatarColor: "#5A7A8A",
  },
  {
    id: "ma",
    name: "Michael Aldridge",
    roleKey: "nonExecDirector",
    category: "board",
    linkedin: "#",
    photo: null,
    avatarColor: "#7A5A8A",
  },
  {
    id: "os",
    name: "Oliver Siddeley",
    roleKey: "ceo",
    category: "executive",
    linkedin: "#",
    photo: null,
    avatarColor: "#B05A30",
  },
  {
    id: "el",
    name: "Emma Laurent",
    roleKey: "coo",
    category: "executive",
    linkedin: "#",
    photo: null,
    avatarColor: "#5A7A5A",
  },
  {
    id: "dt",
    name: "David Tan",
    roleKey: "cfo",
    category: "executive",
    linkedin: "#",
    photo: null,
    avatarColor: "#5A6A8A",
  },
  {
    id: "rp",
    name: "Rachel Park",
    roleKey: "cmo",
    category: "executive",
    linkedin: "#",
    photo: null,
    avatarColor: "#8A5A5A",
  },
  {
    id: "am",
    name: "Alex Morris",
    roleKey: "headBrandStrategy",
    category: "specialists",
    linkedin: "#",
    photo: null,
    avatarColor: "#6A7A5A",
  },
  {
    id: "cw",
    name: "Chloe Wu",
    roleKey: "headDigitalMarketing",
    category: "specialists",
    linkedin: "#",
    photo: null,
    avatarColor: "#8A6A5A",
  },
  {
    id: "tr",
    name: "Thomas Reid",
    roleKey: "headCreative",
    category: "specialists",
    linkedin: "#",
    photo: null,
    avatarColor: "#5A8A7A",
  },
  {
    id: "lz",
    name: "Lisa Zhang",
    roleKey: "headBizDev",
    category: "specialists",
    linkedin: "#",
    photo: null,
    avatarColor: "#7A6A8A",
  },
  {
    id: "nk",
    name: "Noah Kim",
    roleKey: "brandStrategist",
    category: "emerging",
    linkedin: "#",
    photo: null,
    avatarColor: "#8A7A5A",
  },
  {
    id: "im",
    name: "Isabelle Martin",
    roleKey: "digitalManager",
    category: "emerging",
    linkedin: "#",
    photo: null,
    avatarColor: "#6A5A8A",
  },
  {
    id: "sch",
    name: "Samuel Chen",
    roleKey: "creativeLead",
    category: "emerging",
    linkedin: "#",
    photo: null,
    avatarColor: "#5A8A6A",
  },
];
