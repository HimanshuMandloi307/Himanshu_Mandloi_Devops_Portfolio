declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: any[];
    words: any[];
    lines: any[];

    constructor(target: any, vars?: any);

    revert(): void;
  }
}