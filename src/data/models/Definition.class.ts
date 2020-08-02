import SpeechPart from './SpeechPart.class';

export default class Definition {
  constructor(
    readonly speechPart: SpeechPart,
    readonly examples: string[],
    readonly sources: string[]
  ) { }
}
