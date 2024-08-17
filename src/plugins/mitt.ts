import mitt, { Emitter } from "mitt";

type MittEvents = {
  "animate-director-mode-indicator": HTMLElement;
};
type MyEmitter = Emitter<MittEvents>;

const emitter: MyEmitter = mitt();
export default emitter;
