 import {
  HadokenPipelineConfig,
  SemanticInput,
  MaybeAddKey,
  MaybeRemoveKey,
  Hadoken as HadokenBase,
} from 'ph/Hadoken'

export type MappingFn = (keycode: number) => SemanticInput | null

type HadokenKeyboardConfig = HadokenPipelineConfig & {
  // responsible for converting from a keycode to game-relevant input
  keymapFn: MappingFn,
}

/**
 * Hadoken implementation that supports keyboard input.
 */
export class Hadoken extends HadokenBase<HadokenKeyboardConfig, MappingFn> {
  constructor(scn: Phaser.Scene, cfg: HadokenKeyboardConfig) {
    super(scn, cfg)

    scn.input.keyboard.on('keydown', this._keydown, this)
    scn.input.keyboard.on('keyup', this._keyup, this)
  }

  _keydown(e: KeyboardEvent) {
    // checks for semantic input based on the provided keycode
    const sem = this.hadokenData.config.keymapFn(e.keyCode)
    if (!sem) {
      // if no mapping is found then we don't care about this keypress
      return
    }

    MaybeAddKey(this.hadokenData, sem, e.timeStamp)
  }

  _keyup(e: KeyboardEvent) {
    // checks for semantic input based on the provided keycode
    const sem = this.hadokenData.config.keymapFn(e.keyCode)
    if (!sem) {
      // if no mapping is found then we don't care about this key release
      return
    }

    MaybeRemoveKey(this.hadokenData, sem)
  }

  remap(newMapping: MappingFn): void {
    this.hadokenData.config.keymapFn = newMapping
  }
}