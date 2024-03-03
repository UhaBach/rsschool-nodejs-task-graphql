import { MemberType } from "./member_type.js";
import { Post, PostInput, PatchPostInput } from "./post.js";
import { Profile, CreateProfileInput, PatchProfileInput } from "./profile.js";

export const rootTypes = [MemberType, Post, PostInput, PatchPostInput, Profile, CreateProfileInput, PatchProfileInput];