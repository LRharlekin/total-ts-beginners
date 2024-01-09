import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */
interface User extends ObjWithId {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post extends ObjWithId {
  id: string;
  title: string;
  body: string;
}

interface Comment extends ObjWithId {
  id: string;
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>
];
