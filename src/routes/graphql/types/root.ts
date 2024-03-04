import { memberType, MemberTypeId } from "./member_type.js";
import { post, postInput, patchPostInput } from "./post.js";
import { profile, createProfileInput, patchProfileInput } from "./profile.js";
import { user, createUserInput, patchUserInput } from "./user.js";

export const rootTypes = [memberType, MemberTypeId,
    post, postInput, patchPostInput, 
    profile, createProfileInput, patchProfileInput,
    user, createUserInput, patchUserInput];