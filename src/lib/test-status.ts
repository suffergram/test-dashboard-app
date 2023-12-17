type Status = {
  color?: string;
  weight: number;
};

export const testStatus: { [index: string]: Status } = {
  ONLINE: {
    color: "#1BDA9D",
    weight: 1,
  },
  PAUSED: {
    color: "#FF8346",
    weight: 2,
  },
  STOPPED: {
    color: "#FE4848",
    weight: 3,
  },
  DRAFT: {
    weight: 4,
  },
};
