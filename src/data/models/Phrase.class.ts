import Dialect from './Dialect.class';
import Definition from './Definition.class';

export default class Phrase {
  constructor(
    readonly spelling: string,
    readonly alternateSpellings: string[],
    readonly phoneticTranscription: string | null,
    readonly origins: Array<Dialect>,
    readonly definitions: Array<Definition>
  ) { }
}