import { createMDXTransformer } from "./src/createTransformer";

export default {
  createTransformer(preMdxParseCallback){
    return new createMDXTransformer(preMdxParseCallback);
  }
};
