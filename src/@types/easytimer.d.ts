declare module 'easytimer.js' {
  export default class Timer {
    start(args?: object): void;
    stop(): void;
    pause(): void;
    reset(): void;
    addEventListener(event: string, callback: () => void): void;
    getTimeValues(): {
      hours: number;
      minutes: number;
      seconds: number;
      toString: () => string;
    } 
  }
}