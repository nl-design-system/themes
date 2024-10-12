export interface Fondue {
  summary: {
    'Font name': string;
  };
}

export const wakamaiFondueFromDataBuffer = (_arg: ArrayBuffer) => Awaited<Fondue>;
