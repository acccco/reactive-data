import {Watcher} from './Watcher'
import {noop} from "../util/util"

let uid = 0

export class Computed {
    constructor(ctx, key, option,) {
        this.id = uid++
        this.ctx = ctx
        this.key = key
        this.option = option
        this.init()
    }

    init() {
        let watcher = new Watcher(
            this.ctx,
            this.option.get || noop,
            noop,
            {lazy: true}
        )

        Object.defineProperty(this.ctx, this.key, {
            enumerable: true,
            configurable: true,
            set: this.option.set || noop,
            get() {
                if (watcher.dirty) {
                    watcher.evaluate()
                }
                return watcher.value
            }
        })
    }
}