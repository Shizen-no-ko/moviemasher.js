import { Action } from "./Action"
import { Is } from "../../../Utility/Is"
import { Mash } from "../../../Edited/Mash/Mash"

interface ActionsObject {
  mash : Mash
}

class Actions  {
  constructor(object : ActionsObject) {
    const { mash } = object
    this.mash = mash
  }

  add(action : Action) : void {
    const remove = this.instances.length - (this.index + 1)
    if (Is.positive(remove)) this.instances.splice(this.index + 1, remove)

    this.instances.push(action)
  }

  get canRedo() : boolean { return this.index < this.instances.length - 1 }

  get canSave() : boolean { return this.canUndo }

  get canUndo() : boolean { return this.index > -1 }

  get currentAction() : Action { return this.instances[this.index] }

  get currentActionLast() : boolean { return this.canUndo && !this.canRedo }

  destroy() : void {
    this.index = -1
    this.instances.splice(0, this.instances.length)
  }

  index = -1

  instances : Action[] = []

  mash : Mash

  redo() : Action {
    this.index += 1
    const action = this.currentAction
    action.redo()

    return action
  }

  save() : void {
    this.instances.splice(0, this.index + 1)
    this.index = -1
  }

  undo() : Action {
    const action = this.currentAction
    this.index -= 1
    action.undo()
    return action
  }
}

export { Actions, ActionsObject }
