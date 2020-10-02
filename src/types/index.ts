export type Info = {
  id?: string;
  name?: string;
  title?: string;
  description?: string;
  image?: string[];
  color?: {
    r?: number;
    g?: number;
    b?: number;
  };
};

export type HSV = {
  h: number;
  s: number;
  v: number;
};
